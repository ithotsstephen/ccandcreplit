import { useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import { useLocation } from "wouter";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isWhatWeDoOpen, setIsWhatWeDoOpen] = useState(false);
  const [isIndustriesOpen, setIsIndustriesOpen] = useState(false);
  const [mobileWhatWeDoOpen, setMobileWhatWeDoOpen] = useState(false);
  const [mobileIndustriesOpen, setMobileIndustriesOpen] = useState(false);
  const [, setLocation] = useLocation();
  const { isAuthenticated, user } = useAuth();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-24">
            <div className="flex items-center">
              <button onClick={() => setLocation("/")} className="flex items-center space-x-3 cursor-pointer">
                <img 
                  src="/assets/Images/CC&CLogo.png"
                  alt="CC&C Solutions Logo" 
                  className="h-20 w-auto"
                  data-testid="img-logo-header"
                />
              </button>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              {/* What we do dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setIsWhatWeDoOpen(true)}
                onMouseLeave={() => setIsWhatWeDoOpen(false)}
              >
                <button 
                  onClick={() => setLocation('/what-we-do')}
                  className="text-muted-foreground hover:text-primary transition-colors flex items-center space-x-1"
                  data-testid="dropdown-what-we-do"
                >
                  <span>What we do</span>
                  <i className={`fas fa-chevron-down text-xs transition-transform ${isWhatWeDoOpen ? 'rotate-180' : ''}`}></i>
                </button>
                
                {/* Dropdown menu */}
                {isWhatWeDoOpen && (
                  <div 
                    className="absolute top-full left-0 pt-2 w-56 z-50"
                  >
                    <div className="bg-card border border-border rounded-md shadow-lg">
                      <div className="py-2">
                        <button 
                          onClick={() => { setLocation('/ccandc-training'); setIsWhatWeDoOpen(false); }}
                          className="w-full text-left px-4 py-2 text-muted-foreground hover:text-primary hover:bg-muted transition-colors"
                          data-testid="dropdown-training"
                        >
                          ArchIQ (Training)
                        </button>
                        <button 
                          onClick={() => { setLocation('/consulting'); setIsWhatWeDoOpen(false); }}
                          className="w-full text-left px-4 py-2 text-muted-foreground hover:text-primary hover:bg-muted transition-colors"
                          data-testid="dropdown-consulting"
                        >
                          AdviseIQ (Consulting)
                        </button>
                        <button 
                          onClick={() => { setLocation('/viztools'); setIsWhatWeDoOpen(false); }}
                          className="w-full text-left px-4 py-2 text-muted-foreground hover:text-primary hover:bg-muted transition-colors"
                          data-testid="dropdown-viztools"
                        >
                          StratIQ (Visualisation Tools)
                        </button>
                        <button 
                          onClick={() => { setLocation('/bian-training'); setIsWhatWeDoOpen(false); }}
                          className="w-full text-left px-4 py-2 text-muted-foreground hover:text-primary hover:bg-muted transition-colors"
                          data-testid="dropdown-bian"
                        >
                          BIAN
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Industries We Serve dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setIsIndustriesOpen(true)}
                onMouseLeave={() => setIsIndustriesOpen(false)}
              >
                <button 
                  className="text-muted-foreground hover:text-primary transition-colors flex items-center space-x-1"
                  data-testid="dropdown-industries"
                >
                  <span>Industries We Serve</span>
                  <i className={`fas fa-chevron-down text-xs transition-transform ${isIndustriesOpen ? 'rotate-180' : ''}`}></i>
                </button>
                
                {/* Dropdown menu */}
                {isIndustriesOpen && (
                  <div 
                    className="absolute top-full left-0 pt-2 w-48 z-50"
                  >
                    <div className="bg-card border border-border rounded-md shadow-lg">
                      <div className="py-2">
                        <button 
                          onClick={() => { setLocation('/banking'); setIsIndustriesOpen(false); }}
                          className="w-full text-left px-4 py-2 text-muted-foreground hover:text-primary hover:bg-muted transition-colors"
                          data-testid="dropdown-banking"
                        >
                          Banking
                        </button>
                        <button 
                          onClick={() => { setLocation('/insurance'); setIsIndustriesOpen(false); }}
                          className="w-full text-left px-4 py-2 text-muted-foreground hover:text-primary hover:bg-muted transition-colors"
                          data-testid="dropdown-insurance"
                        >
                          Insurance
                        </button>
                        <button 
                          onClick={() => { setLocation('/manufacturing'); setIsIndustriesOpen(false); }}
                          className="w-full text-left px-4 py-2 text-muted-foreground hover:text-primary hover:bg-muted transition-colors"
                          data-testid="dropdown-manufacturing"
                        >
                          Manufacturing
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              
              <button onClick={() => setLocation('/bian-training')} className="text-muted-foreground hover:text-primary transition-colors" data-testid="link-bian">
                BIAN
              </button>
              <button onClick={() => setLocation('/bian-sig')} className="text-muted-foreground hover:text-primary transition-colors">
                BIAN SIG
              </button>
              <button onClick={() => setLocation('/insights')} className="text-muted-foreground hover:text-primary transition-colors">
                Insights
              </button>
              <button onClick={() => setLocation('/events')} className="text-muted-foreground hover:text-primary transition-colors" data-testid="link-events">
                Events
              </button>
              <button onClick={() => setLocation('/about')} className="text-muted-foreground hover:text-primary transition-colors">
                About
              </button>
              <button onClick={() => setLocation('/contact')} className="bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 transition-colors" data-testid="link-contact">
                Contact
              </button>
              {isAuthenticated && user?.isAdmin && (
                <a href="/admin" className="bg-secondary text-secondary-foreground px-4 py-2 rounded-md hover:bg-secondary/90 transition-colors">
                  Admin
                </a>
              )}
            </div>
            
            <button 
              className="md:hidden p-2" 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              data-testid="mobile-menu-toggle"
            >
              <i className="fas fa-bars text-primary"></i>
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-card border-t border-border">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {/* What we do - Collapsible */}
              <button 
                onClick={() => setMobileWhatWeDoOpen(!mobileWhatWeDoOpen)}
                className="flex items-center justify-between w-full px-3 py-3 text-foreground font-medium text-base hover:bg-muted rounded-md transition-colors"
                data-testid="mobile-dropdown-what-we-do"
              >
                <span>What we do</span>
                <i className={`fas fa-chevron-down text-sm transition-transform ${mobileWhatWeDoOpen ? 'rotate-180' : ''}`}></i>
              </button>
              {mobileWhatWeDoOpen && (
                <div className="pl-4 space-y-1">
                  <button 
                    onClick={() => { setLocation('/ccandc-training'); setIsMobileMenuOpen(false); }} 
                    className="block w-full text-left px-4 py-2 text-muted-foreground hover:text-primary hover:bg-muted rounded-md transition-colors text-base"
                    data-testid="mobile-link-training"
                  >
                    ArchIQ (Training)
                  </button>
                  <button 
                    onClick={() => { setLocation('/consulting'); setIsMobileMenuOpen(false); }} 
                    className="block w-full text-left px-4 py-2 text-muted-foreground hover:text-primary hover:bg-muted rounded-md transition-colors text-base"
                    data-testid="mobile-link-consulting"
                  >
                    AdviseIQ (Consulting)
                  </button>
                  <button 
                    onClick={() => { setLocation('/viztools'); setIsMobileMenuOpen(false); }} 
                    className="block w-full text-left px-4 py-2 text-muted-foreground hover:text-primary hover:bg-muted rounded-md transition-colors text-base"
                    data-testid="mobile-link-viztools"
                  >
                    StratIQ (Visualisation Tools)
                  </button>
                  <button 
                    onClick={() => { setLocation('/bian'); setIsMobileMenuOpen(false); }} 
                    className="block w-full text-left px-4 py-2 text-muted-foreground hover:text-primary hover:bg-muted rounded-md transition-colors text-base"
                    data-testid="mobile-link-bian"
                  >
                    BIAN
                  </button>
                </div>
              )}
              
              {/* Industries We Serve - Collapsible */}
              <button 
                onClick={() => setMobileIndustriesOpen(!mobileIndustriesOpen)}
                className="flex items-center justify-between w-full px-3 py-3 text-foreground font-medium text-base hover:bg-muted rounded-md transition-colors"
                data-testid="mobile-dropdown-industries"
              >
                <span>Industries We Serve</span>
                <i className={`fas fa-chevron-down text-sm transition-transform ${mobileIndustriesOpen ? 'rotate-180' : ''}`}></i>
              </button>
              {mobileIndustriesOpen && (
                <div className="pl-4 space-y-1">
                  <button 
                    onClick={() => { setLocation('/banking'); setIsMobileMenuOpen(false); }} 
                    className="block w-full text-left px-4 py-2 text-muted-foreground hover:text-primary hover:bg-muted rounded-md transition-colors text-base"
                    data-testid="mobile-link-banking"
                  >
                    Banking
                  </button>
                  <button 
                    onClick={() => { setLocation('/insurance'); setIsMobileMenuOpen(false); }} 
                    className="block w-full text-left px-4 py-2 text-muted-foreground hover:text-primary hover:bg-muted rounded-md transition-colors text-base"
                    data-testid="mobile-link-insurance"
                  >
                    Insurance
                  </button>
                  <button 
                    onClick={() => { setLocation('/manufacturing'); setIsMobileMenuOpen(false); }} 
                    className="block w-full text-left px-4 py-2 text-muted-foreground hover:text-primary hover:bg-muted rounded-md transition-colors text-base"
                    data-testid="mobile-link-manufacturing"
                  >
                    Manufacturing
                  </button>
                </div>
              )}
              
              {/* Other Menu Items */}
              <button 
                onClick={() => { setLocation('/bian-sig'); setIsMobileMenuOpen(false); }} 
                className="block w-full text-left px-3 py-3 text-foreground hover:text-primary hover:bg-muted rounded-md transition-colors text-base"
                data-testid="mobile-link-bian-sig"
              >
                BIAN SIG
              </button>
              <button 
                onClick={() => { setLocation('/insights'); setIsMobileMenuOpen(false); }} 
                className="block w-full text-left px-3 py-3 text-foreground hover:text-primary hover:bg-muted rounded-md transition-colors text-base"
                data-testid="mobile-link-insights"
              >
                Insights
              </button>
              <button 
                onClick={() => { setLocation('/events'); setIsMobileMenuOpen(false); }} 
                className="block w-full text-left px-3 py-3 text-foreground hover:text-primary hover:bg-muted rounded-md transition-colors text-base"
                data-testid="mobile-link-events"
              >
                Events
              </button>
              <button 
                onClick={() => { setLocation('/about'); setIsMobileMenuOpen(false); }} 
                className="block w-full text-left px-3 py-3 text-foreground hover:text-primary hover:bg-muted rounded-md transition-colors text-base"
                data-testid="mobile-link-about"
              >
                About
              </button>
              <button 
                onClick={() => { setLocation('/contact'); setIsMobileMenuOpen(false); }} 
                className="block w-full text-left px-3 py-3 bg-primary text-primary-foreground rounded-md mt-2 hover:bg-primary/90 transition-colors font-medium text-base"
                data-testid="mobile-link-contact"
              >
                Contact
              </button>
              {isAuthenticated && user?.isAdmin && (
                <a 
                  href="/admin" 
                  className="block w-full text-left px-3 py-3 bg-secondary text-secondary-foreground rounded-md mt-2 hover:bg-secondary/90 transition-colors font-medium text-base"
                >
                  Admin
                </a>
              )}
            </div>
          </div>
        )}
      </nav>
      <div id="home" className="h-16"></div> {/* Spacer for fixed nav */}
    </>
  );
}
