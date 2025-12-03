import { useEffect } from "react";
import { useLocation } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function Industry() {
  const [, setLocation] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 section-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Industry <span className="text-primary">Expertise</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Deep industry knowledge across key sectors driving digital transformation and 
              architectural excellence. Our specialized expertise enables targeted solutions 
              that align with industry-specific challenges and opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
              Industry Solutions Coming Soon
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
              We're preparing comprehensive industry-specific solutions and insights. 
              This page will showcase our expertise across financial services, telecommunications, 
              healthcare, retail, and other key sectors.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              <div className="text-center p-6 border border-border rounded-lg">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-university text-primary text-2xl"></i>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Financial Services</h3>
                <p className="text-muted-foreground text-sm">Banking & Insurance</p>
              </div>
              <div className="text-center p-6 border border-border rounded-lg">
                <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-broadcast-tower text-accent text-2xl"></i>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Telecommunications</h3>
                <p className="text-muted-foreground text-sm">Network Modernization</p>
              </div>
              <div className="text-center p-6 border border-border rounded-lg">
                <div className="w-16 h-16 bg-secondary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-heartbeat text-secondary text-2xl"></i>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Healthcare</h3>
                <p className="text-muted-foreground text-sm">Digital Health</p>
              </div>
              <div className="text-center p-6 border border-border rounded-lg">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-shopping-cart text-primary text-2xl"></i>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Retail</h3>
                <p className="text-muted-foreground text-sm">Digital Commerce</p>
              </div>
            </div>
            <button 
              onClick={() => setLocation("/#contact")}
              className="premium-button px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105"
              data-testid="button-contact"
            >
              Contact Us for Industry Solutions
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}