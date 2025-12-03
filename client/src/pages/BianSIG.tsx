import { useEffect } from "react";
import { useLocation } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Target, Calendar, Check, Circle, Users, Lightbulb, Star, Sparkles, RefreshCw, Gift, Compass } from "lucide-react";

export default function BianSIG() {
  const [, setLocation] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);

    document.title = "AU/NZ BIAN Special Interest Group | CC&C Solutions";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Join the AU/NZ BIAN Special Interest Group - free virtual meetings for financial services professionals to collaborate on BIAN adoption, share best practices, and engage with framework experts.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Join the AU/NZ BIAN Special Interest Group - free virtual meetings for financial services professionals to collaborate on BIAN adoption, share best practices, and engage with framework experts.';
      document.head.appendChild(meta);
    }

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', 'AU/NZ BIAN Special Interest Group');
    } else {
      const meta = document.createElement('meta');
      meta.setAttribute('property', 'og:title');
      meta.content = 'AU/NZ BIAN Special Interest Group';
      document.head.appendChild(meta);
    }

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', 'Bringing together business and technology professionals in financial services organizations who are applying or seeking to learn more about BIAN. Free to join.');
    } else {
      const meta = document.createElement('meta');
      meta.setAttribute('property', 'og:description');
      meta.content = 'Bringing together business and technology professionals in financial services organizations who are applying or seeking to learn more about BIAN. Free to join.';
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

  const scrollToContact = () => {
    setLocation("/#contact");
  };

  const handleRegisterClick = () => {
    setLocation('/contact');
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section 
        className="pt-24 pb-16 relative bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/assets/Images/BIAN%20SIG%20Header.jpg)' }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AU/NZ BIAN <span className="text-primary">Special Interest Group</span>
            </h1>
            <p className="text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Bringing together business and technology professionals in financial services organizations 
              who are applying or seeking to learn more about BIAN.
            </p>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-8">Overview</h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                The AU/NZ BIAN Special Interest Group has been formed to bring together business and 
                technology professionals in financial services organizations who are applying or seeking 
                to learn more about BIAN.
              </p>
            </div>
            <div className="relative">
              <img 
                src="/assets/Images/BIAN-SIG.jpg" 
                alt="BIAN Training Session" 
                className="rounded-xl shadow-2xl"
              />
              <div className="absolute -bottom-8 -left-8 bg-primary text-primary-foreground p-6 rounded-xl shadow-lg">
                <div className="text-2xl font-bold">Free</div>
                <div className="text-sm">to Join</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Objectives */}
      <section className="py-20 section-darker">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="premium-card p-8">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center mb-6">
                  <Compass className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-card-foreground mb-6">Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To enable a composable banking architecture and industry interoperability in Australia 
                  and New Zealand through the application of BIAN.
                </p>
              </CardContent>
            </Card>

            <Card className="premium-card p-8">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-accent rounded-lg flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-accent-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-card-foreground mb-6">Objectives</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-accent mt-1 mr-3 flex-shrink-0" />
                    <span className="text-muted-foreground">Collaborate with peers in the region on BIAN adoption</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-accent mt-1 mr-3 flex-shrink-0" />
                    <span className="text-muted-foreground">Get first-hand insights from the BIAN "engine room"</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-accent mt-1 mr-3 flex-shrink-0" />
                    <span className="text-muted-foreground">Engage with experts to get questions answered</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-accent mt-1 mr-3 flex-shrink-0" />
                    <span className="text-muted-foreground">Discover upcoming trends and best practices</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-accent mt-1 mr-3 flex-shrink-0" />
                    <span className="text-muted-foreground">Feed back improvements / extensions to the Framework and associated tools / guides</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Format and Cadence */}
      <section className="py-20 section-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">Format and Cadence</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The AU/NZ BIAN SIG will meet virtually (and where possible, in person) on a regular cadence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <Card className="premium-card p-8">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-secondary rounded-lg flex items-center justify-center mb-6">
                  <Calendar className="w-8 h-8 text-secondary-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-card-foreground mb-6">Standing Agenda</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Circle className="w-3 h-3 text-secondary fill-secondary mt-2 mr-3 flex-shrink-0" />
                    <span className="text-muted-foreground">Raise topics of priority that banks/vendors are focusing on</span>
                  </li>
                  <li className="flex items-start">
                    <Circle className="w-3 h-3 text-secondary fill-secondary mt-2 mr-3 flex-shrink-0" />
                    <span className="text-muted-foreground">Workshop chosen topic to share learnings, discuss best practices, and raise feedback to BIAN</span>
                  </li>
                  <li className="flex items-start">
                    <Circle className="w-3 h-3 text-secondary fill-secondary mt-2 mr-3 flex-shrink-0" />
                    <span className="text-muted-foreground">Discuss relevant updates in BIAN for awareness</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <div className="relative">
              <img 
                src="/assets/Images/SIG-Agenda.jpg" 
                alt="BIAN Workshop Session" 
                className="rounded-xl shadow-2xl"
              />
              <div className="absolute -bottom-8 -right-8 bg-accent text-accent-foreground p-6 rounded-xl shadow-lg">
                <div className="text-2xl font-bold">1 Hour</div>
                <div className="text-sm">Per Session</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule */}
      <section className="py-20 section-darker">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">Upcoming Sessions</h2>
            <p className="text-xl text-muted-foreground">
              The AU/NZ BIAN SIG convenes fortnightly or monthly for 1 hour. All times are in AEST/AEDT.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="premium-card p-8">
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left py-4 px-4 text-card-foreground font-semibold">Session</th>
                        <th className="text-left py-4 px-4 text-card-foreground font-semibold">Date</th>
                        <th className="text-left py-4 px-4 text-card-foreground font-semibold">Time</th>
                        <th className="text-left py-4 px-4 text-card-foreground font-semibold">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-border/50">
                        <td className="py-4 px-4 text-muted-foreground">1</td>
                        <td className="py-4 px-4 text-muted-foreground">11th July 2025</td>
                        <td className="py-4 px-4 text-muted-foreground">9am AEST / 11am NZST</td>
                        <td className="py-4 px-4">
                          <span className="px-3 py-1 bg-secondary/20 text-secondary rounded-full text-sm">Held</span>
                        </td>
                      </tr>
                      <tr className="border-b border-border/50">
                        <td className="py-4 px-4 text-muted-foreground">2</td>
                        <td className="py-4 px-4 text-muted-foreground">15th August 2025</td>
                        <td className="py-4 px-4 text-muted-foreground">1pm AEST / 3pm NZST</td>
                        <td className="py-4 px-4">
                          <span className="px-3 py-1 bg-secondary/20 text-secondary rounded-full text-sm">Held</span>
                        </td>
                      </tr>
                      <tr className="border-b border-border/50">
                        <td className="py-4 px-4 text-muted-foreground">3</td>
                        <td className="py-4 px-4 text-muted-foreground">12th September 2025</td>
                        <td className="py-4 px-4 text-muted-foreground">1pm AEST / 3pm NZST</td>
                        <td className="py-4 px-4">
                          <span className="px-3 py-1 bg-secondary/20 text-secondary rounded-full text-sm">Held</span>
                        </td>
                      </tr>
                      <tr className="border-b border-border/50">
                        <td className="py-4 px-4 text-muted-foreground">4</td>
                        <td className="py-4 px-4 text-muted-foreground">27th October 2025</td>
                        <td className="py-4 px-4 text-muted-foreground">6pm AEDT / 8pm NZDT</td>
                        <td className="py-4 px-4">
                          <span className="px-3 py-1 bg-secondary/20 text-secondary rounded-full text-sm">Held</span>
                        </td>
                      </tr>
                      <tr>
                        <td className="py-4 px-4 text-muted-foreground">5</td>
                        <td className="py-4 px-4 text-muted-foreground">12th December 2025</td>
                        <td className="py-4 px-4 text-muted-foreground">TBD</td>
                        <td className="py-4 px-4">
                          <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">To Be Scheduled</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 section-darker">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">Why Join?</h2>
            <p className="text-xl text-muted-foreground">
              Discover the benefits of being part of the AU/NZ BIAN community
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Network with Peers",
                description: "Connect with business and technology professionals from leading financial institutions across Australia and New Zealand.",
                icon: Users
              },
              {
                title: "Expert Insights",
                description: "Get first-hand insights from the BIAN 'engine room' and engage directly with framework experts.",
                icon: Lightbulb
              },
              {
                title: "Best Practices",
                description: "Share learnings, discover upcoming trends, and learn proven best practices from real-world implementations.",
                icon: Star
              },
              {
                title: "Shape the Future",
                description: "Provide feedback and suggestions to improve the BIAN Framework and associated tools and guides.",
                icon: Sparkles
              },
              {
                title: "Stay Current",
                description: "Stay informed about relevant updates and developments in the BIAN ecosystem and banking architecture.",
                icon: RefreshCw
              },
              {
                title: "Free Access",
                description: "All sessions are completely free to attend, making it accessible for organizations of all sizes.",
                icon: Gift
              }
            ].map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <Card key={index} className="service-card p-6 text-center">
                  <CardContent className="p-0">
                    <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center mx-auto mb-6">
                      <IconComponent className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <h4 className="text-xl font-bold text-card-foreground mb-4">{benefit.title}</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* How to Join */}
      <section className="py-20 section-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-8">
            How to Join
          </h2>
          <p className="text-2xl text-muted-foreground mb-8 leading-relaxed">
            The BIAN Special Interest Group is <span className="text-primary font-semibold">free to join</span>
          </p>
          <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
            Connect with industry peers, share best practices, and stay ahead of the latest BIAN developments 
            in the Australia and New Zealand region.
          </p>
          
          <div className="flex justify-center">
            <button 
              onClick={handleRegisterClick}
              className="premium-button px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105"
              data-testid="button-register-now"
            >
              Register Now
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}