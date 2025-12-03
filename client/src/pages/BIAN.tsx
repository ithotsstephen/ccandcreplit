import { useEffect } from "react";
import { useLocation } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Navigation from "@/components/Navigation";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import ImageZoom from "@/components/ImageZoom";
import { Play } from "lucide-react";
import { bianWebinars } from "@/data/bianWebinars";

export default function BIAN() {
  const [, setLocation] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);

    document.title = "BIAN - Banking Industry Architecture Network | CC&C Solutions";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'CC&C\'s leadership position in BIAN certification training, adoption, and implementation is helping banks fast-track their BIAN journey. Future-proof your banking architecture with proven methodologies.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'CC&C\'s leadership position in BIAN certification training, adoption, and implementation is helping banks fast-track their BIAN journey. Future-proof your banking architecture with proven methodologies.';
      document.head.appendChild(meta);
    }

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', 'BIAN - Banking Industry Architecture Network');
    } else {
      const meta = document.createElement('meta');
      meta.setAttribute('property', 'og:title');
      meta.content = 'BIAN - Banking Industry Architecture Network';
      document.head.appendChild(meta);
    }

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', 'Navigate the complexities of legacy systems and architecture with CC&C Solutions – trusted partners to the world\'s leading financial institutions.');
    } else {
      const meta = document.createElement('meta');
      meta.setAttribute('property', 'og:description');
      meta.content = 'Navigate the complexities of legacy systems and architecture with CC&C Solutions – trusted partners to the world\'s leading financial institutions.';
      document.head.appendChild(meta);
    }

    return () => {
      document.title = 'CC&C Solutions';
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) metaDescription.remove();
      const ogTitle = document.querySelector('meta[property="og:title"]');
      if (ogTitle) ogTitle.remove();
      const ogDescription = document.querySelector('meta[property="og:description"]');
      if (ogDescription) ogDescription.remove();
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      {/* Hero Section */}
      <section className="pt-24 pb-16 section-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-8 leading-tight">
              Future-Proof Your Banking<br />
              Architecture With <span className="text-primary">BIAN</span>
            </h1>
            <p className="text-2xl text-muted-foreground max-w-4xl mx-auto mb-6 leading-relaxed">
              CC&C's leadership position in BIAN certification training,
            </p>
            <p className="text-2xl text-muted-foreground max-w-4xl mx-auto mb-12 leading-relaxed">
              adoption, and implementation is helping banks fast-track their BIAN journey.
            </p>
          </div>

          <div className="max-w-5xl mx-auto mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-8">
              Navigate the complexities of legacy systems and architecture with CC&C Solutions – trusted partners to the world's leading financial institutions.
            </h2>
          </div>

          <div className="max-w-7xl mx-auto mb-12">
            <ImageZoom
              src="/assets/Images/BIAN%20Schematic.png"
              alt="BIAN Architecture Schematic" 
              className="w-full min-h-[400px] md:min-h-[600px] h-auto object-contain rounded-xl shadow-2xl"
              testId="img-bian-schematic"
            />
          </div>
        </div>
      </section>
      {/* Four-Step Process */}
      <section className="py-20 section-darker">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              How CC&C helps banks move to a modern,<br />
              composable, and agile architecture
            </h2>
            <p className="text-xl text-muted-foreground">
              A four-step process using BIAN to simplify and modernize your banking architecture
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
            {/* Step 1 */}
            <Card className="premium-card group hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col">
              <CardContent className="p-4 pb-0">
                <div className="flex flex-col mb-4">
                  <div className="px-3 py-1.5 bg-primary rounded-lg flex items-center justify-center mb-2 w-fit">
                    <span className="font-bold text-primary-foreground whitespace-nowrap text-sm">Step 1</span>
                  </div>
                  <h3 className="font-bold text-card-foreground group-hover:text-primary transition-colors duration-300 text-lg leading-tight">
                    Capture current state
                  </h3>
                </div>
              </CardContent>
              <div className="w-full bg-gray-900 px-3 py-4">
                <img 
                  src="/assets/Images/Step1.png" 
                  alt="Step 1: Capture current state"
                  className="w-full h-auto object-contain"
                  data-testid="img-step-1"
                />
              </div>
              <CardContent className="p-4 pt-4 flex-grow">
                <ul className="space-y-1.5">
                  <li className="flex items-start">
                    <i className="fas fa-circle text-primary text-[6px] mt-1.5 mr-2"></i>
                    <span className="text-xs text-muted-foreground leading-snug">Fragmented enterprise landscape</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-circle text-primary text-[6px] mt-1.5 mr-2"></i>
                    <span className="text-xs text-muted-foreground leading-snug">Duplicated capabilities</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-circle text-primary text-[6px] mt-1.5 mr-2"></i>
                    <span className="text-xs text-muted-foreground leading-snug">Point-to-point API's with no reuse</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-circle text-primary text-[6px] mt-1.5 mr-2"></i>
                    <span className="text-xs text-muted-foreground leading-snug">Control gaps and regulatory risk</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-circle text-primary text-[6px] mt-1.5 mr-2"></i>
                    <span className="text-xs text-muted-foreground leading-snug">Slow time to market</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-circle text-primary text-[6px] mt-1.5 mr-2"></i>
                    <span className="text-xs text-muted-foreground leading-snug">High operational expense</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Step 2 */}
            <Card className="premium-card group hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col">
              <CardContent className="p-4 pb-0">
                <div className="flex flex-col mb-4">
                  <div className="px-3 py-1.5 bg-accent rounded-lg flex items-center justify-center mb-2 w-fit">
                    <span className="font-bold text-accent-foreground whitespace-nowrap text-sm">Step 2</span>
                  </div>
                  <h3 className="font-bold text-card-foreground group-hover:text-primary transition-colors duration-300 text-lg leading-tight">
                    Map and classify
                  </h3>
                </div>
              </CardContent>
              <div className="w-full bg-gray-900 px-3 py-4">
                <img 
                  src="/assets/Images/Step2.png" 
                  alt="Step 2: Map and classify"
                  className="w-full h-auto object-contain"
                  data-testid="img-step-2"
                />
              </div>
              <CardContent className="p-4 pt-4 flex-grow">
                <ul className="space-y-1.5">
                  <li className="flex items-start">
                    <i className="fas fa-circle text-accent text-[6px] mt-1.5 mr-2"></i>
                    <span className="text-xs text-muted-foreground leading-snug">Define BIAN-based Service Landscape and map applications</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-circle text-accent text-[6px] mt-1.5 mr-2"></i>
                    <span className="text-xs text-muted-foreground leading-snug">Classify API's and identify degree of BIAN alignment</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-circle text-accent text-[6px] mt-1.5 mr-2"></i>
                    <span className="text-xs text-muted-foreground leading-snug">Identify duplication of capabilities</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-circle text-accent text-[6px] mt-1.5 mr-2"></i>
                    <span className="text-xs text-muted-foreground leading-snug">Improve change impact analysis</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Step 3 */}
            <Card className="premium-card group hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col">
              <CardContent className="p-4 pb-0">
                <div className="flex flex-col mb-4">
                  <div className="px-3 py-1.5 bg-secondary rounded-lg flex items-center justify-center mb-2 w-fit">
                    <span className="font-bold text-secondary-foreground whitespace-nowrap text-sm">Step 3</span>
                  </div>
                  <h3 className="font-bold text-card-foreground group-hover:text-primary transition-colors duration-300 text-lg leading-tight">
                    Align and wrap
                  </h3>
                </div>
              </CardContent>
              <div className="w-full bg-gray-900 px-3 py-4">
                <img 
                  src="/assets/Images/Step3.png" 
                  alt="Step 3: Align and wrap"
                  className="w-full h-auto object-contain"
                  data-testid="img-step-3"
                />
              </div>
              <CardContent className="p-4 pt-4 flex-grow">
                <ul className="space-y-1.5">
                  <li className="flex items-start">
                    <i className="fas fa-circle text-secondary text-[6px] mt-1.5 mr-2"></i>
                    <span className="text-xs text-muted-foreground leading-snug">Group capabilities and align to business domains</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-circle text-secondary text-[6px] mt-1.5 mr-2"></i>
                    <span className="text-xs text-muted-foreground leading-snug">Leverage BIAN API's to expose standard interfaces and abstract complexity</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-circle text-secondary text-[6px] mt-1.5 mr-2"></i>
                    <span className="text-xs text-muted-foreground leading-snug">Identify applications to invest vs retire</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-circle text-secondary text-[6px] mt-1.5 mr-2"></i>
                    <span className="text-xs text-muted-foreground leading-snug">Guide transformation planning</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Step 4 */}
            <Card className="premium-card group hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col">
              <CardContent className="p-4 pb-0">
                <div className="flex flex-col mb-4">
                  <div className="px-3 py-1.5 bg-blue-600 rounded-lg flex items-center justify-center mb-2 w-fit">
                    <span className="font-bold text-white whitespace-nowrap text-sm">Step 4</span>
                  </div>
                  <h3 className="font-bold text-card-foreground group-hover:text-primary transition-colors duration-300 text-lg leading-tight">
                    Rationalize and reuse
                  </h3>
                </div>
              </CardContent>
              <div className="w-full bg-gray-900 px-3 py-4">
                <img 
                  src="/assets/Images/Step4.png" 
                  alt="Step 4: Rationalize and reuse"
                  className="w-full h-auto object-contain"
                  data-testid="img-step-4"
                />
              </div>
              <CardContent className="p-4 pt-4 flex-grow">
                <ul className="space-y-1.5">
                  <li className="flex items-start">
                    <i className="fas fa-circle text-primary text-[6px] mt-1.5 mr-2"></i>
                    <span className="text-xs text-muted-foreground leading-snug">Rationalize capabilities to BIAN Service Domains</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-circle text-primary text-[6px] mt-1.5 mr-2"></i>
                    <span className="text-xs text-muted-foreground leading-snug">Reusable BIAN-aligned API's</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-circle text-primary text-[6px] mt-1.5 mr-2"></i>
                    <span className="text-xs text-muted-foreground leading-snug">Alignment to other banks and vendors who have adopted BIAN</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-circle text-primary text-[6px] mt-1.5 mr-2"></i>
                    <span className="text-xs text-muted-foreground leading-snug">Reduced cost of change and operational expense</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      {/* How Does BIAN Deliver Benefit */}
      <section className="py-20 section-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">How Does BIAN Deliver Benefit</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "It is Canonical",
                description: "The business function component designs BIAN specifies are standard for every use and user. The business role or purpose of each and every component can represent the systems needs of any type of bank, and can be consistently interpreted in any deployment",
                icon: "fas fa-book"
              },
              {
                title: "It is Stable Over Time",
                description: "The BIAN model defines what each component does but does not attempt to define how it should do it. As a result, the BIAN blueprint and its component boundaries are extremely stable over time",
                icon: "fas fa-anchor"
              },
              {
                title: "It can be adopted incrementally",
                description: "Systems built aligning to the model can be integrated alongside legacy systems and adopted incrementally. If well engineered, the internal workings of an application module can also evolve to include new practices and approaches as long as they keep to its original and discrete business role",
                icon: "fas fa-chart-line"
              },
              {
                title: "It Enables Agility",
                description: "By partitioning a bank's functionality, data and interfaces into discrete self-contained service centers and breaking down monolithic design, BIAN enables banks to innovate and get to production much faster by quarantining change impacts",
                icon: "fas fa-rocket"
              },
              {
                title: "It Supports Composability",
                description: "When solution providers and banks align with the model, banks can more easily mix and match system components developed by different providers and conversely solution providers can develop systems that can be more easily integrated in multiple banks.",
                icon: "fas fa-cubes"
              },
              {
                title: "It Helps Eliminate Complexity",
                description: "Because the BIAN components are designed to support discrete and autonomous business functions, system development can better avoid creating the systems overlaps, duplication and redundancies that plague traditional solution designs",
                icon: "fas fa-compress-alt"
              }
            ].map((benefit, index) => (
              <Card key={index} className="premium-card p-6">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-accent rounded-lg flex items-center justify-center mx-auto mb-6">
                    <i className={`${benefit.icon} text-2xl text-accent-foreground`}></i>
                  </div>
                  <h4 className="text-xl font-bold text-card-foreground mb-4">{benefit.title}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      {/* BIAN Training */}
      <section id="training" className="py-20 section-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">Our BIAN Training</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* BIAN Foundation Certification Training */}
            <Card className="premium-card group hover:shadow-2xl transition-all duration-500">
              <CardContent className="p-8 flex flex-col h-full">
                <h3 className="text-2xl font-bold text-card-foreground mb-6 group-hover:text-primary transition-colors duration-300">
                  BIAN Foundation Certification Training
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6 flex-grow">
                  This component of the training program is designed to provide participants with a thorough understanding of the BIAN framework: including its core principles, concepts, and content. The foundation training will lay the groundwork for more advanced learning and ensure that all participants have a solid grasp of the essential elements of BIAN framework, banking product development business scenarios and case studies modules.
                </p>
                <button 
                  // onClick={() => setLocation('/services/bian-foundation')}
                    onClick={() => window.open('https://ccandcsolutions.com/contact')}
                  className="premium-button px-6 py-3 rounded-lg font-semibold transition-all transform hover:scale-105"
                  data-testid="button-bian-foundation"
                >
                  Learn More
                </button>
              </CardContent>
            </Card>

            {/* BIAN Data Architecture and Design Specialist Certification Training */}
            <Card className="premium-card group hover:shadow-2xl transition-all duration-500">
              <CardContent className="p-8 flex flex-col h-full">
                <h3 className="text-2xl font-bold text-card-foreground mb-6 group-hover:text-primary transition-colors duration-300">
                  BIAN Data Architecture and Design Specialist Certification Training
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6 flex-grow">
                  The objective of BIAN Data Architecture & Design Specialist is to provide knowledge and comprehension of the BIAN Architecture and BIAN Business Object Modelling (BOM). BIAN BOM provides the financial sector with a reference model for information architecture, and this training would demonstrate how to customise data artifacts to your own organization context through a practical use case approach.
                </p>
                <button 
                  // onClick={() => window.open('https://training.ccandcsolutions.com/bian-data-architecture-specialist-certification/?course_id=BIAN%20Data%20Architecture%20&%20Design%20Specialist%20Certification', '_blank')}
                     onClick={() => window.open('https://ccandcsolutions.com/contact')}
                  className="premium-button px-6 py-3 rounded-lg font-semibold transition-all transform hover:scale-105"
                  data-testid="button-bian-data"
                >
                  Learn More
                </button>
              </CardContent>
            </Card>

            {/* BIAN Technical Workshop */}
            <Card className="premium-card group hover:shadow-2xl transition-all duration-500">
              <CardContent className="p-8 flex flex-col h-full">
                <h3 className="text-2xl font-bold text-card-foreground mb-6 group-hover:text-primary transition-colors duration-300">
                  BIAN Technical Workshop
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6 flex-grow">
                  This specialized module will focus on customized training content, developed to address the specific needs and requirement of the team working on initiatives leveraging BIAN. Customized Modules include data stream and integration & API stream. It will be detailed deep-dive scenarios that emphasize practical consideration of designing BIAN aligned conceptual design for solution components and integrations. It allows participants to gain hands-on experience and insights into how BIAN can be effectively applied within their context. This module aims to enhance awareness and equip the team with the skills necessary to drive successful BIAN alignment to products & systems.
                </p>
                <button 
                onClick={() => window.open('https://ccandcsolutions.com/contact')}
                  className="premium-button px-6 py-3 rounded-lg font-semibold transition-all transform hover:scale-105"
                  data-testid="button-bian-workshop"
                >
                  Learn More
                </button>
              </CardContent>
            </Card>

            {/* BIAN Management Overview */}
            <Card className="premium-card group hover:shadow-2xl transition-all duration-500">
              <CardContent className="p-8 flex flex-col h-full">
                <h3 className="text-2xl font-bold text-card-foreground mb-6 group-hover:text-primary transition-colors duration-300">
                  BIAN Management Overview
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6 flex-grow">
                  Good high-level understanding of the BIAN Architecture and its importance, relevance and significance in the context of Modern Digital Banking. It tailored help senior banking executives to get a quick overview of BIAN architecture and its ecosystem.
                </p>
                <button 
                onClick={() => window.open('https://ccandcsolutions.com/contact')}
                  className="premium-button px-6 py-3 rounded-lg font-semibold transition-all transform hover:scale-105"
                  data-testid="button-bian-management"
                >
                  Learn More
                </button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      {/* Testimonials */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">What our clients say</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Testimonial 1 */}
            <Card className="premium-card">
              <CardContent className="p-8">
                <div className="mb-6">
                  <i className="fas fa-quote-left text-4xl text-primary/20"></i>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6 italic">
                  ANZ has discovered CC & C Solutions to be an invaluable partner in our BIAN journey. Their extensive knowledge and collaborative approach have contributed significantly to our success. The guidance, training, and support they provide are essential to our successful implementation.
                </p>
                <div>
                  <p className="font-bold text-card-foreground">ANZ Bank</p>
                </div>
              </CardContent>
            </Card>

            {/* Testimonial 2 */}
            <Card className="premium-card">
              <CardContent className="p-8">
                <div className="mb-6">
                  <i className="fas fa-quote-left text-4xl text-primary/20"></i>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6 italic">
                  My appreciation to CC&C for such an insightful training on BIAN
                </p>
                <div>
                  <p className="font-bold text-card-foreground">Alfredo Palafox</p>
                  <p className="text-sm text-muted-foreground">Deputy Chief Architect LAM, HSBC</p>
                </div>
              </CardContent>
            </Card>

            {/* Testimonial 3 */}
            <Card className="premium-card">
              <CardContent className="p-8">
                <div className="mb-6">
                  <i className="fas fa-quote-left text-4xl text-primary/20"></i>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6 italic">
                  CC&C's BIAN course gave me an excellent introduction into banking standards and certifications.
                </p>
                <div>
                  <p className="font-bold text-card-foreground">Abhishek Das</p>
                  <p className="text-sm text-muted-foreground">NTT Data</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      {/* Webinar Series - Carousel */}
      <section className="py-20 section-darker">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">CC&C BIAN Webinar Series</h2>
          </div>

          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-6xl mx-auto"
          >
            <CarouselContent className="-ml-4">
              {bianWebinars.map((webinar) => (
                <CarouselItem key={webinar.id} className="basis-full md:basis-1/2 lg:basis-1/3 pl-4">
                  <div className="p-1 h-full">
                    <Card className="premium-card group hover:shadow-2xl transition-all duration-500 h-full flex flex-col">
                      <CardContent className="p-0 flex flex-col flex-1">
                        {/* Video Thumbnail */}
                        <div className="relative aspect-video w-full overflow-hidden rounded-t-lg bg-muted">
                          <img
                            src={`https://img.youtube.com/vi/${webinar.videoId}/maxresdefault.jpg`}
                            alt={webinar.title}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              e.currentTarget.src = `https://img.youtube.com/vi/${webinar.videoId}/hqdefault.jpg`;
                            }}
                          />
                          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center">
                            <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                              <Play className="w-8 h-8 text-primary-foreground ml-1" fill="currentColor" />
                            </div>
                          </div>
                        </div>

                        {/* Content */}
                        <div className="p-6 flex flex-col flex-1">
                          <h4 className="text-lg font-bold text-card-foreground mb-4 group-hover:text-primary transition-colors duration-300 line-clamp-2">
                            {webinar.title}
                          </h4>
                          
                          {webinar.subtitle && (
                            <h5 className="text-sm font-semibold text-muted-foreground mb-3">
                              {webinar.subtitle}
                            </h5>
                          )}
                          
                          {webinar.description && (
                            <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-grow line-clamp-3">
                              {webinar.description}
                            </p>
                          )}
                          
                          <button 
                            onClick={() => window.open(webinar.url, '_blank')}
                            className="premium-button px-4 py-2 rounded-lg font-semibold text-sm transition-all transform hover:scale-105 w-full mt-auto"
                            data-testid={`button-webinar-${webinar.id}`}
                          >
                            Watch Video
                          </button>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      <CTASection 
        title="Future-Proof Your Banking Architecture with BIAN"
        description="Ready to accelerate your BIAN adoption journey? Let our expert practitioners guide you from strategy to successful implementation."
        buttonText="Talk to Our Team"
      />

      <Footer />
    </div>
  );
}
