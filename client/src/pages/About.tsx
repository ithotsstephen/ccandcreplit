import { useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { useLocation } from "wouter";
import Navigation from "@/components/Navigation";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import ImageZoom from "@/components/ImageZoom";
import { Mail, Linkedin } from "lucide-react";

export default function About() {
  const [, setLocation] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section with Background Image */}
      <section 
        className="pt-24 pb-16 relative bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(assets/Images/About.jpg)' }}
        
      >
        {/* Image Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>
        
        {/* Content */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              About <span className="text-primary">CC&C Solutions</span>
            </h1>
            <p className="text-xl text-white/90 max-w-4xl mx-auto leading-relaxed">
              Built on Architecture. Driven by Transformation.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story - Founded */}
      <section className="py-20 section-darker">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-stretch">
            {/* Left Column - Story Content */}
            <div className="flex flex-col justify-between">
              <div>
                <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
                  Our Story
                </div>
                <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
                  Built on Architecture.<br />Driven by Transformation.
                </h2>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  Founded in the early 2000s, CC&C Solutions set out with one mission — to help organizations 
                  achieve transformation through architectural excellence. From pioneering the TOGAF certification 
                  process to advising Fortune 500 companies, we've shaped the global conversation around enterprise 
                  architecture.
                </p>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center">
                  <i className="fas fa-calendar text-primary mr-3"></i>
                  <span className="text-foreground">Founded in the early 2000s</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-certificate text-primary mr-3"></i>
                  <span className="text-foreground">TOGAF certification pioneers</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-building text-primary mr-3"></i>
                  <span className="text-foreground">Trusted by Fortune 500 companies</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-globe text-primary mr-3"></i>
                  <span className="text-foreground">Global enterprise architecture leaders</span>
                </div>
              </div>
            </div>

            {/* Right Column - Premium Highlight Cards */}
            <div className="flex flex-col justify-between space-y-6">
              {/* Global Impact Card */}
              <Card className="premium-card bg-gradient-to-br from-primary/10 to-primary/5 border-primary/30 hover:border-primary/50 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/20 p-3 rounded-lg">
                      <i className="fas fa-globe-americas text-3xl text-primary"></i>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-wide mb-2">Global Impact</h3>
                      <div className="text-4xl font-bold text-primary mb-2" data-testid="text-stat-global-impact">20+ Years</div>
                      <p className="text-muted-foreground leading-relaxed">
                        Transforming enterprises across continents with proven architecture excellence
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Transformation Highlights Card */}
              <Card className="premium-card bg-gradient-to-br from-secondary/10 to-secondary/5 border-secondary/30 hover:border-secondary/50 transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-wide mb-4">Transformation Highlights</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <i className="fas fa-check-circle text-secondary text-lg mt-0.5"></i>
                      <span className="text-card-foreground">Industry-leading BIAN implementation expertise</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <i className="fas fa-check-circle text-secondary text-lg mt-0.5"></i>
                      <span className="text-card-foreground">Certified TOGAF training programs worldwide</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <i className="fas fa-check-circle text-secondary text-lg mt-0.5"></i>
                      <span className="text-card-foreground">Trusted advisors to Fortune 500 enterprises</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <i className="fas fa-check-circle text-secondary text-lg mt-0.5"></i>
                      <span className="text-card-foreground">Award-winning architecture transformation services</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* BIAN Leadership */}
      <section className="py-20 section-darker">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-stretch">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-8">
                Leading the Future of<br />Banking with <span className="text-primary">BIAN</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                As an active BIAN member since 2020, CC&C has helped major banks adopt the BIAN framework to 
                drive reusability, standardization, and agility.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Our expertise earned the 2024 "Best in Class Partner" Award, while one of our clients received 
                the "Transformation Champion" Award — proof of our shared commitment to excellence.
              </p>

              <div className="space-y-4">
                <Card className="bg-primary/20 border-primary p-4">
                  <CardContent className="p-0 flex items-center">
                    <i className="fas fa-calendar text-3xl text-primary mr-4"></i>
                    <div>
                      <div className="font-bold text-card-foreground">BIAN Member Since 2020</div>
                      <p className="text-sm text-muted-foreground">Active member driving banking transformation</p>
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-secondary/20 border-secondary p-4">
                  <CardContent className="p-0 flex items-center">
                    <i className="fas fa-award text-3xl text-secondary mr-4"></i>
                    <div>
                      <div className="font-bold text-card-foreground">Best in Class Partner</div>
                      <p className="text-sm text-muted-foreground">BIAN Award 2024</p>
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-accent/20 border-accent p-4">
                  <CardContent className="p-0 flex items-center">
                    <i className="fas fa-trophy text-3xl text-accent mr-4"></i>
                    <div>
                      <div className="font-bold text-card-foreground">Transformation Champion</div>
                      <p className="text-sm text-muted-foreground">Client Award 2024</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            <div className="relative flex flex-col h-full">
              <img 
                src="assets/Images/BIANAward.jpeg" 
                alt="BIAN Best in Class Partner Award 2024" 
                className="rounded-xl shadow-2xl w-full h-full object-cover"
                data-testid="img-story-bian"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 section-darker">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">Leadership Team</h2>
            <p className="text-xl text-muted-foreground">
              Meet the visionaries driving transformation excellence across the globe
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Vish Viswanathan Profile */}
            <Card className="premium-card overflow-hidden group hover:shadow-2xl transition-all duration-500 flex flex-col">
              <div className="relative h-80 overflow-hidden bg-white">
                <img 
                  src="assets/Images/Vish Photo.png"
                  alt="Vish Viswanathan - Managing Principal & Global CEO"
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                  data-testid="img-profile-vish"
                />
              </div>
              
              <CardContent className="p-8 flex flex-col flex-grow">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-card-foreground mb-1">Vish Viswanathan</h3>
                  <p className="text-accent font-semibold mb-4">Managing Principal & Global CEO, Global Lead, Architecture Practice</p>
                  <p className="text-muted-foreground leading-relaxed min-h-[168px]">
                    Visionary founder and global CEO of CC&C Solutions, Vish Viswanathan is a world-renowned Enterprise Architecture thought leader, mentor, and advisor to several Fortune 500 organizations. With decades of experience across IT strategy, telecommunications, software solutions, and emerging technologies, Vish has been instrumental in shaping the evolution of Enterprise Architecture as a distinct profession.
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="text-sm font-bold text-card-foreground mb-3 uppercase tracking-wide">Key Expertise</h4>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "Enterprise Architecture Leadership",
                        "IT Strategy & Transformation",
                        "Telecommunications & Emerging Technologies",
                        "Global Business Development",
                        "Mentorship & Professional Advocacy"
                      ].map((skill, idx) => (
                        <span key={idx} className="px-3 py-1 bg-accent/10 text-accent text-xs font-medium rounded-full border border-accent/20">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-bold text-card-foreground mb-3 uppercase tracking-wide">Specific Value Adds</h4>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "Enterprise Architecture Enablement",
                        "EA Maturity & Governance Frameworks",
                        "Strategic Advisory for Global Organizations",
                        "Open Group & AEA Leadership Contributions",
                        "Technology Innovation & Market Expansion"
                      ].map((skill, idx) => (
                        <span key={idx} className="px-3 py-1 bg-card-foreground/10 text-card-foreground text-xs font-medium rounded-full border border-card-foreground/20">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 pt-4 border-t border-border mt-auto">
                  <a
                    href="https://www.linkedin.com/in/viviswanathan/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                    data-testid="link-vish-linkedin"
                  >
                    <Linkedin className="h-5 w-5" />
                    <span className="text-sm">LinkedIn</span>
                  </a>
                  <a
                    href="mailto:vish@ccandcsolutions.com"
                    className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                    data-testid="link-vish-email"
                  >
                    <Mail className="h-5 w-5" />
                    <span className="text-sm">Email</span>
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Mamta Sarangal Profile */}
            <Card className="premium-card overflow-hidden group hover:shadow-2xl transition-all duration-500 flex flex-col">
              <div className="relative h-80 overflow-hidden bg-white">
                <img 
                  src="assets/Images/Mamta photo.png"
                  alt="Mamta Sarangal - Chief Architect"
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                  data-testid="img-profile-mamta"
                />
              </div>
              
              <CardContent className="p-8 flex flex-col flex-grow">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-card-foreground mb-1">Mamta Sarangal</h3>
                  <p className="text-accent font-semibold mb-4">Chief Architect</p>
                  <p className="text-muted-foreground leading-relaxed min-h-[168px]">
                    Visionary enterprise architect and technology executive with over two decades of experience in financial services, telecommunications, and digital transformation. As Chief Architect at CC&C Solutions, she drives strategic architecture consulting, BIAN framework implementation, and IT value delivery for global clients.
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="text-sm font-bold text-card-foreground mb-3 uppercase tracking-wide">Key Expertise</h4>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "Enterprise Architecture",
                        "BIAN Implementation",
                        "Digital Transformation",
                        "API Management",
                        "Architecture Practice"
                      ].map((skill, idx) => (
                        <span key={idx} className="px-3 py-1 bg-accent/10 text-accent text-xs font-medium rounded-full border border-accent/20">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-bold text-card-foreground mb-3 uppercase tracking-wide">Specific Value Adds</h4>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "BIAN Adoption & Digital Journeys",
                        "Open Banking Strategies",
                        "Maturity Assessments",
                        "Technology Roadmaps",
                        "Business Architecture"
                      ].map((skill, idx) => (
                        <span key={idx} className="px-3 py-1 bg-card-foreground/10 text-card-foreground text-xs font-medium rounded-full border border-card-foreground/20">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 pt-4 border-t border-border mt-auto">
                  <a
                    href="https://www.linkedin.com/in/mamta-sarangal/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                    data-testid="link-mamta-linkedin"
                  >
                    <Linkedin className="h-5 w-5" />
                    <span className="text-sm">LinkedIn</span>
                  </a>
                  <a
                    href="mailto:Mamta.sarangal@ccandcsolutions.com"
                    className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                    data-testid="link-mamta-email"
                  >
                    <Mail className="h-5 w-5" />
                    <span className="text-sm">Email</span>
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Nishan Jebanasam Profile */}
            <Card className="premium-card overflow-hidden group hover:shadow-2xl transition-all duration-500 flex flex-col">
              <div className="relative h-80 overflow-hidden bg-white">
                <img 
                  src={`assets/Images/Nishan.png?v=${Date.now()}`}
                  alt="Nishan Jebanasam - Global Lead – Banking & Financial Services"
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                  data-testid="img-profile-nishan"
                />
              </div>
              
              <CardContent className="p-8 flex flex-col flex-grow">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-card-foreground mb-1">Nishan Jebanasam</h3>
                  <p className="text-accent font-semibold mb-4">Global Lead – Banking & Financial Services</p>
                  <p className="text-muted-foreground leading-relaxed min-h-[168px]">
                    Banking and Technology executive with over two decades of financial services and IT experience, including product, distribution, risk, data, and digital transformation. As CC&C Solutions' global lead for Banking & Financial Services, Nishan helps banks, credit unions, fintechs, and vendors across the globe modernize their enterprise and extract value out of transformation investment.
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="text-sm font-bold text-card-foreground mb-3 uppercase tracking-wide">Key Expertise</h4>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "BIAN Frameworks",
                        "Core Modernization",
                        "Digital Platforms",
                        "Executive Education",
                        "Change Leadership"
                      ].map((skill, idx) => (
                        <span key={idx} className="px-3 py-1 bg-accent/10 text-accent text-xs font-medium rounded-full border border-accent/20">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-bold text-card-foreground mb-3 uppercase tracking-wide">Specific Value Adds</h4>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "BIAN from reference to results",
                        "Cut run-costs via de-duplication",
                        "Traceability from strategy to services",
                        "Stakeholder alignment & coaching",
                        "Balanced governance frameworks"
                      ].map((skill, idx) => (
                        <span key={idx} className="px-3 py-1 bg-card-foreground/10 text-card-foreground text-xs font-medium rounded-full border border-card-foreground/20">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 pt-4 border-t border-border mt-auto">
                  <a
                    href="https://www.linkedin.com/in/nishan-jebanasam/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                    data-testid="link-nishan-linkedin"
                  >
                    <Linkedin className="h-5 w-5" />
                    <span className="text-sm">LinkedIn</span>
                  </a>
                  <a
                    href="mailto:nishan@ccandcsolutions.com"
                    className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                    data-testid="link-nishan-email"
                  >
                    <Mail className="h-5 w-5" />
                    <span className="text-sm">Email</span>
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Ramesh Thandava Krishnan Profile */}
            <Card className="premium-card overflow-hidden group hover:shadow-2xl transition-all duration-500 flex flex-col">
              <div className="relative h-80 overflow-hidden bg-white">
                <img 
                  src={`assets/Images/Ramesh.png?v=${Date.now()}`}
                  alt="Ramesh Thandava Krishnan - Head of Global Business Operations"
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                  data-testid="img-profile-ramesh"
                />
              </div>
              
              <CardContent className="p-8 flex flex-col flex-grow">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-card-foreground mb-1">Ramesh Thandava Krishnan</h3>
                  <p className="text-accent font-semibold mb-4">Head of Global Business Operations</p>
                  <p className="text-muted-foreground leading-relaxed min-h-[168px]">
                    As Head of Global Business Operations at CC&C Solutions, Ramesh translates the company's strategic vision into actionable plans that drive measurable results. With a focus on operational excellence and customer-centric innovation, he identifies evolving client needs and delivers superior value through collaboration and efficiency across CC&C's global business units.
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="text-sm font-bold text-card-foreground mb-3 uppercase tracking-wide">Key Expertise</h4>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "Project Management",
                        "Go-to-Market Strategy",
                        "Client Relationship & Business Development",
                        "Service Delivery Management",
                        "Vendor & Partner Management"
                      ].map((skill, idx) => (
                        <span key={idx} className="px-3 py-1 bg-accent/10 text-accent text-xs font-medium rounded-full border border-accent/20">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-bold text-card-foreground mb-3 uppercase tracking-wide">Specific Value Adds</h4>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "Global Business Services (GBS) Operations",
                        "IT Transformation Training (TOGAF, IT4IT)",
                        "Train-the-Trainer Programs",
                        "Architecture Transformation Consulting",
                        "Learning & Development Collaboration"
                      ].map((skill, idx) => (
                        <span key={idx} className="px-3 py-1 bg-card-foreground/10 text-card-foreground text-xs font-medium rounded-full border border-card-foreground/20">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 pt-4 border-t border-border mt-auto">
                  <a
                    href="https://www.linkedin.com/in/rameshthandavakrishnan/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                    data-testid="link-ramesh-linkedin"
                  >
                    <Linkedin className="h-5 w-5" />
                    <span className="text-sm">LinkedIn</span>
                  </a>
                  <a
                    href="mailto:ramesh@ccandcsolutions.com"
                    className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                    data-testid="link-ramesh-email"
                  >
                    <Mail className="h-5 w-5" />
                    <span className="text-sm">Email</span>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Global Reach */}
      <section className="py-20 section-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">Global Reach</h2>
            <p className="text-xl text-muted-foreground">
              Delivering services to clients across the globe with personnel based in major continents
            </p>
          </div>

          {/* World Map */}
          <div className="relative bg-black rounded-2xl p-2 md:p-4 mb-12 shadow-2xl">
            <div className="relative w-full">
              <ImageZoom
                src="assets/Images/Global Reach.png" 
                alt="Global Reach Map - CC&C Solutions worldwide presence" 
                className="w-full min-h-[400px] md:min-h-[500px] h-auto object-contain rounded-lg"
                testId="img-global-reach-map"
              />
            </div>
          </div>

        </div>
      </section>

      <CTASection 
        title="Partner with CC&C Solutions"
        description="Join leading enterprises worldwide who trust us to transform their architecture practice and accelerate digital innovation."
        buttonText="Talk to Our Team"
      />

      <Footer />
    </div>
  );
}
