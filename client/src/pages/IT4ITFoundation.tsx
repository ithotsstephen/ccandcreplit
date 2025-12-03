import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import CTASection from "@/components/CTASection";

export default function IT4ITFoundation() {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'IT4IT™ Foundation Certification training - Learn the gold standard in IT4IT certification. More than half of all IT4IT certified practitioners were trained by CC&C Solutions.');
    }

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', 'IT4IT™ Foundation Certification | CC&C Solutions');
    }

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', 'Master the IT4IT Reference Architecture with our comprehensive 2-day certification training covering all four value streams and preparing you for the IT4IT Foundation exam.');
    }

    document.title = 'IT4IT™ Foundation Certification | CC&C Solutions';

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
              IT4IT™ Foundation Certification
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto mb-4">
              More than half of all IT4IT certified practitioners were trained by CC&C
            </p>
            <p className="text-sm text-muted-foreground italic">
              IT4IT is a trademark of The Open Group
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
                <p className="text-muted-foreground">2 Days</p>
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
            <Card className="premium-card mb-8">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-card-foreground mb-6">Why Choose CC&C for IT4IT Training</h2>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-primary text-xl mt-1 mr-3"></i>
                    <p className="text-muted-foreground leading-relaxed">
                      IT4IT Foundation training from CC&C is now available everywhere, live over Zoom
                    </p>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-primary text-xl mt-1 mr-3"></i>
                    <p className="text-muted-foreground leading-relaxed">
                      Be ready to manage DevOps and digital products at scale
                    </p>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-primary text-xl mt-1 mr-3"></i>
                    <p className="text-muted-foreground leading-relaxed">
                      We are the experts, active in the development of the standard
                    </p>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-primary text-xl mt-1 mr-3"></i>
                    <p className="text-muted-foreground leading-relaxed">
                      Your trainer is a real architect with hands-on IT4IT experience
                    </p>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-primary text-xl mt-1 mr-3"></i>
                    <p className="text-muted-foreground leading-relaxed">
                      IT4IT certification examination voucher is provided as part of the training course
                    </p>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <p className="text-lg text-muted-foreground leading-relaxed">
              IT4IT Foundation certification training prepares you for the IT4IT Foundation exam, which tests your knowledge of IT4IT basics. We cover this material thoroughly, including overview of the IT4IT Reference Architecture including overall structure, types of objects, principles and purpose, details of functional components and data in each value stream, and extra CC&C material with worked examples of IT4IT in practice based on real use cases.
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
              IT4IT is a standard, open-source reference architecture and value chain-based operating model for managing the business of IT.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              It has been used to support a wide variety of outcomes, ranging from IT tool optimization work to creating CIO-level operating models to enable large scale transformation.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              IT4IT describes the end-to-end functions Enterprise IT performs. The model describes key functions, their relationships, and the information objects, information model and data flows needed to enable effective value delivery in an agile, automated and service-based IT landscape.
            </p>
          </div>
        </div>
      </section>

      {/* Learning Outcomes */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">Learning Outcomes</h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              This two-day instructor-led course can be delivered in a classroom or remotely online. It provides an overview of The Open Group's reference architecture for managing the business of IT, and prepares students for The Open Group's IT4IT L1 Foundation exam.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="premium-card">
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <i className="fas fa-graduation-cap text-primary text-2xl mt-1 mr-4"></i>
                    <div>
                      <h3 className="font-bold text-card-foreground mb-2">IT4IT Reference Model</h3>
                      <p className="text-muted-foreground text-sm">Understand the concept and structure of the IT4IT Reference Model</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="premium-card">
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <i className="fas fa-graduation-cap text-primary text-2xl mt-1 mr-4"></i>
                    <div>
                      <h3 className="font-bold text-card-foreground mb-2">IT4IT Value Streams</h3>
                      <p className="text-muted-foreground text-sm">Explain basic concepts of IT4IT Value Streams and their terminology</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="premium-card">
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <i className="fas fa-graduation-cap text-primary text-2xl mt-1 mr-4"></i>
                    <div>
                      <h3 className="font-bold text-card-foreground mb-2">Strategy to Portfolio (S2P)</h3>
                      <p className="text-muted-foreground text-sm">Understand objectives and functional components</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="premium-card">
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <i className="fas fa-graduation-cap text-primary text-2xl mt-1 mr-4"></i>
                    <div>
                      <h3 className="font-bold text-card-foreground mb-2">Requirement to Deploy (R2D)</h3>
                      <p className="text-muted-foreground text-sm">Master the development and deployment value stream</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="premium-card">
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <i className="fas fa-graduation-cap text-primary text-2xl mt-1 mr-4"></i>
                    <div>
                      <h3 className="font-bold text-card-foreground mb-2">Request to Fulfil (R2F)</h3>
                      <p className="text-muted-foreground text-sm">Learn service delivery and fulfillment processes</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="premium-card">
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <i className="fas fa-graduation-cap text-primary text-2xl mt-1 mr-4"></i>
                    <div>
                      <h3 className="font-bold text-card-foreground mb-2">Detect to Correct (D2C)</h3>
                      <p className="text-muted-foreground text-sm">Understand incident and problem management</p>
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
          <div className="max-w-4xl mx-auto mb-8">
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              IT4IT knowledge can provide context and guidance for addressing issues arising in Digital Transformation, IT Transformation, Application Portfolio Management, DevOps Adoption, Cloud and Service Broker, and IT Tools Management and Rationalization.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              IT professionals in the following roles should consider the value of IT4IT to their work and careers:
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              "Hands-on CIOs",
              "IT Strategy and Governance Professionals",
              "IT Architects (especially Enterprise Architects)",
              "Enterprise IT Business Managers",
              "IT Finance Managers",
              "Infrastructure Management Leaders",
              "Consultants and IT Services Companies",
              "ITIL and ITSM Professionals",
              "DevOps Practitioners",
              "IT Transformation Leaders"
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

      {/* Prerequisites */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">Prerequisites</h2>
          <div className="max-w-4xl mx-auto">
            <Card className="premium-card">
              <CardContent className="p-8">
                <p className="text-lg text-muted-foreground leading-relaxed text-center">
                  There are no formal prerequisites. Experience in the IT domain and management, knowledge of ITIL and Introduction to IT4IT training would all be helpful.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Examination Details */}
      <section className="py-20 section-darker">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">Examination</h2>
          <div className="max-w-4xl mx-auto mb-12">
            <p className="text-lg text-muted-foreground leading-relaxed text-center">
              Certification is only achieved by passing the examination.
            </p>
          </div>
          <Card className="premium-card max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-card-foreground mb-6">IT4IT Foundation</h3>
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
                <div className="flex justify-between border-b border-border pb-2">
                  <span className="text-muted-foreground">Open Book</span>
                  <span className="text-card-foreground font-semibold">NO</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Pass Mark</span>
                  <span className="text-card-foreground font-semibold">65%</span>
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
            Ready to Become IT4IT Certified?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join the gold standard in IT4IT certification training with CC&C Solutions
          </p>
          <button 

           onClick={() => window.location.href = '/contact'}
            className="premium-button px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105"
            data-testid="button-enquire"
          >
            Enquire Today
          </button>
         
        </div>
      </section>

      <Footer />
    </div>
  );
}
