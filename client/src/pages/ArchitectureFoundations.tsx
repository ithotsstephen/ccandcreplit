import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { useEffect } from "react";

export default function ArchitectureFoundations() {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Architecture Foundations for the Digital Age - Comprehensive training designed to help IT specialists transition to solution architecture roles with focus on full-stack architecture skills.');
    }

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', 'Architecture Foundations for the Digital Age | CC&C Solutions');
    }

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', 'Learn solution architecture fundamentals with our 6-day intensive training program covering application, data, technical architectures, and key digital technologies.');
    }

    document.title = 'Architecture Foundations for the Digital Age | CC&C Solutions';

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
              Architecture Foundations for the Digital Age
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto">
              Strong foundational knowledge of Solution Architecture concepts, digital technologies, and best practices for modern Agile and DevOps teams
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <Card className="premium-card">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-clock text-2xl text-primary"></i>
                </div>
                <h3 className="text-lg font-bold text-card-foreground mb-2">Duration</h3>
                <p className="text-muted-foreground">6 Days</p>
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
                  <i className="fas fa-certificate text-2xl text-primary"></i>
                </div>
                <h3 className="text-lg font-bold text-card-foreground mb-2">Certification</h3>
                <p className="text-muted-foreground">Yes</p>
              </CardContent>
            </Card>
          </div>

          <div className="prose prose-invert max-w-none">
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Designed by CC&C for level-setting global solution architecture teams, Architecture Foundations helps IT practitioners make the transition to a Solution Architect career path. This course is aimed at giving participants a strong foundational knowledge of Solution Architecture concepts, digital technologies and the best practices needed to work effectively in support of modern Agile and DevOps teams in large enterprises.
            </p>
          </div>
        </div>
      </section>

      {/* Think Like an Architect */}
      <section className="py-20 section-darker">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              What Does Thinking Like an Architect Mean?
            </h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Based around team-based case study exercises, the course leads on <strong>Think Like an Architect</strong> as the key skill. We cover both the human context and key technical aspects of solution architecture.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                <strong>Level 1 (Core)</strong> is focused on the fundamentals of full-stack solution architecture as part of a team, covering the basics of Application, Data and Technical (Infrastructure) architectures. Each team builds a simplified pro-forma architecture layer by layer.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                <strong>Level 2</strong> overlays a deeper dive into five key architecture concerns: Security, Big Data & Analytics, Cloud, APIs & Microservices, and Mobile. As each topic is covered, the teams add more layers to their classroom architecture project.
              </p>
            </div>
            <Card className="premium-card">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-card-foreground mb-6">Course Structure</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-primary mt-1 mr-3"></i>
                    <span className="text-muted-foreground">Team-based case study exercises</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-primary mt-1 mr-3"></i>
                    <span className="text-muted-foreground">Full-stack architecture fundamentals</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-primary mt-1 mr-3"></i>
                    <span className="text-muted-foreground">Application, Data & Technical architectures</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-primary mt-1 mr-3"></i>
                    <span className="text-muted-foreground">Deep dives into Security, Cloud, APIs, Mobile</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-primary mt-1 mr-3"></i>
                    <span className="text-muted-foreground">Customizable to organizational priorities</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Course Objective */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">Course Objective</h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Architecture Foundations is designed for the transition from specialized skill to the solution architecture career path. The course is targeted at achieving Level 2 on the CC&C Architecture Skills Maturity Model: <em>"Has established knowledge in the area, however skills need to be developed and practiced. Able to complete tasks with some assistance."</em>
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              The Level 2 skill level implies readiness to succeed in the first solution architecture assignment, with some support from more senior architects, and provides the foundations for growing responsibility and effectiveness through practical experience.
            </p>
            <Card className="premium-card">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-card-foreground mb-6">Candidates will learn skills for:</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-start">
                    <i className="fas fa-arrow-right text-primary mt-1 mr-3"></i>
                    <span className="text-muted-foreground">Identifying design approaches in solutions</span>
                  </div>
                  <div className="flex items-start">
                    <i className="fas fa-arrow-right text-primary mt-1 mr-3"></i>
                    <span className="text-muted-foreground">Choosing appropriate problem-solving approaches</span>
                  </div>
                  <div className="flex items-start">
                    <i className="fas fa-arrow-right text-primary mt-1 mr-3"></i>
                    <span className="text-muted-foreground">Making design choices meeting requirements</span>
                  </div>
                  <div className="flex items-start">
                    <i className="fas fa-arrow-right text-primary mt-1 mr-3"></i>
                    <span className="text-muted-foreground">Addressing security and technology issues</span>
                  </div>
                  <div className="flex items-start">
                    <i className="fas fa-arrow-right text-primary mt-1 mr-3"></i>
                    <span className="text-muted-foreground">Communicating clearly to stakeholders</span>
                  </div>
                  <div className="flex items-start">
                    <i className="fas fa-arrow-right text-primary mt-1 mr-3"></i>
                    <span className="text-muted-foreground">Leading through complexity and ambiguity</span>
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
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">Who Should Attend</h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              This course is targeted at mid-career IT specialists who want to move into solution architecture or to learn more about modern solution architecture approaches in the digital age.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Solution Architect is a key leadership role, responsible for design and decision making while working with stakeholders, other architects, vendors, third parties, end users and a range of specialists across the IT landscape.
            </p>
            <Card className="premium-card">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-card-foreground mb-4">Prerequisites</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  There are no specific prerequisites. However it is expected that candidates will have the desire and ability to take on a leadership role of this type and to embrace the ambiguity and complexity of the work.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  The course includes an assessment tool to help all parties to understand the strengths and weaknesses of potential candidates.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Topics Covered */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">Topics Covered</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              "Introduction to Architecture Foundations",
              "The Solution Architect at Work",
              "The Flow of Solution Architecture Work",
              "The Full Stack Architecture",
              "Application Architecture: Styles and Patterns",
              "Application Architecture: Functional Requirements",
              "The Application Stack",
              "Data & Information Architecture",
              "Infrastructure & Technology Architecture",
              "Consolidated View of Work So Far",
              "Security Patterns",
              "APIs & Microservices",
              "Cloud Patterns & Migration Decisions",
              "Mobile",
              "Big Data & Analytics"
            ].map((topic, index) => (
              <Card key={index} className="premium-card">
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                      <i className="fas fa-book text-primary text-sm"></i>
                    </div>
                    <p className="text-muted-foreground">{topic}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <CTASection 
        title="Ready to Build Your Architecture Career?"
        description="Take the next step with Architecture Foundations for the Digital Age and master full-stack solution architecture."
        buttonText="Enquire Today"
      />



      <Footer />
    </div>
  );
}
