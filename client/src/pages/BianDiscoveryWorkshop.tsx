import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import CTASection from "@/components/CTASection";

const clientTestimonials = [
  {
    id: "1",
    quote:
      "Our partnership with CC&C Solutions has been transformative in accelerating our digital transformation journey. Their expertise in enterprise architecture, BIAN operating model, and agile methodologies has been instrumental in helping us shift to a product-oriented organization. Through their training and consulting services, we've gained the tools and strategies needed to achieve our vision of becoming a leading credit union in the US. The team's professionalism, industry knowledge, and commitment to our success have exceeded our expectations at every step",
    author: "Ashish Chopra",
    role: "Chief Information Officer, Texas Dow Employee Credit Union",
  },
  {
    id: "2",
    quote:
      "I sincerely thank the entire CC&C team for your excellent support throughout the BIAN adoption process. I truly appreciate the professionalism, responsiveness, and quality of work you've brought to this collaboration.",
    author: "Domonkos Kertesz",
    role: "Chief IT Architect, OTP Group",
  },
  {
    id: "3",
    quote:
      "ANZ has discovered CC&C Solutions to be an invaluable partner in our BIAN journey. Their extensive knowledge and collaborative approach have contributed significantly to our success. The guidance, training, and support they provide are essential to our successful implementation",
    author: "Arran Price",
    role: "Enterprise Architect, ANZ New Zealand",
  },
];

const whatsIncluded = [
  "Stakeholder discovery sessions",
  "Current-state architecture review",
  "BIAN scope and use case prioritisation",
  "Business case inputs and recommendations",
  "Executive summary deliverable",
];

const workshopOutcomes = [
  "Tailored BIAN scope assessment",
  "Prioritised use case shortlist aligned to your strategy",
  "Foundations of a business case linking BIAN adoption to measurable outcomes",
  "Clarity on reducing duplication, accelerating delivery, improving data quality, or enabling AI at scale",
];

const whyCcc = [
  "BIAN-certified consulting and training organisation",
  "BIAN Best-in-Class Partner award winner (2024 and 2025)",
  "Contributor to the BIAN framework with a global footprint",
  "Deep banking domain expertise and real-world implementation experience — not just theory",
];

export default function BianDiscoveryWorkshop() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
    slidesToScroll: 1,
  });

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    window.scrollTo(0, 0);

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "BIAN Discovery Workshop from CC&C Solutions — identify your highest-value BIAN use cases and build a compelling, evidence-based business case for adoption.",
      );
    }

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute("content", "BIAN Discovery Workshop | CC&C Solutions");
    }

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute(
        "content",
        "Focused BIAN discovery engagement for banks and financial institutions — stakeholder sessions, scope assessment, and executive-ready business case foundations.",
      );
    }

    document.title = "BIAN Discovery Workshop | CC&C Solutions";

    return () => {
      document.title = "CC&C Solutions";
      if (metaDescription) {
        metaDescription.setAttribute(
          "content",
          "CC&C Solutions - Enterprise Architecture Training and Consulting",
        );
      }
      if (ogTitle) {
        ogTitle.setAttribute("content", "CC&C Solutions");
      }
      if (ogDescription) {
        ogDescription.setAttribute(
          "content",
          "CC&C Solutions - Enterprise Architecture Training and Consulting",
        );
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="pt-32 pb-20 section-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Link href="/bian-training">
              <a className="inline-flex items-center text-primary hover:text-primary/80 mb-6 font-semibold transition-colors group" data-testid="link-back-to-bian-training">
                <i className="fas fa-arrow-left mr-2 group-hover:-translate-x-1 transition-transform"></i>
                Back to BIAN Training
              </a>
            </Link>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              BIAN Discovery Workshop
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto">
              Build your BIAN business case — fast
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-6 mb-16">
            <Card className="premium-card">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-clock text-2xl text-primary"></i>
                </div>
                <h3 className="text-lg font-bold text-card-foreground mb-2">Duration</h3>
                <p className="text-muted-foreground">Typically 1–2 weeks</p>
              </CardContent>
            </Card>
            <Card className="premium-card">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-laptop-house text-2xl text-primary"></i>
                </div>
                <h3 className="text-lg font-bold text-card-foreground mb-2">Delivery</h3>
                <p className="text-muted-foreground">On-site or virtual</p>
              </CardContent>
            </Card>
            <Card className="premium-card">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-lightbulb text-2xl text-primary"></i>
                </div>
                <h3 className="text-lg font-bold text-card-foreground mb-2">Focus</h3>
                <p className="text-muted-foreground">Use cases and business case</p>
              </CardContent>
            </Card>
            <Card className="premium-card">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-users text-2xl text-primary"></i>
                </div>
                <h3 className="text-lg font-bold text-card-foreground mb-2">Stakeholders</h3>
                <p className="text-muted-foreground">Architecture, technology, business, product</p>
              </CardContent>
            </Card>
            <Card className="premium-card">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-file-alt text-2xl text-primary"></i>
                </div>
                <h3 className="text-lg font-bold text-card-foreground mb-2">Deliverable</h3>
                <p className="text-muted-foreground">Executive summary</p>
              </CardContent>
            </Card>
          </div>

          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Not sure where BIAN fits in your organisation, or how to make the case for adoption? CC&amp;C&apos;s BIAN Discovery Workshop is a focused engagement designed to help financial institutions identify their highest-value BIAN use cases and build a compelling, evidence-based business case for adoption.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Led by CC&amp;C&apos;s experienced BIAN consultants, the workshop brings together your key stakeholders — from architecture and technology to business and product — for a structured series of working sessions. Together, we explore your strategic objectives, pain points, current-state architecture, and priority areas of opportunity.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              The workshop delivers a tailored BIAN scope assessment, a prioritised use case shortlist aligned to your strategy, and the foundations of a business case that links BIAN adoption to measurable outcomes — whether that&apos;s reducing duplication, accelerating delivery, improving data quality, or enabling AI at scale.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              As a BIAN-accredited consulting and training organisation with deep banking domain expertise, CC&amp;C brings real-world implementation experience to every engagement — not just theory.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 section-darker">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">Who Is This For?</h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-center max-w-4xl mx-auto mb-10">
            Banks, credit unions, and financial services organisations exploring BIAN adoption or looking to define the scope and business case for their BIAN journey.
          </p>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { icon: "fa-university", label: "Banks" },
              { icon: "fa-piggy-bank", label: "Credit unions" },
              { icon: "fa-chart-line", label: "Financial services organisations defining BIAN scope" },
            ].map((item, index) => (
              <Card key={index} className="premium-card">
                <CardContent className="p-6 text-center">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <i className={`fas ${item.icon} text-primary`}></i>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{item.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="pt-20 pb-0 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">What&apos;s Included?</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-16">
            {whatsIncluded.map((item, index) => (
              <div key={index} className="flex items-start">
                <i className="fas fa-check-circle text-primary mt-1 mr-3 shrink-0"></i>
                <p className="text-muted-foreground leading-relaxed">{item}</p>
              </div>
            ))}
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">Workshop Outcomes</h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-center max-w-4xl mx-auto mb-10">
            Structured working sessions that turn discovery into actionable BIAN direction for your organisation.
          </p>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {workshopOutcomes.map((item, index) => (
              <div key={index} className="flex items-start">
                <i className="fas fa-check-circle text-primary mt-1 mr-3 shrink-0"></i>
                <p className="text-muted-foreground leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 section-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="premium-card">
              <CardContent className="p-8">
                <h2 className="text-2xl md:text-3xl font-bold text-card-foreground mb-6">Delivery Format</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  On-site or virtual delivery, depending on your preference and team location.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Typically runs over 1–2 weeks depending on scope, stakeholder availability, and the depth of current-state review required.
                </p>
              </CardContent>
            </Card>

            <Card className="premium-card">
              <CardContent className="p-8">
                <h2 className="text-2xl md:text-3xl font-bold text-card-foreground mb-6">Why CC&amp;C?</h2>
                <div className="space-y-4">
                  {whyCcc.map((item, index) => (
                    <div key={index} className="flex items-start">
                      <i className="fas fa-check-circle text-primary mt-1 mr-3"></i>
                      <p className="text-muted-foreground">{item}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="pt-20 pb-12 section-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">What Our Clients Say</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Backed by 25 years of expertise, we help teams master the latest architecture standards to design and scale with confidence
            </p>
          </div>

          <div className="relative max-w-6xl mx-auto px-4 md:px-14">
            <button
              type="button"
              onClick={scrollPrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-11 h-11 md:w-12 md:h-12 rounded-full bg-card border border-border shadow-lg flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label="Previous testimonials"
            >
              <i className="fas fa-chevron-left"></i>
            </button>

            <button
              type="button"
              onClick={scrollNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-11 h-11 md:w-12 md:h-12 rounded-full bg-card border border-border shadow-lg flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label="Next testimonials"
            >
              <i className="fas fa-chevron-right"></i>
            </button>

            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex">
                {clientTestimonials.map((testimonial) => (
                  <div
                    key={testimonial.id}
                    className="flex-[0_0_100%] md:flex-[0_0_50%] min-w-0 px-3"
                  >
                    <Card className="premium-card h-full">
                      <CardContent className="p-8 flex flex-col h-full">
                        <div className="mb-6">
                          <i className="fas fa-quote-left text-4xl text-primary/20"></i>
                        </div>
                        <p className="text-muted-foreground leading-relaxed mb-6 text-lg italic flex-1">
                          &ldquo;{testimonial.quote}&rdquo;
                        </p>
                        <div>
                          <p className="font-bold text-card-foreground">{testimonial.author}</p>
                          <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-8 pb-20 section-darker">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <CTASection
            title="Ready to Build Your BIAN Business Case?"
            description="Talk to CC&C Solutions about a BIAN Discovery Workshop to identify your highest-value use cases and create an evidence-based path for adoption."
            buttonText="Enquire Today"
          />
        </div>
      </section>

      <Footer />
    </div>
  );
}
