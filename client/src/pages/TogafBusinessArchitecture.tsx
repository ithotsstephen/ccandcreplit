import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import CTASection from "@/components/CTASection";

export default function TogafBusinessArchitecture() {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'TOGAF® Business Architecture certification covering Business Modeling, Business Capabilities, Business Scenarios, Information Mapping, and Value Streams based on TOGAF Standard Version 9.2.');
    }

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', 'TOGAF® Business Architecture Certification | CC&C Solutions');
    }

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', 'Earn your TOGAF Business Architecture Level 1 certification with our comprehensive 1-day training and Open Badge program.');
    }

    document.title = 'TOGAF® Business Architecture Certification | CC&C Solutions';

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
              TOGAF® Business Architecture
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto">
              Earn your hands-on practical Business Architecture certificate with our expert training
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
                <p className="text-muted-foreground">1 Day</p>
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
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Individuals who have earned this credential have knowledge and understanding of Business Modeling, Business Capabilities, Business Scenarios, Information Mapping, and Value Streams and how to apply them in development of a Business Architecture based on the TOGAF Standard, Version 9.2.
            </p>
          </div>
        </div>
      </section>

      {/* Course Objective */}
      <section className="py-20 section-darker">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">Course Objective</h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              The purpose of the TOGAF Business Architecture Level 1 credential is to provide validation that individuals have knowledge and understanding of:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="premium-card">
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <i className="fas fa-check-circle text-primary text-2xl mt-1 mr-4"></i>
                    <div>
                      <h3 className="font-bold text-card-foreground mb-2">Business Modeling</h3>
                      <p className="text-muted-foreground text-sm">Understanding and creating business models</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="premium-card">
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <i className="fas fa-check-circle text-primary text-2xl mt-1 mr-4"></i>
                    <div>
                      <h3 className="font-bold text-card-foreground mb-2">Business Capabilities</h3>
                      <p className="text-muted-foreground text-sm">Identifying and defining organizational capabilities</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="premium-card">
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <i className="fas fa-check-circle text-primary text-2xl mt-1 mr-4"></i>
                    <div>
                      <h3 className="font-bold text-card-foreground mb-2">TOGAF Business Scenarios</h3>
                      <p className="text-muted-foreground text-sm">Creating and applying business scenarios</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="premium-card">
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <i className="fas fa-check-circle text-primary text-2xl mt-1 mr-4"></i>
                    <div>
                      <h3 className="font-bold text-card-foreground mb-2">Information Mapping</h3>
                      <p className="text-muted-foreground text-sm">Mapping information flows and requirements</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="premium-card">
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <i className="fas fa-check-circle text-primary text-2xl mt-1 mr-4"></i>
                    <div>
                      <h3 className="font-bold text-card-foreground mb-2">Value Streams</h3>
                      <p className="text-muted-foreground text-sm">Identifying and optimizing value delivery</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed mt-8">
              The learning objectives for this credential focus on knowledge and comprehension. This credential leads to the award of an Open Badge.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits of Attending */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">Benefits of Attending</h2>
          <div className="max-w-4xl mx-auto mb-8">
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Individuals who require knowledge and understanding of TOGAF Business Architecture techniques:
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card className="premium-card">
              <CardContent className="p-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <i className="fas fa-users text-2xl text-primary"></i>
                  </div>
                  <p className="text-muted-foreground">
                    Professionals working in roles associated with an architecture project
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card className="premium-card">
              <CardContent className="p-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <i className="fas fa-award text-2xl text-primary"></i>
                  </div>
                  <p className="text-muted-foreground">
                    Architects looking to achieve the TOGAF Business Architecture credential
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card className="premium-card">
              <CardContent className="p-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <i className="fas fa-star text-2xl text-primary"></i>
                  </div>
                  <p className="text-muted-foreground">
                    Architects specializing in Business Architecture based on TOGAF Standard 9.2
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Who Should Attend */}
      <section className="py-20 section-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">Who Should Attend</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              "Enterprise Architects",
              "Business Architects",
              "Solution Architects",
              "Data / Information Architects",
              "Application Architects",
              "Infrastructure Architects",
              "Security Architects",
              "Program / Project Managers",
              "Business Analysts",
              "Development Team Leaders",
              "Experienced Developers"
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

      {/* Open Badge Program */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">How to Earn the Open Badge</h2>
          <div className="max-w-4xl mx-auto">
            <Card className="premium-card">
              <CardContent className="p-8">
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  The Open Group is pleased to announce the availability of our Open Badge program for the professional certification programs. To earn an open badge TOGAF Business Architecture Level 1 credential you must attend an accredited TOGAF Business Architecture Level 1 classroom or virtual training and pass an online assessment consisting of 30 multiple-choice questions.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Open Badges are a means for an individual to display, and for an organization easily to verify, certifications, achievements and credentials in a very visual manner online. For example, digital badges are used in popular social media platforms such as LinkedIn, Twitter and Facebook. You may also embed badges into your websites, e-mail footers or resumes.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  These credentials are represented with a digital image which contains verified metadata that describes an individual's qualifications and the process required to earn them.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Examination Details */}
      <section className="py-20 section-darker">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">Certification Examination</h2>
          <div className="max-w-4xl mx-auto mb-12">
            <p className="text-lg text-muted-foreground leading-relaxed text-center mb-8">
              The credential is only awarded by passing the examination.
            </p>
          </div>
          <Card className="premium-card max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-card-foreground mb-6">TOGAF Business Architecture Part 1</h3>
              <div className="space-y-4">
                <div className="flex justify-between border-b border-border pb-2">
                  <span className="text-muted-foreground">Format</span>
                  <span className="text-card-foreground font-semibold">Multiple-choice</span>
                </div>
                <div className="flex justify-between border-b border-border pb-2">
                  <span className="text-muted-foreground">Questions</span>
                  <span className="text-card-foreground font-semibold">30</span>
                </div>
                <div className="flex justify-between border-b border-border pb-2">
                  <span className="text-muted-foreground">Duration</span>
                  <span className="text-card-foreground font-semibold">45 minutes</span>
                </div>
                <div className="flex justify-between border-b border-border pb-2">
                  <span className="text-muted-foreground">Supervised</span>
                  <span className="text-card-foreground font-semibold">Yes</span>
                </div>
                <div className="flex justify-between border-b border-border pb-2">
                  <span className="text-muted-foreground">Open Book</span>
                  <span className="text-card-foreground font-semibold">No</span>
                </div>
                <div className="pt-4">
                  <p className="text-sm text-muted-foreground">
                    <strong>Delivery Options:</strong> Online Proctored at home/office, Pearson VUE test centers, or authorized accredited training organizations
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 section-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Ready to Earn Your TOGAF® Business Architecture Certification?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Gain expert knowledge in Business Architecture with our comprehensive 1-day training
          </p>
          {/* <button 
            className="premium-button px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105"
            data-testid="button-enquire"
          >
            Enquire Now
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
