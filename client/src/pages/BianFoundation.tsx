import { useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { useLocation } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function BianFoundation() {
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
      <section className="pt-24 pb-16 section-dark relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
            alt="Modern Banking Architecture" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/80 to-background/90"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Future-Proof Your Banking Architecture With{" "}
              <span className="text-primary">BIAN</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              CC&C's leadership position in BIAN certification training, adoption, and implementation 
              is helping banks fast-track their BIAN journey. Navigate the complexities of legacy systems 
              and architecture with CC&C Solutions – trusted partners to the world's leading financial institutions.
            </p>
            <div className="mt-8">
              <button 
                onClick={scrollToContact}
                className="premium-button px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105"
                data-testid="button-lets-talk"
              >
                Let's Talk
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Four-Step Process */}
      <section className="py-20 section-darker">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              How CC&C helps banks move to a modern, composable, and agile architecture
            </h2>
            <p className="text-xl text-muted-foreground">
              A four-step process using BIAN to simplify and modernize your banking architecture
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Step 1 */}
            <Card className="premium-card p-8">
              <CardContent className="p-0">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-4">
                    <span className="text-primary-foreground font-bold text-lg">1</span>
                  </div>
                  <h3 className="text-2xl font-bold text-card-foreground">Capture current state</h3>
                </div>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <i className="fas fa-circle text-primary text-xs mt-2 mr-3"></i>
                    Fragmented enterprise landscape
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-circle text-primary text-xs mt-2 mr-3"></i>
                    Duplicated capabilities
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-circle text-primary text-xs mt-2 mr-3"></i>
                    Point-to-point API's with no reuse
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-circle text-primary text-xs mt-2 mr-3"></i>
                    Control gaps and regulatory risk
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-circle text-primary text-xs mt-2 mr-3"></i>
                    Slow time to market
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-circle text-primary text-xs mt-2 mr-3"></i>
                    High operational expense
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Step 2 */}
            <Card className="premium-card p-8">
              <CardContent className="p-0">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mr-4">
                    <span className="text-accent-foreground font-bold text-lg">2</span>
                  </div>
                  <h3 className="text-2xl font-bold text-card-foreground">Map and classify</h3>
                </div>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <i className="fas fa-circle text-accent text-xs mt-2 mr-3"></i>
                    Define BIAN-based Service Landscape and map applications
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-circle text-accent text-xs mt-2 mr-3"></i>
                    Classify API's and identify degree of BIAN alignment
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-circle text-accent text-xs mt-2 mr-3"></i>
                    Identify duplication of capabilities
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-circle text-accent text-xs mt-2 mr-3"></i>
                    Improve change impact analysis
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Step 3 */}
            <Card className="premium-card p-8">
              <CardContent className="p-0">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mr-4">
                    <span className="text-secondary-foreground font-bold text-lg">3</span>
                  </div>
                  <h3 className="text-2xl font-bold text-card-foreground">Align and wrap</h3>
                </div>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <i className="fas fa-circle text-secondary text-xs mt-2 mr-3"></i>
                    Group capabilities and align to business domains
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-circle text-secondary text-xs mt-2 mr-3"></i>
                    Leverage BIAN API's to expose standard interfaces and abstract complexity
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-circle text-secondary text-xs mt-2 mr-3"></i>
                    Identify applications to invest vs retire
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-circle text-secondary text-xs mt-2 mr-3"></i>
                    Guide transformation planning
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Step 4 */}
            <Card className="premium-card p-8">
              <CardContent className="p-0">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-4">
                    <span className="text-primary-foreground font-bold text-lg">4</span>
                  </div>
                  <h3 className="text-2xl font-bold text-card-foreground">Rationalize and reuse</h3>
                </div>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <i className="fas fa-circle text-primary text-xs mt-2 mr-3"></i>
                    Rationalize capabilities to BIAN Service Domains
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-circle text-primary text-xs mt-2 mr-3"></i>
                    Reusable BIAN-aligned API's
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-circle text-primary text-xs mt-2 mr-3"></i>
                    Alignment to other banks and vendors who have adopted BIAN
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-circle text-primary text-xs mt-2 mr-3"></i>
                    Reduced cost of change and operational expense
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Service Offerings */}
      <section className="py-20 section-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">CC&C Service Offerings</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                title: "Business Capability Mapping", 
                icon: "fas fa-sitemap",
                description: "Map your current business capabilities to BIAN service domains"
              },
              { 
                title: "Enterprise Architecture Alignment", 
                icon: "fas fa-building",
                description: "Align your enterprise architecture to BIAN standards and best practices"
              },
              { 
                title: "Proof of Value / Concept", 
                icon: "fas fa-lightbulb",
                description: "Demonstrate BIAN value through targeted proof of concept implementations"
              },
              { 
                title: "Design Evaluation & Certification", 
                icon: "fas fa-certificate",
                description: "Evaluate and certify your BIAN-aligned designs"
              },
              { 
                title: "Practitioner and Executive Training", 
                icon: "fas fa-graduation-cap",
                description: "Comprehensive training programs for all organizational levels"
              },
              { 
                title: "Discovery Workshops", 
                icon: "fas fa-search",
                description: "Ideation workshops to identify BIAN use cases and opportunities"
              },
              { 
                title: "BIAN-Aligned Design", 
                icon: "fas fa-drafting-compass",
                description: "Design and implement BIAN-aligned solutions and architectures"
              },
              { 
                title: "Architecture Governance", 
                icon: "fas fa-shield-alt",
                description: "Establish governance frameworks for BIAN adoption and compliance"
              }
            ].map((service, index) => (
              <Card key={index} className="service-card hover:shadow-2xl transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                    <i className={`${service.icon} text-2xl text-primary-foreground`}></i>
                  </div>
                  <h4 className="text-lg font-bold text-card-foreground mb-3">{service.title}</h4>
                  <p className="text-muted-foreground text-sm">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* BIAN Benefits */}
      <section className="py-20 section-darker">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">How Does BIAN Deliver Benefit</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "It is Canonical",
                description: "The business function component designs BIAN specifies are standard for every use and user. The business role or purpose of each and every component can represent the systems needs of any type of bank, and can be consistently interpreted in any deployment",
                icon: "fas fa-standard"
              },
              {
                title: "It is Stable Over Time",
                description: "The BIAN model defines what each component does but does not attempt to define how it should do it. As a result, the BIAN blueprint and its component boundaries are extremely stable over time",
                icon: "fas fa-clock"
              },
              {
                title: "It can be adopted incrementally",
                description: "Systems built aligning to the model can be integrated alongside legacy systems and adopted incrementally. If well engineered, the internal workings of an application module can also evolve to include new practices and approaches as long as they keep to its original and discrete business role",
                icon: "fas fa-layer-group"
              },
              {
                title: "It Enables Agility",
                description: "By partitioning a bank's functionality, data and interfaces into discrete self-contained service centers and breaking down monolithic design, BIAN enables banks to innovate and get to production much faster by quarantining change impacts",
                icon: "fas fa-rocket"
              },
              {
                title: "It Supports Composability",
                description: "When solution providers and banks align with the model, banks can more easily mix and match system components developed by different providers and conversely solution providers can develop systems that can be more easily integrated in multiple banks.",
                icon: "fas fa-puzzle-piece"
              },
              {
                title: "It Helps Eliminate Complexity",
                description: "Because the BIAN components are designed to support discrete and autonomous business functions, system development can better avoid creating the systems overlaps, duplication and redundancies that plague traditional solution designs",
                icon: "fas fa-compress"
              }
            ].map((benefit, index) => (
              <Card key={index} className="premium-card p-8">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-accent rounded-lg flex items-center justify-center mb-6">
                    <i className={`${benefit.icon} text-2xl text-accent-foreground`}></i>
                  </div>
                  <h4 className="text-xl font-bold text-card-foreground mb-4">{benefit.title}</h4>
                  <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Foundation Certification Details */}
      <section className="py-20 section-dark relative">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
            alt="Financial Technology Excellence" 
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">BIAN Foundation Certification</h2>
            <p className="text-xl text-muted-foreground">
              Earn the new BIAN certification this year
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-8">Why Choose Our BIAN Training?</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center mr-4 mt-1">
                    <i className="fas fa-check text-primary-foreground text-sm"></i>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-2">Experienced Practitioners</h4>
                    <p className="text-muted-foreground">Your trainer is an actual architect with hands-on BIAN experience, not just theory</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center mr-4 mt-1">
                    <i className="fas fa-check text-primary-foreground text-sm"></i>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-2">Global Training Leadership</h4>
                    <p className="text-muted-foreground">CC&C has trained thousands of architects worldwide across major banks</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center mr-4 mt-1">
                    <i className="fas fa-check text-primary-foreground text-sm"></i>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-2">Proven Industry Partnership</h4>
                    <p className="text-muted-foreground">We are an experienced partner for major banks world-wide</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center mr-4 mt-1">
                    <i className="fas fa-check text-primary-foreground text-sm"></i>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-2">Official Certification</h4>
                    <p className="text-muted-foreground">Obtain BIAN Foundation Certification through accredited examination</p>
                  </div>
                </div>
              </div>
            </div>
            
            <Card className="premium-card p-8">
              <CardContent className="p-0">
                <h4 className="text-2xl font-bold text-card-foreground mb-6 text-center">Quick Facts</h4>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center mx-auto mb-3">
                      <i className="fas fa-clock text-2xl text-primary-foreground"></i>
                    </div>
                    <h5 className="font-semibold text-card-foreground mb-2">Duration</h5>
                    <p className="text-muted-foreground">2 Days</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-accent rounded-lg flex items-center justify-center mx-auto mb-3">
                      <i className="fas fa-laptop text-2xl text-accent-foreground"></i>
                    </div>
                    <h5 className="font-semibold text-card-foreground mb-2">Delivery</h5>
                    <p className="text-muted-foreground">Virtual Online</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-secondary rounded-lg flex items-center justify-center mx-auto mb-3">
                      <i className="fas fa-certificate text-2xl text-secondary-foreground"></i>
                    </div>
                    <h5 className="font-semibold text-card-foreground mb-2">Examination</h5>
                    <p className="text-muted-foreground">Yes</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center mx-auto mb-3">
                      <i className="fas fa-award text-2xl text-primary-foreground"></i>
                    </div>
                    <h5 className="font-semibold text-card-foreground mb-2">Certification</h5>
                    <p className="text-muted-foreground">Yes</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Course Objectives */}
          <div className="mb-20">
            <h3 className="text-3xl font-bold text-foreground mb-8 text-center">Course Objectives</h3>
            <Card className="premium-card p-8">
              <CardContent className="p-0">
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  BIAN Foundation certification demonstrates your knowledge of the BIAN banking architecture standard. 
                  Certification addresses educational Levels 1 and 2 (according to Bloom's Revised Taxonomy).
                </p>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xl font-bold text-card-foreground mb-4">Remembering (Bloom Level 1)</h4>
                    <p className="text-muted-foreground mb-4">The delegate will be able to:</p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <i className="fas fa-check text-primary mt-1 mr-3"></i>
                        <span className="text-muted-foreground"><strong>Remember</strong> factual information including lists</span>
                      </li>
                      <li className="flex items-start">
                        <i className="fas fa-check text-primary mt-1 mr-3"></i>
                        <span className="text-muted-foreground"><strong>Recognize</strong> symptoms, settings and patterns</span>
                      </li>
                      <li className="flex items-start">
                        <i className="fas fa-check text-primary mt-1 mr-3"></i>
                        <span className="text-muted-foreground"><strong>Recall</strong> how to perform an existing process</span>
                      </li>
                      <li className="flex items-start">
                        <i className="fas fa-check text-primary mt-1 mr-3"></i>
                        <span className="text-muted-foreground"><strong>Identify</strong> strategies for retaining information</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-card-foreground mb-4">Understanding (Bloom Level 2)</h4>
                    <p className="text-muted-foreground mb-4">The delegate will be able to:</p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <i className="fas fa-check text-accent mt-1 mr-3"></i>
                        <span className="text-muted-foreground"><strong>Summarize</strong> features</span>
                      </li>
                      <li className="flex items-start">
                        <i className="fas fa-check text-accent mt-1 mr-3"></i>
                        <span className="text-muted-foreground"><strong>Classify</strong> the different BIAN artifacts</span>
                      </li>
                      <li className="flex items-start">
                        <i className="fas fa-check text-accent mt-1 mr-3"></i>
                        <span className="text-muted-foreground"><strong>Clarify</strong> by creating Business Scenarios</span>
                      </li>
                      <li className="flex items-start">
                        <i className="fas fa-check text-accent mt-1 mr-3"></i>
                        <span className="text-muted-foreground"><strong>Predict</strong> a correct response or situation</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="mt-8 p-6 bg-muted/20 rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    <strong>Certification Authority:</strong> The certification authority for the BIAN Foundation exam is Van Haren Learning Solutions.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Learning Objectives */}
          <div className="mb-20">
            <h3 className="text-3xl font-bold text-foreground mb-8 text-center">Learning Objectives</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="premium-card p-8">
                <CardContent className="p-0">
                  <h4 className="text-xl font-bold text-card-foreground mb-6">Core Knowledge</h4>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <i className="fas fa-arrow-right text-primary mt-1 mr-3"></i>
                      <span className="text-muted-foreground">Describe the purpose of BIAN and its design principles</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-arrow-right text-primary mt-1 mr-3"></i>
                      <span className="text-muted-foreground">Understand non-overlapping functionality concepts</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-arrow-right text-primary mt-1 mr-3"></i>
                      <span className="text-muted-foreground">Learn discrete service centers to model a bank</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-arrow-right text-primary mt-1 mr-3"></i>
                      <span className="text-muted-foreground">Recognize dynamic behavior of static assets</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="premium-card p-8">
                <CardContent className="p-0">
                  <h4 className="text-xl font-bold text-card-foreground mb-6">BIAN Artifacts</h4>
                  <p className="text-muted-foreground mb-4">Describe and recognize BIAN artifacts in the correct context:</p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <i className="fas fa-circle text-accent text-xs mt-2 mr-3"></i>
                      <span className="text-muted-foreground">Business scenarios</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-circle text-accent text-xs mt-2 mr-3"></i>
                      <span className="text-muted-foreground">Functional patterns</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-circle text-accent text-xs mt-2 mr-3"></i>
                      <span className="text-muted-foreground">Action terms</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-circle text-accent text-xs mt-2 mr-3"></i>
                      <span className="text-muted-foreground">Behavior qualifiers</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-circle text-accent text-xs mt-2 mr-3"></i>
                      <span className="text-muted-foreground">Asset types</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-circle text-accent text-xs mt-2 mr-3"></i>
                      <span className="text-muted-foreground">Control records</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Target Audience & Prerequisites */}
          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <Card className="premium-card p-8">
              <CardContent className="p-0">
                <h4 className="text-2xl font-bold text-card-foreground mb-6">Who Should Attend</h4>
                <p className="text-muted-foreground mb-6">
                  The BIAN certification is intended for enterprise architects, solution architects, consultants and advisors 
                  working in the banking and financial services industry. IT professionals in the following roles should consider 
                  BIAN Foundation certification:
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    "Enterprise Architects",
                    "Business Architects", 
                    "Solution Architects",
                    "Data/Information Architects",
                    "Application Architects",
                    "Infrastructure Architects",
                    "Security Architects",
                    "Program/Project Managers",
                    "Business Analysts",
                    "Development Team Leaders",
                    "Experienced Developers"
                  ].map((role, index) => (
                    <div key={index} className="flex items-center">
                      <i className="fas fa-user-check text-primary mr-2 text-sm"></i>
                      <span className="text-muted-foreground text-sm">{role}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="premium-card p-8">
              <CardContent className="p-0">
                <h4 className="text-2xl font-bold text-card-foreground mb-6">Prerequisites</h4>
                <p className="text-muted-foreground mb-6">
                  Delegates should have some Enterprise Architecture experience or knowledge, such as:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <i className="fas fa-graduation-cap text-primary mt-1 mr-3"></i>
                    <span className="text-muted-foreground">TOGAF® or similar certification</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-briefcase text-primary mt-1 mr-3"></i>
                    <span className="text-muted-foreground">Enterprise Architecture experience in financial services</span>
                  </li>
                </ul>
                
                <div className="mt-8">
                  <h5 className="text-lg font-semibold text-card-foreground mb-4">Examination Details</h5>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Number of questions:</span>
                      <span className="text-card-foreground font-semibold">60</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Duration:</span>
                      <span className="text-card-foreground font-semibold">60 minutes</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Pass Mark:</span>
                      <span className="text-card-foreground font-semibold">70%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Format:</span>
                      <span className="text-card-foreground font-semibold">Closed book</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Re-exam:</span>
                      <span className="text-card-foreground font-semibold">Included</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Topics Covered */}
          <div className="mb-20">
            <h3 className="text-3xl font-bold text-foreground mb-8 text-center">Topics Covered</h3>
            <Card className="premium-card p-8">
              <CardContent className="p-0">
                <div className="grid md:grid-cols-2 gap-8">
                  {[
                    {
                      number: "1",
                      title: "Introduction to BIAN",
                      description: "Foundation concepts and overview"
                    },
                    {
                      number: "2", 
                      title: "BIAN's primary purpose and approach",
                      description: "Understanding the core methodology"
                    },
                    {
                      number: "3",
                      title: "Understanding the theory of BIAN",
                      description: "Theoretical foundations and principles"
                    },
                    {
                      number: "4",
                      title: "The BIAN service landscape",
                      description: "Service domains and architecture"
                    },
                    {
                      number: "5",
                      title: "How to apply the BIAN standard",
                      description: "Practical implementation approaches"
                    },
                    {
                      number: "6",
                      title: "Assembling a representative enterprise blueprint",
                      description: "Building comprehensive bank models"
                    },
                    {
                      number: "7",
                      title: "Enterprise blueprint as analysis framework",
                      description: "Using blueprints for decision making"
                    },
                    {
                      number: "8",
                      title: "BIAN and the TOGAF ADM",
                      description: "Integration with enterprise architecture"
                    }
                  ].map((topic, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center mr-4 mt-1">
                        <span className="text-primary-foreground font-bold text-sm">{topic.number}</span>
                      </div>
                      <div>
                        <h5 className="text-lg font-semibold text-card-foreground mb-2">{topic.title}</h5>
                        <p className="text-muted-foreground text-sm">{topic.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Additional Training */}
          <div>
            <h3 className="text-3xl font-bold text-foreground mb-8 text-center">Additional BIAN Training</h3>
            <Card className="premium-card overflow-hidden">
              <div className="relative h-48 bg-gradient-to-br from-accent/20 to-secondary/20">
                <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-black/40"></div>
                <div className="relative z-10 p-8 h-full flex items-center justify-center">
                  <i className="fas fa-database text-6xl text-accent"></i>
                </div>
              </div>
              <CardContent className="p-8">
                <h4 className="text-2xl font-bold text-card-foreground mb-4">BIAN Data Architecture & Design Specialist Certification</h4>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Learn BIAN's Business Object Model (BOM) in detail through an end-to-end use case. Your trainer is a 
                  BIAN-certified data specialist who can provide a practical working knowledge of how BIAN can be utilized 
                  to design a world-class data architecture.
                </p>
                <button 
                  onClick={scrollToContact}
                  className="text-accent font-semibold hover:underline"
                  data-testid="button-learn-more-data-specialist"
                >
                  Learn More →
                </button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Banking Clients */}
      <section className="py-20 section-darker relative">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
            alt="Global Banking Network" 
            className="w-full h-full object-cover opacity-15"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">Our Banking Clients</h2>
            <p className="text-xl text-muted-foreground">
              Trusted by leading financial institutions worldwide
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-items-center mb-16">
            {[
              "ANZ", "Westpac", "Commonwealth Bank", "NAB", "HSBC", "Standard Chartered",
              "DBS", "UOB", "OCBC", "Maybank", "CIMB", "Bank Mandiri",
              "BCA", "BRI", "BNI", "Bank Central Asia", "Kasikornbank", "Bangkok Bank"
            ].map((bank, index) => (
              <div key={index} className="w-24 h-16 bg-card rounded-lg flex items-center justify-center border border-border hover:border-primary transition-colors">
                <span className="text-card-foreground font-semibold text-sm text-center">{bank}</span>
              </div>
            ))}
          </div>

          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-foreground mb-6">What our clients say</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                content: "ANZ has discovered CC & C Solutions to be an invaluable partner in our BIAN journey. Their extensive knowledge and collaborative approach have contributed significantly to our success. The guidance, training, and support they provide are essential to our successful implementation.",
                author: "ANZ BANK",
                role: "Banking Client"
              },
              {
                content: "My appreciation to CC&C for such an insightful training on BIAN",
                author: "Alfredo Palafox",
                role: "Deputy Chief Architect LAM, HSBC"
              },
              {
                content: "CC&C's BIAN course gave me an excellent introduction into banking standards and certifications.",
                author: "Abhishek Das",
                role: "NTT Data"
              }
            ].map((testimonial, index) => (
              <Card key={index} className="premium-card p-8">
                <CardContent className="p-0">
                  <div className="mb-6">
                    <div className="flex text-primary mb-4">
                      {[...Array(5)].map((_, i) => (
                        <i key={i} className="fas fa-star"></i>
                      ))}
                    </div>
                    <p className="text-muted-foreground italic mb-4">
                      "{testimonial.content}"
                    </p>
                  </div>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-4">
                      <i className="fas fa-user text-primary-foreground"></i>
                    </div>
                    <div>
                      <div className="font-semibold text-card-foreground">{testimonial.author}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* BIAN Webinar Series */}
      <section className="py-20 section-dark relative">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
            alt="Professional Training Excellence" 
            className="w-full h-full object-cover opacity-12"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">CC&C BIAN Webinar Series</h2>
            <p className="text-xl text-muted-foreground">
              Learn from industry experts and real-world BIAN implementations
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                title: "Learnings and tips for rolling out BIAN in your organization",
                description: "Interested in adopting BIAN in your enterprise, and keen to benefit from the learnings of those who have gone before you? Mamta Sarangal and Nishan Jebanasam from CC and C Solutions will share learnings from the work done with banks across Australia, Europe, North America, and Asia so that you can maximise the success of your own BIAN journey.",
                type: "Implementation Guide",
                icon: "fas fa-lightbulb"
              },
              {
                title: "Transforming banking: Harnessing BIAN for a future-ready Architecture & Strategy",
                description: "Join us to explore how you can leverage BIAN across multiple architectural domains. An in-depth exploration of BIAN's framework to elevate your Enterprise Architecture, API Strategy, and Information Architecture.",
                type: "Strategy Focus",
                icon: "fas fa-rocket"
              },
              {
                title: "BIAN Implementation Journey",
                description: "BIAN has been positioned as the essential foundation of a modern digital bank by major banks, banking solution providers, and industry observers. If you are wondering how and where to start, join us for this informative webinar conducted by BIAN practitioners!",
                type: "Getting Started",
                icon: "fas fa-map"
              },
              {
                title: "Bank on BIAN - Why BIAN certification matters",
                description: "A must if you are a bank looking for readymade components for fast tracking solutions, banking professional interested in enhancing career prospects, or banking product vendor interested in expanding global market share.",
                type: "Certification Focus",
                icon: "fas fa-certificate"
              }
            ].map((webinar, index) => (
              <Card key={index} className="premium-card p-8 hover:shadow-2xl transition-all duration-300">
                <CardContent className="p-0">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center mr-4">
                      <i className={`${webinar.icon} text-2xl text-primary-foreground`}></i>
                    </div>
                    <div>
                      <div className="text-sm text-primary font-semibold mb-1">{webinar.type}</div>
                      <h4 className="text-lg font-bold text-card-foreground leading-tight">{webinar.title}</h4>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-6">{webinar.description}</p>
                  <button 
                    onClick={scrollToContact}
                    className="text-primary font-semibold hover:underline"
                    data-testid={`button-webinar-${index}`}
                  >
                    Learn More →
                  </button>
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
            Let's discuss how BIAN can modernize your banking operations and accelerate your digital transformation.
          </p>
          <button 
            onClick={scrollToContact}
            className="premium-button px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105"
            data-testid="button-get-started"
          >
            Get Started Today
          </button>
        </div>
      </section>
      <Footer />
    </div>
  );
}