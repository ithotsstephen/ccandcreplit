import { useState } from "react";
import { Card } from "@/components/ui/card";
import { useStaticOrQuery, staticData } from "@/lib/staticData";
import type { FAQ } from "@shared/schema";

export default function FAQSection() {
  const [openFAQ, setOpenFAQ] = useState<string | null>(null);
  
  const { data: faqs = [], isLoading } = useStaticOrQuery<FAQ[]>(
    '/api/faqs',
    staticData.getFAQs
  );

  // Default FAQs if API returns empty
  const defaultFAQs = [
    {
      id: '1',
      question: 'What makes CC&C Solutions different from other consulting firms?',
      answer: 'CC&C Solutions brings over 20 years of specialized experience with unique global accreditations including being the only BIAN-accredited training organization worldwide. Our approach combines deep industry expertise with practical implementation experience across Financial Services, Healthcare, Telecommunications, and Retail sectors.'
    },
    {
      id: '2',
      question: 'How long does a typical BIAN implementation take?',
      answer: 'BIAN implementation timelines vary based on organizational size and complexity. Our typical engagement includes a series of workshops, certification training, and implementation phases designed to increase confident customer ownership. Most organizations see initial value within 3-6 months, with full implementation achieved in 12-18 months.'
    },
    {
      id: '3',
      question: 'Do you offer both remote and on-site training?',
      answer: 'Yes, we offer flexible training delivery options including virtual classrooms, on-site workshops, and hybrid approaches. Our global footprint allows us to provide localized training across 25+ countries with culturally relevant examples and case studies.'
    },
    {
      id: '4',
      question: 'What ongoing support do you provide after implementation?',
      answer: 'We provide comprehensive ongoing support including mentoring, governance framework establishment, tool configuration, methodology refinement, and process optimization. Our goal is to ensure your team becomes self-sufficient while maintaining access to our expertise when needed.'
    }
  ];

  const displayFAQs = faqs.length > 0 ? faqs : defaultFAQs;

  const toggleFAQ = (id: string) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  if (isLoading) {
    return (
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="animate-pulse">
              <div className="h-12 bg-muted rounded w-96 mx-auto"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
        </div>

        <div className="space-y-4">
          {displayFAQs.map((faq) => (
            <Card key={faq.id} className="border border-border">
              <button 
                className="w-full text-left p-6 flex justify-between items-center hover:bg-muted/50 transition-colors"
                onClick={() => toggleFAQ(faq.id)}
                data-testid={`button-toggle-faq-${faq.id}`}
              >
                <span className="font-semibold text-foreground pr-4">{faq.question}</span>
                <i className={`fas fa-chevron-${openFAQ === faq.id ? 'up' : 'down'} text-muted-foreground transition-transform flex-shrink-0`}></i>
              </button>
              {openFAQ === faq.id && (
                <div className="px-6 pb-6 pt-0 text-muted-foreground" data-testid={`content-faq-${faq.id}`}>
                  <p>{faq.answer}</p>
                </div>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
