import { useEffect } from "react";
import { useLocation } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { Card, CardContent } from "@/components/ui/card";
import FAQSection from "@/components/FAQSection";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

type Service = {
  id: string;
  name: string;
  description: string;
  category: string;
  industry?: string;
  icon?: string;
};

export default function WhatWeDo() {
  const [, setLocation] = useLocation();
  const { data: services = [], isLoading } = useQuery<Service[]>({
    queryKey: ['/api/services'],
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const consultingServices = services.filter(service => service.category === 'consulting');
  const trainingServices = services.filter(service => service.category === 'training');

  // Default services if API returns empty
  const defaultConsultingServices = [
    {
      id: '7',
      name: 'Retail',
      description: 'Digital commerce transformation and customer experience optimization',
      icon: 'fas fa-building',
      category: 'consulting',
      industry: 'retail'
    },
    {
      id: '8',
      name: 'Telecommunications',
      description: 'Network modernization and service delivery transformation', 
      icon: 'fas fa-broadcast-tower',
      category: 'consulting',
      industry: 'telecommunications'
    },
    {
      id: '9',
      name: 'Healthcare',
      description: 'eHealth architecture and digital health transformation',
      icon: 'fas fa-heartbeat', 
      category: 'consulting',
      industry: 'healthcare'
    },
    {
      id: '10',
      name: 'Financial Services',
      description: 'Banking modernization and BIAN implementation expertise',
      icon: 'fas fa-coins',
      category: 'consulting', 
      industry: 'financial-services'
    }
  ];

  const defaultTrainingServices = [
    {
      id: '1',
      name: 'TOGAF® Architecture',
      description: 'Provide your teams the most up-to-date TOGAF® certification, reflecting the many enhancements including agile architecture and digital transformation.',
      icon: 'fas fa-graduation-cap',
      category: 'training'
    },
    {
      id: '2', 
      name: 'IT4IT™ Management',
      description: 'With more than half of all IT4IT™ practitioners trained by CC&C, we equip your teams to manage DevOps and Digital Products at scale.',
      icon: 'fas fa-cogs',
      category: 'training'
    },
    {
      id: '3',
      name: 'BIAN Foundation', 
      description: 'As the only BIAN-accredited training organisation with a global footprint, we deliver measurable value while maximizing BIAN usage effectively.',
      icon: 'fas fa-university',
      category: 'training'
    },
    {
      id: '4',
      name: 'Data Architecture',
      description: 'Master data governance, modeling, and integration strategies that drive business intelligence and analytics success.',
      icon: 'fas fa-database',
      category: 'training'
    },
    {
      id: '5',
      name: 'Integration Fundamentals',
      description: 'Build robust integration capabilities that connect systems, data, and processes across your enterprise ecosystem.',
      icon: 'fas fa-link',
      category: 'training'
    },
    {
      id: '6',
      name: 'Sparx Enterprise Architect',
      description: 'Achieve self-sufficiency in Enterprise Architecture using Sparx EA Software through hands-on training and mentoring.',
      icon: 'fas fa-tools',
      category: 'training'
    }
  ];

  const displayConsultingServices = consultingServices.length > 0 ? consultingServices : defaultConsultingServices;
  const displayTrainingServices = trainingServices.length > 0 ? trainingServices : defaultTrainingServices;

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 section-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              What <span className="text-primary">We Do</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              We're transformation consultants working at the intersection of business strategy, 
              technology and architecture. Discover our comprehensive range of consulting services 
              and training programs designed to accelerate your digital transformation journey.
            </p>
          </div>
        </div>
      </section>

      {/* Training Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">Training Programs</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive training programs to upskill your teams in enterprise architecture and digital transformation
            </p>
          </div>

          {isLoading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="animate-pulse">
                  <div className="h-64 bg-muted rounded-xl"></div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {displayTrainingServices.map((service) => (
                <Card key={service.id} className="service-card bg-card hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
                  <CardContent className="p-8 h-full flex flex-col">
                    <div className="w-16 h-16 bg-accent rounded-lg flex items-center justify-center mb-6 mx-auto">
                      <i className={`${service.icon} text-2xl text-accent-foreground`}></i>
                    </div>
                    <h3 className="text-xl font-bold text-card-foreground mb-4 text-center">{service.name}</h3>
                    <p className="text-muted-foreground text-center flex-1">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          <div className="text-center">
            <button 
              onClick={() => setLocation('/ccandc-training')}
              className="premium-button px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105"
              data-testid="button-training-learn-more"
            >
              Explore Training Programs
            </button>
          </div>
        </div>
      </section>

      {/* Consulting Section */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">Consulting Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Strategic consulting across key industries to drive digital transformation and operational excellence
            </p>
          </div>

          {isLoading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="animate-pulse">
                  <div className="h-64 bg-background rounded-xl"></div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              {displayConsultingServices.map((service) => (
                <Card key={service.id} className="service-card bg-card hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
                  <CardContent className="p-8 h-full flex flex-col">
                    <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center mb-6 mx-auto">
                      <i className={`${service.icon} text-2xl text-primary-foreground`}></i>
                    </div>
                    <h3 className="text-xl font-bold text-card-foreground mb-4 text-center">{service.name}</h3>
                    <p className="text-muted-foreground text-center flex-1">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          <div className="text-center">
            <button 
              onClick={() => setLocation('/consulting')}
              className="premium-button px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105"
              data-testid="button-consulting-learn-more"
            >
              Learn More About Consulting
            </button>
          </div>
        </div>
      </section>

      <FAQSection />

      {/* Call to Action */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Organization?</h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-3xl mx-auto">
            Partner with CC&C Solutions to unlock your organization's potential through expert consulting 
            and world-class training programs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => setLocation("/#contact")}
              className="premium-button px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105"
              data-testid="button-get-started"
            >
              Get Started Today
            </button>
            <button 
              onClick={() => setLocation("/about")}
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-primary transition-all"
              data-testid="button-learn-more"
            >
              Learn About Us
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}