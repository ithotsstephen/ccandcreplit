import { useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { useLocation } from "wouter";
import Navigation from "@/components/Navigation";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function BankingStratIQ() {
  const [, setLocation] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    
    const originalTitle = document.title;
    document.title = "Banking Architecture Visualization | StratIQ | CC&C Solutions";
    
    let metaDescription = document.querySelector('meta[name="description"]');
    const hadMetaDescription = !!metaDescription;
    const originalDescription = metaDescription?.getAttribute("content") || "";
    if (metaDescription) {
      metaDescription.setAttribute("content", "Transform complex banking architectures into clear, actionable visual insights with specialized tools for financial services including BIAN architecture maps and core banking visualization.");
    } else {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute("name", "description");
      metaDescription.setAttribute("content", "Transform complex banking architectures into clear, actionable visual insights with specialized tools for financial services including BIAN architecture maps and core banking visualization.");
      document.head.appendChild(metaDescription);
    }
    
    let ogTitle = document.querySelector('meta[property="og:title"]');
    const hadOgTitle = !!ogTitle;
    const originalOgTitle = ogTitle?.getAttribute("content") || "";
    if (ogTitle) {
      ogTitle.setAttribute("content", "Banking Architecture Visualization | StratIQ | CC&C Solutions");
    } else {
      ogTitle = document.createElement('meta');
      ogTitle.setAttribute("property", "og:title");
      ogTitle.setAttribute("content", "Banking Architecture Visualization | StratIQ | CC&C Solutions");
      document.head.appendChild(ogTitle);
    }
    
    let ogDescription = document.querySelector('meta[property="og:description"]');
    const hadOgDescription = !!ogDescription;
    const originalOgDescription = ogDescription?.getAttribute("content") || "";
    if (ogDescription) {
      ogDescription.setAttribute("content", "Transform complex banking architectures into clear, actionable visual insights with specialized tools for financial services including BIAN architecture maps and core banking visualization.");
    } else {
      ogDescription = document.createElement('meta');
      ogDescription.setAttribute("property", "og:description");
      ogDescription.setAttribute("content", "Transform complex banking architectures into clear, actionable visual insights with specialized tools for financial services including BIAN architecture maps and core banking visualization.");
      document.head.appendChild(ogDescription);
    }
    
    return () => {
      document.title = originalTitle;
      if (hadMetaDescription) {
        metaDescription?.setAttribute("content", originalDescription);
      } else {
        metaDescription?.remove();
      }
      if (hadOgTitle) {
        ogTitle?.setAttribute("content", originalOgTitle);
      } else {
        ogTitle?.remove();
      }
      if (hadOgDescription) {
        ogDescription?.setAttribute("content", originalOgDescription);
      } else {
        ogDescription?.remove();
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-background via-muted/20 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-block px-3 py-1.5 md:px-4 md:py-2 bg-primary/10 border border-primary/20 rounded-full text-primary font-semibold text-xs md:text-sm mb-6">
              Banking • StratIQ
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6" data-testid="heading-banking-stratiq">
              Banking Architecture <span className="text-primary">Visualization</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-banking-stratiq-description">
              Transform complex banking architectures into clear, actionable visual insights with specialized tools for financial services
            </p>
          </div>
        </div>
      </section>

      {/* Product Description Section */}
      <section className="py-20 section-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-6 text-center">Visualize Banking Transformation</h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Banking architecture visualization requires deep understanding of complex financial systems, regulatory requirements, 
              and the intricate relationships between core banking platforms, payment systems, channels, and supporting infrastructure. 
              Our specialized visualization tools bring clarity to this complexity.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Leverage our advanced visualization capabilities to map BIAN service domains, visualize core banking modernization roadmaps, 
              and communicate complex architectural decisions to stakeholders across technology and business teams.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              From strategic architecture landscapes to detailed capability maps and transformation roadmaps, we enable banks to 
              see the big picture while maintaining detailed visibility into critical architectural components.
            </p>
          </div>
        </div>
      </section>

      {/* Banking Visualization Capabilities */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Banking Visualization Capabilities</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Specialized visualization tools for financial services architecture
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "BIAN Architecture Maps",
                description: "Visualize BIAN service domains, capabilities, and their relationships across your banking landscape",
                icon: "fas fa-sitemap"
              },
              {
                title: "Core Banking Views",
                description: "Map core banking platform architecture, integration points, and modernization pathways",
                icon: "fas fa-university"
              },
              {
                title: "Payment System Flows",
                description: "Diagram payment processing flows, real-time payment capabilities, and settlement architecture",
                icon: "fas fa-exchange-alt"
              },
              {
                title: "Channel Architecture",
                description: "Visualize omnichannel banking architecture across mobile, web, branch, and ATM systems",
                icon: "fas fa-mobile-alt"
              },
              {
                title: "Data Architecture",
                description: "Map data flows, data lakes, analytics platforms, and regulatory reporting architecture",
                icon: "fas fa-database"
              },
              {
                title: "Transformation Roadmaps",
                description: "Create visual roadmaps for digital transformation, cloud migration, and technology modernization",
                icon: "fas fa-route"
              },
              {
                title: "Security & Compliance",
                description: "Diagram security architecture, compliance frameworks, and risk management systems",
                icon: "fas fa-shield-alt"
              },
              {
                title: "Integration Landscapes",
                description: "Visualize API architecture, middleware platforms, and integration patterns",
                icon: "fas fa-project-diagram"
              },
              {
                title: "Technology Stack Views",
                description: "Map technology portfolios, application landscapes, and infrastructure architecture",
                icon: "fas fa-layer-group"
              }
            ].map((capability, index) => (
              <Card key={index} className="service-card p-6">
                <CardContent className="p-0">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                    <i className={`${capability.icon} text-xl text-primary-foreground`}></i>
                  </div>
                  <h4 className="text-lg font-bold text-card-foreground mb-3">{capability.title}</h4>
                  <p className="text-muted-foreground text-sm">{capability.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Banking Use Cases */}
      <section className="py-20 section-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-8">Visualization for Banking Leaders</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Our visualization tools serve multiple stakeholder groups across banking organizations, 
                from C-suite executives making strategic decisions to architects planning detailed implementations.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <i className="fas fa-users-cog text-primary text-xl"></i>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-2">Executive Dashboards</h4>
                    <p className="text-muted-foreground text-sm">
                      High-level architecture views and transformation progress for board-level communication
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <i className="fas fa-drafting-compass text-accent text-xl"></i>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-2">Architecture Planning</h4>
                    <p className="text-muted-foreground text-sm">
                      Detailed technical views for architects and engineers planning implementations
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <i className="fas fa-clipboard-check text-secondary text-xl"></i>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-2">Compliance Views</h4>
                    <p className="text-muted-foreground text-sm">
                      Regulatory compliance visualization for audit, risk, and compliance teams
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Banking Architecture Visualization" 
                className="rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <CTASection 
        title="Visualize Your Banking Architecture"
        description="Ready to transform how your organization views and manages banking architectures? Let's discuss your visualization needs."
        buttonText="Talk to Our Team"
      />

      <Footer />
    </div>
  );
}
