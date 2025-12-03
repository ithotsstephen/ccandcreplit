import { useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { useLocation } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function BankingAdviseIQ() {
  const [, setLocation] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    
    const originalTitle = document.title;
    document.title = "Banking Enterprise Architecture Consulting | CC&C Solutions";
    
    let metaDescription = document.querySelector('meta[name="description"]');
    const hadMetaDescription = !!metaDescription;
    const originalDescription = metaDescription?.getAttribute("content") || "";
    if (metaDescription) {
      metaDescription.setAttribute("content", "Transform your banking operations with world-class enterprise architecture consulting. Specializing in BIAN framework implementation, core banking modernization, and digital transformation.");
    } else {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute("name", "description");
      metaDescription.setAttribute("content", "Transform your banking operations with world-class enterprise architecture consulting. Specializing in BIAN framework implementation, core banking modernization, and digital transformation.");
      document.head.appendChild(metaDescription);
    }
    
    let ogTitle = document.querySelector('meta[property="og:title"]');
    const hadOgTitle = !!ogTitle;
    const originalOgTitle = ogTitle?.getAttribute("content") || "";
    if (ogTitle) {
      ogTitle.setAttribute("content", "Banking Enterprise Architecture Consulting | CC&C Solutions");
    } else {
      ogTitle = document.createElement('meta');
      ogTitle.setAttribute("property", "og:title");
      ogTitle.setAttribute("content", "Banking Enterprise Architecture Consulting | CC&C Solutions");
      document.head.appendChild(ogTitle);
    }
    
    let ogDescription = document.querySelector('meta[property="og:description"]');
    const hadOgDescription = !!ogDescription;
    const originalOgDescription = ogDescription?.getAttribute("content") || "";
    if (ogDescription) {
      ogDescription.setAttribute("content", "Transform your banking operations with world-class enterprise architecture consulting. Specializing in BIAN framework implementation, core banking modernization, and digital transformation.");
    } else {
      ogDescription = document.createElement('meta');
      ogDescription.setAttribute("property", "og:description");
      ogDescription.setAttribute("content", "Transform your banking operations with world-class enterprise architecture consulting. Specializing in BIAN framework implementation, core banking modernization, and digital transformation.");
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

  const scrollToContact = () => {
    setLocation("/#contact");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 hero-consulting">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-3 py-1.5 md:px-4 md:py-2 bg-primary/10 border border-primary/20 rounded-full text-primary font-semibold text-xs md:text-sm mb-6">
              Banking • AdviseIQ
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6" data-testid="heading-banking-adviseiq">
              <span className="text-primary">Banking</span> Enterprise Architecture Consulting
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Transform your banking operations with world-class enterprise architecture consulting. 
              Specializing in BIAN framework implementation, core banking modernization, and digital transformation.
            </p>
            <div className="mt-8">
              <button 
                onClick={scrollToContact}
                className="premium-button px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105"
                data-testid="button-start-consultation"
              >
                Start Your Banking Transformation
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Banking-Specific Value Proposition */}
      <section className="py-20 section-darker">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-8">Banking Architecture Excellence</h2>
              <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                The banking industry demands architectural precision, regulatory compliance, and continuous innovation. 
                Our specialized banking consulting combines deep financial services expertise with proven enterprise architecture methodologies.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                We've guided leading banks through complex transformations including core banking modernization, 
                BIAN framework implementation, open banking initiatives, and digital channel expansion.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <i className="fas fa-check-circle text-primary mr-3"></i>
                  <span className="text-foreground">BIAN framework implementation and optimization</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-check-circle text-primary mr-3"></i>
                  <span className="text-foreground">Core banking platform modernization</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-check-circle text-primary mr-3"></i>
                  <span className="text-foreground">Open banking and API architecture</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-check-circle text-primary mr-3"></i>
                  <span className="text-foreground">Regulatory compliance architecture (Basel III, PSD2, etc.)</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1501167786227-4cba60f6d58f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Banking Consulting" 
                className="rounded-xl shadow-2xl"
              />
              <div className="absolute -bottom-8 -left-8 bg-primary text-primary-foreground p-6 rounded-xl shadow-lg">
                <div className="text-2xl font-bold">BIAN</div>
                <div className="text-sm">Framework Experts</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Banking Consulting Services */}
      <section className="py-20 section-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">Banking Consulting Services</h2>
            <p className="text-xl text-muted-foreground">
              Comprehensive transformation solutions for financial institutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <Card className="premium-card p-8">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center mb-6">
                  <i className="fas fa-university text-2xl text-primary-foreground"></i>
                </div>
                <h3 className="text-2xl font-bold text-card-foreground mb-6">BIAN Implementation</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  As a BIAN-accredited organization with global delivery experience, we guide banks through successful 
                  BIAN framework adoption, from initial assessment to full implementation.
                </p>
                
                <h4 className="text-lg font-semibold text-card-foreground mb-4">Our Approach:</h4>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <i className="fas fa-arrow-right text-primary mt-1 mr-3"></i>
                    <span className="text-muted-foreground">BIAN maturity assessment and roadmap development</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-arrow-right text-primary mt-1 mr-3"></i>
                    <span className="text-muted-foreground">Service domain mapping and capability alignment</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-arrow-right text-primary mt-1 mr-3"></i>
                    <span className="text-muted-foreground">API design and implementation guidance</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="premium-card p-8">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-accent rounded-lg flex items-center justify-center mb-6">
                  <i className="fas fa-sync-alt text-2xl text-accent-foreground"></i>
                </div>
                <h3 className="text-2xl font-bold text-card-foreground mb-6">Core Banking Modernization</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Modernize legacy core banking systems with strategic architecture planning that balances 
                  innovation with operational stability and regulatory compliance.
                </p>
                
                <h4 className="text-lg font-semibold text-card-foreground mb-4">Key Focus Areas:</h4>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <i className="fas fa-arrow-right text-accent mt-1 mr-3"></i>
                    <span className="text-muted-foreground">Legacy system assessment and rationalization</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-arrow-right text-accent mt-1 mr-3"></i>
                    <span className="text-muted-foreground">Cloud-native banking architecture</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-arrow-right text-accent mt-1 mr-3"></i>
                    <span className="text-muted-foreground">Microservices and API-first design</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Banking Use Cases */}
      <section className="py-20 section-darker">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">Banking Transformation Use Cases</h2>
            <p className="text-xl text-muted-foreground">
              Real-world banking challenges we solve
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Open Banking",
                description: "Design and implement open banking architectures compliant with PSD2 and other regulations",
                icon: "fas fa-lock-open"
              },
              {
                title: "Digital Channels",
                description: "Architect omnichannel banking experiences across mobile, web, and emerging platforms",
                icon: "fas fa-mobile-alt"
              },
              {
                title: "Payment Systems",
                description: "Modernize payment processing with real-time capabilities and enhanced security",
                icon: "fas fa-credit-card"
              },
              {
                title: "Risk & Compliance",
                description: "Build architecture frameworks that support regulatory compliance and risk management",
                icon: "fas fa-shield-alt"
              },
              {
                title: "Data Architecture",
                description: "Create unified data architectures for analytics, reporting, and regulatory requirements",
                icon: "fas fa-database"
              },
              {
                title: "Cloud Migration",
                description: "Strategic cloud adoption for banking workloads with security and compliance focus",
                icon: "fas fa-cloud"
              }
            ].map((useCase, index) => (
              <Card key={index} className="service-card p-6">
                <CardContent className="p-0">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                    <i className={`${useCase.icon} text-xl text-primary-foreground`}></i>
                  </div>
                  <h4 className="text-lg font-bold text-card-foreground mb-3">{useCase.title}</h4>
                  <p className="text-muted-foreground text-sm">{useCase.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 section-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Ready to Transform Your Banking Architecture?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join leading banks worldwide who trust CC&C for their most critical architecture transformations. 
            Let's discuss how we can accelerate your digital banking journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={scrollToContact}
              className="premium-button px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105"
              data-testid="button-schedule-consultation"
            >
              Schedule Consultation
            </button>
            <button 
              onClick={() => setLocation('/banking')}
              className="border-2 border-primary text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary hover:text-primary-foreground transition-all"
              data-testid="button-view-banking-solutions"
            >
              View All Banking Solutions
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
