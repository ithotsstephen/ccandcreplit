import { useEffect, useRef } from 'react';
import { useStaticOrQuery, staticData, type ClientLogo } from '@/lib/staticData';

export default function ClientLogosCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Fetch all client logos dynamically from the API or static JSON
  const { data: clients = [], isLoading } = useStaticOrQuery<ClientLogo[]>(
    '/api/client-logos',
    staticData.getClientLogos,
    { staleTime: 5 * 60 * 1000 }
  );


  // Duplicate the array for seamless infinite scroll
  const duplicatedClients = [...clients, ...clients];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let scrollPosition = 0;
    const scrollSpeed = 0.5; // Adjust speed here (pixels per frame)

    const animate = () => {
      scrollPosition += scrollSpeed;
      
      // Reset scroll position when we've scrolled through one complete set
      if (scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0;
      }
      
      scrollContainer.scrollLeft = scrollPosition;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    // Pause animation on hover
    const handleMouseEnter = () => {
      cancelAnimationFrame(animationId);
    };

    const handleMouseLeave = () => {
      animationId = requestAnimationFrame(animate);
    };

    scrollContainer.addEventListener('mouseenter', handleMouseEnter);
    scrollContainer.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationId);
      scrollContainer.removeEventListener('mouseenter', handleMouseEnter);
      scrollContainer.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [duplicatedClients.length]);

  if (isLoading) {
    return (
      <section className="py-16 section-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Trusted by Industry Leaders
            </h2>
          </div>
          <div className="flex justify-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-foreground/30"></div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 section-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-lg text-muted-foreground">
            Partnering with global organizations to drive digital transformation
          </p>
        </div>
        
        {/* Constantly Rotating Carousel */}
        <div className="relative overflow-hidden">
          <div 
            ref={scrollRef}
            className="flex space-x-12 overflow-hidden"
            style={{ 
              scrollBehavior: 'unset',
              WebkitOverflowScrolling: 'touch'
            }}
            data-testid="client-logos-carousel"
          >
            {duplicatedClients.map((client, index) => (
              <div
                key={`${client.name}-${index}`}
                className="flex-shrink-0 w-32 h-20 flex items-center justify-center transition-all duration-300"
                data-testid={`client-logo-${client.name.toLowerCase()}`}
              >
                <img
                  src={client.logoPath}
                  alt={client.alt}
                  className="max-w-full max-h-full object-contain"
                  onLoad={() => {
                    console.log(`✅ Logo loaded successfully: ${client.logoPath}`);
                  }}
                  onError={(e) => {
                    console.log(`❌ Failed to load logo: ${client.logoPath}`);
                    // Show text fallback
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const fallback = document.createElement('div');
                    fallback.className = 'w-full h-full bg-white rounded-lg flex items-center justify-center border border-gray-200 shadow-sm';
                    fallback.innerHTML = `<span class="text-xs font-bold text-gray-700 text-center px-3 leading-tight">${client.name}</span>`;
                    target.parentElement?.appendChild(fallback);
                  }}
                />
              </div>
            ))}
          </div>
          
          {/* Gradient overlays for seamless effect */}
          <div className="absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-[hsl(220,13%,7%)] to-transparent pointer-events-none"></div>
          <div className="absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-[hsl(220,13%,7%)] to-transparent pointer-events-none"></div>
        </div>
        
      </div>
    </section>
  );
}