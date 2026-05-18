import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import CTASection from "@/components/CTASection";

const targetAudience = [
  "Enterprise Architects",
  "Solution Architects",
  "Business and Information Architects",
  "IT and Systems Architects",
  "Integration Specialists",
  "Technology Consultants and Advisors in the financial sector",
  "Transformation and Change Managers",
  "Developers and API Designers who work with BIAN-aligned systems",
  "Business Analysts and Functional Designers working on interoperability projects",
  "Consultants supporting BIAN adoption within banks",
];

const examDetails = [
  { label: "Number of questions", value: "60" },
  { label: "Duration", value: "60 min" },
  { label: "Pass mark", value: "70%" },
  { label: "Book format", value: "Closed book" },
  { label: "Language", value: "English" },
  { label: "Exam type", value: "Online proctored" },
  { label: "Voucher validity", value: "One year" },
];

const courseInclusions = [
  "2 days training: virtual online trainer or in-person",
  "BIAN course materials in PDF",
  "Practice exam",
  "Mock examination with answers",
  "BIAN Practitioner exam voucher for the BIAN Practitioner Certification exam",
];

export default function BianPractitionerTraining() {
  useEffect(() => {
    window.scrollTo(0, 0);

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "BIAN Practitioner Certification Training for professionals applying the BIAN standard to interoperable, modular banking architectures in real-world delivery contexts.",
      );
    }

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute("content", "BIAN Practitioner Certification Training | CC&C Solutions");
    }

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute(
        "content",
        "Advance from BIAN Foundation to practical architecture application with expert-led BIAN Practitioner training.",
      );
    }

    document.title = "BIAN Practitioner Certification Training | CC&C Solutions";

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
              BIAN Practitioner Certification Training
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto">
              Move beyond conceptual understanding and learn to apply the BIAN standard in real-world banking architecture.
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
                <p className="text-muted-foreground">2 Days</p>
              </CardContent>
            </Card>
            <Card className="premium-card">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-laptop-house text-2xl text-primary"></i>
                </div>
                <h3 className="text-lg font-bold text-card-foreground mb-2">Delivery</h3>
                <p className="text-muted-foreground">In person or virtual</p>
              </CardContent>
            </Card>
            <Card className="premium-card">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-award text-2xl text-primary"></i>
                </div>
                <h3 className="text-lg font-bold text-card-foreground mb-2">Pre-requisite</h3>
                <p className="text-muted-foreground">BIAN Foundation Certification</p>
              </CardContent>
            </Card>
            <Card className="premium-card">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-user-shield text-2xl text-primary"></i>
                </div>
                <h3 className="text-lg font-bold text-card-foreground mb-2">Exam</h3>
                <p className="text-muted-foreground">Online proctored</p>
              </CardContent>
            </Card>
            <Card className="premium-card">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-ticket-alt text-2xl text-primary"></i>
                </div>
                <h3 className="text-lg font-bold text-card-foreground mb-2">Voucher</h3>
                <p className="text-muted-foreground">Included</p>
              </CardContent>
            </Card>
          </div>

          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              The BIAN Architecture Practitioner Certification is the next level after the BIAN Foundation Certification. It is designed for professionals who want to apply the BIAN standard in real-world banking architecture, going beyond conceptual understanding to practical implementation.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              This certification focuses on how to use the BIAN framework, metamodel, and service landscape to design and evolve interoperable, modular financial services architectures.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              This course is delivered through in-person and virtual training sessions, giving teams flexibility while maintaining a highly interactive learning experience.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 section-darker">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">Target Audience</h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-center max-w-4xl mx-auto mb-10">
            The BIAN Architecture Practitioner Certification is intended for professionals who work in or with financial institutions and are involved in architecture, design, and digital transformation.
          </p>
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {targetAudience.map((audience, index) => (
              <Card key={index} className="premium-card">
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mr-4 shrink-0">
                      <i className="fas fa-user-tie text-primary"></i>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{audience}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="pt-20 pb-0 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">Learning Objectives</h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-center max-w-4xl mx-auto mb-0">
            BIAN Practitioner course validates that professionals can effectively use and apply BIAN concepts, artefacts, and Framework within their organization's architectural context. It ensures participants can translate business needs into architectural solutions aligned with the BIAN standard.
          </p>
        </div>
      </section>

      <section className="py-20 section-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="premium-card">
              <CardContent className="p-8">
                <h2 className="text-2xl md:text-3xl font-bold text-card-foreground mb-6">Pre-requisite</h2>
                <p className="text-muted-foreground leading-relaxed">
                  BIAN Foundation Certification.
                </p>
              </CardContent>
            </Card>

            <Card className="premium-card">
              <CardContent className="p-8">
                <h2 className="text-2xl md:text-3xl font-bold text-card-foreground mb-6">Course Inclusions</h2>
                <div className="space-y-4">
                  {courseInclusions.map((item, index) => (
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

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
            BIAN Practitioner Certification Exam Format & Requirements
          </h2>
          <div className="max-w-4xl mx-auto">
            <Card className="premium-card">
              <CardContent className="p-8">
                <div className="space-y-4">
                  {examDetails.map((detail) => (
                    <div key={detail.label} className="flex justify-between gap-6 border-b border-border pb-3 last:border-b-0 last:pb-0">
                      <span className="text-muted-foreground">{detail.label}</span>
                      <span className="text-card-foreground font-semibold text-right">{detail.value}</span>
                    </div>
                  ))}
                </div>
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

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Testimonial 1 */}
            <Card className="premium-card">
              <CardContent className="p-8">
                <div className="mb-6">
                  <i className="fas fa-quote-left text-4xl text-primary/20"></i>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6 text-lg italic">
                  "Our partnership with CC&C Solutions has been transformative in accelerating our
digital transformation journey. Their expertise in enterprise architecture, BIAN
operating model, and agile methodologies has been instrumental in helping us shift to
a product-oriented organization. Through their training and consulting services, we've
gained the tools and strategies needed to achieve our vision of becoming a leading
credit union in the US. The team's professionalism, industry knowledge, and
commitment to our success have exceeded our expectations at every step"
                </p>
                <div className="flex items-center">
                  <div>
                    <p className="font-bold text-card-foreground">Ashish Chopra</p>
                    <p className="text-sm text-muted-foreground">Chief Information Officer, Texas Dow Employee Credit Union</p>
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
                  "I sincerely thank the entire CC&C team for your excellent support throughout the
BIAN adoption process. I truly appreciate the professionalism, responsiveness, and
quality of work you've brought to this collaboration."
                </p>
                <div className="flex items-center">
                  <div>
                    <p className="font-bold text-card-foreground">Domonkos Kertesz</p>
                    <p className="text-sm text-muted-foreground">Chief IT Architect, OTP Group</p>
                  </div>
                </div>
              </CardContent>
            </Card>

     {/* Testimonial 3 */}
            <Card className="premium-card">
              <CardContent className="p-8">
                <div className="mb-6">
                  <i className="fas fa-quote-left text-4xl text-primary/20"></i>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6 text-lg italic">
"ANZ has discovered CC&C Solutions to be an invaluable partner in our BIAN journey.
Their extensive knowledge and collaborative approach have contributed significantly
to our success. The guidance, training, and support they provide are essential to our
successful implementation"                </p>
                <div className="flex items-center">
                  <div>
                    <p className="font-bold text-card-foreground">Arran Price</p>
                    <p className="text-sm text-muted-foreground">Enterprise Architect, ANZ New Zealand</p>
                  </div>
                </div>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>




      <section className="py-20 section-darker">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <CTASection
            title="Ready to Advance to BIAN Practitioner Certification?"
            description="Talk to CC&C Solutions about practitioner training that turns BIAN knowledge into practical architecture capability."
            buttonText="Enquire Today"
          />
        </div>
      </section>

      <Footer />
    </div>
  );
}