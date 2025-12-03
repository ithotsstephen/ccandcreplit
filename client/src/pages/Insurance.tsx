import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { Card, CardContent } from "@/components/ui/card";

export default function Insurance() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section 
        className="pt-24 pb-16 relative bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/assets/Images/Insurance.jpg)' }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="inline-block px-4 py-2 bg-white/20 border border-white/30 rounded-full text-white font-semibold text-sm mb-6">
              Industry Focus
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6" data-testid="heading-insurance">
              Insurance
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto" data-testid="text-insurance-description">
              Driving digital transformation in the insurance industry
            </p>
          </div>
        </div>
      </section>

      {/* Industry Description Section */}
      <section className="py-20 section-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-6 text-center">Insurance Modernization & Innovation</h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              The insurance industry is undergoing rapid digital transformation. From policy administration modernization to claims processing 
              automation, embedded insurance to personalized customer experiences, insurers must adapt quickly to remain competitive in an 
              evolving marketplace shaped by insurtech innovation and changing customer expectations.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Our expertise in insurance architecture and digital transformation enables us to guide carriers, MGAs, and insurance technology 
              providers through successful modernization initiatives. We've helped leading insurance organizations streamline operations, 
              implement modern enterprise architectures, and accelerate the delivery of innovative insurance products and distribution channels.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              From legacy system transformation to cloud migration, API-first architectures to data analytics platforms, we partner with insurers 
              to build flexible, scalable technology foundations that drive operational efficiency, enhance customer engagement, and support 
              sustainable growth in the digital age.
            </p>
          </div>
        </div>
      </section>

      {/* IQ Services Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Our Insurance Solutions</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive IQ services tailored for insurance transformation
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* AdviseIQ Card */}
            <Card className="service-card group hover:shadow-2xl transition-all duration-500 overflow-hidden">
              <div className="relative h-64 overflow-hidden bg-white">
                <img 
                  src={`/assets/Images/AdviseIQ.png`}
                  alt="AdviseIQ - Consulting Services for Insurance"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  data-testid="img-adviseiq"
                />
              </div>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-card-foreground mb-4">AdviseIQ</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Strategic consulting for insurance modernization and enterprise architecture excellence
                </p>
                <button 
                  onClick={() => window.location.href = '/consulting'}
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
                  alt="StratIQ - Visualization Tools for Insurance"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  data-testid="img-stratiq"
                />
              </div>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-card-foreground mb-4">StratIQ</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Advanced visualization tools to map insurance system landscapes and transformation initiatives
                </p>
                <button 
                  onClick={() => window.location.href = '/viztools'}
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
                  alt="ArchIQ - Training Services for Insurance"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  data-testid="img-archiq"
                />
              </div>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-card-foreground mb-4">ArchIQ</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Comprehensive training programs in enterprise architecture and insurance industry best practices
                </p>
                <button 
                  onClick={() => window.location.href = '/training'}
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
        title="Modernize Your Insurance Operations"
        description="Ready to transform your insurance technology landscape and accelerate innovation? Let our experts guide your digital journey."
        buttonText="Start Your Transformation"
      />

      <Footer />
    </div>
  );
}
