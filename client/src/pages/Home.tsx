import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import BlogSection from "@/components/BlogSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import AnimatedCounter from "@/components/AnimatedCounter";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      
      {/* Success Metrics */}
      <section className="py-20 section-darker">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">20 Years of Excellence</h2>
            <p className="text-xl text-muted-foreground">Delivering measurable results across the globe</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center" data-testid="metric-individuals-trained">
              <AnimatedCounter 
                end={10000} 
                suffix="+" 
                className="text-4xl md:text-5xl font-bold text-[hsl(210,100%,60%)] mb-2"
                duration={2500}
              />
              <div className="text-muted-foreground">Individuals Trained</div>
            </div>
            <div className="text-center" data-testid="metric-global-clients">
              <AnimatedCounter 
                end={250} 
                suffix="+" 
                className="text-4xl md:text-5xl font-bold text-[hsl(210,100%,60%)] mb-2"
                duration={2000}
              />
              <div className="text-muted-foreground">Global Clients</div>
            </div>
            <div className="text-center" data-testid="metric-years-experience">
              <AnimatedCounter 
                end={20} 
                suffix="+" 
                className="text-4xl md:text-5xl font-bold text-[hsl(210,100%,60%)] mb-2"
                duration={1500}
              />
              <div className="text-muted-foreground">Years Experience</div>
            </div>
            <div className="text-center" data-testid="metric-countries-served">
              <AnimatedCounter 
                end={25} 
                suffix="+" 
                className="text-4xl md:text-5xl font-bold text-[hsl(210,100%,60%)] mb-2"
                duration={1800}
              />
              <div className="text-muted-foreground">Countries Served</div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership in BIAN */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Leadership in BIAN</h2>
            <p className="text-xl text-muted-foreground">Pioneering banking architecture excellence worldwide</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center" data-testid="metric-bian-trained">
              <AnimatedCounter 
                end={1500} 
                suffix="+" 
                className="text-4xl md:text-5xl font-bold text-[hsl(210,100%,60%)] mb-2"
                duration={2500}
              />
              <div className="text-muted-foreground">BIAN Individuals Trained</div>
            </div>
            <div className="text-center" data-testid="metric-bian-customers">
              <AnimatedCounter 
                end={20} 
                suffix="+" 
                className="text-4xl md:text-5xl font-bold text-[hsl(210,100%,60%)] mb-2"
                duration={2000}
              />
              <div className="text-muted-foreground">Banking BIAN Customers</div>
            </div>
            <div className="text-center" data-testid="metric-bian-experience">
              <AnimatedCounter 
                end={6} 
                suffix="+" 
                className="text-4xl md:text-5xl font-bold text-[hsl(210,100%,60%)] mb-2"
                duration={1500}
              />
              <div className="text-muted-foreground">Years of BIAN Experience</div>
            </div>
          </div>

          {/* BIAN Award Image */}
          <div className="mt-20 flex justify-center">
            <img 
              src="/assets/Images/BiAN AWARD.jpg" 
              alt="BIAN Award" 
              width={600}
              height={337}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>
      
      <ServicesSection />
      
      {/* Market Success & Recognition - Redesigned */}
      <section className="py-24 section-dark relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Enhanced Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-6 py-3 bg-primary/10 border border-primary/20 rounded-full text-primary font-medium text-sm mb-6">
              <i className="fas fa-star mr-2"></i>
              Industry Leadership
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-8 leading-tight">
              Market Success &<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-secondary">Recognition</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Proven excellence through industry-leading achievements, prestigious partnerships, 
              and global recognition that sets us apart in the enterprise architecture space
            </p>
          </div>

          {/* Achievement Grid */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* BIAN Award */}
            <div className="premium-card group hover:scale-105 transition-all duration-500 p-8 text-center relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-secondary/20 to-transparent rounded-bl-full"></div>
              <div className="relative z-10">
                <div className="w-24 h-24 bg-gradient-to-br from-secondary to-secondary/80 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-secondary/30 group-hover:shadow-2xl transition-all duration-500">
                  <i className="fas fa-trophy text-4xl text-secondary-foreground"></i>
                </div>
                <div className="inline-flex items-center px-3 py-1 bg-secondary/10 border border-secondary/20 rounded-full text-secondary font-medium text-xs mb-4">
                  <i className="fas fa-award mr-1"></i>
                  Award Winner
                </div>
                <h3 className="text-2xl font-bold text-card-foreground mb-4">BIAN Excellence</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Prestigious BIAN award for Service Partner & Transformation, recognizing our unparalleled 
                  excellence in banking architecture implementation and industry innovation.
                </p>
                <div className="flex items-center justify-center space-x-4 text-sm text-secondary">
                  <div className="flex items-center">
                    <i className="fas fa-calendar mr-1"></i>
                    2024
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-building mr-1"></i>
                    Banking
                  </div>
                </div>
              </div>
            </div>

            {/* Global Accreditation */}
            <div className="premium-card group hover:scale-105 transition-all duration-500 p-8 text-center relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-accent/20 to-transparent rounded-bl-full"></div>
              <div className="relative z-10">
                <div className="w-24 h-24 bg-gradient-to-br from-accent to-accent/80 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-accent/30 group-hover:shadow-2xl transition-all duration-500">
                  <i className="fas fa-certificate text-4xl text-accent-foreground"></i>
                </div>
                <div className="inline-flex items-center px-3 py-1 bg-accent/10 border border-accent/20 rounded-full text-accent font-medium text-xs mb-4">
                  <i className="fas fa-shield-check mr-1"></i>
                  Certified Partner
                </div>
                <h3 className="text-2xl font-bold text-card-foreground mb-4">Global Accreditation</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  TOGAF® Open Group certified and BIAN accredited as the only exclusive partner 
                  serving BIAN clients globally with comprehensive architectural expertise.
                </p>
                <div className="flex items-center justify-center space-x-4 text-sm text-accent">
                  <div className="flex items-center">
                    <i className="fas fa-globe mr-1"></i>
                    Global
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-users mr-1"></i>
                    Exclusive
                  </div>
                </div>
              </div>
            </div>

            {/* Global Reach */}
            <div className="premium-card group hover:scale-105 transition-all duration-500 p-8 text-center relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/20 to-transparent rounded-bl-full"></div>
              <div className="relative z-10">
                <div className="w-24 h-24 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-primary/30 group-hover:shadow-2xl transition-all duration-500">
                  <i className="fas fa-globe-americas text-4xl text-primary-foreground"></i>
                </div>
                <div className="inline-flex items-center px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-primary font-medium text-xs mb-4">
                  <i className="fas fa-map-marked-alt mr-1"></i>
                  Worldwide
                </div>
                <h3 className="text-2xl font-bold text-card-foreground mb-4">Global Reach</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Serving clients across Australia, Asia, Europe, Americas, and Middle East 
                  with localized expertise and culturally-aware architectural solutions.
                </p>
                <div className="flex items-center justify-center space-x-4 text-sm text-primary">
                  <div className="flex items-center">
                    <i className="fas fa-flag mr-1"></i>
                    25+ Countries
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-clock mr-1"></i>
                    24/7 Support
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 section-darker">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Industries We Serve</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Specialized expertise across critical sectors driving digital transformation
            </p>
          </div>

          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-6xl mx-auto"
          >
            <CarouselContent className="-ml-4">
              {/* Banking */}
              <CarouselItem className="pl-4 md:basis-1/2 lg:basis-1/3">
                <div 
                  className="premium-card p-8 text-center group hover:shadow-2xl transition-all duration-500 cursor-pointer flex flex-col h-full"
                  onClick={() => window.location.href = '/banking'}
                  data-testid="industry-card-banking"
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <i className="fas fa-university text-3xl text-primary-foreground"></i>
                  </div>
                  <h3 className="text-2xl font-bold text-card-foreground mb-4">Banking</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6 flex-grow">
                    Core banking modernization, BIAN framework implementation, and digital banking transformation
                  </p>
                  <div className="text-primary font-semibold flex items-center justify-center group-hover:gap-3 gap-2 transition-all mt-auto">
                    Learn More <i className="fas fa-arrow-right"></i>
                  </div>
                </div>
              </CarouselItem>
              
              {/* Insurance */}
              <CarouselItem className="pl-4 md:basis-1/2 lg:basis-1/3">
                <div 
                  className="premium-card p-8 text-center group hover:shadow-2xl transition-all duration-500 cursor-pointer flex flex-col h-full"
                  onClick={() => window.location.href = '/insurance'}
                  data-testid="industry-card-insurance"
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-accent to-accent/80 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <i className="fas fa-shield-alt text-3xl text-accent-foreground"></i>
                  </div>
                  <h3 className="text-2xl font-bold text-card-foreground mb-4">Insurance</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6 flex-grow">
                    Policy administration modernization, claims processing optimization, and digital insurance platforms
                  </p>
                  <div className="text-accent font-semibold flex items-center justify-center group-hover:gap-3 gap-2 transition-all mt-auto">
                    Learn More <i className="fas fa-arrow-right"></i>
                  </div>
                </div>
              </CarouselItem>
              
              {/* Manufacturing */}
              <CarouselItem className="pl-4 md:basis-1/2 lg:basis-1/3">
                <div 
                  className="premium-card p-8 text-center group hover:shadow-2xl transition-all duration-500 cursor-pointer flex flex-col h-full"
                  onClick={() => window.location.href = '/manufacturing'}
                  data-testid="industry-card-manufacturing"
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-secondary to-secondary/80 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <i className="fas fa-industry text-3xl text-secondary-foreground"></i>
                  </div>
                  <h3 className="text-2xl font-bold text-card-foreground mb-4">Manufacturing</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6 flex-grow">
                    Smart manufacturing systems, supply chain optimization, and Industry 4.0 transformation
                  </p>
                  <div className="text-secondary font-semibold flex items-center justify-center group-hover:gap-3 gap-2 transition-all mt-auto">
                    Learn More <i className="fas fa-arrow-right"></i>
                  </div>
                </div>
              </CarouselItem>

              {/* Retail */}
              <CarouselItem className="pl-4 md:basis-1/2 lg:basis-1/3">
                <div 
                  className="premium-card p-8 text-center group hover:shadow-2xl transition-all duration-500 flex flex-col h-full"
                  data-testid="industry-card-retail"
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <i className="fas fa-shopping-cart text-3xl text-primary-foreground"></i>
                  </div>
                  <h3 className="text-2xl font-bold text-card-foreground mb-4">Retail</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6 flex-grow">
                    Omnichannel retail strategies, customer experience optimization, and digital commerce transformation
                  </p>
                </div>
              </CarouselItem>

              {/* Telecommunications */}
              <CarouselItem className="pl-4 md:basis-1/2 lg:basis-1/3">
                <div 
                  className="premium-card p-8 text-center group hover:shadow-2xl transition-all duration-500 flex flex-col h-full"
                  data-testid="industry-card-telecommunications"
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-accent to-accent/80 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <i className="fas fa-broadcast-tower text-3xl text-accent-foreground"></i>
                  </div>
                  <h3 className="text-2xl font-bold text-card-foreground mb-4">Telecommunications</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6 flex-grow">
                    Network modernization, 5G implementation, and digital service delivery platforms
                  </p>
                </div>
              </CarouselItem>

              {/* Health */}
              <CarouselItem className="pl-4 md:basis-1/2 lg:basis-1/3">
                <div 
                  className="premium-card p-8 text-center group hover:shadow-2xl transition-all duration-500 flex flex-col h-full"
                  data-testid="industry-card-health"
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-secondary to-secondary/80 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <i className="fas fa-heartbeat text-3xl text-secondary-foreground"></i>
                  </div>
                  <h3 className="text-2xl font-bold text-card-foreground mb-4">Health</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6 flex-grow">
                    Healthcare IT modernization, patient care systems, and clinical workflow optimization
                  </p>
                </div>
              </CarouselItem>

              {/* Pharmaceuticals */}
              <CarouselItem className="pl-4 md:basis-1/2 lg:basis-1/3">
                <div 
                  className="premium-card p-8 text-center group hover:shadow-2xl transition-all duration-500 flex flex-col h-full"
                  data-testid="industry-card-pharmaceuticals"
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <i className="fas fa-pills text-3xl text-primary-foreground"></i>
                  </div>
                  <h3 className="text-2xl font-bold text-card-foreground mb-4">Pharmaceuticals</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6 flex-grow">
                    R&D systems modernization, supply chain visibility, and regulatory compliance platforms
                  </p>
                </div>
              </CarouselItem>

              {/* Government */}
              <CarouselItem className="pl-4 md:basis-1/2 lg:basis-1/3">
                <div 
                  className="premium-card p-8 text-center group hover:shadow-2xl transition-all duration-500 flex flex-col h-full"
                  data-testid="industry-card-government"
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-accent to-accent/80 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <i className="fas fa-landmark text-3xl text-accent-foreground"></i>
                  </div>
                  <h3 className="text-2xl font-bold text-card-foreground mb-4">Government</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6 flex-grow">
                    Digital government services, citizen engagement platforms, and public sector modernization
                  </p>
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      <TestimonialsSection />

      <Footer />
    </div>
  );
}
