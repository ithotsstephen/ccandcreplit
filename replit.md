# CC&C Solutions Corporate Website

## Overview
CC&C Solutions is a full-stack web application for a consulting firm specializing in enterprise architecture training and digital transformation. It features a React frontend, a CMS, an AI chatbot, and business functionalities like contact forms and service showcases. The website aims to showcase CC&C Solutions' expertise, provide a platform for client interaction, and manage content efficiently.

## User Preferences
Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript (Vite build tool)
- **UI Library**: Shadcn/ui (built on Radix UI)
- **Styling**: Tailwind CSS
- **State Management**: TanStack Query (server state)
- **Routing**: Wouter
- **Form Handling**: React Hook Form with Zod validation
- **Mobile Responsiveness**: Optimized with responsive carousels, image zoom, and pill sizing.

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript
- **API Design**: RESTful API
- **Authentication**: Replit Auth with OpenID Connect
- **Session Management**: Express sessions with PostgreSQL store
- **Error Handling**: Centralized error handling

### Database Design
- **Primary Database**: PostgreSQL with Drizzle ORM
- **Schema**: Comprehensive schema for users, content, services, etc.
- **Migrations**: Drizzle Kit
- **Connection**: Neon serverless PostgreSQL

### Content Management System
- **Admin Interface**: Full CMS for all website content
- **Content Types**: Dynamic management for services, case studies, testimonials, blog posts, FAQs
- **Access**: Admin-only
- **Real-time Updates**: React Query invalidation

### AI Integration
- **Chatbot**: OpenAI GPT-5
- **Knowledge Base**: Pre-configured with company info
- **Session Management**: Persistent chat sessions

### Email System
- **SMTP**: Nodemailer for notifications
- **Flow**: Dual notifications (admin and customer auto-reply)
- **Templates**: HTML email templates

### Security & Authentication
- **Authentication Provider**: Replit Auth (OpenID Connect)
- **Session Storage**: Secure PostgreSQL backend
- **Protection**: CSRF protection
- **Authorization**: Role-based (admin)
- **Validation**: Zod schema for inputs

### Development & Deployment
- **Build System**: Vite (frontend), esbuild (backend)
- **Environment**: Separate dev and prod configurations
- **Asset Management**: Replit Object Storage for all assets (public and private)
- **Production Domain**: www.ccandcsolutions.com (Hostinger)
- **Development Workflow**: Develop on Replit → Push to GitHub → Auto-deploy to Hostinger
- **Deployment**:
  - **Development**: Deployed on Replit with native integrations
  - **Production (Hostinger)**: 
    - Domain: www.ccandcsolutions.com
    - Auto-deployment from GitHub main branch
    - See `HOSTINGER_DEPLOYMENT.md` for setup guide
    - See `DEVELOPMENT_WORKFLOW.md` for Replit → GitHub → Hostinger workflow
  - **GitHub Integration**: See `GITHUB_SETUP.md` for repository setup
  - **Required Changes for External Hosting**:
    1. Replace Replit Auth with alternative (email/password or OAuth)
    2. Migrate from Replit Object Storage to file system or external storage
    3. Configure all environment variables on hosting platform
    4. Ensure Node.js 20.x+ support
    5. Set up SSL certificate
  - **Build Command**: `npm run build` (creates `/dist` folder)
  - **Start Command**: `npm start` (runs `dist/index.js`)
  - **Asset Migration**: Manual one-time transfer from Replit Object Storage to Hostinger

### Website Sitemap & Navigation Structure
- **Main Navigation**: What We Do (ArchIQ, AdviseIQ, StratIQ, BIAN), Industries We Serve (Banking, Insurance, Manufacturing), About, BIAN SIG, Insights, Events, Contact.
- **Page Structure**: Includes dedicated pages for industries (e.g., /banking with banking-specific IQ Services), general service pages (e.g., /training for ArchIQ), and foundation training sub-pages.
- **Route Redirects**: `/stratiq` to `/viztools`, `/industry` to `/banking`.

## External Dependencies

### Cloud Services
- **Neon Database**: Serverless PostgreSQL
- **OpenAI API**: GPT-5 for AI chatbot
- **SMTP Service**: Email delivery (e.g., Gmail)
- **Replit Object Storage**: Cloud storage for assets

### Core Libraries
- **@neondatabase/serverless**: PostgreSQL connection
- **drizzle-orm**: ORM for database operations
- **@tanstack/react-query**: Server state management
- **openai**: OpenAI API client
- **nodemailer**: Email sending
- **express-session**: Session management
- **connect-pg-simple**: PostgreSQL session store

### UI Dependencies
- **@radix-ui/react-***: Accessible UI components
- **tailwindcss**: CSS framework
- **class-variance-authority**: Component variants
- **lucide-react**: Icon library
- **wouter**: Client-side routing

### Development Dependencies
- **vite**: Build tool
- **typescript**: Type safety
- **tsx**: TypeScript execution
- **esbuild**: JavaScript/TypeScript bundler