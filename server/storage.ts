import {
  users,
  content,
  services,
  caseStudies,
  testimonials,
  blogPosts,
  faqs,
  contactSubmissions,
  type User,
  type UpsertUser,
  type Content,
  type InsertContent,
  type Service,
  type InsertService,
  type CaseStudy,
  type InsertCaseStudy,
  type Testimonial,
  type InsertTestimonial,
  type BlogPost,
  type InsertBlogPost,
  type FAQ,
  type InsertFAQ,
  type ContactSubmission,
  type InsertContactSubmission,
} from "@shared/schema";
import { db } from "./db";
import { eq, desc, and } from "drizzle-orm";

// In static mode, database operations are not available
const isStaticMode = process.env.VITE_STATIC_BUILD === 'true';

export interface IStorage {
  // User operations (required for Replit Auth)
  getUser(id: string): Promise<User | undefined>;
  upsertUser(user: UpsertUser): Promise<User>;

  // Content management
  getContent(type?: string): Promise<Content[]>;
  getContentById(id: string): Promise<Content | undefined>;
  createContent(content: InsertContent): Promise<Content>;
  updateContent(id: string, content: Partial<InsertContent>): Promise<Content>;
  deleteContent(id: string): Promise<void>;

  // Services
  getServices(category?: string): Promise<Service[]>;
  getServiceById(id: string): Promise<Service | undefined>;
  createService(service: InsertService): Promise<Service>;
  updateService(id: string, service: Partial<InsertService>): Promise<Service>;
  deleteService(id: string): Promise<void>;

  // Case Studies
  getCaseStudies(): Promise<CaseStudy[]>;
  getCaseStudyById(id: string): Promise<CaseStudy | undefined>;
  createCaseStudy(caseStudy: InsertCaseStudy): Promise<CaseStudy>;
  updateCaseStudy(id: string, caseStudy: Partial<InsertCaseStudy>): Promise<CaseStudy>;
  deleteCaseStudy(id: string): Promise<void>;

  // Testimonials
  getTestimonials(): Promise<Testimonial[]>;
  getTestimonialById(id: string): Promise<Testimonial | undefined>;
  createTestimonial(testimonial: InsertTestimonial): Promise<Testimonial>;
  updateTestimonial(id: string, testimonial: Partial<InsertTestimonial>): Promise<Testimonial>;
  deleteTestimonial(id: string): Promise<void>;

  // Blog Posts
  getBlogPosts(published?: boolean): Promise<BlogPost[]>;
  getBlogPostById(id: string): Promise<BlogPost | undefined>;
  getBlogPostBySlug(slug: string): Promise<BlogPost | undefined>;
  createBlogPost(blogPost: InsertBlogPost): Promise<BlogPost>;
  updateBlogPost(id: string, blogPost: Partial<InsertBlogPost>): Promise<BlogPost>;
  deleteBlogPost(id: string): Promise<void>;

  // FAQs
  getFAQs(): Promise<FAQ[]>;
  getFAQById(id: string): Promise<FAQ | undefined>;
  createFAQ(faq: InsertFAQ): Promise<FAQ>;
  updateFAQ(id: string, faq: Partial<InsertFAQ>): Promise<FAQ>;
  deleteFAQ(id: string): Promise<void>;

  // Contact Submissions
  getContactSubmissions(): Promise<ContactSubmission[]>;
  createContactSubmission(submission: InsertContactSubmission): Promise<ContactSubmission>;
  markContactSubmissionProcessed(id: string): Promise<void>;
}

export class DatabaseStorage implements IStorage {
  // User operations (required for Replit Auth)
  async getUser(id: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user;
  }

  async upsertUser(userData: UpsertUser): Promise<User> {
    const [user] = await db
      .insert(users)
      .values(userData)
      .onConflictDoUpdate({
        target: users.id,
        set: {
          ...userData,
          updatedAt: new Date(),
        },
      })
      .returning();
    return user;
  }

  // Content management
  async getContent(type?: string): Promise<Content[]> {
    const query = db.select().from(content);
    if (type) {
      return await query.where(and(eq(content.type, type), eq(content.isActive, true)));
    }
    return await query.where(eq(content.isActive, true)).orderBy(desc(content.updatedAt));
  }

  async getContentById(id: string): Promise<Content | undefined> {
    const [result] = await db.select().from(content).where(eq(content.id, id));
    return result;
  }

  async createContent(contentData: InsertContent): Promise<Content> {
    const [result] = await db.insert(content).values(contentData).returning();
    return result;
  }

  async updateContent(id: string, contentData: Partial<InsertContent>): Promise<Content> {
    const [result] = await db
      .update(content)
      .set({ ...contentData, updatedAt: new Date() })
      .where(eq(content.id, id))
      .returning();
    return result;
  }

  async deleteContent(id: string): Promise<void> {
    await db.update(content).set({ isActive: false }).where(eq(content.id, id));
  }

  // Services
  async getServices(category?: string): Promise<Service[]> {
    if (category) {
      return await db.select().from(services).where(and(eq(services.category, category), eq(services.isActive, true))).orderBy(services.name);
    }
    return await db.select().from(services).where(eq(services.isActive, true)).orderBy(services.name);
  }

  async getServiceById(id: string): Promise<Service | undefined> {
    const [result] = await db.select().from(services).where(eq(services.id, id));
    return result;
  }

  async createService(serviceData: InsertService): Promise<Service> {
    const [result] = await db.insert(services).values(serviceData).returning();
    return result;
  }

  async updateService(id: string, serviceData: Partial<InsertService>): Promise<Service> {
    const [result] = await db
      .update(services)
      .set({ ...serviceData, updatedAt: new Date() })
      .where(eq(services.id, id))
      .returning();
    return result;
  }

  async deleteService(id: string): Promise<void> {
    await db.update(services).set({ isActive: false }).where(eq(services.id, id));
  }

  // Case Studies
  async getCaseStudies(): Promise<CaseStudy[]> {
    return await db
      .select()
      .from(caseStudies)
      .where(eq(caseStudies.isActive, true))
      .orderBy(desc(caseStudies.createdAt));
  }

  async getCaseStudyById(id: string): Promise<CaseStudy | undefined> {
    const [result] = await db.select().from(caseStudies).where(eq(caseStudies.id, id));
    return result;
  }

  async createCaseStudy(caseStudyData: InsertCaseStudy): Promise<CaseStudy> {
    const [result] = await db.insert(caseStudies).values(caseStudyData).returning();
    return result;
  }

  async updateCaseStudy(id: string, caseStudyData: Partial<InsertCaseStudy>): Promise<CaseStudy> {
    const [result] = await db
      .update(caseStudies)
      .set({ ...caseStudyData, updatedAt: new Date() })
      .where(eq(caseStudies.id, id))
      .returning();
    return result;
  }

  async deleteCaseStudy(id: string): Promise<void> {
    await db.update(caseStudies).set({ isActive: false }).where(eq(caseStudies.id, id));
  }

  // Testimonials
  async getTestimonials(): Promise<Testimonial[]> {
    return await db
      .select()
      .from(testimonials)
      .where(eq(testimonials.isActive, true))
      .orderBy(desc(testimonials.createdAt));
  }

  async getTestimonialById(id: string): Promise<Testimonial | undefined> {
    const [result] = await db.select().from(testimonials).where(eq(testimonials.id, id));
    return result;
  }

  async createTestimonial(testimonialData: InsertTestimonial): Promise<Testimonial> {
    const [result] = await db.insert(testimonials).values(testimonialData).returning();
    return result;
  }

  async updateTestimonial(id: string, testimonialData: Partial<InsertTestimonial>): Promise<Testimonial> {
    const [result] = await db
      .update(testimonials)
      .set({ ...testimonialData, updatedAt: new Date() })
      .where(eq(testimonials.id, id))
      .returning();
    return result;
  }

  async deleteTestimonial(id: string): Promise<void> {
    await db.update(testimonials).set({ isActive: false }).where(eq(testimonials.id, id));
  }

  // Blog Posts
  async getBlogPosts(published?: boolean): Promise<BlogPost[]> {
    const query = db.select().from(blogPosts);
    if (published !== undefined) {
      return await query.where(eq(blogPosts.isPublished, published)).orderBy(desc(blogPosts.publishedAt));
    }
    return await query.orderBy(desc(blogPosts.createdAt));
  }

  async getBlogPostById(id: string): Promise<BlogPost | undefined> {
    const [result] = await db.select().from(blogPosts).where(eq(blogPosts.id, id));
    return result;
  }

  async getBlogPostBySlug(slug: string): Promise<BlogPost | undefined> {
    const [result] = await db.select().from(blogPosts).where(eq(blogPosts.slug, slug));
    return result;
  }

  async createBlogPost(blogPostData: InsertBlogPost): Promise<BlogPost> {
    const [result] = await db.insert(blogPosts).values(blogPostData).returning();
    return result;
  }

  async updateBlogPost(id: string, blogPostData: Partial<InsertBlogPost>): Promise<BlogPost> {
    const [result] = await db
      .update(blogPosts)
      .set({ ...blogPostData, updatedAt: new Date() })
      .where(eq(blogPosts.id, id))
      .returning();
    return result;
  }

  async deleteBlogPost(id: string): Promise<void> {
    await db.delete(blogPosts).where(eq(blogPosts.id, id));
  }

  // FAQs
  async getFAQs(): Promise<FAQ[]> {
    return await db
      .select()
      .from(faqs)
      .where(eq(faqs.isActive, true))
      .orderBy(faqs.order, faqs.createdAt);
  }

  async getFAQById(id: string): Promise<FAQ | undefined> {
    const [result] = await db.select().from(faqs).where(eq(faqs.id, id));
    return result;
  }

  async createFAQ(faqData: InsertFAQ): Promise<FAQ> {
    const [result] = await db.insert(faqs).values(faqData).returning();
    return result;
  }

  async updateFAQ(id: string, faqData: Partial<InsertFAQ>): Promise<FAQ> {
    const [result] = await db
      .update(faqs)
      .set({ ...faqData, updatedAt: new Date() })
      .where(eq(faqs.id, id))
      .returning();
    return result;
  }

  async deleteFAQ(id: string): Promise<void> {
    await db.update(faqs).set({ isActive: false }).where(eq(faqs.id, id));
  }

  // Contact Submissions
  async getContactSubmissions(): Promise<ContactSubmission[]> {
    return await db
      .select()
      .from(contactSubmissions)
      .orderBy(desc(contactSubmissions.createdAt));
  }

  async createContactSubmission(submissionData: InsertContactSubmission): Promise<ContactSubmission> {
    const [result] = await db.insert(contactSubmissions).values(submissionData).returning();
    return result;
  }

  async markContactSubmissionProcessed(id: string): Promise<void> {
    await db.update(contactSubmissions).set({ isProcessed: true }).where(eq(contactSubmissions.id, id));
  }
}

export const storage = new DatabaseStorage();
