import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import CTASection from "@/components/CTASection";

const targetAudience = [
  "Professionals working in Banking and Financial Industry, Enterprise, Solution, Domain, Data, Integration, Business Architects, Product Owners, and Business Analyst who need a stable, vendor-neutral blueprint for banking change.",
  "Consultants and Senior Consultants guiding transformations, target operating models, and modernization roadmaps.",
  "Tooling providers, software solution providers, integrators, and third-party service providers aligning products and services to the BIAN model.",
];

const learningObjectives = [
  "Explain the role of the key model elements in BIAN's Reference Architecture and how they fit together to support a composable bank.",
  "Understand how BIAN can be used by different disciplines and across business, application, information, and technology layers.",
  "Gain foundational knowledge, understanding, and confidence to introduce BIAN within your organization's context.",
];

const examDetails = [
  { label: "Number of questions", value: "60" },
  { label: "Duration", value: "60 min" },
  { label: "Pass mark", value: "70%" },
  { label: "Book format", value: "Closed book" },
  { label: "Language", value: "English" },
  { label: "Exam type", value: "Proctored" },
  { label: "Voucher validity", value: "One year" },
];

const courseInclusions = [
  "1 day training: virtual online trainer or in-person",
  "BIAN course materials in PDF",
  "Practice exam",
  "Mock examination with answers",
  "BIAN Foundation exam voucher for the BIAN Foundation Certification exam",
];

export default function BianFoundationTraining() {
  useEffect(() => {
    window.scrollTo(0, 0);

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "BIAN Foundation Certification Training covering BIAN core principles, service domains, business scenarios, and exam preparation through interactive in-person or virtual delivery.",
      );
    }

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute("content", "BIAN Foundation Certification Training | CC&C Solutions");
    }

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute(
        "content",
        "Build a solid BIAN foundation with expert-led certification training for banking architecture professionals.",
      );
    }

    document.title = "BIAN Foundation Certification Training | CC&C Solutions";

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
              BIAN Foundation Certification Training
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto">
              Build a strong foundation in the BIAN framework, service domains, business scenarios, and banking product development.
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
                <p className="text-muted-foreground">1 Day</p>
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
                  <i className="fas fa-book-open text-2xl text-primary"></i>
                </div>
                <h3 className="text-lg font-bold text-card-foreground mb-2">Prerequisite</h3>
                <p className="text-muted-foreground">None required</p>
              </CardContent>
            </Card>
            <Card className="premium-card">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-user-shield text-2xl text-primary"></i>
                </div>
                <h3 className="text-lg font-bold text-card-foreground mb-2">Exam</h3>
                <p className="text-muted-foreground">Proctored</p>
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
              The BIAN Foundation training program is designed to provide participants with a thorough understanding of the BIAN framework, including its core principles, concepts, and content.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              The foundation training lays the groundwork for more advanced learning and ensures that all participants develop a solid grasp of the essential elements of the BIAN framework, banking product development, service domains, and business scenarios.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              This course is delivered through in-person or virtual training sessions, giving teams flexibility while maintaining a highly interactive learning experience.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 section-darker">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">Target Audience</h2>
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

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">Learning Objectives</h2>
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {learningObjectives.map((objective, index) => (
              <Card key={index} className="premium-card">
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <i className="fas fa-graduation-cap text-primary text-xl mt-1 mr-4"></i>
                    <p className="text-muted-foreground leading-relaxed">{objective}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 section-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="premium-card">
              <CardContent className="p-8">
                <h2 className="text-2xl md:text-3xl font-bold text-card-foreground mb-6">Pre-requisite</h2>
                <p className="text-muted-foreground leading-relaxed">
                  No pre-requisite. It is helpful to have an understanding of banking and the financial industry.
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
            BIAN Foundation Certification Exam Format & Requirements
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

      <section className="py-20 section-darker">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <CTASection
            title="Ready to Start BIAN Foundation Certification Training?"
            description="Talk to CC&C Solutions about enrolling your team in interactive BIAN Foundation training with exam preparation included."
            buttonText="Enquire Today"
          />
        </div>
      </section>

      <Footer />
    </div>
  );
}