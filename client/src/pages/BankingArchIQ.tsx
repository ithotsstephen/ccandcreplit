import { useEffect } from "react";
import { useLocation } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function BankingArchIQ() {
  const [, setLocation] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    
    const originalTitle = document.title;
    document.title = "Banking Architecture Training | ArchIQ | CC&C Solutions";
    
    let metaDescription = document.querySelector('meta[name="description"]');
    const hadMetaDescription = !!metaDescription;
    const originalDescription = metaDescription?.getAttribute("content") || "";
    if (metaDescription) {
      metaDescription.setAttribute("content", "Comprehensive banking architecture training programs including BIAN certification, TOGAF for banking, and specialized financial services architecture courses. Join 5,000+ banking professionals worldwide.");
    } else {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute("name", "description");
      metaDescription.setAttribute("content", "Comprehensive banking architecture training programs including BIAN certification, TOGAF for banking, and specialized financial services architecture courses. Join 5,000+ banking professionals worldwide.");
      document.head.appendChild(metaDescription);
    }
    
    let ogTitle = document.querySelector('meta[property="og:title"]');
    const hadOgTitle = !!ogTitle;
    const originalOgTitle = ogTitle?.getAttribute("content") || "";
    if (ogTitle) {
      ogTitle.setAttribute("content", "Banking Architecture Training | ArchIQ | CC&C Solutions");
    } else {
      ogTitle = document.createElement('meta');
      ogTitle.setAttribute("property", "og:title");
      ogTitle.setAttribute("content", "Banking Architecture Training | ArchIQ | CC&C Solutions");
      document.head.appendChild(ogTitle);
    }
    
    let ogDescription = document.querySelector('meta[property="og:description"]');
    const hadOgDescription = !!ogDescription;
    const originalOgDescription = ogDescription?.getAttribute("content") || "";
    if (ogDescription) {
      ogDescription.setAttribute("content", "Comprehensive banking architecture training programs including BIAN certification, TOGAF for banking, and specialized financial services architecture courses. Join 5,000+ banking professionals worldwide.");
    } else {
      ogDescription = document.createElement('meta');
      ogDescription.setAttribute("property", "og:description");
      ogDescription.setAttribute("content", "Comprehensive banking architecture training programs including BIAN certification, TOGAF for banking, and specialized financial services architecture courses. Join 5,000+ banking professionals worldwide.");
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
      <section className="pt-24 pb-16 section-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-3 py-1.5 md:px-4 md:py-2 bg-primary/10 border border-primary/20 rounded-full text-primary font-semibold text-xs md:text-sm mb-6">
              Banking • ArchIQ
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6" data-testid="heading-banking-archiq">
              Banking <span className="text-primary">Architecture Training</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Comprehensive banking architecture training programs including BIAN certification, 
              TOGAF for banking, and specialized financial services architecture courses.
            </p>
          </div>
        </div>
      </section>

      {/* Training Overview */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12 mb-20">
            <div className="text-center">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-university text-3xl text-primary-foreground"></i>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">BIAN Accredited</h3>
              <p className="text-muted-foreground">Only BIAN-accredited training organization with global delivery capabilities</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-users text-3xl text-accent-foreground"></i>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">5,000+ Banking Professionals</h3>
              <p className="text-muted-foreground">Trained banking architects and technology leaders worldwide</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-award text-3xl text-secondary-foreground"></i>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Industry Recognition</h3>
              <p className="text-muted-foreground">BIAN award winner and recognized by leading financial institutions</p>
            </div>
          </div>
        </div>
      </section>

      {/* Banking Training Programs */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">Banking Architecture Training Programs</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Specialized training designed for banking professionals
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="service-card p-8">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center mb-6">
                  <i className="fas fa-university text-2xl text-primary-foreground"></i>
                </div>
                <h3 className="text-2xl font-bold text-card-foreground mb-6">BIAN Foundation</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Official BIAN Foundation training providing comprehensive understanding of the Banking Industry Architecture Network 
                  framework, service domains, and implementation best practices.
                </p>
                
                <h4 className="text-lg font-semibold text-card-foreground mb-4">What You'll Learn:</h4>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <i className="fas fa-check text-primary mt-1 mr-3"></i>
                    <span className="text-muted-foreground">BIAN framework fundamentals and architecture principles</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-primary mt-1 mr-3"></i>
                    <span className="text-muted-foreground">Service domains, capabilities, and control records</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-primary mt-1 mr-3"></i>
                    <span className="text-muted-foreground">API design and implementation patterns</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-primary mt-1 mr-3"></i>
                    <span className="text-muted-foreground">Real-world banking transformation case studies</span>
                  </li>
                </ul>
                
                <button 
                  onClick={() => setLocation('/services/bian-foundation')}
                  className="text-primary font-semibold hover:underline"
                  data-testid="button-learn-bian"
                >
                  Learn More About BIAN Training →
                </button>
              </CardContent>
            </Card>

            <Card className="service-card p-8">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-accent rounded-lg flex items-center justify-center mb-6">
                  <i className="fas fa-graduation-cap text-2xl text-accent-foreground"></i>
                </div>
                <h3 className="text-2xl font-bold text-card-foreground mb-6">TOGAF® for Banking</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  TOGAF® certification training customized for banking and financial services, 
                  combining standard enterprise architecture with banking-specific use cases and examples.
                </p>
                
                <h4 className="text-lg font-semibold text-card-foreground mb-4">Banking-Specific Focus:</h4>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <i className="fas fa-check text-accent mt-1 mr-3"></i>
                    <span className="text-muted-foreground">TOGAF ADM applied to banking transformations</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-accent mt-1 mr-3"></i>
                    <span className="text-muted-foreground">Core banking modernization architecture patterns</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-accent mt-1 mr-3"></i>
                    <span className="text-muted-foreground">Regulatory compliance and risk architecture</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-accent mt-1 mr-3"></i>
                    <span className="text-muted-foreground">Digital banking and open banking architectures</span>
                  </li>
                </ul>
                
                <button 
                  onClick={() => setLocation('/services/togaf-training')}
                  className="text-accent font-semibold hover:underline"
                  data-testid="button-learn-togaf"
                >
                  Learn More About TOGAF Training →
                </button>
              </CardContent>
            </Card>

            <Card className="service-card p-8">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-secondary rounded-lg flex items-center justify-center mb-6">
                  <i className="fas fa-cogs text-2xl text-secondary-foreground"></i>
                </div>
                <h3 className="text-2xl font-bold text-card-foreground mb-6">IT4IT™ for Banking</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  IT4IT™ training focused on banking IT operating models, helping financial institutions optimize 
                  their IT value chain from strategy to operations.
                </p>
                
                <h4 className="text-lg font-semibold text-card-foreground mb-4">Key Topics:</h4>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <i className="fas fa-check text-secondary mt-1 mr-3"></i>
                    <span className="text-muted-foreground">IT4IT reference architecture for banking</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-secondary mt-1 mr-3"></i>
                    <span className="text-muted-foreground">DevOps and agile delivery in regulated environments</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-secondary mt-1 mr-3"></i>
                    <span className="text-muted-foreground">Service management and operational excellence</span>
                  </li>
                </ul>
                
                <button 
                  onClick={() => setLocation('/services/it4it-management')}
                  className="text-secondary font-semibold hover:underline"
                  data-testid="button-learn-it4it"
                >
                  Learn More About IT4IT Training →
                </button>
              </CardContent>
            </Card>

            <Card className="service-card p-8">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center mb-6">
                  <i className="fas fa-project-diagram text-2xl text-primary-foreground"></i>
                </div>
                <h3 className="text-2xl font-bold text-card-foreground mb-6">Banking Architecture Workshops</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Customized workshops covering specific banking architecture topics including open banking, 
                  payments modernization, cloud adoption, and regulatory compliance architecture.
                </p>
                
                <h4 className="text-lg font-semibold text-card-foreground mb-4">Workshop Topics:</h4>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <i className="fas fa-check text-primary mt-1 mr-3"></i>
                    <span className="text-muted-foreground">Open banking and API strategy</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-primary mt-1 mr-3"></i>
                    <span className="text-muted-foreground">Payment systems modernization</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-primary mt-1 mr-3"></i>
                    <span className="text-muted-foreground">Cloud-native banking architecture</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-primary mt-1 mr-3"></i>
                    <span className="text-muted-foreground">Data architecture for banking analytics</span>
                  </li>
                </ul>
                
                <button 
                  onClick={() => setLocation("/#contact")}
                  className="text-primary font-semibold hover:underline"
                  data-testid="button-inquire-workshops"
                >
                  Inquire About Custom Workshops →
                </button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Banking Training */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Why Choose CC&C for Banking Training?</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-certificate text-2xl text-primary"></i>
              </div>
              <h4 className="font-bold text-foreground mb-2">BIAN Accreditation</h4>
              <p className="text-sm text-muted-foreground">Only BIAN-accredited global training partner</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-building text-2xl text-accent"></i>
              </div>
              <h4 className="font-bold text-foreground mb-2">Banking Experience</h4>
              <p className="text-sm text-muted-foreground">20+ years working with leading global banks</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-hands-helping text-2xl text-secondary"></i>
              </div>
              <h4 className="font-bold text-foreground mb-2">Practical Focus</h4>
              <p className="text-sm text-muted-foreground">Real-world banking case studies and examples</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-headset text-2xl text-primary"></i>
              </div>
              <h4 className="font-bold text-foreground mb-2">Ongoing Support</h4>
              <p className="text-sm text-muted-foreground">Post-training mentoring and consultation</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Build Banking Architecture Expertise?</h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-3xl mx-auto">
            Equip your banking teams with world-class architecture skills. Join thousands of banking professionals 
            who have advanced their careers with our specialized training programs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => setLocation("/#contact")}
              className="premium-button px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105"
              data-testid="button-enroll-training"
            >
              Enroll in Training
            </button>
            <button 
              onClick={() => setLocation('/banking')}
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-primary transition-all"
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
