import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import CTASection from "@/components/CTASection";
import PdfDownloadForm from "@/components/PdfDownloadForm";

const ADVISORY_CONSULTING_PDF_URL =
  "/assets/pdf_downloads/BIAN Advisory & Implementation Consulting.pdf";
const ADVISORY_CONSULTING_FORMSPREE = "https://formspree.io/f/mwvzgopl";

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

const whatWeDeliver = [
  "BIAN reference blueprint and service landscape",
  "Application-to-Service Domain mapping",
  "BIAN-aligned API design and specification",
  "Data model alignment to BIAN BOM",
  "Business architecture and capability mapping",
  "Design evaluation and certification",
  "Governance framework and Centre of Enablement",
  "Embedded coaching and knowledge transfer",
];

const engagementModels = [
  "Advisory consulting",
  "Embedded consulting within your teams",
  "Programme-based delivery",
  "On-site, hybrid, or remote engagement",
];

const whyCcc = [
  "BIAN-accredited organisation with fully certified consultants",
  "Two-time BIAN Best-in-Class Partner Award winner (2024 and 2025)",
  "Globally accredited BIAN training provider",
  "Back-to-back recognition for BIAN consulting excellence",
];

export default function BianAdvisoryImplementationConsulting() {
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
        "BIAN Advisory & Implementation Consulting from CC&C Solutions — expert BIAN consultants embedded in your organisation for reference architecture, API design, data alignment, and governance.",
      );
    }

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute("content", "BIAN Advisory & Implementation Consulting | CC&C Solutions");
    }

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute(
        "content",
        "Two-time BIAN Best-in-Class Partner delivering hands-on advisory, embedded consulting, and programme-based BIAN adoption for banks and financial institutions worldwide.",
      );
    }

    document.title = "BIAN Advisory & Implementation Consulting | CC&C Solutions";

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
              BIAN Advisory &amp; Implementation Consulting
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto">
              Expert BIAN consultants embedded in your organisation
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
                  <i className="fas fa-certificate text-2xl text-primary"></i>
                </div>
                <h3 className="text-lg font-bold text-card-foreground mb-2">BIAN Accredited</h3>
                <p className="text-muted-foreground">Fully certified consultants</p>
              </CardContent>
            </Card>
            <Card className="premium-card">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-award text-2xl text-primary"></i>
                </div>
                <h3 className="text-lg font-bold text-card-foreground mb-2">Best-in-Class Partner</h3>
                <p className="text-muted-foreground">2024 and 2025 award winner</p>
              </CardContent>
            </Card>
            <Card className="premium-card">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-handshake text-2xl text-primary"></i>
                </div>
                <h3 className="text-lg font-bold text-card-foreground mb-2">Engagement</h3>
                <p className="text-muted-foreground">Advisory, embedded, or programme-based</p>
              </CardContent>
            </Card>
            <Card className="premium-card">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-laptop-house text-2xl text-primary"></i>
                </div>
                <h3 className="text-lg font-bold text-card-foreground mb-2">Delivery</h3>
                <p className="text-muted-foreground">On-site, hybrid, or remote</p>
              </CardContent>
            </Card>
            <Card className="premium-card">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-globe text-2xl text-primary"></i>
                </div>
                <h3 className="text-lg font-bold text-card-foreground mb-2">Global Reach</h3>
                <p className="text-muted-foreground">APAC, UK, Europe, Africa, Americas</p>
              </CardContent>
            </Card>
          </div>

          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Adopting BIAN is more than a reference architecture exercise — it requires deep expertise in how the standard translates into real-world banking architecture, API design, data alignment, and governance.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              As a BIAN-accredited organisation and two-time winner of BIAN&apos;s Best In Class Partner Award (2024 and 2025), CC&amp;C&apos;s consulting services bring the required expertise directly into your organisation.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Our consultants work alongside your architecture, technology, and delivery teams to apply BIAN correctly across the full spectrum of adoption activities. This includes establishing a BIAN-aligned reference blueprint, mapping your application landscape to BIAN Service Domains, designing BIAN-conformant APIs, aligning your data model to the BIAN Business Object Model (BOM), and standing up governance frameworks that ensure long-term compliance and value.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Whether you&apos;re at the start of your BIAN journey or looking to accelerate an existing programme, CC&amp;C provides the hands-on expertise to move from strategy to execution. We&apos;ve supported banks and financial institutions across Australia, New Zealand, Asia-Pacific, the UK, Europe, Africa, and North America — bringing global experience with local delivery.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 section-darker">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">Who Is This For?</h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-center max-w-4xl mx-auto mb-10">
            Banks, credit unions, fintechs, and financial services organisations adopting or scaling BIAN.
          </p>
          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { icon: "fa-university", label: "Banks" },
              { icon: "fa-piggy-bank", label: "Credit unions" },
              { icon: "fa-mobile-alt", label: "Fintechs" },
              { icon: "fa-chart-line", label: "Financial services organisations scaling BIAN" },
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
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">What We Deliver</h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-center max-w-4xl mx-auto mb-10">
            End-to-end BIAN adoption support across architecture, integration, data, and governance.
          </p>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {whatWeDeliver.map((item, index) => (
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
                <h2 className="text-2xl md:text-3xl font-bold text-card-foreground mb-6">Engagement Models</h2>
                <div className="space-y-4">
                  {engagementModels.map((item, index) => (
                    <div key={index} className="flex items-start">
                      <i className="fas fa-check-circle text-primary mt-1 mr-3"></i>
                      <p className="text-muted-foreground">{item}</p>
                    </div>
                  ))}
                </div>
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

      <PdfDownloadForm
        sectionTitle="Download BIAN Advisory & Implementation Consulting Brochure"
        resourceTitle="BIAN Advisory & Implementation Consulting"
        pdfUrl={ADVISORY_CONSULTING_PDF_URL}
        pdfFileName="BIAN Advisory & Implementation Consulting.pdf"
        formspreeEndpoint={ADVISORY_CONSULTING_FORMSPREE}
      />

      <section className="pt-8 pb-20 section-darker">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <CTASection
            title="Ready to Accelerate Your BIAN Adoption?"
            description="Talk to CC&C Solutions about advisory and implementation consulting to move from BIAN strategy to execution with accredited experts embedded in your team."
            buttonText="Enquire Today"
          />
        </div>
      </section>

      <Footer />
    </div>
  );
}
