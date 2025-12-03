import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import CTASection from "@/components/CTASection";

export default function TogafPractitioner() {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'TOGAF® Practitioner certification based on TOGAF Standard 10th Edition. Earn your certification with expert trainers who teach not just what, but why of Enterprise Architecture.');
    }

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', 'TOGAF® Practitioner Certification | CC&C Solutions');
    }

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', 'Learn the updated TOGAF Standard 10th Edition with our comprehensive 4-day certification training covering agile architecture, digital transformation, and modern EA practices.');
    }

    document.title = 'TOGAF® Practitioner Certification | CC&C Solutions';

    return () => {
      document.title = 'CC&C Solutions';
      if (metaDescription) {
        metaDescription.setAttribute('content', 'CC&C Solutions - Enterprise Architecture Training and Consulting');
      }
      if (ogTitle) {
        ogTitle.setAttribute('content', 'CC&C Solutions');
      }
      if (ogDescription) {
        ogDescription.setAttribute('content', 'CC&C Solutions - Enterprise Architecture Training and Consulting');
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 section-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Link href="/ccandc-training">
              <a className="inline-flex items-center text-primary hover:text-primary/80 mb-6 font-semibold transition-colors group" data-testid="link-back-to-training">
                <i className="fas fa-arrow-left mr-2 group-hover:-translate-x-1 transition-transform"></i>
                Back to Training
              </a>
            </Link>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              TOGAF® Practitioner
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto mb-4">
              Based on the Updated TOGAF® Standard, 10th Edition
            </p>
            <p className="text-sm text-muted-foreground italic">
              TOGAF is a registered trademark of The Open Group
            </p>
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-6 mb-16">
            <Card className="premium-card">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-clock text-2xl text-primary"></i>
                </div>
                <h3 className="text-lg font-bold text-card-foreground mb-2">Duration</h3>
                <p className="text-muted-foreground">4 Days</p>
              </CardContent>
            </Card>
            <Card className="premium-card">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-laptop text-2xl text-primary"></i>
                </div>
                <h3 className="text-lg font-bold text-card-foreground mb-2">Delivery</h3>
                <p className="text-muted-foreground">Virtual Online</p>
              </CardContent>
            </Card>
            <Card className="premium-card">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-book-open text-2xl text-primary"></i>
                </div>
                <h3 className="text-lg font-bold text-card-foreground mb-2">Prerequisites</h3>
                <p className="text-muted-foreground">None</p>
              </CardContent>
            </Card>
            <Card className="premium-card">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-ticket-alt text-2xl text-primary"></i>
                </div>
                <h3 className="text-lg font-bold text-card-foreground mb-2">Exam Voucher</h3>
                <p className="text-muted-foreground">Yes</p>
              </CardContent>
            </Card>
            <Card className="premium-card">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-certificate text-2xl text-primary"></i>
                </div>
                <h3 className="text-lg font-bold text-card-foreground mb-2">Certification</h3>
                <p className="text-muted-foreground">Yes</p>
              </CardContent>
            </Card>
          </div>

          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              <strong>TOGAF® Practitioner</strong> is the most up-to-date TOGAF certification, reflecting the many enhancements and updates found in The TOGAF Standard, 10th Edition, released in 2022.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              The core TOGAF Body of Knowledge has been extended to include modern concerns such as agile architecture, digital transformation and the Digital Enterprise, capability based planning, fully integrated risk and security and much more. Earn your TOGAF Practitioner certificate with our expert trainers: Experienced architects who will teach you not only the What, but also the Why of Enterprise Architecture.
            </p>
          </div>
        </div>
      </section>

      {/* Why TOGAF Certification */}
      <section className="py-20 section-darker">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">Why TOGAF Certification?</h2>
          <div className="max-w-4xl mx-auto mb-12">
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              The TOGAF® Standard is the open Enterprise Architecture standard used by the world's leading organizations to effectively align IT investment with business goals to optimize business value.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              TOGAF certification is a requirement for many job roles, and is often the key to better compensation and advancement opportunities. Understanding the language and methods of Enterprise Architecture is important for success in many related roles.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <Card className="premium-card">
              <CardContent className="p-6">
                <div className="flex items-start">
                  <i className="fas fa-check-circle text-primary text-2xl mt-1 mr-4"></i>
                  <p className="text-muted-foreground leading-relaxed">
                    Used by the world's leading enterprises to certify a common body of core knowledge about the methodology and framework
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card className="premium-card">
              <CardContent className="p-6">
                <div className="flex items-start">
                  <i className="fas fa-check-circle text-primary text-2xl mt-1 mr-4"></i>
                  <p className="text-muted-foreground leading-relaxed">
                    A trusted, vendor-neutral, globally recognized and portable credential
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card className="premium-card">
              <CardContent className="p-6">
                <div className="flex items-start">
                  <i className="fas fa-check-circle text-primary text-2xl mt-1 mr-4"></i>
                  <p className="text-muted-foreground leading-relaxed">
                    Valuable in demonstrating to employers and peers your commitment to enterprise architecture as a discipline
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card className="premium-card">
              <CardContent className="p-6">
                <div className="flex items-start">
                  <i className="fas fa-check-circle text-primary text-2xl mt-1 mr-4"></i>
                  <p className="text-muted-foreground leading-relaxed">
                    An outstanding career move and a foundational certification in the career of any Enterprise Architect
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Learning Outcomes */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">Learning Outcomes</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {[
              "The Concepts of Enterprise Architecture and the TOGAF Standard",
              "The Context for Enterprise Architecture",
              "Key Definitions: The Language of Architecture",
              "The Architecture Development Method (ADM)",
              "ADM Techniques",
              "Architecture Content: ADM Outputs",
              "Applying the ADM",
              "Stakeholder Management",
              "Executing the Architecture Vision phase",
              "Business Architecture Guidelines and Techniques",
              "Developing Business, Data, Application and Technology Architectures",
              "Implementing the Architecture",
              "Architecture Governance",
              "Architecture Requirements Management",
              "Architecture Change Management"
            ].map((topic, index) => (
              <Card key={index} className="premium-card">
                <CardContent className="p-4">
                  <div className="flex items-start">
                    <i className="fas fa-graduation-cap text-primary mt-1 mr-3"></i>
                    <p className="text-muted-foreground">{topic}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Who Should Attend */}
      <section className="py-20 section-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">Who Should Attend</h2>
          <div className="max-w-4xl mx-auto mb-8">
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Designed for IT professionals who need the most current TOGAF certification, and who want to learn from a genuine, experienced Enterprise Architect. Practitioners in the following roles will find it useful in their work and also helpful in moving to the next level on a natural career progression:
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              "Experienced Developers",
              "Business Architects",
              "Enterprise Architects",
              "Program/Project Managers",
              "Business Analysts",
              "Solution Architects",
              "Application Architects",
              "Data Architects",
              "Information Architects",
              "Infrastructure Architects",
              "Security Architects",
              "Organizations implementing EA projects"
            ].map((role, index) => (
              <Card key={index} className="premium-card">
                <CardContent className="p-6">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                      <i className="fas fa-user-tie text-primary"></i>
                    </div>
                    <p className="text-muted-foreground font-medium">{role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Examination Details */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">Examination</h2>
          <div className="max-w-4xl mx-auto mb-12">
            <p className="text-lg text-muted-foreground leading-relaxed text-center">
              Certification is achieved by passing two examinations (taken separately or as a combined examination). Upon course completion, each candidate receives the exam voucher and instructions on how to schedule their exam time and location. Exams can be taken online or in an authorized Pearson Vue test center.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Foundation Exam */}
            <Card className="premium-card">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-card-foreground mb-6">TOGAF Foundation</h3>
                <div className="space-y-4">
                  <div className="flex justify-between border-b border-border pb-2">
                    <span className="text-muted-foreground">Type</span>
                    <span className="text-card-foreground font-semibold">Multiple-choice</span>
                  </div>
                  <div className="flex justify-between border-b border-border pb-2">
                    <span className="text-muted-foreground">Questions</span>
                    <span className="text-card-foreground font-semibold">40</span>
                  </div>
                  <div className="flex justify-between border-b border-border pb-2">
                    <span className="text-muted-foreground">Duration</span>
                    <span className="text-card-foreground font-semibold">60 minutes</span>
                  </div>
                  <div className="flex justify-between border-b border-border pb-2">
                    <span className="text-muted-foreground">Supervised</span>
                    <span className="text-card-foreground font-semibold">YES</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Open Book</span>
                    <span className="text-card-foreground font-semibold">NO</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Practitioner Exam */}
            <Card className="premium-card">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-card-foreground mb-6">TOGAF Practitioner</h3>
                <div className="space-y-4">
                  <div className="flex justify-between border-b border-border pb-2">
                    <span className="text-muted-foreground">Type</span>
                    <span className="text-card-foreground font-semibold text-sm">Scenario-based</span>
                  </div>
                  <div className="flex justify-between border-b border-border pb-2">
                    <span className="text-muted-foreground">Questions</span>
                    <span className="text-card-foreground font-semibold">8</span>
                  </div>
                  <div className="flex justify-between border-b border-border pb-2">
                    <span className="text-muted-foreground">Duration</span>
                    <span className="text-card-foreground font-semibold">90 minutes</span>
                  </div>
                  <div className="flex justify-between border-b border-border pb-2">
                    <span className="text-muted-foreground">Supervised</span>
                    <span className="text-card-foreground font-semibold">YES</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Open Book</span>
                    <span className="text-card-foreground font-semibold">YES</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 section-darker">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Ready to Earn Your TOGAF® Practitioner Certification?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Learn from experienced Enterprise Architects with 20 years of TOGAF training experience
          </p>
          {/* <button 
            className="premium-button px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105"
            data-testid="button-enquire"
          >
            Enquire Today
          </button> */}

<CTASection 
        title="Ready to Elevate Your Team's Architecture Skills?"
        description="Discover how our expert-led training programs can help you achieve BIAN, TOGAF, and IT4IT mastery and accelerate your career growth."
        buttonText="Enquire Today"
      />

        </div>
      </section>

      <Footer />
    </div>
  );
}
