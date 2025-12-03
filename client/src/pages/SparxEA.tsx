import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { useEffect } from "react";

export default function SparxEA() {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Sparx Enterprise Architect Hands-On Training - Learn comprehensive UML analysis and design with our specialized 2-day training program.');
    }

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', 'Sparx Enterprise Architect Training | CC&C Solutions');
    }

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', 'Master Sparx Enterprise Architect in 2 days with hands-on training covering UML, SysML, BPMN and all phases of SDLC.');
    }

    document.title = 'Sparx Enterprise Architect Training | CC&C Solutions';

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
              Sparx Enterprise Architect Hands-On Training
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto">
              Learn Sparx Enterprise Architect in 2 days. A specialized training from CC&C Solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-6 mb-16">
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
                  <i className="fas fa-laptop text-2xl text-primary"></i>
                </div>
                <h3 className="text-lg font-bold text-card-foreground mb-2">Delivery Method</h3>
                <p className="text-muted-foreground">Virtual Online</p>
              </CardContent>
            </Card>
            <Card className="premium-card">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-book-open text-2xl text-primary"></i>
                </div>
                <h3 className="text-lg font-bold text-card-foreground mb-2">Prerequisites</h3>
                <p className="text-muted-foreground">No</p>
              </CardContent>
            </Card>
            <Card className="premium-card">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-certificate text-2xl text-primary"></i>
                </div>
                <h3 className="text-lg font-bold text-card-foreground mb-2">Certification</h3>
                <p className="text-muted-foreground">No</p>
              </CardContent>
            </Card>
          </div>

          <div className="prose prose-invert max-w-none">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              CC&C Solutions customizable training module designed by Sparx EA experts to get a team started with modeling frameworks and Enterprise Architect. Practitioners will be introduced to all key features in Enterprise Architect, with best practices and practical hands-on sessions using a standard example model or a live-project of the team.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Training also focuses on devising strategies to leverage existing assets such as Source Code, DBMS Schema, Requirements documents, etc into Enterprise Architect swiftly, to facilitate better model management and improve project efficiency. The course is a combination of practical and theory sessions. Each module is accompanied with practical, hands-on session to allow practitioners to apply the theory and become proficient using Enterprise Architect.
            </p>
          </div>
        </div>
      </section>

      {/* Course Objective */}
      <section className="py-20 section-darker">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">Course Objective</h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Enterprise Architect is a comprehensive UML analysis and design tool for UML, SysML, BPMN and many other technologies. Sparx EA is used across all phases of software development lifecycle, starting from requirements gathering through to the analysis stages, design models, testing and maintenance.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              This specialized, customizable training module is designed by Sparx EA experts to get a team started with UML and EA. Practitioners will be introduced to all key features in Enterprise Architect, with best practices and practical hands-on sessions using a standard example model or a live-project of the team.
            </p>
            <Card className="premium-card">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-card-foreground mb-4">Key Training Focus</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Training focuses on devising strategies to leverage existing assets such as Source Code, DBMS Schema, Requirements documents, etc into Enterprise Architect swiftly, to facilitate better model management and improve project efficiency. The course is a combination of practical and theory sessions, with each module accompanied by hands-on exercises.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits of Attending */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">Benefits of Attending</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            <Card className="premium-card">
              <CardContent className="p-6">
                <div className="flex items-start">
                  <i className="fas fa-check-circle text-primary text-2xl mt-1 mr-4"></i>
                  <div>
                    <p className="text-muted-foreground leading-relaxed">
                      Practitioners in the Software Industry looking to upgrade their skills on a Modeling tools
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="premium-card">
              <CardContent className="p-6">
                <div className="flex items-start">
                  <i className="fas fa-check-circle text-primary text-2xl mt-1 mr-4"></i>
                  <div>
                    <p className="text-muted-foreground leading-relaxed">
                      Practitioners planning to use an Application Lifecycle Management / Modeling tools in their day to operations
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="premium-card">
              <CardContent className="p-6">
                <div className="flex items-start">
                  <i className="fas fa-check-circle text-primary text-2xl mt-1 mr-4"></i>
                  <div>
                    <p className="text-muted-foreground leading-relaxed">
                      Practitioners already using Sparx Enterprise Architect who want to explore the full capability
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="premium-card">
              <CardContent className="p-6">
                <div className="flex items-start">
                  <i className="fas fa-check-circle text-primary text-2xl mt-1 mr-4"></i>
                  <div>
                    <p className="text-muted-foreground leading-relaxed">
                      Learn basic overview, modeling, traceability, impact analysis, document generation and information exchange
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Who Should Attend */}
      <section className="py-20 section-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">Who Should Attend?</h2>
          <div className="max-w-4xl mx-auto">
            <Card className="premium-card">
              <CardContent className="p-8">
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <i className="fas fa-user text-primary text-lg mt-1 mr-4"></i>
                    <span className="text-lg text-muted-foreground">
                      No prior Enterprise Architect experience is required
                    </span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-info-circle text-primary text-lg mt-1 mr-4"></i>
                    <span className="text-lg text-muted-foreground">
                      Understanding of Software Engineering, SDLC, UML and Business Process will be helpful but not mandatory
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Topics Covered */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">Topics Covered</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
            {[
              "Introduction to Enterprise Architect",
              "Requirements Models using Enterprise Architect",
              "Use case Models using Enterprise Architect",
              "Activity Models using Enterprise Architect",
              "Domain Models using Enterprise Architect",
              "Business Process Modeling Using Enterprise Architect",
              "Traceability in Enterprise Architect",
              "Impact Analysis Using Enterprise Architect",
              "Introduction to Document Generation using Enterprise Architect",
              "Exchanging model information between teams and between tools",
              "Test Cases in Enterprise Architect",
              "Data Modeling Using Enterprise Architect",
              "User Interface Prototypes using Enterprise Architect (Wireframes)",
              "Sequence Diagrams in Enterprise Architect",
              "State Machine Diagrams in Enterprise Architect",
              "Stereotypes and Tagged Values",
              "Simulating Models using Enterprise Architect",
              "Advanced Document Generation using Enterprise Architect",
              "Facilitating Team based modelling in Enterprise Architect",
              "Baselines, Differencing and Merges",
              "Version Controlling in Enterprise Architect",
              "Security",
              "Defining Profiles in Enterprise Architect"
            ].map((topic, index) => (
              <Card key={index} className="premium-card">
                <CardContent className="p-4">
                  <div className="flex items-start">
                    <i className="fas fa-angle-right text-primary mt-1 mr-3 flex-shrink-0"></i>
                    <p className="text-muted-foreground text-sm">{topic}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About the Course */}
      <section className="py-20 section-darker">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">About the Course</h2>
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="premium-card">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <i className="fas fa-code text-2xl text-primary"></i>
                </div>
                <h3 className="text-xl font-bold text-card-foreground mb-4">Software Development Focus</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Explore the power of Enterprise Architect in Software with a 2-day hands-on workshop. Empower your Software development (Enterprise Architect SysML Training) skills to use UML and the Enterprise Architect across all phases of SDLC for effective, high quality application development.
                </p>
              </CardContent>
            </Card>
            <Card className="premium-card">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <i className="fas fa-sitemap text-2xl text-primary"></i>
                </div>
                <h3 className="text-xl font-bold text-card-foreground mb-4">Business Process Modeling</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Develop your Business Process skills (Enterprise Architect BPMN Training) to leverage Enterprise Architect for effective Process Modelling. Learn to model, analyze, and optimize business processes using industry-standard BPMN notation.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <CTASection 
        title="Ready to Master Sparx Enterprise Architect?"
        description="Join our hands-on training and unlock the full potential of Enterprise Architect for your architecture practice."
        buttonText="Enquire Now"
      />

      <Footer />
    </div>
  );
}
