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

const whatsCovered = [
  "What is BIAN and why it matters now",
  "How BIAN applies to your organisation",
  "Business value: cost, speed, risk, and AI readiness",
  "Real-world case studies from banking",
  "Decision framework for BIAN adoption",
];

const workshopOutcomes = [
  "Clear understanding of what BIAN is and how it applies to your organisation",
  "Tangible business benefits: reduced complexity, faster time-to-market, and better data governance",
  "A credible foundation for AI and digital transformation initiatives",
  "Knowledge to sponsor, champion, and make informed decisions about BIAN adoption",
];

const whyCcc = [
  "BIAN-certified consulting and training organisation",
  "BIAN Best-in-Class Partner award winner (2024 and 2025)",
  "Contributor to the BIAN framework with a global footprint",
  "Real-world banking case studies and client experience from leading financial institutions",
];

export default function BianExecutiveWorkshop() {
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
        "BIAN Executive Workshop from CC&C Solutions — BIAN translated for the boardroom. Strategic sessions for C-suite and senior leaders on business value, adoption, and digital transformation.",
      );
    }

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute("content", "BIAN Executive Workshop | CC&C Solutions");
    }

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute(
        "content",
        "Half-day or full-day executive workshop helping senior leaders understand BIAN as a strategic lever — cost, speed, risk, and AI readiness for banks and financial services.",
      );
    }

    document.title = "BIAN Executive Workshop | CC&C Solutions";

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
              BIAN Executive Workshop
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto">
              BIAN translated for the boardroom
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
                <p className="text-muted-foreground">Half-day or full-day</p>
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
                  <i className="fas fa-briefcase text-2xl text-primary"></i>
                </div>
                <h3 className="text-lg font-bold text-card-foreground mb-2">Audience</h3>
                <p className="text-muted-foreground">C-suite and senior leaders</p>
              </CardContent>
            </Card>
            <Card className="premium-card">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-chart-line text-2xl text-primary"></i>
                </div>
                <h3 className="text-lg font-bold text-card-foreground mb-2">Focus</h3>
                <p className="text-muted-foreground">Strategic business outcomes</p>
              </CardContent>
            </Card>
            <Card className="premium-card">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-gavel text-2xl text-primary"></i>
                </div>
                <h3 className="text-lg font-bold text-card-foreground mb-2">Outcome</h3>
                <p className="text-muted-foreground">Informed adoption decisions</p>
              </CardContent>
            </Card>
          </div>

          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              For BIAN to gain traction in any organisation, leadership needs to understand it — not as a technical standard, but as a strategic lever. CC&amp;C&apos;s BIAN Executive Workshop is purpose-built for C-suite executives, CIOs, CTOs, CDOs, and senior leaders in both technology and business.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              This workshop cuts through the complexity of BIAN and translates it into the language of business outcomes. Participants gain a clear understanding of what BIAN is, how it applies to their organisation, and — critically — how it delivers tangible benefit: reduced complexity, faster time-to-market, better data governance, and a credible foundation for AI and digital transformation.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              The session uses real-world banking case studies and CC&amp;C&apos;s client experience to show how leading financial institutions are using BIAN to modernise their architecture, eliminate duplication, and unlock new capabilities — without multi-year transformation programmes.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Designed to be interactive and outcome-focused, the workshop equips senior leaders with the knowledge they need to sponsor, champion, and make informed decisions about BIAN adoption.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 section-darker">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">Who Is This For?</h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-center max-w-4xl mx-auto mb-10">
            C-suite executives, CIOs, CTOs, CDOs, Heads of Architecture, and senior business and technology leaders in banks and financial services.
          </p>
          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { icon: "fa-user-tie", label: "C-suite executives" },
              { icon: "fa-server", label: "CIOs, CTOs, and CDOs" },
              { icon: "fa-sitemap", label: "Heads of Architecture" },
              { icon: "fa-building", label: "Senior business and technology leaders" },
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
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">What&apos;s Covered?</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-16">
            {whatsCovered.map((item, index) => (
              <div key={index} className="flex items-start">
                <i className="fas fa-check-circle text-primary mt-1 mr-3 shrink-0"></i>
                <p className="text-muted-foreground leading-relaxed">{item}</p>
              </div>
            ))}
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">Workshop Outcomes</h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-center max-w-4xl mx-auto mb-10">
            Interactive, outcome-focused sessions that equip leadership to champion BIAN with confidence.
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
                  Half-day or full-day executive session, tailored to your leadership team&apos;s schedule and priorities.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Delivered on-site or virtually to maximise participation from senior stakeholders across business and technology.
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
            title="Ready to Bring BIAN to Your Leadership Team?"
            description="Talk to CC&C Solutions about a BIAN Executive Workshop that translates BIAN into strategic business outcomes for your senior leaders."
            buttonText="Enquire Today"
          />
        </div>
      </section>

      <Footer />
    </div>
  );
}
