import { useQuery } from "@tanstack/react-query";
import { Card, CardContent } from "@/components/ui/card";
import useEmblaCarousel from 'embla-carousel-react';
import { useCallback } from 'react';

type Testimonial = {
  id: string;
  content: string;
  author: string;
  role: string;
  company: string;
  rating: number;
};

export default function TestimonialsSection() {
  const { data: testimonials = [], isLoading } = useQuery<Testimonial[]>({
    queryKey: ['/api/testimonials'],
  });

  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    loop: true,
    slidesToScroll: 1,
    breakpoints: {
      '(min-width: 768px)': { slidesToScroll: 2 },
      '(min-width: 1024px)': { slidesToScroll: 3 }
    }
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi]);

  // Actual testimonials from CC&C Solutions website
  const defaultTestimonials = [
    {
      id: '1',
      content: "We engaged CC and C Solutions for providing enterprise/solution architecture training. Their experts have a very good blend of domain knowledge / working experiences and they are leading consultants in strategy & architecture.",
      author: "Venkatesh Veluswamy",
      role: "Chief Architect",
      company: "AXA Japan",
      rating: 5
    },
    {
      id: '2',
      content: "CC and C Solutions is one of the leading industry experts on Enterprise Architecture and TOGAF®. Their deep subject matter knowledge and extensive practical experience make them an effective EA consultant.",
      author: "Tony Hudnell",
      role: "Associate Director",
      company: "Procter & Gamble",
      rating: 5
    },
    {
      id: '3',
      content: "CC and C Solutions provide great strategic vision to their clients' information technology needs and back that up with the practical know-how to implement process and technology to support the vision.",
      author: "Vinod Parmar",
      role: "Senior IT Professional",
      company: "MLC Australia",
      rating: 5
    }
  ];

  const displayTestimonials = testimonials.length > 0 ? testimonials : defaultTestimonials;

  if (isLoading) {
    return (
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" 
             style={{ backgroundImage: "url('https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')" }}>
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="animate-pulse">
              <div className="h-12 bg-white/20 rounded w-96 mx-auto"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center" 
           style={{ backgroundImage: "url('https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')" }}>
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">What Our Clients Say</h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Trusted by Fortune 100 companies and leading organizations worldwide
          </p>
        </div>

        <div className="relative">
          {/* Left Arrow */}
          <button
            onClick={scrollPrev}
            className="absolute left-0 top-[calc(50%-2rem)] -translate-y-1/2 z-20 w-12 h-12 md:w-14 md:h-14 rounded-full bg-white shadow-xl flex items-center justify-center text-primary hover:bg-secondary hover:text-white transition-all transform hover:scale-110 border-2 border-white ml-1 md:-ml-7"
            data-testid="testimonials-prev"
          >
            <i className="fas fa-chevron-left text-lg md:text-xl"></i>
          </button>

          {/* Right Arrow */}
          <button
            onClick={scrollNext}
            className="absolute right-0 top-[calc(50%-2rem)] -translate-y-1/2 z-20 w-12 h-12 md:w-14 md:h-14 rounded-full bg-white shadow-xl flex items-center justify-center text-primary hover:bg-secondary hover:text-white transition-all transform hover:scale-110 border-2 border-white mr-1 md:-mr-7"
            data-testid="testimonials-next"
          >
            <i className="fas fa-chevron-right text-lg md:text-xl"></i>
          </button>

          {/* Carousel */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {displayTestimonials.map((testimonial) => (
                <div key={testimonial.id} className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] px-4">
                  <Card className="bg-white backdrop-blur-md h-full shadow-xl border border-white/20">
                    <CardContent className="p-8 flex flex-col h-full">
                      <div className="mb-6 flex-1">
                        <div className="flex text-secondary mb-4">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <i key={i} className="fas fa-star text-lg"></i>
                          ))}
                        </div>
                        <blockquote className="text-gray-800 mb-4 leading-relaxed text-base font-medium">
                          "{testimonial.content}"
                        </blockquote>
                      </div>
                      <div className="flex items-center mt-auto pt-4 border-t border-gray-300 bg-gray-50/80 -m-8 mt-4 p-8 rounded-b-lg">
                        <div className="w-14 h-14 bg-primary/20 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                          <i className="fas fa-user text-primary text-lg"></i>
                        </div>
                        <div className="min-w-0">
                          <div className="font-bold text-gray-900 text-base truncate">{testimonial.author}</div>
                          <div className="text-sm">
                            <div className="truncate text-gray-700 font-medium">{testimonial.role}</div>
                            <div className="truncate font-bold text-gray-900">{testimonial.company}</div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Visual indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            <div className="bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm font-medium">
              Use side arrows to navigate testimonials
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
