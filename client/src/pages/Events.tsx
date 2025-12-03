import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Calendar, MapPin } from "lucide-react";

interface Event {
  id: string;
  title: string;
  date: string;
  location: string;
  shortDescription: string;
  fullContent: string;
  isUpcoming?: boolean;
  imagePath?: string;
}

const upcomingEvents: Event[] = [
  {
    id: "bian-summit-chicago-2025",
    title: "CC&C Solutions at the BIAN Banking Summit 2025",
    date: "November 18-19, 2025",
    location: "Willis Tower, Chicago, USA",
    shortDescription: "Platinum Sponsor of BIAN Banking Summit 2025 - Championing digital transformation across financial ecosystems",
    fullContent: `CC&C Solutions is proud to be a Platinum Sponsor of the BIAN Banking Summit 2025, taking place on November 18–19, 2025 at Willis Tower, Chicago, USA. As a global leader in enterprise architecture and digital transformation, CC&C continues to champion the adoption of the Banking Industry Architecture Network (BIAN) to accelerate modernization and interoperability across financial ecosystems. Our team looks forward to engaging with global banking innovators, sharing insights on open banking transformation, and showcasing how CC&C's expertise is enabling institutions worldwide to build scalable, future-ready digital banks.`,
    isUpcoming: true,
    imagePath: "/assets/Images/BIAN Summit Nov25 Chicago.png"
  }
];

const pastEvents: Event[] = [
  {
    id: "bian-london-2023",
    title: "BIAN Summit London 2023",
    date: "November 2023",
    location: "London, United Kingdom",
    shortDescription: "Leading interactive sessions on BIAN Service Domain model and API standardization",
    fullContent: `In November 2023, CC&C Solutions participated prominently at the BIAN Banking Summit in London, engaging with global banking leaders and technology providers. As recognized subject matter experts in BIAN adoption, our team led interactive breakout sessions and roundtable dialogues on mapping legacy landscapes to the BIAN Service Domain model. We showcased our proven methodology in application rationalization and API standardization, sharing best practices to accelerate banks' architectural modernization. Our presence reinforced CC&C's commitment to advancing open banking frameworks and delivering measurable transformation across financial services.`,
    imagePath: "/assets/Images/BIAN Summit Nov23 London.png"
  },
  {
    id: "singapore-fintech-2024",
    title: "Singapore FinTech Festival 2024",
    date: "November 2024",
    location: "Singapore",
    shortDescription: "Engaging with global leaders in finance and technology innovation - Represented by Chief Architect Mamta Sarangal",
    fullContent: `In November 2024, CC&C Solutions joined the world's leading voices in finance and technology at the Singapore FinTech Festival, one of the largest global gatherings for innovation in banking and fintech. Represented by Chief Architect & Technology Officer, Mamta Sarangal, our team engaged in dynamic conversations around open banking, BIAN frameworks, and the digital evolution of financial services. The festival offered a vibrant stage to exchange ideas with global peers and strengthen relationships across the fintech ecosystem. Our participation underscored CC&C's role as a bridge between architecture excellence and the future of finance.`,
    imagePath: "/assets/Images/Singapore Fintech Festival Nov 24.png"
  },
  {
    id: "bian-london-2024",
    title: "BIAN Summit London 2024",
    date: "2024",
    location: "London, United Kingdom",
    shortDescription: "Gold Partner and BIAN Summit Award Finalist - Best in Class Partner Award Winner & Transformation Champion",
    fullContent: `At the BIAN Summit 2024 in London, CC&C Solutions stood out as both a Gold Partner and a BIAN Summit Award Finalist, marking a milestone year of innovation and excellence. Our leadership team, including Chief Architect Mamta Sarangal and Global Lead for Banking and Financial Services Nishan Jebanasam, led an exclusive roundtable discussion on scaling BIAN adoption within banks—sharing practical strategies drawn from real-world transformations and consulting experience.

The event culminated in CC&C receiving the prestigious Best in Class Partner Award, recognising our delivery of first-class BIAN-based solutions that empower client success. Our collaboration with TDECU earned additional distinction as Transformation Champion, celebrating the successful use of BIAN models to drive measurable business outcomes.

From deep-dive dialogues to award-winning results, CC&C's presence at the Summit reaffirmed our leadership in shaping the future of composable banking architecture and enterprise transformation.`,
    imagePath: "/assets/Images/BIAN Summit Nov24 London.png"
  },
  {
    id: "lixi-2025",
    title: "LIXI Forum Sydney 2025",
    date: "2025",
    location: "Sydney, Australia",
    shortDescription: "Leading with BIAN: Realising Composable Banking Architectures - Presentation by Mamta Sarangal and David Vander",
    fullContent: `The LIXI Forum 2025 brought together more than 150 industry leaders and innovators from over 65 organisations to explore the future of lending, the transformative role of AI, and the importance of standards in building connected ecosystems.

CC&C Solutions contributed to this dialogue through the presentation "Leading with BIAN: Realising Composable Banking Architectures," delivered by Mamta Sarangal (Chief Architect, CC&C Solutions) and David Vander (CEO, Avolution / BIAN Director). Together, they shared practical strategies for realising composable banking using the BIAN framework and highlighted global perspectives on architecture-led transformation.

The forum also featured thought-provoking sessions on regulatory updates, broker evolution, and innovation under the Consumer Data Right (CDR), offering valuable insights into the challenges and opportunities shaping the financial services industry.

CC&C Solutions extended heartfelt thanks to LIXI Limited, Shane Rigby, and James Pitt for hosting a dynamic and collaborative event. The team left the forum inspired and motivated to continue driving innovation in composable banking and connected digital ecosystems.`,
    imagePath: "/assets/Images/Lixi Forum25.png"
  },
  {
    id: "bian-sa-2024",
    title: "BIAN Chapter Meet — South Africa 2024",
    date: "March 2024",
    location: "Cape Town, South Africa",
    shortDescription: "Start Transforming Your Bank with BIAN APIs - Hosted by Standard Bank",
    fullContent: `In March 2024, CC&C Solutions took part in the BIAN Chapter meeting in Cape Town, hosted by Standard Bank under the banner "Start Transforming Your Bank with BIAN APIs." CC&C's Mamta Sarangal joined the open table session titled "What is next after the API Adoption?", engaging in dialogue on future paths for BIAN implementation and API evolution. The meeting featured deep dives into BIAN tooling, ISO 20022 data modeling, and service landscape design, with regional banks (ABSA, Standard Bank) sharing adoption stories. Through this participation, CC&C reinforced its role as an active contributor to the African BIAN community and influencer in banking API transformation.`,
    imagePath: "/assets/Images/BIAN Open Day Mar24.png"
  }
];

export default function Events() {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section 
        className="pt-24 pb-16 relative bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/assets/Images/Events.jpg)' }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Events & Conferences
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Join us at industry-leading events where we share insights, innovations, and thought leadership in banking transformation and enterprise architecture
          </p>
        </div>
      </section>

      {/* Upcoming Events Section */}
      {upcomingEvents.length > 0 && (
        <section className="py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Upcoming Events</h2>
              <p className="text-muted-foreground">Mark your calendar for our upcoming industry appearances</p>
            </div>
            
            <div className={`${upcomingEvents.length === 1 ? 'flex justify-center' : 'grid md:grid-cols-2'} gap-8 max-w-5xl mx-auto`}>
              {upcomingEvents.map((event) => (
                <div
                  key={event.id}
                  onClick={() => setSelectedEvent(event)}
                  className={`group cursor-pointer bg-card border-2 border-border rounded-lg overflow-hidden hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 hover:border-primary hover:-translate-y-2 hover:scale-[1.02] ${upcomingEvents.length === 1 ? 'max-w-2xl w-full' : ''}`}
                  data-testid={`card-event-${event.id}`}
                >
                  {/* Event Image */}
                  <div className="relative h-48 overflow-hidden bg-black">
                    {event.imagePath ? (
                      <img 
                        src={event.imagePath} 
                        alt={event.title}
                        className="w-full h-full object-contain"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-primary to-primary/60"></div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none"></div>
                    <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold z-10">
                      Upcoming
                    </div>
                  </div>
                  
                  {/* Card Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {event.title}
                    </h3>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4 mr-2" />
                        {event.date}
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4 mr-2" />
                        {event.location}
                      </div>
                    </div>
                    <p className="text-muted-foreground text-sm">
                      {event.shortDescription}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Past Events Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Past Events</h2>
            <p className="text-muted-foreground">Our journey of thought leadership and industry engagement</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pastEvents.map((event) => (
              <div
                key={event.id}
                onClick={() => setSelectedEvent(event)}
                className="group cursor-pointer bg-card border-2 border-border rounded-lg overflow-hidden hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 hover:border-primary hover:-translate-y-2 hover:scale-[1.02]"
                data-testid={`card-event-${event.id}`}
              >
                {/* Event Image */}
                <div className="relative h-48 overflow-hidden bg-black">
                  {event.imagePath ? (
                    <img 
                      src={event.imagePath} 
                      alt={event.title}
                      className="w-full h-full object-contain"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-muted to-muted-foreground/20"></div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none"></div>
                </div>
                
                {/* Card Content */}
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {event.title}
                  </h3>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-2 flex-shrink-0" />
                      {event.date}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4 mr-2 flex-shrink-0" />
                      {event.location}
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm line-clamp-3">
                    {event.shortDescription}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Details Modal */}
      <Dialog open={!!selectedEvent} onOpenChange={() => setSelectedEvent(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto" data-testid="dialog-event-details">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold">
              {selectedEvent?.title}
            </DialogTitle>
          </DialogHeader>
          
          {selectedEvent && (
            <div className="space-y-6">
              {/* Modal Image */}
              <div className="relative h-64 overflow-hidden rounded-lg bg-black">
                {selectedEvent.imagePath ? (
                  <img 
                    src={selectedEvent.imagePath} 
                    alt={selectedEvent.title}
                    className="w-full h-full object-contain"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-primary to-primary/60"></div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none"></div>
                {selectedEvent.isUpcoming && (
                  <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold z-10">
                    Upcoming Event
                  </div>
                )}
              </div>
              
              {/* Event Details */}
              <div className="grid md:grid-cols-2 gap-4 p-4 bg-muted/50 rounded-lg">
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 mr-3 text-primary" />
                  <div>
                    <p className="text-xs text-muted-foreground">Date</p>
                    <p className="font-medium">{selectedEvent.date}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 mr-3 text-primary" />
                  <div>
                    <p className="text-xs text-muted-foreground">Location</p>
                    <p className="font-medium">{selectedEvent.location}</p>
                  </div>
                </div>
              </div>
              
              {/* Full Content */}
              <div className="prose prose-sm max-w-none dark:prose-invert">
                <div className="text-foreground whitespace-pre-line leading-relaxed">
                  {selectedEvent.fullContent}
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
}
