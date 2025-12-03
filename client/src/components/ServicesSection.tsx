import { useQuery } from "@tanstack/react-query";
import { Card, CardContent } from "@/components/ui/card";
import { useLocation } from "wouter";

type Service = {
  id: string;
  name: string;
  description: string;
  category: string;
  industry?: string;
  icon?: string;
};

export default function ServicesSection() {
  const [, setLocation] = useLocation();

  const iqServices = [
    {
      id: 'archiq',
      name: 'ArchIQ',
      subtitle: 'Training Services',
      description: 'World-class architecture training and certification programs that empower your teams with cutting-edge skills and frameworks.',
      icon: 'fas fa-sitemap',
      image: '/assets/Images/ArchIQ.png',
      link: '/ccandc-training'
    },
    {
      id: 'adviseiq',
      name: 'AdviseIQ',
      subtitle: 'Consulting Services',
      description: 'Strategic advisory services to guide your enterprise transformation journey with expert insights and proven methodologies.',
      icon: 'fas fa-lightbulb',
      image: '/assets/Images/AdviseIQ.png',
      link: '/consulting'
    },
    {
      id: 'stratiq',
      name: 'StratIQ',
      subtitle: 'Visualisation Tools',
      description: 'Comprehensive strategic intelligence solutions that align business objectives with technology capabilities for optimal outcomes.',
      icon: 'fas fa-chess',
      image: '/assets/Images/StratIQ.png',
      link: '/stratiq'
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">Our Service Offerings</h2>
        </div>

        {/* IQ Services Cards */}
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {iqServices.map((service) => (
            <Card 
              key={service.id} 
              className="service-card hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
              onClick={() => setLocation(service.link)}
              data-testid={`card-${service.id}`}
            >
              <CardContent className="p-8 text-center">
                <div className="w-40 h-40 rounded-lg overflow-hidden mx-auto mb-6">
                  {service.image ? (
                    <img 
                      src={service.image} 
                      alt={service.name}
                      className="w-full h-full object-cover rounded-lg"
                      data-testid={`img-${service.id}`}
                    />
                  ) : (
                    <div className="w-full h-full bg-accent rounded-lg flex items-center justify-center">
                      <i className={`${service.icon} text-4xl text-accent-foreground`}></i>
                    </div>
                  )}
                </div>
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-primary">{service.name}</h3>
                  {(service as any).subtitle && (
                    <p className="text-white mt-1 text-[18px]">{(service as any).subtitle}</p>
                  )}
                </div>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                <button 
                  className="text-accent font-semibold hover:underline"
                  data-testid={`button-learn-more-${service.id}`}
                >
                  Learn More →
                </button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
