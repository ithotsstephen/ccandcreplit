import { useEffect } from "react";
import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";

const aboutParagraphs = [
  "A handful of banks are generating billions in measurable value from AI. The rest can't get past pilot. The difference isn't the technology, it's the architecture underneath it.",
  "This programme draws on in-depth case studies from four of the world's most AI-advanced banks to show what they invested in before AI that made the difference, and why most institutions are underinvesting in the one thing that determines whether AI scales or stalls.",
  "Participants will work with the AI Enablement House: a practical framework covering the four pillars that enable AI at scale and the architectural foundation that holds them together. They'll leave with a clear diagnosis of where their own organisation stands, what needs to change, and a prioritised action plan to start closing the gap.",
  "Day 1 is for leaders: the strategic case, the evidence, and a hands-on readiness assessment. Day 2 is for architects: the enabling foundation, industry-standard frameworks, and reusable blueprints participants can take straight back to their teams.",
];

const dayOneModules = [
  "The AI Leadership Landscape: Where AI stands today in banking, who's leading, and what the global benchmarks reveal about the widening gap between leaders and the rest. Detailed profiles of four leading banks including their AI operating models, investment levels, and measurable outcomes.",
  "The AI Enablement House — Why Most AI Initiatives Stall: A practical framework for understanding what must be in place before AI can scale. Four pillars are reimagined journeys, data, technology maturity and huan capital explored through case study evidence from banks that have made AI work at enterprise scale: ",
  "The Architecture Imperative: Why strong enterprise architecture is the common ingredient separating banks that scale AI from those stuck in perpetual pilot, and why most banks are underinvesting in the foundation.",
  "Workshop — Assessing Your Organisation's AI Readiness: A structured self-assessment where participants evaluate their own institution against the four pillars and identify prioritised gaps to take back to their leadership teams.",
];

const dayTwoModules = [
  "The Architectural Foundation — Capability Models & Canonical Data: How a common architectural language enables composable, AI-ready banking from modular capability design to governed data definitions that eliminate the hidden cost of inconsistency across the enterprise. The programme leverages BIAN, the industry-standard framework adopted by financial institutions, worldwide as the anchor for these concepts.",
  "APIs, Agentic AI & Governance: What your API landscape needs to look like to support the next generation of autonomous AI agents, and how to build explainability and traceability into the foundation rather than retrofitting it after deployment.",
  "Workshop — Architecture Blueprint & AI Action Commitments: Hands-on exercises mapping AI use cases to architectural components, followed by a personal action plan across architecture, data, integration, governance, and people.",
];

const takeaways = [
  "Articulate why enterprise architecture is the critical enabler for AI at scale and communicate this to executive stakeholders",
  "Evaluate your organisation's AI readiness across four dimensions: reimagined journeys, data, technology maturity, and human capital",
  "Explain what the world's leading AI banks invested in before AI that enabled them to scale",
  "Identify and quantify the hidden \"Translation Tax\": The cost of inconsistent data definitions and capability fragmentation across the enterprise",
  "Apply industry-standard capability models and data frameworks to decompose AI use cases into well-governed, reusable architectural components",
  "Build explainability and traceability into AI governance from the architectural foundation up",
  "Leave with three practical artefacts: a Pillar Self-Assessment, an Architecture Blueprint, and an AI Action Commitments roadmap",
];

export default function ArchitectingAIPoweredBank() {
  useEffect(() => {
    window.scrollTo(0, 0);

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Architecting the AI-Powered Bank is a 2-day programme showing banking leaders and architects what the world's most successful AI banks built before they built AI.",
      );
    }

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute("content", "Architecting the AI-Powered Bank | CC&C Solutions");
    }

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute(
        "content",
        "A 2-day banking programme on the architecture underneath AI at scale, grounded in case studies, the AI Enablement House, and practical architectural blueprints.",
      );
    }

    document.title = "Architecting the AI-Powered Bank | CC&C Solutions";

    return () => {
      document.title = "CC&C Solutions";
      if (metaDescription) {
        metaDescription.setAttribute(
          "content",
          "CC&C Solutions - Enterprise Architecture Training and Consulting",
        );
      }
      if (ogTitle) {
        ogTitle.setAttribute("content", "CC&C Solutions");
      }
      if (ogDescription) {
        ogDescription.setAttribute(
          "content",
          "CC&C Solutions - Enterprise Architecture Training and Consulting",
        );
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="pt-32 pb-20 section-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-5xl mx-auto">
            <Link href="/ccandc-training">
              <a className="inline-flex items-center text-primary hover:text-primary/80 mb-6 font-semibold transition-colors group" data-testid="link-back-to-training-ai-bank">
                <i className="fas fa-arrow-left mr-2 group-hover:-translate-x-1 transition-transform"></i>
                Back to Training
              </a>
            </Link>
            {/* <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold uppercase tracking-[0.18em] mb-6">
              Banking Programme
            </div> */}
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 font-['Playfair_Display',serif]">
              Architecting the AI-Powered Bank
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto mb-8 leading-relaxed">
              Every bank has an AI strategy. But many struggle to achieve scale and hard benefit from it. This intensive 2-day programme reveals what the world's most successful banks built before they built AI, and gives your team the frameworks, evidence, and practical tools to do the same.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">About the Programme</h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              {aboutParagraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 section-darker">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Programme Modules</h2>
          </div>

          <div className="grid xl:grid-cols-2 gap-8">
            <Card className="premium-card h-full">
              <CardContent className="p-8 h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                    <i className="fas fa-chart-line text-primary text-xl"></i>
                  </div>
                  <div>
                    <p className="text-sm uppercase tracking-wide text-primary font-semibold">Day 1</p>
                    <h3 className="text-2xl font-bold text-card-foreground">AI at Scale - The Playbook from the World's Leading Banks</h3>
                  </div>
                </div>
                <p className="text-muted-foreground mb-6">
                  For CXOs, LOB executives, heads of digital/innovation/technology, transformation leaders, and architects.
                </p>
                <div className="space-y-4">
                  {dayOneModules.map((module, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <i className="fas fa-check-circle text-primary mt-1"></i>
                      <p className="text-muted-foreground leading-relaxed">{module}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="premium-card h-full">
              <CardContent className="p-8 h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center">
                    <i className="fas fa-diagram-project text-accent text-xl"></i>
                  </div>
                  <div>
                    <p className="text-sm uppercase tracking-wide text-accent font-semibold">Day 2</p>
                    <h3 className="text-2xl font-bold text-card-foreground">From Blueprint to Breakthrough - Architecting for AI</h3>
                  </div>
                </div>
                <p className="text-muted-foreground mb-6">
                  For enterprise architects, solution architects, CTO/CIO offices, integration leads, and data architects.
                </p>
                <div className="space-y-4">
                  {dayTwoModules.map((module, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <i className="fas fa-check-circle text-accent mt-1"></i>
                      <p className="text-muted-foreground leading-relaxed">{module}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">What You Will Take Away</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {takeaways.map((item, index) => (
              <Card key={index} className="premium-card">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <i className="fas fa-lightbulb text-primary"></i>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{item}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 section-darker">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <CTASection
         
            title="Enquire Now"
            description="This programme is delivered on-site for banking institutions. If you're interested in bringing it to your organisation, or would like to discuss how it could work for your team, we'd welcome a conversation."
            buttonText="Contact Us"
          />
        </div>
      </section>

      <Footer />
    </div>
  );
}