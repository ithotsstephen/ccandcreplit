import { useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { useLocation } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function TogafTraining() {
  const [, setLocation] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToContact = () => {
    setLocation("/#contact");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 section-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              <span className="text-primary">TOGAF®</span> Practitioner Certification
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Based on the Updated TOGAF® Standard, 10th Edition. TOGAF® Practitioner is the most up-to-date 
              TOGAF certification, reflecting the many enhancements and updates found in The TOGAF Standard, 
              10th Edition, released in 2022.
            </p>
            <div className="mt-8">
              <button 
                onClick={scrollToContact}
                className="premium-button px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105"
                data-testid="button-enroll-now"
              >
                Enroll Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Why TOGAF Section */}
      <section className="py-20 section-darker">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-8">Why TOGAF Certification?</h2>
              <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                The TOGAF® Standard is the open Enterprise Architecture standard used by the world's leading 
                organizations to effectively align IT investment with business goals to optimize business value.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                TOGAF certification is a requirement for many job roles, and is often the key to better compensation 
                and advancement opportunities. Understanding the language and methods of Enterprise Architecture is 
                important for success in many related roles.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <i className="fas fa-check-circle text-primary mr-3"></i>
                  <span className="text-foreground">Used by the world's leading enterprises to certify core knowledge</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-check-circle text-primary mr-3"></i>
                  <span className="text-foreground">Trusted, vendor-neutral, globally recognized credential</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-check-circle text-primary mr-3"></i>
                  <span className="text-foreground">Demonstrates commitment to enterprise architecture as a discipline</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-check-circle text-primary mr-3"></i>
                  <span className="text-foreground">Outstanding career move and foundational certification</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Enterprise Architecture Framework" 
                className="rounded-xl shadow-2xl"
              />
              <div className="absolute -bottom-8 -left-8 bg-primary text-primary-foreground p-6 rounded-xl shadow-lg">
                <div className="text-2xl font-bold">20+</div>
                <div className="text-sm">Years Training Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Objectives */}
      <section className="py-20 section-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">Course Objectives & Learning Outcomes</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <Card className="premium-card p-8">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center mb-6">
                  <i className="fas fa-target text-2xl text-primary-foreground"></i>
                </div>
                <h3 className="text-2xl font-bold text-card-foreground mb-6">Course Objective</h3>
                <p className="text-muted-foreground leading-relaxed">
                  The purpose of certification for TOGAF Practitioner is to provide validation, knowledge and 
                  comprehension of the TOGAF Standard, 10th Edition. Upon completion of this course, the candidate 
                  should be able to analyze and apply this knowledge to their day-to-day work and to successfully 
                  complete the TOGAF Foundation and Practitioner Exams.
                </p>
              </CardContent>
            </Card>

            <Card className="premium-card p-8">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-accent rounded-lg flex items-center justify-center mb-6">
                  <i className="fas fa-graduation-cap text-2xl text-accent-foreground"></i>
                </div>
                <h3 className="text-2xl font-bold text-card-foreground mb-6">Learning Outcome</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  The course and exams focus on ensuring your ability to explain and apply these fundamental TOGAF concepts:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <i className="fas fa-circle text-accent text-xs mt-2 mr-3"></i>
                    The Concepts of Enterprise Architecture and the TOGAF Standard
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-circle text-accent text-xs mt-2 mr-3"></i>
                    Architecture Development Method (ADM) and Techniques
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-circle text-accent text-xs mt-2 mr-3"></i>
                    Business, Data, Application and Technology Architectures
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-circle text-accent text-xs mt-2 mr-3"></i>
                    Architecture Governance and Change Management
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Who Should Attend */}
      <section className="py-20 section-darker">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">Who Should Attend</h2>
            <p className="text-xl text-muted-foreground">
              Designed for IT professionals who need the most current TOGAF certification
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              { role: "Enterprise Architects", icon: "fas fa-building" },
              { role: "Business Architects", icon: "fas fa-chart-line" },
              { role: "Solution Architects", icon: "fas fa-puzzle-piece" },
              { role: "Application Architects", icon: "fas fa-laptop-code" },
              { role: "Data Architects", icon: "fas fa-database" },
              { role: "Program/Project Managers", icon: "fas fa-tasks" },
              { role: "Business Analysts", icon: "fas fa-analytics" },
              { role: "Security Architects", icon: "fas fa-shield-alt" },
              { role: "Infrastructure Architects", icon: "fas fa-server" },
              { role: "Information Architects", icon: "fas fa-sitemap" },
              { role: "Experienced Developers", icon: "fas fa-code" },
              { role: "EA Implementation Teams", icon: "fas fa-users" }
            ].map((attendee, index) => (
              <Card key={index} className="service-card text-center p-6">
                <CardContent className="p-0">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                    <i className={`${attendee.icon} text-xl text-primary-foreground`}></i>
                  </div>
                  <h4 className="text-sm font-semibold text-card-foreground">{attendee.role}</h4>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Course Details */}
      <section className="py-20 section-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">Course Details</h2>
            <p className="text-xl text-muted-foreground">
              Training led by real practitioners, guided by 20 years of TOGAF training experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <Card className="premium-card p-8">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold text-card-foreground mb-6">What's Included</h3>
                <ul className="space-y-4">
                  {[
                    "The Open Group Exam Voucher",
                    "Live Course Delivery by Experienced Enterprise Architect",
                    "Benefit of 20 Years of TOGAF Training Experience",
                    "Traditional Classroom or Live Online Delivery",
                    "In-Course Candidate Support Materials",
                    "Range of Self-Study Materials",
                    "After-Course Individual Support for Exam Prep"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <i className="fas fa-check text-primary mt-1 mr-3"></i>
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="premium-card p-8">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold text-card-foreground mb-6">Quick Facts</h3>
                <div className="space-y-6">
                  <div className="flex justify-between items-center border-b border-border pb-3">
                    <span className="text-muted-foreground">Duration</span>
                    <span className="text-card-foreground font-semibold">4 Days</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-border pb-3">
                    <span className="text-muted-foreground">Delivery Method</span>
                    <span className="text-card-foreground font-semibold">Virtual Online</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-border pb-3">
                    <span className="text-muted-foreground">Prerequisites</span>
                    <span className="text-card-foreground font-semibold">None</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-border pb-3">
                    <span className="text-muted-foreground">Exam Voucher</span>
                    <span className="text-primary font-semibold">✓ Included</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Certification</span>
                    <span className="text-primary font-semibold">✓ Yes</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Examination Details */}
      <section className="py-20 section-darker">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">Examination Details</h2>
            <p className="text-xl text-muted-foreground">
              Certification is achieved by passing two examinations (taken separately or combined)
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <Card className="premium-card p-8">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center mb-6">
                  <i className="fas fa-clipboard-list text-2xl text-primary-foreground"></i>
                </div>
                <h3 className="text-2xl font-bold text-card-foreground mb-6">TOGAF Foundation</h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Type:</span>
                    <span className="text-card-foreground">Multiple-choice</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Questions:</span>
                    <span className="text-card-foreground">40 questions</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Duration:</span>
                    <span className="text-card-foreground">60 minutes</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Supervised:</span>
                    <span className="text-card-foreground">Yes</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Open Book:</span>
                    <span className="text-card-foreground">No</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="premium-card p-8">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-accent rounded-lg flex items-center justify-center mb-6">
                  <i className="fas fa-award text-2xl text-accent-foreground"></i>
                </div>
                <h3 className="text-2xl font-bold text-card-foreground mb-6">TOGAF Practitioner</h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Type:</span>
                    <span className="text-card-foreground">Complex scenario-based</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Questions:</span>
                    <span className="text-card-foreground">8 questions</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Duration:</span>
                    <span className="text-card-foreground">90 minutes</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Supervised:</span>
                    <span className="text-card-foreground">Yes</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Open Book:</span>
                    <span className="text-primary">Yes</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <Card className="premium-card p-8 max-w-4xl mx-auto">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-secondary rounded-lg flex items-center justify-center mx-auto mb-6">
                  <i className="fas fa-medal text-2xl text-secondary-foreground"></i>
                </div>
                <h3 className="text-2xl font-bold text-card-foreground mb-4">TOGAF Applied Practitioner Badge</h3>
                <p className="text-muted-foreground">
                  Individuals who have obtained the TOGAF® Practitioner certification and who have satisfactorily 
                  completed the TOGAF Enterprise Architecture Practitioner Learning Studies (included in this training) 
                  will be eligible to apply for the TOGAF Applied Practitioner badge.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* TOGAF 9 Upgrade */}
      <section className="py-20 section-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Want to Upgrade Your <span className="text-primary">TOGAF 9</span> Certification?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              TOGAF 9 certified? You can upgrade to TOGAF Practitioner certification with a two-day course and Practitioner exam.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className="premium-card p-8 text-center">
              <CardContent className="p-0">
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="fas fa-arrow-up text-3xl text-primary-foreground"></i>
                </div>
                <h3 className="text-2xl font-bold text-card-foreground mb-4">TOGAF 9 to TOGAF Practitioner Bridge</h3>
                <p className="text-muted-foreground mb-6">
                  Streamlined 2-day upgrade course specifically designed for existing TOGAF 9 certified professionals.
                </p>
                <button 
                  onClick={scrollToContact}
                  className="premium-button px-6 py-3 rounded-lg font-semibold transition-all transform hover:scale-105"
                  data-testid="button-get-upgrade-details"
                >
                  Get Upgrade Details
                </button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 section-darker">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Ready to Advance Your Enterprise Architecture Career?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join thousands of professionals who have earned their TOGAF certification with CC&C Solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={scrollToContact}
              className="premium-button px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105"
              data-testid="button-enroll-today"
            >
              Enroll Today
            </button>
            <button 
              onClick={scrollToContact}
              className="border-2 border-primary text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary hover:text-primary-foreground transition-all"
              data-testid="button-download-brochure"
            >
              Download Brochure
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}