import { useEffect } from "react";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import Navigation from "@/components/Navigation";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
    
    document.title = "Contact Us - CC&C Solutions | Enterprise Architecture Consulting & Training";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Contact CC&C Solutions for enterprise architecture consulting, BIAN implementation, TOGAF training, and digital transformation services. Get in touch with our team of experts today.');
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-background via-section-dark to-section-darker overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(31,127,212,0.1),transparent_50%)]"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-6 group"
            data-testid="link-back-home"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm font-medium">Back to Home</span>
          </Link>
          
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            Let's Transform Together
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Ready to accelerate your digital transformation journey? Get in touch with our team of experts.
          </p>
        </div>
      </section>

      <ContactForm />
      <Footer />
    </div>
  );
}
