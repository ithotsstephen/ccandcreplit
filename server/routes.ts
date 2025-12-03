import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { setupAuth, isAuthenticated } from "./replitAuth";
import { emailService } from "./emailService";
import { recaptchaService } from "./recaptchaService";
import { ObjectStorageService, ObjectNotFoundError, parseObjectPath, objectStorageClient } from "./objectStorage";
import { 
  insertContentSchema,
  insertServiceSchema,
  insertCaseStudySchema,
  insertTestimonialSchema,
  insertBlogPostSchema,
  insertFaqSchema,
  insertContactSubmissionSchema
} from "@shared/schema";
import { randomUUID } from "crypto";

export async function registerRoutes(app: Express): Promise<Server> {
  // Auth middleware
  await setupAuth(app);

  // Auth routes
  app.get('/api/auth/user', async (req: any, res) => {
    try {
      // Check if user is authenticated without throwing
      if (!req.isAuthenticated() || !req.user?.claims?.sub) {
        return res.status(401).json({ message: "Unauthorized" });
      }
      
      const userId = req.user.claims.sub;
      const user = await storage.getUser(userId);
      if (!user) {
        return res.status(401).json({ message: "User not found" });
      }
      res.json(user);
    } catch (error) {
      console.error("Error fetching user:", error);
      res.status(500).json({ message: "Failed to fetch user" });
    }
  });

  // Public API routes
  
  // Object storage routes - serve public files
  app.get("/api/objects/public/:filePath(*)", async (req, res) => {
    const filePath = req.params.filePath;
    const isStaticMode = process.env.VITE_STATIC_BUILD === 'true';
    
    // In static mode, redirect to assets directory instead of trying Google Cloud Storage
    if (isStaticMode) {
      // Map logos directory to "Client Logos" directory
      if (filePath.startsWith('logos/')) {
        const logoFileName = filePath.replace('logos/', '');
        return res.redirect(`/assets/Client Logos/${logoFileName}`);
      }
      return res.redirect(`/assets/${filePath}`);
    }
    
    const objectStorageService = new ObjectStorageService();
    try {
      const file = await objectStorageService.searchPublicObject(filePath);
      if (!file) {
        return res.status(404).json({ error: "File not found" });
      }
      objectStorageService.downloadObject(file, res);
    } catch (error) {
      console.error("Error searching for public object:", error);
      return res.status(500).json({ error: "Internal server error" });
    }
  });

  // Get list of client logos
  app.get("/api/client-logos", async (req, res) => {
    const objectStorageService = new ObjectStorageService();
    try {
      const logoFiles = await objectStorageService.listPublicFiles("logos");
      console.log(`Found ${logoFiles.length} logo files:`, logoFiles);
      
      const logos = logoFiles.map(filename => {
        // Extract company name from filename (remove client- prefix and file extension)
        const name = filename.replace(/^client-/, '').replace(/\.(png|jpg|jpeg|gif|svg)$/i, '').toUpperCase();
        return {
          name,
          logoPath: `/api/objects/public/logos/${filename}`,
          alt: `${name} Logo`
        };
      });
      
      // If still no logos found, try a brute force approach by testing common patterns
      if (logos.length === 0) {
        console.log("No logos found via directory listing, trying brute force discovery...");
        
        // Get all files from the bucket and filter for client logos
        const searchPaths = objectStorageService.getPublicObjectSearchPaths();
        const allValidLogos = [];
        
        for (const searchPath of searchPaths) {
          const { bucketName } = parseObjectPath(searchPath);
          const bucket = objectStorageClient.bucket(bucketName);
          
          try {
            const [allFiles] = await bucket.getFiles();
            console.log(`Scanning ${allFiles.length} files in bucket for client logos...`);
            
            for (const file of allFiles) {
              const fileName = file.name.split('/').pop();
              const isInLogos = file.name.includes('/logos/') || file.name.includes('logos/');
              const isClientLogo = fileName && fileName.startsWith('client-') && 
                  (fileName.endsWith('.png') || fileName.endsWith('.jpg') || 
                   fileName.endsWith('.jpeg') || fileName.endsWith('.gif') || 
                   fileName.endsWith('.svg'));
                   
              if (isInLogos && isClientLogo) {
                console.log(`🎯 Found client logo via full scan: ${file.name}`);
                const name = fileName.replace(/^client-/, '').replace(/\.(png|jpg|jpeg|gif|svg)$/i, '').toUpperCase();
                allValidLogos.push({
                  name,
                  logoPath: `/api/objects/public/logos/${fileName}`,
                  alt: `${name} Logo`
                });
              }
            }
          } catch (error) {
            console.error("Error in full bucket scan:", error);
          }
        }
        
        if (allValidLogos.length > 0) {
          console.log(`✅ Found ${allValidLogos.length} logos via full scan`);
          res.json(allValidLogos);
          return;
        }
        
        // Ultimate fallback - return the two we know work
        console.log("Using absolute fallback logos");
        res.json([
          { name: "ADB", logoPath: "assets/Client Logos/client-adb.png", alt: "ADB Logo" },
          { name: "AXA", logoPath: "assets/Client Logos/client-axa.png", alt: "AXA Logo" }
        ]);
        return;
      }
      
      res.json(logos);
    } catch (error) {
      console.error("Error listing client logos:", error);
      return res.status(500).json({ error: "Internal server error" });
    }
  });
  
  // Content routes
  app.get('/api/content', async (req, res) => {
    try {
      const { type } = req.query;
      const content = await storage.getContent(type as string);
      res.json(content);
    } catch (error) {
      console.error("Error fetching content:", error);
      res.status(500).json({ message: "Failed to fetch content" });
    }
  });

  app.get('/api/content/:id', async (req, res) => {
    try {
      const content = await storage.getContentById(req.params.id);
      if (!content) {
        return res.status(404).json({ message: "Content not found" });
      }
      res.json(content);
    } catch (error) {
      console.error("Error fetching content:", error);
      res.status(500).json({ message: "Failed to fetch content" });
    }
  });

  // Services routes
  app.get('/api/services', async (req, res) => {
    try {
      const { category } = req.query;
      const services = await storage.getServices(category as string);
      res.json(services);
    } catch (error) {
      console.error("Error fetching services:", error);
      res.status(500).json({ message: "Failed to fetch services" });
    }
  });

  // Case studies routes
  app.get('/api/case-studies', async (req, res) => {
    try {
      const caseStudies = await storage.getCaseStudies();
      res.json(caseStudies);
    } catch (error) {
      console.error("Error fetching case studies:", error);
      res.status(500).json({ message: "Failed to fetch case studies" });
    }
  });

  // Testimonials routes
  app.get('/api/testimonials', async (req, res) => {
    try {
      const testimonials = await storage.getTestimonials();
      res.json(testimonials);
    } catch (error) {
      console.error("Error fetching testimonials:", error);
      res.status(500).json({ message: "Failed to fetch testimonials" });
    }
  });

  // Blog posts routes
  app.get('/api/blog-posts', async (req, res) => {
    try {
      const { published } = req.query;
      const blogPosts = await storage.getBlogPosts(published === 'true');
      res.json(blogPosts);
    } catch (error) {
      console.error("Error fetching blog posts:", error);
      res.status(500).json({ message: "Failed to fetch blog posts" });
    }
  });

  app.get('/api/blog-posts/:slug', async (req, res) => {
    try {
      const blogPost = await storage.getBlogPostBySlug(req.params.slug);
      if (!blogPost) {
        return res.status(404).json({ message: "Blog post not found" });
      }
      res.json(blogPost);
    } catch (error) {
      console.error("Error fetching blog post:", error);
      res.status(500).json({ message: "Failed to fetch blog post" });
    }
  });

  // FAQs routes
  app.get('/api/faqs', async (req, res) => {
    try {
      const faqs = await storage.getFAQs();
      res.json(faqs);
    } catch (error) {
      console.error("Error fetching FAQs:", error);
      res.status(500).json({ message: "Failed to fetch FAQs" });
    }
  });

  // reCAPTCHA site key endpoint
  app.get('/api/recaptcha-site-key', (req, res) => {
    const siteKey = process.env.RECAPTCHA_SITE_KEY;
    if (!siteKey) {
      return res.status(500).json({ message: "reCAPTCHA not configured" });
    }
    res.json({ siteKey });
  });

  // Contact form submission
  app.post('/api/contact', async (req, res) => {
    try {
      const { recaptchaToken, ...formData } = req.body;
      
      // Verify reCAPTCHA token
      const isValidRecaptcha = await recaptchaService.verifyToken(
        recaptchaToken,
        req.ip || req.socket.remoteAddress
      );
      
      if (!isValidRecaptcha) {
        return res.status(400).json({ 
          message: "reCAPTCHA verification failed. Please try again." 
        });
      }
      
      const submissionData = insertContactSubmissionSchema.parse(formData);
      const submission = await storage.createContactSubmission(submissionData);
      
      // Send email notification
      try {
        await emailService.sendContactNotification(submission);
        await emailService.sendAutoReply(submission);
      } catch (emailError) {
        console.error("Error sending email:", emailError);
        // Continue even if email fails
      }
      
      res.json({ message: "Contact form submitted successfully", id: submission.id });
    } catch (error) {
      console.error("Error submitting contact form:", error);
      res.status(500).json({ message: "Failed to submit contact form" });
    }
  });

  // Protected CMS routes (admin only)
  
  // Content management
  app.post('/api/admin/content', isAuthenticated, async (req: any, res) => {
    try {
      const user = await storage.getUser(req.user.claims.sub);
      if (!user?.isAdmin) {
        return res.status(403).json({ message: "Admin access required" });
      }

      const contentData = insertContentSchema.parse(req.body);
      const content = await storage.createContent(contentData);
      res.json(content);
    } catch (error) {
      console.error("Error creating content:", error);
      res.status(500).json({ message: "Failed to create content" });
    }
  });

  app.put('/api/admin/content/:id', isAuthenticated, async (req: any, res) => {
    try {
      const user = await storage.getUser(req.user.claims.sub);
      if (!user?.isAdmin) {
        return res.status(403).json({ message: "Admin access required" });
      }

      const contentData = insertContentSchema.partial().parse(req.body);
      const content = await storage.updateContent(req.params.id, contentData);
      res.json(content);
    } catch (error) {
      console.error("Error updating content:", error);
      res.status(500).json({ message: "Failed to update content" });
    }
  });

  app.delete('/api/admin/content/:id', isAuthenticated, async (req: any, res) => {
    try {
      const user = await storage.getUser(req.user.claims.sub);
      if (!user?.isAdmin) {
        return res.status(403).json({ message: "Admin access required" });
      }

      await storage.deleteContent(req.params.id);
      res.json({ message: "Content deleted successfully" });
    } catch (error) {
      console.error("Error deleting content:", error);
      res.status(500).json({ message: "Failed to delete content" });
    }
  });

  // Services management
  app.post('/api/admin/services', isAuthenticated, async (req: any, res) => {
    try {
      const user = await storage.getUser(req.user.claims.sub);
      if (!user?.isAdmin) {
        return res.status(403).json({ message: "Admin access required" });
      }

      const serviceData = insertServiceSchema.parse(req.body);
      const service = await storage.createService(serviceData);
      res.json(service);
    } catch (error) {
      console.error("Error creating service:", error);
      res.status(500).json({ message: "Failed to create service" });
    }
  });

  app.put('/api/admin/services/:id', isAuthenticated, async (req: any, res) => {
    try {
      const user = await storage.getUser(req.user.claims.sub);
      if (!user?.isAdmin) {
        return res.status(403).json({ message: "Admin access required" });
      }

      const serviceData = insertServiceSchema.partial().parse(req.body);
      const service = await storage.updateService(req.params.id, serviceData);
      res.json(service);
    } catch (error) {
      console.error("Error updating service:", error);
      res.status(500).json({ message: "Failed to update service" });
    }
  });

  // Case studies management
  app.post('/api/admin/case-studies', isAuthenticated, async (req: any, res) => {
    try {
      const user = await storage.getUser(req.user.claims.sub);
      if (!user?.isAdmin) {
        return res.status(403).json({ message: "Admin access required" });
      }

      const caseStudyData = insertCaseStudySchema.parse(req.body);
      const caseStudy = await storage.createCaseStudy(caseStudyData);
      res.json(caseStudy);
    } catch (error) {
      console.error("Error creating case study:", error);
      res.status(500).json({ message: "Failed to create case study" });
    }
  });

  // Testimonials management
  app.post('/api/admin/testimonials', isAuthenticated, async (req: any, res) => {
    try {
      const user = await storage.getUser(req.user.claims.sub);
      if (!user?.isAdmin) {
        return res.status(403).json({ message: "Admin access required" });
      }

      const testimonialData = insertTestimonialSchema.parse(req.body);
      const testimonial = await storage.createTestimonial(testimonialData);
      res.json(testimonial);
    } catch (error) {
      console.error("Error creating testimonial:", error);
      res.status(500).json({ message: "Failed to create testimonial" });
    }
  });

  // Blog posts management
  app.post('/api/admin/blog-posts', isAuthenticated, async (req: any, res) => {
    try {
      const user = await storage.getUser(req.user.claims.sub);
      if (!user?.isAdmin) {
        return res.status(403).json({ message: "Admin access required" });
      }

      const blogPostData = insertBlogPostSchema.parse({
        ...req.body,
        authorId: req.user.claims.sub
      });
      const blogPost = await storage.createBlogPost(blogPostData);
      res.json(blogPost);
    } catch (error) {
      console.error("Error creating blog post:", error);
      res.status(500).json({ message: "Failed to create blog post" });
    }
  });

  // FAQ management
  app.post('/api/admin/faqs', isAuthenticated, async (req: any, res) => {
    try {
      const user = await storage.getUser(req.user.claims.sub);
      if (!user?.isAdmin) {
        return res.status(403).json({ message: "Admin access required" });
      }

      const faqData = insertFaqSchema.parse(req.body);
      const faq = await storage.createFAQ(faqData);
      res.json(faq);
    } catch (error) {
      console.error("Error creating FAQ:", error);
      res.status(500).json({ message: "Failed to create FAQ" });
    }
  });

  // Contact submissions management
  app.get('/api/admin/contact-submissions', isAuthenticated, async (req: any, res) => {
    try {
      const user = await storage.getUser(req.user.claims.sub);
      if (!user?.isAdmin) {
        return res.status(403).json({ message: "Admin access required" });
      }

      const submissions = await storage.getContactSubmissions();
      res.json(submissions);
    } catch (error) {
      console.error("Error fetching contact submissions:", error);
      res.status(500).json({ message: "Failed to fetch contact submissions" });
    }
  });

  // Chat messages for analytics
  app.get('/api/admin/chat-analytics', isAuthenticated, async (req: any, res) => {
    try {
      const user = await storage.getUser(req.user.claims.sub);
      if (!user?.isAdmin) {
        return res.status(403).json({ message: "Admin access required" });
      }

      // Return chat analytics (implementation can be expanded)
      res.json({ message: "Chat analytics endpoint ready for implementation" });
    } catch (error) {
      console.error("Error fetching chat analytics:", error);
      res.status(500).json({ message: "Failed to fetch chat analytics" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
