import { useEffect } from "react";
import { useLocation } from "wouter";
import Navigation from "@/components/Navigation";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import ImageZoom from "@/components/ImageZoom";
import { Card, CardContent } from "@/components/ui/card";

export default function StratIQ() {
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
        style={{ backgroundImage: 'url(/assets/Images/Dashboard.jpg)' }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-8">
            <div className="inline-block px-4 py-2 md:px-8 md:py-4 bg-white/20 border-2 border-white/40 rounded-full text-white font-bold text-2xl md:text-3xl mb-8 shadow-lg">
              StratIQ Platform
            </div>
            <h1 className="font-bold mb-8 text-3xl md:text-5xl" data-testid="heading-stratiq">
              <span className="text-white drop-shadow-lg">BIAN to </span>
              <span className="text-primary drop-shadow-lg">Boardroom</span>
            </h1>
            <p className="text-3xl md:text-4xl font-semibold text-white max-w-4xl mx-auto mb-6 drop-shadow-md">
              Real-Time Insights Driving Decisions
            </p>
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed mb-10 drop-shadow-md">
              Executive Clarity - On Demand
            </p>
          </div>
        </div>
      </section>
      {/* What the Platform Offers */}
      <section className="py-20 section-darker">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">What the StratIQ Platform Offers</h2>
          </div>

          <div className="space-y-12 max-w-5xl mx-auto">
            {/* Feature 1 */}
            <Card className="premium-card group hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 cursor-pointer">
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                      <span className="text-2xl font-bold text-primary">01</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-card-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                      From Data Noise to Decisive Next Moves
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-lg">
                      StratIQ tackles fragmented data and slide-driven reporting by mapping your estate to BIAN's service-domain 
                      language and layering AI on top. It surfaces where reuse is working, where integration cost spikes, and the next 
                      best actions—so prioritisation, funding, and sequencing move from opinion to evidence.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Feature 2 */}
            <Card className="premium-card group hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 cursor-pointer">
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center group-hover:scale-110 group-hover:bg-accent/20 transition-all duration-300">
                      <span className="text-2xl font-bold text-accent">02</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-card-foreground mb-4 group-hover:text-accent transition-colors duration-300">
                      BIAN-Mapped Clarity, Minus Heavy Integration Effort
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-lg">
                      Instead of a long plumbing project, StratIQ overlays your existing sources through a standards-based 
                      metamodel. You get a single, BIAN-aligned operating picture—domains, data and APIs—revealing duplication, 
                      gaps, and value hot-spots fast. Time-to-insight is days and weeks, not quarters.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Feature 3 */}
            <Card className="premium-card group hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 cursor-pointer">
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center group-hover:scale-110 group-hover:bg-secondary/20 transition-all duration-300">
                      <span className="text-2xl font-bold text-secondary">03</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-card-foreground mb-4 group-hover:text-secondary transition-colors duration-300">
                      Executive Answers, Not Another Dashboard—In Real Time
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-lg">
                      StratIQ converts BIAN-mapped signals into board-ready answers: where to invest, what to fix, and how to 
                      scale reuse. AI interprets patterns but stays grounded in canonical semantics, reducing analysis cycles and 
                      hallucinations—so leadership can steer with confidence and measure outcomes.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      {/* Three Pillars */}
      <section className="py-20 section-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              BIAN-Powered, AI Enabled, Real-Time Insights That Translate to Action
            </h2>
          </div>

          <div className="max-w-7xl mx-auto">
            <ImageZoom
              src="/assets/Images/StratIQ-Infographic.png" 
              alt="StratIQ Platform Infographic" 
              className="w-full min-h-[400px] md:min-h-[600px] h-auto object-contain rounded-lg shadow-2xl"
              testId="image-stratiq-infographic"
            />
          </div>
        </div>
      </section>
      {/* How It Works */}
      <section className="py-20 section-darker">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Steer Your BIAN Journey and Measure Outcomes
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              Connect your business strategy and investment decision process to your enterprise
            </p>
          </div>

          <div className="max-w-4xl mx-auto mb-12">
            <p className="text-lg text-muted-foreground leading-relaxed text-center">
              StratIQ leverages the power of BIAN and AI to connect your enterprise data at the business, 
              application, and technology layers to your strategy, without expensive integration or labour-intensive data mapping.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Real Data, Real-Time */}
            <Card className="premium-card overflow-hidden">
              <div className="w-full h-48 overflow-hidden">
                <img 
                  src="/assets/Images/Real-Time-Data.jpg" 
                  alt="Real Data, Real-Time" 
                  className="w-full h-full object-cover"
                  data-testid="image-real-time-data"
                />
              </div>
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-card-foreground mb-4">Real Data, Real-Time</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  StratIQ taps into your enterprise data, drawing from sources including your General Ledger, CRM, 
                  Application, Portfolio, Project Management and more to build a comprehensive, semantically aligned view 
                  of your business.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Thanks to its extensible, intelligent data ingestion adapter layer, StratIQ grows with your enterprise, 
                  continuing to increase value and benefit over time as you mature your BIAN adoption journey.
                </p>
              </CardContent>
            </Card>

            {/* Expert-Trained BIAN Mapper */}
            <Card className="premium-card overflow-hidden">
              <div className="w-full h-48 overflow-hidden">
                <img 
                  src="/assets/Images/BIAN-Mapper.jpg" 
                  alt="Expert-Trained BIAN Mapper" 
                  className="w-full h-full object-cover"
                  data-testid="image-bian-mapper"
                />
              </div>
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-card-foreground mb-4">Expert-Trained BIAN Mapper</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  CC&C's extensive experience in BIAN projects has enabled us to develop a world-class data mapping AI Agent, 
                  rapidly incorporating your enterprise's disparate data into a BIAN-aligned metamodel that creates semantic 
                  relationships, unlocking the ability to obtain game-changing insights from strategy down to technology.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  With human-in-the-loop incorporated into the mapping process, the risk of hallucination is eliminated, 
                  creating limitless possibilities to power your decisions through your data.
                </p>
              </CardContent>
            </Card>

            {/* AI-Powered Insights */}
            <Card className="premium-card overflow-hidden">
              <div className="w-full h-48 overflow-hidden">
                <img 
                  src="/assets/Images/AI-Insights.jpg" 
                  alt="AI-Powered Insights" 
                  className="w-full h-full object-cover"
                  data-testid="image-ai-insights"
                />
              </div>
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-card-foreground mb-4">AI-Powered Insights</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  With clear data relationships and semantic meaning overlaid on your enterprise data, our AI-powered query 
                  engine can answer any question you may have to steer your enterprise decisions, from Boardroom down to Operations.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  The Recommender Agent proactively signals next-best actions as changes flow through in real-time.
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
      {/* Industries Served Section - RETAINED */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Industries We Serve</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Specialized visualization solutions across critical sectors
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Banking */}
            <div 
              className="premium-card p-8 text-center group hover:shadow-2xl transition-all duration-500 cursor-pointer"
              onClick={() => setLocation('/banking/stratiq')}
              data-testid="industry-card-banking"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <i className="fas fa-university text-3xl text-primary-foreground"></i>
              </div>
              <h3 className="text-2xl font-bold text-card-foreground mb-4">Banking</h3>
              <p className="text-muted-foreground leading-relaxed">
                Visualize banking architecture landscapes and digital transformation roadmaps
              </p>
            </div>
            
            {/* Insurance - Static */}
            <div 
              className="premium-card p-8 text-center opacity-75"
              data-testid="industry-card-insurance"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-accent to-accent/80 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-shield-alt text-3xl text-accent-foreground"></i>
              </div>
              <h3 className="text-2xl font-bold text-card-foreground mb-4">Insurance</h3>
              <p className="text-muted-foreground leading-relaxed">
                Visualization tools for insurance systems modernization
              </p>
              <p className="text-sm text-muted-foreground mt-4 italic">
                Coming soon
              </p>
            </div>
            
            {/* Manufacturing - Static */}
            <div 
              className="premium-card p-8 text-center opacity-75"
              data-testid="industry-card-manufacturing"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-secondary to-secondary/80 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-industry text-3xl text-secondary-foreground"></i>
              </div>
              <h3 className="text-2xl font-bold text-card-foreground mb-4">Manufacturing</h3>
              <p className="text-muted-foreground leading-relaxed">
                Architecture visualization for smart manufacturing and Industry 4.0
              </p>
              <p className="text-sm text-muted-foreground mt-4 italic">
                Coming soon
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection 
        title="Transform Your Architecture Visualization"
        description="See how StratIQ can help you turn complex architectures into clear, actionable insights that drive better decisions."
        buttonText="Request a Demo"
      />

      <Footer />
    </div>
  );
}
