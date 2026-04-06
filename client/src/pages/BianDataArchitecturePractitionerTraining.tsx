import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import CTASection from "@/components/CTASection";

const targetAudience = [
  "Enterprise Architects",
  "Solution Architects",
  "Data Architects",
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
  "BIAN Data Architecture Certification exam voucher",
];

export default function BianDataArchitecturePractitionerTraining() {
  useEffect(() => {
    window.scrollTo(0, 0);

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "BIAN Data Architecture Practitioner Certification Training covering the BIAN Object Model, modelling patterns, and reference architecture concepts for financial services design.",
      );
    }

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute("content", "BIAN Data Architecture Practitioner Certification Training | CC&C Solutions");
    }

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute(
        "content",
        "Advance your BIAN capability with practitioner-level data architecture and design training for interoperable financial services architecture.",
      );
    }

    document.title = "BIAN Data Architecture Practitioner Certification Training | CC&C Solutions";

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
              BIAN Data Architecture Practitioner Certification Training
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto">
              Practitioner-level training on the BIAN Object Model, modelling patterns, and reference architecture concepts for financial services design.
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
                  <i className="fas fa-database text-2xl text-primary"></i>
                </div>
                <h3 className="text-lg font-bold text-card-foreground mb-2">Focus</h3>
                <p className="text-muted-foreground">Object model and design</p>
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
              The BIAN Data Architecture & Design Practitioner will have the ability to realize the added value of the BIAN Object Model. They have the required knowledge and understanding of the general design principles and elements of BIAN's Reference Architecture for the Financial Industry.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Participants will understand the underlying ArchiMate and UML-based concepts used by BIAN to model the Object Model and learn to apply BIAN modelling patterns.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              This course is delivered through in-person and virtual training sessions, offering flexibility while maintaining a highly interactive learning experience.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 section-darker">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">Target Audience</h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-center max-w-4xl mx-auto mb-10">
            The BIAN Data Architecture Practitioner Certification is an advanced, applied-level certification that builds upon the BIAN Foundation Certification.
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
            This certification validates the capability to apply BIAN concepts and artefacts within an enterprise architecture context. Participants will learn how to model financial institutions using BIAN Service Domains, Capabilities, and Business Scenarios, ensuring alignment between business and IT through standardized architectural practices.
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
            BIAN Data Architecture Practitioner Certification Exam Format & Requirements
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
            title="Ready to Build BIAN Data Architecture Capability?"
            description="Talk to CC&C Solutions about practitioner-level training for BIAN data architecture, modelling patterns, and object model design."
            buttonText="Enquire Today"
          />
        </div>
      </section>

      <Footer />
    </div>
  );
}