import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface CTASectionProps {
  title: string;
  description: string;
  buttonText?: string;
  tag?: string;
}

export default function CTASection({ 
  title, 
  description, 
  buttonText = "Talk to Our Team",
  tag 
}: CTASectionProps) {
  const [, setLocation] = useLocation();

  return (
    <section className="relative py-24 bg-gradient-to-br from-section-dark to-section-darker overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(31,127,212,0.2),transparent_50%)]"></div>
      </div>
      
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {tag && (
          <div className="inline-block mb-6">
            <span className="px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-semibold uppercase tracking-wide">
              {tag}
            </span>
          </div>
        )}
        
        <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 font-['Playfair_Display',serif]">
          {title}
        </h2>
        
        <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
          {description}
        </p>
        
        <Button 
          onClick={() => setLocation('/contact')}
          size="lg"
          className="bg-accent text-accent-foreground hover:bg-accent/90 px-8 py-6 text-lg font-semibold group"
          data-testid="button-cta-contact"
        >
          {buttonText}
          <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
    </section>
  );
}
