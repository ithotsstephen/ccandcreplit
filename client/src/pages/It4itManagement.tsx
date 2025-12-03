import { useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { useLocation } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function It4itManagement() {
  const [, setLocation] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToContact = () => {
    setLocation("/#contact");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 section-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              <span className="text-primary">IT4IT™</span> Foundation Certification
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              In its first 36 months of release, about 25 percent of IT4IT certified practitioners were trained by CC&C. 
              We have been IT4IT Forum participants and leaders for years, with more than half of all IT4IT™ practitioners 
              globally trained by CC&C or our affiliates.
            </p>
            <div className="mt-8">
              <button 
                onClick={scrollToContact}
                className="premium-button px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105"
                data-testid="button-get-certified"
              >
                Get Certified Today
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Market Leadership */}
      <section className="py-20 section-darker">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">IT4IT Expertise & Leadership</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                stat: "50%+",
                description: "Of all IT4IT™ certified practitioners globally trained by CC&C",
                icon: "fas fa-users"
              },
              {
                stat: "25%",
                description: "Of practitioners in first 36 months trained by CC&C",
                icon: "fas fa-chart-line"
              },
              {
                stat: "20+",
                description: "Years of IT management consulting experience",
                icon: "fas fa-calendar-alt"
              },
              {
                stat: "Gold",
                description: "Standard recognition in IT4IT certification training",
                icon: "fas fa-medal"
              }
            ].map((item, index) => (
              <Card key={index} className="premium-card p-6 text-center">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                    <i className={`${item.icon} text-2xl text-primary-foreground`}></i>
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">{item.stat}</div>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-20 section-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">Core IT4IT Services</h2>
            <p className="text-xl text-muted-foreground">
              Comprehensive consulting and training solutions for IT transformation
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <Card className="premium-card p-8">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center mb-6">
                  <i className="fas fa-cogs text-2xl text-primary-foreground"></i>
                </div>
                <h3 className="text-2xl font-bold text-card-foreground mb-6">Consulting & Advisory</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <i className="fas fa-arrow-right text-primary mt-1 mr-3"></i>
                    <div>
                      <strong className="text-card-foreground">Operational Flow Optimization:</strong>
                      <span className="text-muted-foreground"> Using IT4IT™ and end-to-end IT management experience to enable agile flow</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-arrow-right text-primary mt-1 mr-3"></i>
                    <div>
                      <strong className="text-card-foreground">DevOps Automation:</strong>
                      <span className="text-muted-foreground"> Help automate the DevOps tool chain</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-arrow-right text-primary mt-1 mr-3"></i>
                    <div>
                      <strong className="text-card-foreground">Data Flow Analysis:</strong>
                      <span className="text-muted-foreground"> Understanding data flows needed for operational effectiveness</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-arrow-right text-primary mt-1 mr-3"></i>
                    <div>
                      <strong className="text-card-foreground">Capability Assessments:</strong>
                      <span className="text-muted-foreground"> Tool rationalization based on IT4IT™ framework</span>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="premium-card p-8">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-accent rounded-lg flex items-center justify-center mb-6">
                  <i className="fas fa-dollar-sign text-2xl text-accent-foreground"></i>
                </div>
                <h3 className="text-2xl font-bold text-card-foreground mb-6">Cost Optimization</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <i className="fas fa-arrow-right text-accent mt-1 mr-3"></i>
                    <div>
                      <strong className="text-card-foreground">Proven Savings:</strong>
                      <span className="text-muted-foreground"> Capability assessments proven to save up to 20% of IT tool-related direct costs</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-arrow-right text-accent mt-1 mr-3"></i>
                    <div>
                      <strong className="text-card-foreground">Indirect Value:</strong>
                      <span className="text-muted-foreground"> Strong indirect benefits through increased velocity and uptime</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-arrow-right text-accent mt-1 mr-3"></i>
                    <div>
                      <strong className="text-card-foreground">ROI Focus:</strong>
                      <span className="text-muted-foreground"> Measurable returns on IT transformation investments</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-arrow-right text-accent mt-1 mr-3"></i>
                    <div>
                      <strong className="text-card-foreground">Operational Excellence:</strong>
                      <span className="text-muted-foreground"> Streamlined IT operations and reduced operational overhead</span>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Target Professionals */}
      <section className="py-20 section-darker">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">Who Benefits from IT4IT</h2>
            <p className="text-xl text-muted-foreground">
              IT4IT training and consulting is valuable for a wide range of IT professionals
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { role: "Hands-on CIOs", icon: "fas fa-user-tie", description: "Strategic IT leadership and governance" },
              { role: "IT Strategy Professionals", icon: "fas fa-chess", description: "Strategic planning and governance" },
              { role: "Enterprise Architects", icon: "fas fa-building", description: "IT architecture and design" },
              { role: "IT Business Managers", icon: "fas fa-briefcase", description: "Business-IT alignment" },
              { role: "IT Finance Managers", icon: "fas fa-calculator", description: "IT financial management" },
              { role: "Infrastructure Leaders", icon: "fas fa-server", description: "Infrastructure management" },
              { role: "IT Consultants", icon: "fas fa-handshake", description: "Consulting and advisory services" },
              { role: "IT Services Companies", icon: "fas fa-industry", description: "Service delivery optimization" },
              { role: "ITIL/ITSM Professionals", icon: "fas fa-tools", description: "Service management integration" }
            ].map((professional, index) => (
              <Card key={index} className="service-card p-6">
                <CardContent className="p-0">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                    <i className={`${professional.icon} text-xl text-primary-foreground`}></i>
                  </div>
                  <h4 className="text-lg font-bold text-card-foreground mb-2">{professional.role}</h4>
                  <p className="text-muted-foreground text-sm">{professional.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Framework Applications */}
      <section className="py-20 section-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">IT4IT Framework Applications</h2>
            <p className="text-xl text-muted-foreground">
              The IT4IT framework supports various transformation outcomes
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Digital Transformation",
                description: "Context and guidance for digital transformation initiatives",
                icon: "fas fa-digital-tachograph",
                color: "primary"
              },
              {
                title: "IT Transformation",
                description: "Large-scale organizational transformation",
                icon: "fas fa-exchange-alt",
                color: "accent"
              },
              {
                title: "Application Portfolio Management",
                description: "Comprehensive application portfolio optimization",
                icon: "fas fa-th-large",
                color: "secondary"
              },
              {
                title: "DevOps Adoption",
                description: "Structured approach to DevOps implementation",
                icon: "fas fa-infinity",
                color: "primary"
              },
              {
                title: "Cloud & Service Broker",
                description: "Cloud strategy and service brokerage",
                icon: "fas fa-cloud",
                color: "accent"
              },
              {
                title: "IT Tools Management",
                description: "Tool rationalization and optimization",
                icon: "fas fa-wrench",
                color: "secondary"
              }
            ].map((application, index) => (
              <Card key={index} className="premium-card p-6">
                <CardContent className="p-0">
                  <div className={`w-16 h-16 bg-${application.color} rounded-lg flex items-center justify-center mb-6`}>
                    <i className={`${application.icon} text-2xl text-${application.color}-foreground`}></i>
                  </div>
                  <h4 className="text-xl font-bold text-card-foreground mb-4">{application.title}</h4>
                  <p className="text-muted-foreground">{application.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Integration with Other Frameworks */}
      <section className="py-20 section-darker">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">Integration with Other Frameworks</h2>
            <p className="text-xl text-muted-foreground">
              CC&C demonstrates how IT4IT integrates seamlessly with industry standards
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="premium-card p-8 text-center">
              <CardContent className="p-0">
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="fas fa-building text-3xl text-primary-foreground"></i>
                </div>
                <h3 className="text-2xl font-bold text-card-foreground mb-4">TOGAF Integration</h3>
                <p className="text-muted-foreground">
                  IT4IT serves as a reference architecture for the IT function within enterprise architecture, 
                  complementing TOGAF's comprehensive EA methodology.
                </p>
              </CardContent>
            </Card>

            <Card className="premium-card p-8 text-center">
              <CardContent className="p-0">
                <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="fas fa-cogs text-3xl text-accent-foreground"></i>
                </div>
                <h3 className="text-2xl font-bold text-card-foreground mb-4">ITIL Integration</h3>
                <p className="text-muted-foreground">
                  Fills gaps in metadata and automation requirements that ITIL doesn't address, 
                  providing practical implementation details for process inputs and outputs.
                </p>
              </CardContent>
            </Card>

            <Card className="premium-card p-8 text-center">
              <CardContent className="p-0">
                <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="fas fa-shield-alt text-3xl text-secondary-foreground"></i>
                </div>
                <h3 className="text-2xl font-bold text-card-foreground mb-4">COBIT Integration</h3>
                <p className="text-muted-foreground">
                  Provides practical implementation details for COBIT governance frameworks, 
                  enabling better alignment between IT governance and operational execution.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Differentiators */}
      <section className="py-20 section-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">Key Differentiators</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                title: "Hands-on Approach",
                description: "\"Roll up our sleeves\" practitioners, not ivory tower consultants. We work directly with your teams to implement practical solutions.",
                icon: "fas fa-hands"
              },
              {
                title: "Value Chain Focus",
                description: "IT4IT starts with value chains for business-aligned value creation, ensuring IT investments directly support business outcomes.",
                icon: "fas fa-link"
              },
              {
                title: "Cross-functional Language",
                description: "Standard language for describing functional components and information flows, improving communication across IT and business teams.",
                icon: "fas fa-comments"
              },
              {
                title: "Business Alignment",
                description: "Increases likelihood that IT transformation investments align with shareholder value and strategic business objectives.",
                icon: "fas fa-bullseye"
              }
            ].map((differentiator, index) => (
              <Card key={index} className="premium-card p-8">
                <CardContent className="p-0">
                  <div className="flex items-start">
                    <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center mr-6">
                      <i className={`${differentiator.icon} text-2xl text-primary-foreground`}></i>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-card-foreground mb-4">{differentiator.title}</h4>
                      <p className="text-muted-foreground leading-relaxed">{differentiator.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Training Details */}
      <section className="py-20 section-darker">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">IT4IT Foundation Certification</h2>
            <p className="text-xl text-muted-foreground">
              Two-day instructor-led course preparing you for The Open Group's IT4IT L1 Foundation exam
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <Card className="premium-card p-8">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold text-card-foreground mb-6">Training Format</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <i className="fas fa-check text-primary mt-1 mr-3"></i>
                    <span className="text-muted-foreground">Two-day instructor-led course</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-primary mt-1 mr-3"></i>
                    <span className="text-muted-foreground">Available classroom or online delivery</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-primary mt-1 mr-3"></i>
                    <span className="text-muted-foreground">Prepares for The Open Group IT4IT L1 Foundation exam</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-primary mt-1 mr-3"></i>
                    <span className="text-muted-foreground">Corporate Training Academy offerings available</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-primary mt-1 mr-3"></i>
                    <span className="text-muted-foreground">Practical hands-on learning approach</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="premium-card p-8">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold text-card-foreground mb-6">Course Benefits</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <i className="fas fa-star text-primary mt-1 mr-3"></i>
                    <span className="text-muted-foreground">Learn from IT4IT Forum participants and leaders</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-star text-primary mt-1 mr-3"></i>
                    <span className="text-muted-foreground">Understand practical IT4IT implementation</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-star text-primary mt-1 mr-3"></i>
                    <span className="text-muted-foreground">Gain insights from real-world case studies</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-star text-primary mt-1 mr-3"></i>
                    <span className="text-muted-foreground">Network with IT professionals globally</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-star text-primary mt-1 mr-3"></i>
                    <span className="text-muted-foreground">Advance your IT management career</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 section-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Ready to Transform Your IT Operations?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join the leaders in IT4IT implementation and certification. Let's discuss how IT4IT can optimize your IT value chain.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={scrollToContact}
              className="premium-button px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105"
              data-testid="button-start-transformation"
            >
              Start Your Transformation
            </button>
            <button 
              onClick={scrollToContact}
              className="border-2 border-primary text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary hover:text-primary-foreground transition-all"
              data-testid="button-schedule-consultation"
            >
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}