var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// server/index.ts
import "dotenv/config";
import express2 from "express";

// server/routes.ts
import { createServer } from "http";

// shared/schema.ts
var schema_exports = {};
__export(schema_exports, {
  blogPosts: () => blogPosts,
  caseStudies: () => caseStudies,
  chatMessages: () => chatMessages,
  contactSubmissions: () => contactSubmissions,
  content: () => content,
  faqs: () => faqs,
  insertBlogPostSchema: () => insertBlogPostSchema,
  insertCaseStudySchema: () => insertCaseStudySchema,
  insertChatMessageSchema: () => insertChatMessageSchema,
  insertContactSubmissionSchema: () => insertContactSubmissionSchema,
  insertContentSchema: () => insertContentSchema,
  insertFaqSchema: () => insertFaqSchema,
  insertServiceSchema: () => insertServiceSchema,
  insertTestimonialSchema: () => insertTestimonialSchema,
  services: () => services,
  sessions: () => sessions,
  testimonials: () => testimonials,
  users: () => users
});
import { sql } from "drizzle-orm";
import {
  index,
  jsonb,
  pgTable,
  text,
  timestamp,
  varchar,
  boolean,
  integer
} from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
var sessions = pgTable(
  "sessions",
  {
    sid: varchar("sid").primaryKey(),
    sess: jsonb("sess").notNull(),
    expire: timestamp("expire").notNull()
  },
  (table) => [index("IDX_session_expire").on(table.expire)]
);
var users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  email: varchar("email").unique(),
  firstName: varchar("first_name"),
  lastName: varchar("last_name"),
  profileImageUrl: varchar("profile_image_url"),
  isAdmin: boolean("is_admin").default(false),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow()
});
var content = pgTable("content", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  type: varchar("type").notNull(),
  // 'hero', 'about', 'services', etc.
  title: text("title"),
  content: text("content"),
  metadata: jsonb("metadata"),
  // For storing additional data like video URLs, images, etc.
  isActive: boolean("is_active").default(true),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow()
});
var services = pgTable("services", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: varchar("name").notNull(),
  description: text("description"),
  category: varchar("category").notNull(),
  // 'training' or 'consulting'
  industry: varchar("industry"),
  // For consulting services
  icon: varchar("icon"),
  isActive: boolean("is_active").default(true),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow()
});
var caseStudies = pgTable("case_studies", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  title: varchar("title").notNull(),
  description: text("description"),
  client: varchar("client"),
  industry: varchar("industry"),
  imageUrl: varchar("image_url"),
  content: text("content"),
  isActive: boolean("is_active").default(true),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow()
});
var testimonials = pgTable("testimonials", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  content: text("content").notNull(),
  author: varchar("author").notNull(),
  role: varchar("role"),
  company: varchar("company"),
  rating: integer("rating").default(5),
  isActive: boolean("is_active").default(true),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow()
});
var blogPosts = pgTable("blog_posts", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  title: varchar("title").notNull(),
  slug: varchar("slug").notNull().unique(),
  excerpt: text("excerpt"),
  content: text("content"),
  category: varchar("category"),
  imageUrl: varchar("image_url"),
  authorId: varchar("author_id").references(() => users.id),
  isPublished: boolean("is_published").default(false),
  publishedAt: timestamp("published_at"),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow()
});
var faqs = pgTable("faqs", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  question: text("question").notNull(),
  answer: text("answer").notNull(),
  category: varchar("category"),
  order: integer("order").default(0),
  isActive: boolean("is_active").default(true),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow()
});
var contactSubmissions = pgTable("contact_submissions", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  firstName: varchar("first_name").notNull(),
  lastName: varchar("last_name").notNull(),
  email: varchar("email").notNull(),
  company: varchar("company"),
  region: varchar("region"),
  service: varchar("service"),
  message: text("message").notNull(),
  isProcessed: boolean("is_processed").default(false),
  createdAt: timestamp("created_at").defaultNow()
});
var chatMessages = pgTable("chat_messages", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  sessionId: varchar("session_id").notNull(),
  message: text("message").notNull(),
  response: text("response"),
  isProcessed: boolean("is_processed").default(false),
  createdAt: timestamp("created_at").defaultNow()
});
var insertContentSchema = createInsertSchema(content).omit({
  id: true,
  createdAt: true,
  updatedAt: true
});
var insertServiceSchema = createInsertSchema(services).omit({
  id: true,
  createdAt: true,
  updatedAt: true
});
var insertCaseStudySchema = createInsertSchema(caseStudies).omit({
  id: true,
  createdAt: true,
  updatedAt: true
});
var insertTestimonialSchema = createInsertSchema(testimonials).omit({
  id: true,
  createdAt: true,
  updatedAt: true
});
var insertBlogPostSchema = createInsertSchema(blogPosts).omit({
  id: true,
  createdAt: true,
  updatedAt: true
});
var insertFaqSchema = createInsertSchema(faqs).omit({
  id: true,
  createdAt: true,
  updatedAt: true
});
var insertContactSubmissionSchema = createInsertSchema(contactSubmissions).omit({
  id: true,
  createdAt: true
});
var insertChatMessageSchema = createInsertSchema(chatMessages).omit({
  id: true,
  createdAt: true
});

// server/db.ts
import { Pool, neonConfig } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-serverless";
import ws from "ws";
neonConfig.webSocketConstructor = ws;
var pool;
var db;
if (process.env.VITE_STATIC_BUILD === "true") {
  console.log("Running in static mode - skipping database connection");
  pool = null;
  db = null;
} else {
  if (!process.env.DATABASE_URL) {
    throw new Error(
      "DATABASE_URL must be set. Did you forget to provision a database?"
    );
  }
  pool = new Pool({ connectionString: process.env.DATABASE_URL });
  db = drizzle({ client: pool, schema: schema_exports });
}

// server/storage.ts
import { eq, desc, and } from "drizzle-orm";
var isStaticMode = process.env.VITE_STATIC_BUILD === "true";
var DatabaseStorage = class {
  // User operations (required for Replit Auth)
  async getUser(id) {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user;
  }
  async upsertUser(userData) {
    const [user] = await db.insert(users).values(userData).onConflictDoUpdate({
      target: users.id,
      set: {
        ...userData,
        updatedAt: /* @__PURE__ */ new Date()
      }
    }).returning();
    return user;
  }
  // Content management
  async getContent(type) {
    const query = db.select().from(content);
    if (type) {
      return await query.where(and(eq(content.type, type), eq(content.isActive, true)));
    }
    return await query.where(eq(content.isActive, true)).orderBy(desc(content.updatedAt));
  }
  async getContentById(id) {
    const [result] = await db.select().from(content).where(eq(content.id, id));
    return result;
  }
  async createContent(contentData) {
    const [result] = await db.insert(content).values(contentData).returning();
    return result;
  }
  async updateContent(id, contentData) {
    const [result] = await db.update(content).set({ ...contentData, updatedAt: /* @__PURE__ */ new Date() }).where(eq(content.id, id)).returning();
    return result;
  }
  async deleteContent(id) {
    await db.update(content).set({ isActive: false }).where(eq(content.id, id));
  }
  // Services
  async getServices(category) {
    if (category) {
      return await db.select().from(services).where(and(eq(services.category, category), eq(services.isActive, true))).orderBy(services.name);
    }
    return await db.select().from(services).where(eq(services.isActive, true)).orderBy(services.name);
  }
  async getServiceById(id) {
    const [result] = await db.select().from(services).where(eq(services.id, id));
    return result;
  }
  async createService(serviceData) {
    const [result] = await db.insert(services).values(serviceData).returning();
    return result;
  }
  async updateService(id, serviceData) {
    const [result] = await db.update(services).set({ ...serviceData, updatedAt: /* @__PURE__ */ new Date() }).where(eq(services.id, id)).returning();
    return result;
  }
  async deleteService(id) {
    await db.update(services).set({ isActive: false }).where(eq(services.id, id));
  }
  // Case Studies
  async getCaseStudies() {
    return await db.select().from(caseStudies).where(eq(caseStudies.isActive, true)).orderBy(desc(caseStudies.createdAt));
  }
  async getCaseStudyById(id) {
    const [result] = await db.select().from(caseStudies).where(eq(caseStudies.id, id));
    return result;
  }
  async createCaseStudy(caseStudyData) {
    const [result] = await db.insert(caseStudies).values(caseStudyData).returning();
    return result;
  }
  async updateCaseStudy(id, caseStudyData) {
    const [result] = await db.update(caseStudies).set({ ...caseStudyData, updatedAt: /* @__PURE__ */ new Date() }).where(eq(caseStudies.id, id)).returning();
    return result;
  }
  async deleteCaseStudy(id) {
    await db.update(caseStudies).set({ isActive: false }).where(eq(caseStudies.id, id));
  }
  // Testimonials
  async getTestimonials() {
    return await db.select().from(testimonials).where(eq(testimonials.isActive, true)).orderBy(desc(testimonials.createdAt));
  }
  async getTestimonialById(id) {
    const [result] = await db.select().from(testimonials).where(eq(testimonials.id, id));
    return result;
  }
  async createTestimonial(testimonialData) {
    const [result] = await db.insert(testimonials).values(testimonialData).returning();
    return result;
  }
  async updateTestimonial(id, testimonialData) {
    const [result] = await db.update(testimonials).set({ ...testimonialData, updatedAt: /* @__PURE__ */ new Date() }).where(eq(testimonials.id, id)).returning();
    return result;
  }
  async deleteTestimonial(id) {
    await db.update(testimonials).set({ isActive: false }).where(eq(testimonials.id, id));
  }
  // Blog Posts
  async getBlogPosts(published) {
    const query = db.select().from(blogPosts);
    if (published !== void 0) {
      return await query.where(eq(blogPosts.isPublished, published)).orderBy(desc(blogPosts.publishedAt));
    }
    return await query.orderBy(desc(blogPosts.createdAt));
  }
  async getBlogPostById(id) {
    const [result] = await db.select().from(blogPosts).where(eq(blogPosts.id, id));
    return result;
  }
  async getBlogPostBySlug(slug) {
    const [result] = await db.select().from(blogPosts).where(eq(blogPosts.slug, slug));
    return result;
  }
  async createBlogPost(blogPostData) {
    const [result] = await db.insert(blogPosts).values(blogPostData).returning();
    return result;
  }
  async updateBlogPost(id, blogPostData) {
    const [result] = await db.update(blogPosts).set({ ...blogPostData, updatedAt: /* @__PURE__ */ new Date() }).where(eq(blogPosts.id, id)).returning();
    return result;
  }
  async deleteBlogPost(id) {
    await db.delete(blogPosts).where(eq(blogPosts.id, id));
  }
  // FAQs
  async getFAQs() {
    return await db.select().from(faqs).where(eq(faqs.isActive, true)).orderBy(faqs.order, faqs.createdAt);
  }
  async getFAQById(id) {
    const [result] = await db.select().from(faqs).where(eq(faqs.id, id));
    return result;
  }
  async createFAQ(faqData) {
    const [result] = await db.insert(faqs).values(faqData).returning();
    return result;
  }
  async updateFAQ(id, faqData) {
    const [result] = await db.update(faqs).set({ ...faqData, updatedAt: /* @__PURE__ */ new Date() }).where(eq(faqs.id, id)).returning();
    return result;
  }
  async deleteFAQ(id) {
    await db.update(faqs).set({ isActive: false }).where(eq(faqs.id, id));
  }
  // Contact Submissions
  async getContactSubmissions() {
    return await db.select().from(contactSubmissions).orderBy(desc(contactSubmissions.createdAt));
  }
  async createContactSubmission(submissionData) {
    const [result] = await db.insert(contactSubmissions).values(submissionData).returning();
    return result;
  }
  async markContactSubmissionProcessed(id) {
    await db.update(contactSubmissions).set({ isProcessed: true }).where(eq(contactSubmissions.id, id));
  }
};
var storage = new DatabaseStorage();

// server/replitAuth.ts
import * as client from "openid-client";
import { Strategy } from "openid-client/passport";
import passport from "passport";
import session from "express-session";
import memoize from "memoizee";
import connectPg from "connect-pg-simple";
var isStaticMode2 = process.env.VITE_STATIC_BUILD === "true";
if (!isStaticMode2 && !process.env.REPLIT_DOMAINS) {
  throw new Error("Environment variable REPLIT_DOMAINS not provided");
}
var getOidcConfig = memoize(
  async () => {
    return await client.discovery(
      new URL(process.env.ISSUER_URL ?? "https://replit.com/oidc"),
      process.env.REPL_ID
    );
  },
  { maxAge: 3600 * 1e3 }
);
function getSession() {
  if (isStaticMode2) {
    return session({
      secret: "static-mode-secret",
      resave: false,
      saveUninitialized: false,
      cookie: {
        httpOnly: true,
        secure: false,
        // Allow non-HTTPS for local development
        maxAge: 24 * 60 * 60 * 1e3
        // 1 day
      }
    });
  }
  const sessionTtl = 7 * 24 * 60 * 60 * 1e3;
  const pgStore = connectPg(session);
  const sessionStore = new pgStore({
    conString: process.env.DATABASE_URL,
    createTableIfMissing: false,
    ttl: sessionTtl,
    tableName: "sessions"
  });
  return session({
    secret: process.env.SESSION_SECRET,
    store: sessionStore,
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      secure: true,
      maxAge: sessionTtl
    }
  });
}
function updateUserSession(user, tokens) {
  user.claims = tokens.claims();
  user.access_token = tokens.access_token;
  user.refresh_token = tokens.refresh_token;
  user.expires_at = user.claims?.exp;
}
async function upsertUser(claims) {
  await storage.upsertUser({
    id: claims["sub"],
    email: claims["email"],
    firstName: claims["first_name"],
    lastName: claims["last_name"],
    profileImageUrl: claims["profile_image_url"]
  });
}
async function setupAuth(app2) {
  if (isStaticMode2) {
    console.log("Running in static mode - skipping auth setup");
    return;
  }
  app2.set("trust proxy", 1);
  app2.use(getSession());
  app2.use(passport.initialize());
  app2.use(passport.session());
  const config = await getOidcConfig();
  const verify = async (tokens, verified) => {
    const user = {};
    updateUserSession(user, tokens);
    await upsertUser(tokens.claims());
    verified(null, user);
  };
  for (const domain of process.env.REPLIT_DOMAINS.split(",")) {
    const strategy = new Strategy(
      {
        name: `replitauth:${domain}`,
        config,
        scope: "openid email profile offline_access",
        callbackURL: `https://${domain}/api/callback`
      },
      verify
    );
    passport.use(strategy);
  }
  passport.serializeUser((user, cb) => cb(null, user));
  passport.deserializeUser((user, cb) => cb(null, user));
  app2.get("/api/login", (req, res, next) => {
    passport.authenticate(`replitauth:${req.hostname}`, {
      prompt: "login consent",
      scope: ["openid", "email", "profile", "offline_access"]
    })(req, res, next);
  });
  app2.get("/api/callback", (req, res, next) => {
    passport.authenticate(`replitauth:${req.hostname}`, {
      successReturnToOrRedirect: "/",
      failureRedirect: "/api/login"
    })(req, res, next);
  });
  app2.get("/api/logout", (req, res) => {
    req.logout(() => {
      res.redirect(
        client.buildEndSessionUrl(config, {
          client_id: process.env.REPL_ID,
          post_logout_redirect_uri: `${req.protocol}://${req.hostname}`
        }).href
      );
    });
  });
}
var isAuthenticated = async (req, res, next) => {
  const user = req.user;
  if (!req.isAuthenticated() || !user.expires_at) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  const now = Math.floor(Date.now() / 1e3);
  if (now <= user.expires_at) {
    return next();
  }
  const refreshToken = user.refresh_token;
  if (!refreshToken) {
    res.status(401).json({ message: "Unauthorized" });
    return;
  }
  try {
    const config = await getOidcConfig();
    const tokenResponse = await client.refreshTokenGrant(config, refreshToken);
    updateUserSession(user, tokenResponse);
    return next();
  } catch (error) {
    res.status(401).json({ message: "Unauthorized" });
    return;
  }
};

// server/emailService.ts
import nodemailer from "nodemailer";
var transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || "smtp.office365.com",
  port: parseInt(process.env.SMTP_PORT || "587"),
  secure: false,
  auth: {
    user: process.env.SMTP_USER || process.env.EMAIL_USER,
    pass: process.env.SMTP_PASS || process.env.EMAIL_PASS
  }
});
var EmailService = class {
  async sendContactNotification(submission) {
    const mailOptions = {
      from: process.env.SMTP_USER || process.env.EMAIL_USER,
      to: "anish@ccandcsolutions.com",
      subject: `New Contact Form Submission - ${submission.firstName} ${submission.lastName}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${submission.firstName} ${submission.lastName}</p>
        <p><strong>Email:</strong> ${submission.email}</p>
        ${submission.company ? `<p><strong>Company:</strong> ${submission.company}</p>` : ""}
        ${submission.region ? `<p><strong>Region:</strong> ${submission.region}</p>` : ""}
        ${submission.service ? `<p><strong>Service Interest:</strong> ${submission.service}</p>` : ""}
        <p><strong>Message:</strong></p>
        <p>${submission.message.replace(/\n/g, "<br>")}</p>
        <hr>
        <p><small>Submitted on: ${submission.createdAt ? new Date(submission.createdAt).toLocaleString() : (/* @__PURE__ */ new Date()).toLocaleString()}</small></p>
      `
    };
    try {
      await transporter.sendMail(mailOptions);
      console.log("Contact form notification sent successfully");
    } catch (error) {
      console.error("Error sending contact form notification:", error);
      throw new Error("Failed to send email notification");
    }
  }
  async sendAutoReply(submission) {
    const mailOptions = {
      from: process.env.SMTP_USER || process.env.EMAIL_USER,
      to: submission.email,
      subject: "Thank you for contacting CC&C Solutions",
      html: `
        <h2>Thank you for contacting CC&C Solutions</h2>
        <p>Dear ${submission.firstName},</p>
        <p>Thank you for your interest in CC&C Solutions. We have received your inquiry and one of our experts will get back to you within 24 hours.</p>
        <p>In the meantime, feel free to explore our services and resources on our website.</p>
        <p>Best regards,<br>
        The CC&C Solutions Team</p>
        <hr>
        <p><strong>Your submission:</strong></p>
        <p>${submission.message}</p>
      `
    };
    try {
      await transporter.sendMail(mailOptions);
      console.log("Auto-reply sent successfully");
    } catch (error) {
      console.error("Error sending auto-reply:", error);
    }
  }
};
var emailService = new EmailService();

// server/recaptchaService.ts
var RecaptchaService = class {
  secretKey;
  verifyUrl = "https://www.google.com/recaptcha/api/siteverify";
  constructor() {
    this.secretKey = process.env.RECAPTCHA_SECRET_KEY || "";
    if (!this.secretKey) {
      console.warn("RECAPTCHA_SECRET_KEY not configured");
    }
  }
  async verifyToken(token, remoteIp) {
    if (!this.secretKey) {
      console.error("reCAPTCHA verification failed: Secret key not configured");
      return false;
    }
    if (!token) {
      console.error("reCAPTCHA verification failed: No token provided");
      return false;
    }
    try {
      const params = new URLSearchParams({
        secret: this.secretKey,
        response: token,
        ...remoteIp && { remoteip: remoteIp }
      });
      const response = await fetch(this.verifyUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: params.toString()
      });
      const data = await response.json();
      if (data.success) {
        console.log("reCAPTCHA verification successful");
        return true;
      } else {
        console.error("reCAPTCHA verification failed:", data["error-codes"]);
        return false;
      }
    } catch (error) {
      console.error("reCAPTCHA verification error:", error);
      return false;
    }
  }
};
var recaptchaService = new RecaptchaService();

// server/objectStorage.ts
import { Storage } from "@google-cloud/storage";
var REPLIT_SIDECAR_ENDPOINT = "http://127.0.0.1:1106";
function createStorageClient() {
  const gcsCredentialsJson = process.env.GOOGLE_APPLICATION_CREDENTIALS_JSON;
  if (gcsCredentialsJson) {
    console.log("\u{1F527} Using GCS Service Account authentication (Production)");
    try {
      const credentials = JSON.parse(gcsCredentialsJson);
      return new Storage({
        credentials,
        projectId: credentials.project_id
      });
    } catch (error) {
      console.error("\u274C Failed to parse GCS credentials:", error);
      throw new Error("Invalid GOOGLE_APPLICATION_CREDENTIALS_JSON format");
    }
  } else {
    console.log("\u{1F527} Using Replit sidecar authentication (Development)");
    return new Storage({
      credentials: {
        audience: "replit",
        subject_token_type: "access_token",
        token_url: `${REPLIT_SIDECAR_ENDPOINT}/token`,
        type: "external_account",
        credential_source: {
          url: `${REPLIT_SIDECAR_ENDPOINT}/credential`,
          format: {
            type: "json",
            subject_token_field_name: "access_token"
          }
        },
        universe_domain: "googleapis.com"
      },
      projectId: ""
    });
  }
}
var objectStorageClient = createStorageClient();
var ObjectStorageService = class {
  constructor() {
  }
  // Gets the public object search paths.
  getPublicObjectSearchPaths() {
    const pathsStr = process.env.PUBLIC_OBJECT_SEARCH_PATHS || "";
    const paths = Array.from(
      new Set(
        pathsStr.split(",").map((path4) => path4.trim()).filter((path4) => path4.length > 0)
      )
    );
    if (paths.length === 0) {
      throw new Error(
        "PUBLIC_OBJECT_SEARCH_PATHS not set. Create a bucket in 'Object Storage' tool and set PUBLIC_OBJECT_SEARCH_PATHS env var (comma-separated paths)."
      );
    }
    return paths;
  }
  // Search for a public object from the search paths.
  async searchPublicObject(filePath) {
    for (const searchPath of this.getPublicObjectSearchPaths()) {
      const fullPath = `${searchPath}/${filePath}`;
      const { bucketName, objectName } = parseObjectPath(fullPath);
      const bucket = objectStorageClient.bucket(bucketName);
      const file = bucket.file(objectName);
      const [exists] = await file.exists();
      if (exists) {
        return file;
      }
    }
    return null;
  }
  // List files in a public directory - improved version that works with different directory structures
  async listPublicFiles(directory) {
    const files = [];
    for (const searchPath of this.getPublicObjectSearchPaths()) {
      const fullPath = `${searchPath}/${directory}`;
      const { bucketName, objectName } = parseObjectPath(fullPath);
      const bucket = objectStorageClient.bucket(bucketName);
      try {
        console.log(`Searching for files in: ${fullPath} (bucket: ${bucketName}, prefix: ${objectName})`);
        const approaches = [
          // Approach 1: Files directly in the prefix folder
          { prefix: objectName, delimiter: void 0 },
          // Approach 2: Files with trailing slash  
          { prefix: `${objectName}/`, delimiter: void 0 },
          // Approach 3: All files with any nested structure
          { prefix: objectName, delimiter: "/" },
          // Approach 4: Root level search
          { prefix: "", delimiter: void 0 }
        ];
        for (const approach of approaches) {
          try {
            const [bucketFiles] = await bucket.getFiles(approach);
            console.log(`Approach ${approaches.indexOf(approach) + 1}: Found ${bucketFiles.length} files`);
            for (const file of bucketFiles) {
              console.log(`Checking file: ${file.name}`);
              const fileName = file.name.split("/").pop();
              const isInLogosDir = file.name.includes("logos/") || file.name.includes(`${directory}/`);
              const isClientLogo = fileName && fileName.startsWith("client-") && (fileName.endsWith(".png") || fileName.endsWith(".jpg") || fileName.endsWith(".jpeg") || fileName.endsWith(".gif") || fileName.endsWith(".svg"));
              if (isInLogosDir && isClientLogo) {
                console.log(`\u2705 Found valid client logo: ${fileName}`);
                files.push(fileName);
              }
            }
          } catch (approachError) {
            console.log(`Approach ${approaches.indexOf(approach) + 1} failed:`, approachError.message);
            continue;
          }
        }
      } catch (error) {
        console.error(`Error listing files in ${fullPath}:`, error);
        continue;
      }
    }
    return Array.from(new Set(files));
  }
  // Downloads an object to the response.
  async downloadObject(file, res, cacheTtlSec = 3600) {
    try {
      const [metadata] = await file.getMetadata();
      res.set({
        "Content-Type": metadata.contentType || "application/octet-stream",
        "Content-Length": metadata.size,
        "Cache-Control": `public, max-age=${cacheTtlSec}`
      });
      const stream = file.createReadStream();
      stream.on("error", (err) => {
        console.error("Stream error:", err);
        if (!res.headersSent) {
          res.status(500).json({ error: "Error streaming file" });
        }
      });
      stream.pipe(res);
    } catch (error) {
      console.error("Error downloading file:", error);
      if (!res.headersSent) {
        res.status(500).json({ error: "Error downloading file" });
      }
    }
  }
};
function parseObjectPath(path4) {
  if (!path4.startsWith("/")) {
    path4 = `/${path4}`;
  }
  const pathParts = path4.split("/");
  if (pathParts.length < 3) {
    throw new Error("Invalid path: must contain at least a bucket name");
  }
  const bucketName = pathParts[1];
  const objectName = pathParts.slice(2).join("/");
  return {
    bucketName,
    objectName
  };
}

// server/routes.ts
async function registerRoutes(app2) {
  await setupAuth(app2);
  app2.get("/api/auth/user", async (req, res) => {
    try {
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
  app2.get("/api/objects/public/:filePath(*)", async (req, res) => {
    const filePath = req.params.filePath;
    const isStaticMode3 = process.env.VITE_STATIC_BUILD === "true";
    if (isStaticMode3) {
      if (filePath.startsWith("logos/")) {
        const logoFileName = filePath.replace("logos/", "");
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
  app2.get("/api/client-logos", async (req, res) => {
    const objectStorageService = new ObjectStorageService();
    try {
      const logoFiles = await objectStorageService.listPublicFiles("logos");
      console.log(`Found ${logoFiles.length} logo files:`, logoFiles);
      const logos = logoFiles.map((filename) => {
        const name = filename.replace(/^client-/, "").replace(/\.(png|jpg|jpeg|gif|svg)$/i, "").toUpperCase();
        return {
          name,
          logoPath: `/api/objects/public/logos/${filename}`,
          alt: `${name} Logo`
        };
      });
      if (logos.length === 0) {
        console.log("No logos found via directory listing, trying brute force discovery...");
        const searchPaths = objectStorageService.getPublicObjectSearchPaths();
        const allValidLogos = [];
        for (const searchPath of searchPaths) {
          const { bucketName } = parseObjectPath(searchPath);
          const bucket = objectStorageClient.bucket(bucketName);
          try {
            const [allFiles] = await bucket.getFiles();
            console.log(`Scanning ${allFiles.length} files in bucket for client logos...`);
            for (const file of allFiles) {
              const fileName = file.name.split("/").pop();
              const isInLogos = file.name.includes("/logos/") || file.name.includes("logos/");
              const isClientLogo = fileName && fileName.startsWith("client-") && (fileName.endsWith(".png") || fileName.endsWith(".jpg") || fileName.endsWith(".jpeg") || fileName.endsWith(".gif") || fileName.endsWith(".svg"));
              if (isInLogos && isClientLogo) {
                console.log(`\u{1F3AF} Found client logo via full scan: ${file.name}`);
                const name = fileName.replace(/^client-/, "").replace(/\.(png|jpg|jpeg|gif|svg)$/i, "").toUpperCase();
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
          console.log(`\u2705 Found ${allValidLogos.length} logos via full scan`);
          res.json(allValidLogos);
          return;
        }
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
  app2.get("/api/content", async (req, res) => {
    try {
      const { type } = req.query;
      const content2 = await storage.getContent(type);
      res.json(content2);
    } catch (error) {
      console.error("Error fetching content:", error);
      res.status(500).json({ message: "Failed to fetch content" });
    }
  });
  app2.get("/api/content/:id", async (req, res) => {
    try {
      const content2 = await storage.getContentById(req.params.id);
      if (!content2) {
        return res.status(404).json({ message: "Content not found" });
      }
      res.json(content2);
    } catch (error) {
      console.error("Error fetching content:", error);
      res.status(500).json({ message: "Failed to fetch content" });
    }
  });
  app2.get("/api/services", async (req, res) => {
    try {
      const { category } = req.query;
      const services2 = await storage.getServices(category);
      res.json(services2);
    } catch (error) {
      console.error("Error fetching services:", error);
      res.status(500).json({ message: "Failed to fetch services" });
    }
  });
  app2.get("/api/case-studies", async (req, res) => {
    try {
      const caseStudies2 = await storage.getCaseStudies();
      res.json(caseStudies2);
    } catch (error) {
      console.error("Error fetching case studies:", error);
      res.status(500).json({ message: "Failed to fetch case studies" });
    }
  });
  app2.get("/api/testimonials", async (req, res) => {
    try {
      const testimonials2 = await storage.getTestimonials();
      res.json(testimonials2);
    } catch (error) {
      console.error("Error fetching testimonials:", error);
      res.status(500).json({ message: "Failed to fetch testimonials" });
    }
  });
  app2.get("/api/blog-posts", async (req, res) => {
    try {
      const { published } = req.query;
      const blogPosts2 = await storage.getBlogPosts(published === "true");
      res.json(blogPosts2);
    } catch (error) {
      console.error("Error fetching blog posts:", error);
      res.status(500).json({ message: "Failed to fetch blog posts" });
    }
  });
  app2.get("/api/blog-posts/:slug", async (req, res) => {
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
  app2.get("/api/faqs", async (req, res) => {
    try {
      const faqs2 = await storage.getFAQs();
      res.json(faqs2);
    } catch (error) {
      console.error("Error fetching FAQs:", error);
      res.status(500).json({ message: "Failed to fetch FAQs" });
    }
  });
  app2.get("/api/recaptcha-site-key", (req, res) => {
    const siteKey = process.env.RECAPTCHA_SITE_KEY;
    if (!siteKey) {
      return res.status(500).json({ message: "reCAPTCHA not configured" });
    }
    res.json({ siteKey });
  });
  app2.post("/api/contact", async (req, res) => {
    try {
      const { recaptchaToken, ...formData } = req.body;
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
      try {
        await emailService.sendContactNotification(submission);
        await emailService.sendAutoReply(submission);
      } catch (emailError) {
        console.error("Error sending email:", emailError);
      }
      res.json({ message: "Contact form submitted successfully", id: submission.id });
    } catch (error) {
      console.error("Error submitting contact form:", error);
      res.status(500).json({ message: "Failed to submit contact form" });
    }
  });
  app2.post("/api/admin/content", isAuthenticated, async (req, res) => {
    try {
      const user = await storage.getUser(req.user.claims.sub);
      if (!user?.isAdmin) {
        return res.status(403).json({ message: "Admin access required" });
      }
      const contentData = insertContentSchema.parse(req.body);
      const content2 = await storage.createContent(contentData);
      res.json(content2);
    } catch (error) {
      console.error("Error creating content:", error);
      res.status(500).json({ message: "Failed to create content" });
    }
  });
  app2.put("/api/admin/content/:id", isAuthenticated, async (req, res) => {
    try {
      const user = await storage.getUser(req.user.claims.sub);
      if (!user?.isAdmin) {
        return res.status(403).json({ message: "Admin access required" });
      }
      const contentData = insertContentSchema.partial().parse(req.body);
      const content2 = await storage.updateContent(req.params.id, contentData);
      res.json(content2);
    } catch (error) {
      console.error("Error updating content:", error);
      res.status(500).json({ message: "Failed to update content" });
    }
  });
  app2.delete("/api/admin/content/:id", isAuthenticated, async (req, res) => {
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
  app2.post("/api/admin/services", isAuthenticated, async (req, res) => {
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
  app2.put("/api/admin/services/:id", isAuthenticated, async (req, res) => {
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
  app2.post("/api/admin/case-studies", isAuthenticated, async (req, res) => {
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
  app2.post("/api/admin/testimonials", isAuthenticated, async (req, res) => {
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
  app2.post("/api/admin/blog-posts", isAuthenticated, async (req, res) => {
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
  app2.post("/api/admin/faqs", isAuthenticated, async (req, res) => {
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
  app2.get("/api/admin/contact-submissions", isAuthenticated, async (req, res) => {
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
  app2.get("/api/admin/chat-analytics", isAuthenticated, async (req, res) => {
    try {
      const user = await storage.getUser(req.user.claims.sub);
      if (!user?.isAdmin) {
        return res.status(403).json({ message: "Admin access required" });
      }
      res.json({ message: "Chat analytics endpoint ready for implementation" });
    } catch (error) {
      console.error("Error fetching chat analytics:", error);
      res.status(500).json({ message: "Failed to fetch chat analytics" });
    }
  });
  const httpServer = createServer(app2);
  return httpServer;
}

// server/vite.ts
import express from "express";
import fs from "fs";
import path2 from "path";
import { createServer as createViteServer, createLogger } from "vite";

// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";
var vite_config_default = defineConfig({
  base: "/",
  // Set base path for root domain deployment
  plugins: [
    react(),
    runtimeErrorOverlay(),
    ...process.env.NODE_ENV !== "production" && process.env.REPL_ID !== void 0 ? [
      await import("@replit/vite-plugin-cartographer").then(
        (m) => m.cartographer()
      )
    ] : []
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets")
    }
  },
  root: path.resolve(import.meta.dirname, "client"),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true
  },
  define: {
    // Enable static mode for production builds
    "import.meta.env.VITE_STATIC_BUILD": JSON.stringify("true")
  },
  server: {
    fs: {
      strict: true,
      deny: ["**/.*"]
    }
  }
});

// server/vite.ts
import { nanoid } from "nanoid";
var viteLogger = createLogger();
function log(message, source = "express") {
  const formattedTime = (/* @__PURE__ */ new Date()).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true
  });
  console.log(`${formattedTime} [${source}] ${message}`);
}
async function setupVite(app2, server) {
  const serverOptions = {
    middlewareMode: true,
    hmr: { server },
    allowedHosts: true
  };
  const vite = await createViteServer({
    ...vite_config_default,
    configFile: false,
    customLogger: {
      ...viteLogger,
      error: (msg, options) => {
        viteLogger.error(msg, options);
        process.exit(1);
      }
    },
    server: serverOptions,
    appType: "custom"
  });
  app2.use(vite.middlewares);
  app2.use("*", async (req, res, next) => {
    const url = req.originalUrl;
    try {
      const clientTemplate = path2.resolve(
        import.meta.dirname,
        "..",
        "client",
        "index.html"
      );
      let template = await fs.promises.readFile(clientTemplate, "utf-8");
      template = template.replace(
        `src="/src/main.tsx"`,
        `src="/src/main.tsx?v=${nanoid()}"`
      );
      const page = await vite.transformIndexHtml(url, template);
      res.status(200).set({ "Content-Type": "text/html" }).end(page);
    } catch (e) {
      vite.ssrFixStacktrace(e);
      next(e);
    }
  });
}
function serveStatic(app2) {
  const distPath = path2.resolve(import.meta.dirname, "public");
  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`
    );
  }
  app2.use(express.static(distPath));
  app2.use("*", (_req, res) => {
    res.sendFile(path2.resolve(distPath, "index.html"));
  });
}

// server/index.ts
import path3 from "path";
var app = express2();
app.use(express2.json());
app.use(express2.urlencoded({ extended: false }));
app.use("/attached_assets", express2.static(path3.resolve(import.meta.dirname, "..", "attached_assets")));
app.use("/assets", express2.static(path3.resolve(import.meta.dirname, "..", "assets")));
app.use((req, res, next) => {
  const start = Date.now();
  const path4 = req.path;
  let capturedJsonResponse = void 0;
  const originalResJson = res.json;
  res.json = function(bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };
  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path4.startsWith("/api")) {
      let logLine = `${req.method} ${path4} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }
      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "\u2026";
      }
      log(logLine);
    }
  });
  next();
});
(async () => {
  const server = await registerRoutes(app);
  app.use((err, _req, res, _next) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    res.status(status).json({ message });
    throw err;
  });
  if (app.get("env") === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }
  const port = parseInt(process.env.PORT || "5000", 10);
  const isDevelopment = app.get("env") === "development";
  const host = isDevelopment ? "127.0.0.1" : "0.0.0.0";
  server.listen(
    {
      port,
      host,
      ...isDevelopment ? {} : { reusePort: true }
      // reusePort only for production/Replit
    },
    () => {
      log(`Serving on http://${host}:${port}`);
    }
  );
})();
