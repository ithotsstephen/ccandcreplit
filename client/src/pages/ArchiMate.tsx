import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { useEffect } from "react";

export default function ArchiMate() {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'ArchiMate® 3 Level 1 and Level 2 Certification - Master the preferred modeling language of TOGAF® with expert-led training from CC&C Solutions.');
    }

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', 'ArchiMate® 3 Certification Training | CC&C Solutions');
    }

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', 'Learn ArchiMate® 3.2 modeling language with our comprehensive 3-day certification training, including Foundation and Practitioner exam preparation.');
    }

    document.title = 'ArchiMate® 3 Certification Training | CC&C Solutions';

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
              <a className="inline-flex items-center text-primary hover:text-primary/80 mb-6 font-semibold transition-colors group">
                <i className="fas fa-arrow-left mr-2 group-hover:-translate-x-1 transition-transform"></i>
                Back to Training
              </a>
            </Link>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              ArchiMate® 3 from CC&C
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto mb-8">
              The preferred modeling language of TOGAF®. Learn from expert architects who understand not just what ArchiMate is, but how it is used.
            </p>
            <p className="text-sm text-muted-foreground italic">
              ArchiMate is a registered trademark of The Open Group
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
                <p className="text-muted-foreground">3 Days</p>
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

          <div className="prose prose-invert max-w-none">
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              ArchiMate® 3.2 as an open and independent modeling language is an essential skill that all IT architects must have is the ability to communicate architectural ideas in a formal way. Your trainer is an expert architect who has led large-scale transformation work in the real world.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 section-darker">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">Benefits</h2>
          <div className="max-w-4xl mx-auto">
            <Card className="premium-card">
              <CardContent className="p-8">
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-primary text-xl mt-1 mr-4"></i>
                    <span className="text-lg text-muted-foreground">
                      Make practical use of the ArchiMate® 3.2 modeling language for developing enterprise architecture models
                    </span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-primary text-xl mt-1 mr-4"></i>
                    <span className="text-lg text-muted-foreground">
                      Gain knowledge of the terminology, structure and concepts needed to pass the ArchiMate® 3 Foundation and Certification examination
                    </span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-primary text-xl mt-1 mr-4"></i>
                    <span className="text-lg text-muted-foreground">
                      Learn from expert architects who have led large-scale transformation work
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Course Details */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">Course Details</h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              This course is delivered in 3 full days in an interactive classroom environment using:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="premium-card">
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <i className="fas fa-book text-primary text-xl mt-1 mr-4"></i>
                    <div>
                      <h3 className="font-bold text-card-foreground mb-2">Introduction</h3>
                      <p className="text-muted-foreground text-sm">ArchiMate® 3.2 specification walkthrough</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="premium-card">
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <i className="fas fa-tools text-primary text-xl mt-1 mr-4"></i>
                    <div>
                      <h3 className="font-bold text-card-foreground mb-2">Hands-on</h3>
                      <p className="text-muted-foreground text-sm">Exercises using modeling tools</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="premium-card">
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <i className="fas fa-project-diagram text-primary text-xl mt-1 mr-4"></i>
                    <div>
                      <h3 className="font-bold text-card-foreground mb-2">Case Studies</h3>
                      <p className="text-muted-foreground text-sm">End-to-end ArchiMate modeling application</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="premium-card">
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <i className="fas fa-users text-primary text-xl mt-1 mr-4"></i>
                    <div>
                      <h3 className="font-bold text-card-foreground mb-2">Group Discussions</h3>
                      <p className="text-muted-foreground text-sm">Interactive learning and practice exams</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
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
              "Application / Software Architects",
              "Solution Architects",
              "System Architects",
              "Data Architects, Information Architects",
              "Technology Architects",
              "Program and Project Managers",
              "Anyone with an interest in modeling",
              "Anyone who consumes IT architecture specifications"
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

      {/* Topics Covered */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">Topics Covered</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              "Course Introduction",
              "Basic Concepts",
              "Language Structure",
              "Generic Metamodel",
              "Modeling Relationships",
              "Modeling Motivation",
              "Modeling Strategy",
              "The Business Layer",
              "The Application Layer",
              "The Technology Layer",
              "Modeling Physical Elements",
              "Cross-Layer Modeling",
              "Modeling Transformation",
              "Addressing Stakeholder Concerns Using Viewpoints and Views",
              "Language Customization Mechanisms",
              "Case Studies and Hands-on exercises",
              "Certification Exam preparation for level 1 and level 2 exams"
            ].map((topic, index) => (
              <Card key={index} className="premium-card">
                <CardContent className="p-4">
                  <div className="flex items-start">
                    <i className="fas fa-chevron-right text-primary mt-1 mr-3"></i>
                    <p className="text-muted-foreground">{topic}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Examination Details */}
      <section className="py-20 section-darker">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">Examination</h2>
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Part 1 Exam */}
            <Card className="premium-card">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-card-foreground mb-6">ArchiMate® 3 Part 1 Exam</h3>
                <div className="space-y-4">
                  <div className="flex justify-between border-b border-border pb-2">
                    <span className="text-muted-foreground">Exam Number</span>
                    <span className="text-card-foreground font-semibold">OGA-031</span>
                  </div>
                  <div className="flex justify-between border-b border-border pb-2">
                    <span className="text-muted-foreground">Qualification</span>
                    <span className="text-card-foreground font-semibold">ArchiMate 3 Foundation</span>
                  </div>
                  <div className="flex justify-between border-b border-border pb-2">
                    <span className="text-muted-foreground">Prerequisites</span>
                    <span className="text-card-foreground font-semibold">None</span>
                  </div>
                  <div className="flex justify-between border-b border-border pb-2">
                    <span className="text-muted-foreground">Exam Type</span>
                    <span className="text-card-foreground font-semibold">Multiple Choice</span>
                  </div>
                  <div className="flex justify-between border-b border-border pb-2">
                    <span className="text-muted-foreground">Questions</span>
                    <span className="text-card-foreground font-semibold">40</span>
                  </div>
                  <div className="flex justify-between border-b border-border pb-2">
                    <span className="text-muted-foreground">Pass Score</span>
                    <span className="text-card-foreground font-semibold">60% (24/40)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Time Limit</span>
                    <span className="text-card-foreground font-semibold">60 minutes</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Part 2 Exam */}
            <Card className="premium-card">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-card-foreground mb-6">ArchiMate® 3 Part 2 Exam</h3>
                <div className="space-y-4">
                  <div className="flex justify-between border-b border-border pb-2">
                    <span className="text-muted-foreground">Exam Number</span>
                    <span className="text-card-foreground font-semibold">OGA-032</span>
                  </div>
                  <div className="flex justify-between border-b border-border pb-2">
                    <span className="text-muted-foreground">Qualification</span>
                    <span className="text-card-foreground font-semibold">ArchiMate 3 Practitioner</span>
                  </div>
                  <div className="flex justify-between border-b border-border pb-2">
                    <span className="text-muted-foreground">Prerequisites</span>
                    <span className="text-card-foreground font-semibold text-sm">ArchiMate 3 Foundation</span>
                  </div>
                  <div className="flex justify-between border-b border-border pb-2">
                    <span className="text-muted-foreground">Exam Type</span>
                    <span className="text-card-foreground font-semibold text-sm">Scenario Based</span>
                  </div>
                  <div className="flex justify-between border-b border-border pb-2">
                    <span className="text-muted-foreground">Questions</span>
                    <span className="text-card-foreground font-semibold">8</span>
                  </div>
                  <div className="flex justify-between border-b border-border pb-2">
                    <span className="text-muted-foreground">Pass Score</span>
                    <span className="text-card-foreground font-semibold">65% (26/40 points)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Time Limit</span>
                    <span className="text-card-foreground font-semibold">90 minutes</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <CTASection 
        title="Ready to Master ArchiMate® 3?"
        description="Join our comprehensive certification training and become an expert in enterprise architecture modeling."
        buttonText="Enquire Today"
      />

      <Footer />
    </div>
  );
}
