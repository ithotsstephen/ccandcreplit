import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { useLocation } from "wouter";
import Navigation from "@/components/Navigation";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Consulting() {
  const [, setLocation] = useLocation();
  const [expandedStep, setExpandedStep] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    document.title = "AdviseIQ Consulting - BIAN Implementation & Enterprise Architecture | CC&C Solutions";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'CC&C helps banks, credit unions, fintechs, and system integrators adopt BIAN correctly. From strategy to live services with proven playbooks, expert consultants, and measurable outcomes.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'CC&C helps banks, credit unions, fintechs, and system integrators adopt BIAN correctly. From strategy to live services with proven playbooks, expert consultants, and measurable outcomes.';
      document.head.appendChild(meta);
    }

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', 'AdviseIQ Consulting - BIAN Implementation & Enterprise Architecture');
    } else {
      const meta = document.createElement('meta');
      meta.setAttribute('property', 'og:title');
      meta.content = 'AdviseIQ Consulting - BIAN Implementation & Enterprise Architecture';
      document.head.appendChild(meta);
    }

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', 'Accredited BIAN practitioners delivering end-to-end consulting from strategy to shipped software. Proven playbooks, expert embedding, and measurable outcomes.');
    } else {
      const meta = document.createElement('meta');
      meta.setAttribute('property', 'og:description');
      meta.content = 'Accredited BIAN practitioners delivering end-to-end consulting from strategy to shipped software. Proven playbooks, expert embedding, and measurable outcomes.';
      document.head.appendChild(meta);
    }

    return () => {
      document.title = 'CC&C Solutions';
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) metaDescription.remove();
      const ogTitle = document.querySelector('meta[property="og:title"]');
      if (ogTitle) ogTitle.remove();
      const ogDescription = document.querySelector('meta[property="og:description"]');
      if (ogDescription) ogDescription.remove();
    };
  }, []);

  const consultingSteps = [
    {
      number: 1,
      title: "Define Your Business",
      description: "Clarify purpose, outcomes, and value streams. Build a BIAN leverage model so strategy translates into funded priorities with measurable impact.",
      details: "Purpose alignment, Business outcomes and OKRs, Value stream identification, BIAN leverage model, Strategic priorities and funding"
    },
    {
      number: 2,
      title: "Architect the Organisation",
      description: "Create the BIAN-aligned service landscape, operating model, and semantic data/API standards—one blueprint that cuts complexity and maximizes reuse.",
      details: "BIAN service landscape design, Semantic API standards, Data architecture and BOM alignment, Operating model definition, Architecture governance framework"
    },
    {
      number: 3,
      title: "Plan and Deliver the Change",
      description: "Sequence thin slices, wire telemetry to OKRs, and industrialize delivery with DevSecOps to ship resilient, compliant services—faster.",
      details: "Thin-slice delivery planning, OKR and KPI telemetry, DevSecOps pipeline setup, Compliant service delivery, Continuous deployment and monitoring"
    },
    {
      number: 4,
      title: "Enable Continuous Capability",
      description: "Embed role-based learning, a BIAN academy, and coaching; standardize playbooks to keep teams improving long after go-live.",
      details: "Role-based learning paths, BIAN academy setup, Coaching and knowledge transfer, Playbook standardization, Communities of practice"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section 
        className="pt-24 pb-16 relative bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/assets/Images/Consulting.jpg)' }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-8">
            <div className="inline-block px-4 py-2 md:px-8 md:py-4 bg-white/20 border-2 border-white/40 rounded-full text-white font-bold text-2xl md:text-3xl mb-8 shadow-lg">
              AdviseIQ
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              BIAN Done Right: From <span className="text-primary">Strategy</span> to Live, Resilient Services
            </h1>
            <p className="text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed mb-8">
              CC&C helps banks, credit unions, fintechs, product vendors, and system integrators architect on BIAN, 
              design capabilities, and implement change - with a focus on continuous value delivery
            </p>
          </div>
        </div>
      </section>

      {/* What AdviseIQ Offers */}
      <section className="py-20 section-darker">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">What AdviseIQ Offers</h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              Most transformations stall between intent and implementation. CC&C closes that gap with an end-to-end BIAN consulting 
              approach that aligns leadership, designs a canonical architecture, accelerates delivery, and establishes a learning culture. 
              The result: faster time-to-value, lower integration cost, and measurable reduction in complexity—without vendor lock-in
            </p>
          </div>

          <div className="space-y-12 max-w-5xl mx-auto">
            {/* Feature 1 */}
            <Card className="premium-card group hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                      <span className="text-2xl font-bold text-primary">01</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-card-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                      Proven Playbooks to Adopt BIAN Right - The First Time
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-lg">
                      BIAN success isn't accidental. We bring field-tested playbooks that sequence education, service-landscape design, 
                      semantic APIs, and governance into a single, repeatable rollout. Clear decision rights, guardrails, and templates 
                      prevent rework and fragmentation, so your blueprint becomes working software—fast—and stays aligned as you scale across domains.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Feature 2 */}
            <Card className="premium-card group hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center group-hover:scale-110 group-hover:bg-accent/20 transition-all duration-300">
                      <span className="text-2xl font-bold text-accent">02</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-card-foreground mb-4 group-hover:text-accent transition-colors duration-300">
                      Focus on Your Priorities and Outcomes
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-lg">
                      We start with your outcomes: growth, cost, risk, and compliance. Using OKRs and value streams, we prioritise thin slices 
                      that prove value early, then scale. Every increment ties back to measurable KPIs and telemetry, so investment decisions 
                      stay transparent and benefits real—not just promised.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Feature 3 */}
            <Card className="premium-card group hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center group-hover:scale-110 group-hover:bg-secondary/20 transition-all duration-300">
                      <span className="text-2xl font-bold text-secondary">03</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-card-foreground mb-4 group-hover:text-secondary transition-colors duration-300">
                      Experts Embedded in Your Team - Upskilling Along the Way
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-lg">
                      Our practitioner-consultants sit beside your architects, product owners, and engineers. We co-design, co-build, and coach 
                      in real work—transferring patterns, decision rights, and BIAN know-how as we deliver. The result is capability that remains 
                      after we leave: confident teams, reusable assets, and a sustainable, self-improving practice.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* AdviseIQ BIAN Adoption Framework */}
      <section className="py-20 section-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              The AdviseIQ BIAN Adoption Framework Accelerates Your BIAN Journey
            </h2>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto mb-4">
              Our proven framework aligns strategy, architecture, and delivery to ensure BIAN success from day one
            </p>
            <p className="text-base text-[#1f7fd4] font-semibold flex items-center justify-center gap-2">
              <i className="fas fa-hand-point-down"></i>
              Click each step to explore our methodology in detail
            </p>
          </div>

          {/* Desktop: Side-by-Side Layout */}
          <div className="hidden lg:flex gap-8 items-center justify-center min-h-[600px] relative">
            {/* Left: Large Central Circle - Vertically Centered */}
            <div className="flex-shrink-0 relative">
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-[#0f1f3d] to-[#1f7fd4] flex items-center justify-center shadow-2xl relative z-10">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto mb-4">
                    <img 
                      src="/assets/Images/AdviseIQ Icon.png"
                      alt="AdviseIQ"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="text-white font-bold text-3xl">Advise IQ</div>
                  <div className="text-white/90 text-lg font-semibold">Consulting Services</div>
                </div>
              </div>
            </div>

            {/* Right: Vertical Steps List */}
            <div className="flex-1 space-y-6 relative">
              {/* Vertical Connecting Line */}
              <div className="absolute left-8 top-8 bottom-8 w-0.5 bg-gradient-to-b from-[#1f7fd4] via-[#1f7fd4] to-[#1f7fd4] opacity-30"></div>
              
              {consultingSteps.map((step, index) => {
                const isExpanded = expandedStep === step.number;
                
                return (
                  <div key={step.number} className="flex items-start gap-6">
                    {/* Step Number and Title - Fixed Width */}
                    <div 
                      className="w-96 cursor-pointer group flex-shrink-0"
                      onClick={() => setExpandedStep(isExpanded ? null : step.number)}
                      data-testid={`step-node-${step.number}`}
                    >
                      <div className="flex items-center gap-4 mb-2">
                        <div className={`
                          w-16 h-16 rounded-full flex items-center justify-center font-bold text-2xl transition-all duration-300 flex-shrink-0 relative z-10 bg-background
                          ${isExpanded 
                            ? 'bg-gradient-to-br from-[#0f1f3d] to-[#1f7fd4] text-white scale-110 shadow-lg' 
                            : 'border-2 border-gray-400 dark:border-gray-500 text-foreground group-hover:border-[#1f7fd4] group-hover:text-[#1f7fd4]'
                          }
                        `}>
                          {step.number}
                        </div>
                        <div className="flex-1 flex items-center justify-between">
                          <h3 className={`
                            text-xl font-bold transition-colors
                            ${isExpanded ? 'text-[#1f7fd4]' : 'text-foreground group-hover:text-[#1f7fd4]'}
                          `}>
                            {step.title}
                          </h3>
                          <i className={`fas fa-chevron-right transition-all duration-300 ${isExpanded ? 'text-[#1f7fd4] rotate-90' : 'text-muted-foreground group-hover:text-[#1f7fd4]'}`}></i>
                        </div>
                      </div>
                      <p className="text-foreground/70 ml-20 leading-relaxed text-sm">
                        {step.description}
                      </p>
                    </div>

                    {/* Expanded Details - Appears to the right */}
                    {isExpanded && (
                      <div 
                        className="relative z-50 flex-1 min-w-[400px]"
                        data-testid={`step-details-${step.number}`}
                        style={{ 
                          background: 'linear-gradient(to bottom right, #0f1f3d, #1f7fd4)',
                          border: '3px solid #1f7fd4',
                          padding: '32px',
                          borderRadius: '12px',
                          boxShadow: '0 20px 60px rgba(31, 127, 212, 0.4)'
                        }}
                      >
                        <h4 className="text-2xl font-bold text-white mb-4">Methodology</h4>
                        <ul className="text-white/90 leading-relaxed text-base space-y-2">
                          {step.details.split(',').map((item, index) => (
                            <li key={index} className="flex items-start">
                              <span className="mr-2">•</span>
                              <span>{item.trim()}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Mobile: Vertical Stacked Layout */}
          <div className="lg:hidden space-y-6">
            {/* Central Circle for Mobile */}
            <div className="flex justify-center mb-12">
              <div className="w-48 h-48 rounded-full bg-gradient-to-br from-[#0f1f3d] to-[#1f7fd4] flex items-center justify-center shadow-2xl">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-2">
                    <img 
                      src="/assets/Images/AdviseIQ Icon.png"
                      alt="AdviseIQ"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="text-white font-bold text-xl">Advise IQ</div>
                  <div className="text-white/90 text-sm font-semibold">Consulting Services</div>
                </div>
              </div>
            </div>

            {/* Mobile Steps */}
            {consultingSteps.map((step) => {
              const isExpanded = expandedStep === step.number;
              
              return (
                <Card 
                  key={step.number} 
                  className={`
                    p-6 cursor-pointer transition-all duration-300 border-none
                    ${isExpanded ? 'ring-2 ring-[#1f7fd4] shadow-xl' : 'hover:shadow-lg'}
                  `}
                  style={{
                    background: 'linear-gradient(to bottom right, #0f1f3d, #1f7fd4)'
                  }}
                  onClick={() => setExpandedStep(isExpanded ? null : step.number)}
                  data-testid={`step-card-${step.number}`}
                >
                  <CardContent className="p-0" style={{ background: 'transparent' }}>
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`
                        w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0 transition-all text-xl font-bold
                        ${isExpanded ? 'bg-white text-[#1f7fd4]' : 'border-2 border-white/60 text-white'}
                      `}>
                        {step.number}
                      </div>
                      <div className="flex-1">
                        <h3 className={`text-lg font-bold mb-2 ${isExpanded ? 'text-white' : 'text-white'}`}>
                          {step.title}
                        </h3>
                        <p className="text-white/80 text-sm leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                    
                    {isExpanded && (
                      <div 
                        className="mt-4 pt-4 border-t border-white/30 animate-in fade-in duration-300 -mx-6 px-6 -mb-6 pb-6 rounded-b-lg"
                        style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
                      >
                        <h4 className="text-base font-bold text-white mb-3 drop-shadow-md">What We Do</h4>
                        <p className="text-white leading-relaxed mb-4 text-sm drop-shadow-sm">
                          {step.details}
                        </p>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setLocation('/contact');
                          }}
                          className="text-white hover:text-white/90 font-semibold transition-colors underline drop-shadow-sm"
                        >
                          Learn More →
                        </button>
                      </div>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* BIAN-First, Delivery-Minded - Recent Client Projects */}
      <section className="py-20 section-darker">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              BIAN-First, Delivery-Minded
            </h2>
            <p className="text-2xl text-muted-foreground mb-4">
              Strategy, Architecture, and Delivery Aligned - Across Your Enterprise
            </p>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-12">
              Our consultants are accredited BIAN practitioners with real-world experience in implementation. 
              We align strategy, architecture, and delivery, applying proven playbooks and governance to help banks 
              adopt BIAN correctly the first time—fast, compliant.
            </p>
          </div>

          {/* Recent Client Projects Subheading */}
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-4xl font-bold text-foreground mb-4">Recent Client Projects</h3>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* OTP Group */}
            <Card className="premium-card group hover:shadow-2xl transition-all duration-500">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-card-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                  OTP Group BIAN Blueprint
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Országos Takarék Pénztár Group is harmonising architecture across 11 countries using a BIAN blueprint. 
                  Early mapping identified 77 unique service domains across four core modules—23 reused—creating a tangible simplification pipeline.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  180+ domains catalogued across subsidiaries, 40 architects certified, and BIAN-aligned APIs entering production. 
                  Investment is steered by a Strategic Fit score tied to decoupling and reuse.
                </p>
              </CardContent>
            </Card>

            {/* CGD */}
            <Card className="premium-card group hover:shadow-2xl transition-all duration-500">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-card-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                  Portugal's Largest Bank
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Caixa Geral de Depósitos, Portugal's largest bank, used BIAN's Service Landscape to map 200+ applications in tranche one
                  —now driving a structured rationalisation of a 700+-app estate in its EA tool.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  The result: identified duplicates, staged decommissioning, reduced operating cost and risk, and improved time-to-market, 
                  with API alignment planned next as the reference model embeds.
                </p>
              </CardContent>
            </Card>

            {/* Big-4 AU/NZ Bank */}
            <Card className="premium-card group hover:shadow-2xl transition-all duration-500">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-card-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                  Big-4 AU/NZ Bank Core Modernization
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  A big 4 Australia/New Zealand bank is executing a multi-year core replacement anchored on BIAN, standardising service domains, 
                  semantic APIs, and a BOM-aligned data model.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Following a 2023 pilot, 12+ domains/APIs are in production, with 100+ people trained. BIAN now frames planning, design, delivery, 
                  improving reuse, speed, and governance as the program scales.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-20 section-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">What Our Clients Say</h2>
            <p className="text-xl text-muted-foreground">
              Backed by 25 years of expertise, we help teams master the latest architecture standards to design and scale with confidence
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Testimonial 1 */}
            <Card className="premium-card">
              <CardContent className="p-8">
                <div className="mb-6">
                  <i className="fas fa-quote-left text-4xl text-primary/20"></i>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6 text-lg italic">
                  "CC and C Solutions is one of the leading industry experts on Enterprise Architecture. Their deep subject matter 
                  knowledge and extensive practical experience makes all the difference."
                </p>
                <div className="flex items-center">
                  <div>
                    <p className="font-bold text-card-foreground">Tony Hudnell</p>
                    <p className="text-sm text-muted-foreground">Associate Director, Procter & Gamble</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Testimonial 2 */}
            <Card className="premium-card">
              <CardContent className="p-8">
                <div className="mb-6">
                  <i className="fas fa-quote-left text-4xl text-primary/20"></i>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6 text-lg italic">
                  "I sincerely thank the entire CC&C team for your excellent support throughout the BIAN adoption process. 
                  I truly appreciate the professionalism, responsiveness, and quality of work you've brought to this collaboration."
                </p>
                <div className="flex items-center">
                  <div>
                    <p className="font-bold text-card-foreground">Domonkos Kertesz</p>
                    <p className="text-sm text-muted-foreground">Chief IT Architect, OTP Group</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <CTASection 
        title="Ready to Transform Your Enterprise Architecture?"
        description="Let's discuss how our proven BIAN consulting approach can help you accelerate digital transformation and deliver measurable business outcomes."
        buttonText="Talk to Our Team"
      />

      <Footer />
    </div>
  );
}