import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { Card, CardContent } from "@/components/ui/card";

export default function Manufacturing() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section 
        className="pt-24 pb-16 relative bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/assets/Images/Manufacturing.jpg)' }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="inline-block px-4 py-2 bg-white/20 border border-white/30 rounded-full text-white font-semibold text-sm mb-6">
              Industry Focus
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6" data-testid="heading-manufacturing">
              Manufacturing
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto" data-testid="text-manufacturing-description">
              Powering Industry 4.0 transformation through enterprise architecture
            </p>
          </div>
        </div>
      </section>

      {/* Industry Description Section */}
      <section className="py-20 section-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-6 text-center">Smart Manufacturing & Digital Transformation</h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Manufacturing is experiencing a fundamental transformation driven by Industry 4.0 technologies. From smart factories and IoT-enabled 
              production lines to predictive maintenance and digital twins, manufacturers must modernize their technology foundations to remain 
              competitive in an increasingly connected, data-driven, and automated industrial landscape.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Our expertise in manufacturing enterprise architecture and digital transformation enables us to guide organizations through successful 
              modernization initiatives. We've helped leading manufacturers implement modern architecture frameworks, optimize supply chain systems, 
              and leverage emerging technologies to enhance operational efficiency, product quality, and time-to-market.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              From MES and ERP integration to cloud-enabled manufacturing platforms, data analytics to advanced automation strategies, we partner 
              with manufacturers to build resilient, scalable architectures that support innovation, improve agility, and drive sustainable growth 
              in the era of smart manufacturing and digital operations.
            </p>
          </div>
        </div>
      </section>

      {/* IQ Services Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Our Manufacturing Solutions</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive IQ services tailored for manufacturing transformation
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* AdviseIQ Card */}
            <Card className="service-card group hover:shadow-2xl transition-all duration-500 overflow-hidden">
              <div className="relative h-64 overflow-hidden bg-white">
                <img 
                  src={`/assets/Images/AdviseIQ.png`}
                  alt="AdviseIQ - Consulting Services for Manufacturing"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  data-testid="img-adviseiq"
                />
              </div>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-card-foreground mb-4">AdviseIQ</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Strategic consulting for manufacturing modernization and Industry 4.0 transformation
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
                  alt="StratIQ - Visualization Tools for Manufacturing"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  data-testid="img-stratiq"
                />
              </div>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-card-foreground mb-4">StratIQ</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Advanced visualization tools to map manufacturing systems and smart factory architectures
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
                  alt="ArchIQ - Training Services for Manufacturing"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  data-testid="img-archiq"
                />
              </div>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-card-foreground mb-4">ArchIQ</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Comprehensive training programs in enterprise architecture and manufacturing best practices
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
        title="Accelerate Your Industry 4.0 Journey"
        description="Ready to build smart manufacturing capabilities and drive digital transformation? Partner with our enterprise architecture experts."
        buttonText="Explore Solutions"
      />

      <Footer />
    </div>
  );
}
