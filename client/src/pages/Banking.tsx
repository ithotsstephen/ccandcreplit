import { useEffect } from "react";
import { useLocation } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { Card, CardContent } from "@/components/ui/card";

export default function Banking() {
  const [, setLocation] = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section 
        className="pt-24 pb-16 relative bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/assets/Images/Banking.jpg)' }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="inline-block px-4 py-2 bg-white/20 border border-white/30 rounded-full text-white font-semibold text-sm mb-6">
              Industry Focus
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6" data-testid="heading-banking">
              Banking
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto" data-testid="text-banking-description">
              Transforming financial services through world-class enterprise architecture
            </p>
          </div>
        </div>
      </section>

      {/* Industry Description Section */}
      <section className="py-20 section-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-6 text-center">Banking Innovation & Modernization</h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              The banking industry faces unprecedented transformation challenges. From core banking modernization to open banking initiatives, 
              digital channel expansion to regulatory compliance, financial institutions must navigate complex technological landscapes while 
              maintaining operational excellence and customer trust.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Our deep expertise in banking architecture, combined with BIAN framework mastery and proven methodologies, enables us to guide 
              banks through successful digital transformations. We've helped leading financial institutions across the globe modernize their 
              core systems, implement service-oriented architectures, and accelerate time-to-market for new banking products and services.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              From strategic planning to hands-on implementation, we partner with banks to build resilient, scalable architectures that support 
              innovation while managing risk, ensuring compliance, and delivering exceptional customer experiences in an increasingly digital world.
            </p>
          </div>
        </div>
      </section>

      {/* IQ Services Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Our Banking Solutions</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive IQ services tailored for banking transformation
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* AdviseIQ Card */}
            <Card className="service-card group hover:shadow-2xl transition-all duration-500 overflow-hidden">
              <div className="relative h-64 overflow-hidden bg-white">
                <img 
                  src={`/assets/Images/AdviseIQ.png`}
                  alt="AdviseIQ - Consulting Services for Banking"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  data-testid="img-adviseiq"
                />
              </div>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-card-foreground mb-4">AdviseIQ</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Strategic consulting for banking transformation, BIAN adoption, and enterprise architecture optimization
                </p>
                <button 
                  onClick={() => setLocation('/banking/adviseiq')}
                  className="text-primary font-semibold flex items-center gap-2 hover:gap-3 transition-all"
                  data-testid="button-learn-adviseiq"
                >
                  Learn More <i className="fas fa-arrow-right"></i>
                </button>
              </CardContent>
            </Card>

            {/* StratIQ Card */}
            <Card className="service-card group hover:shadow-2xl transition-all duration-500 overflow-hidden">
              <div className="relative h-64 overflow-hidden bg-white">
                <img 
                  src={`/assets/Images/StratIQ.png`}
                  alt="StratIQ - Visualization Tools for Banking"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  data-testid="img-stratiq"
                />
              </div>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-card-foreground mb-4">StratIQ</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Advanced visualization tools to map banking architectures and transformation roadmaps
                </p>
                <button 
                  onClick={() => setLocation('/banking/stratiq')}
                  className="text-accent font-semibold flex items-center gap-2 hover:gap-3 transition-all"
                  data-testid="button-learn-stratiq"
                >
                  Learn More <i className="fas fa-arrow-right"></i>
                </button>
              </CardContent>
            </Card>

            {/* ArchIQ Card */}
            <Card className="service-card group hover:shadow-2xl transition-all duration-500 overflow-hidden">
              <div className="relative h-64 overflow-hidden bg-white">
                <img 
                  src={`/assets/Images/ArchIQ.png`}
                  alt="ArchIQ - Training Services for Banking"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  data-testid="img-archiq"
                />
              </div>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-card-foreground mb-4">ArchIQ</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Comprehensive training programs in BIAN, TOGAF, and banking architecture best practices
                </p>
                <button 
                  onClick={() => setLocation('/banking/archiq')}
                  className="text-secondary font-semibold flex items-center gap-2 hover:gap-3 transition-all"
                  data-testid="button-learn-archiq"
                >
                  Learn More <i className="fas fa-arrow-right"></i>
                </button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <CTASection 
        title="Transform Your Banking Architecture"
        description="Ready to modernize your core banking systems and accelerate digital transformation? Partner with our BIAN-certified experts."
        buttonText="Start Your Journey"
      />

      <Footer />
    </div>
  );
}
