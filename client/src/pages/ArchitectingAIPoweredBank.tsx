import { useEffect } from "react";
import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";

const aboutParagraphs = [
  "JPMC, DBS, CBA, UBS. Four banks generating billions in measurable value from AI. Meanwhile, up to 95% of AI initiatives across the industry fail to move beyond pilot. The difference is not the AI itself - it's what's underneath it.",
  "This programme unpacks what the world's most AI-advanced banks invested in before AI that made the difference. Anchored by the AI Enablement House - a practical framework spanning human capital, data, technology maturity, reimagined journeys, and the enterprise architecture foundation that holds them together - participants will leave with a clear understanding of why AI initiatives stall, what enabling conditions must be in place, and how to build a roadmap for their own institution.",
  "Day 1 is designed for a broad leadership audience and focuses on the strategic case for architecture-led AI transformation, supported by detailed case studies from four global banks and a structured self-assessment exercise. Day 2 takes architects and technical leaders deep into the enabling foundation - Capability models, canonical data, governance, and modern architecture tooling to show how a common architectural language enables composable, AI-ready banking. The programme leverages BIAN, the industry-standard framework adopted by over 200 financial institutions, as the anchor for these concepts. A hands-on workshop will also equip participants with reusable blueprints.",
  "The programme is co-delivered by Likhit Wagle and Nishan Jebanasam, combining deep banking strategy experience with enterprise architecture practitioner expertise.",
];

const dayOneModules = [
  "The AI Leadership Landscape: Where AI stands today in banking, who is leading, and what the Evident AI Index reveals about the gap between leaders and the rest. Profiles of JPMC, DBS, CBA, and UBS - their AI operating models, investment levels, and measurable outcomes.",
  "The AI Enablement House - Why Most AI Initiatives Stall: A practical framework for understanding what must be in place before AI can scale. Four pillars - reimagined journeys, data, technology maturity, and human capital - explored through case study evidence from the world's leading banks.",
  "The Architecture Imperative: Why strong enterprise architecture is the common ingredient separating banks that scale AI from those stuck in perpetual pilot - and why most banks are underinvesting in the foundation.",
  "Workshop - Assessing Your Organisation's AI Readiness: A structured self-assessment where participants evaluate their own institution against the four pillars and identify prioritised gaps to take back to their leadership teams.",
];

const dayTwoModules = [
  "The Architectural Foundation: Show how BIAN's industry-standard architectural language of Service Domains, Service Operations, and Business Object Model enables composable, AI-ready banking - from modular service design to canonical data definitions that eliminate the hidden cost of semantic inconsistency.",
  "APIs, Agentic AI & Governance: What your API landscape needs to look like to support the next generation of autonomous AI agents, and how to build explainability and traceability into the foundation rather than retrofitting it after deployment.",
  "Workshop - Service Domain Assembly & AI Action Commitments: Hands-on exercises mapping AI use cases to architectural components, followed by a personal action plan across architecture, data, integration, governance, and people.",
];

const takeaways = [
  "Articulate why enterprise architecture is the critical enabler for AI at scale - and communicate this to executive stakeholders.",
  "Evaluate their organisation's AI readiness across four dimensions: reimagined journeys, data, technology maturity, and human capital.",
  "Explain what the world's leading AI banks (JPMC, DBS, CBA, UBS) invested in before AI that enabled them to scale.",
  "Identify and quantify the hidden 'Translation Tax' - the cost of inconsistent data definitions and capability fragmentation across the enterprise.",
  "How BIAN's Service Domains and the Business Object Model can be applied to decompose AI use cases into well-governed, reusable architectural components.",
  "Build explainability and traceability into AI governance from the architectural foundation up.",
];

const attendees = [
  "Chief Information Officers & Chief Technology Officers: Leaders shaping AI strategy who need to understand why architectural foundations determine whether AI investments deliver or stall.",
  "Chief Architects & Heads of Enterprise Architecture: The professionals responsible for designing the structural conditions that enable AI to scale - this programme gives them the frameworks, industry evidence, and practical tools to lead that conversation.",
  "Enterprise & Solution Architects: Practitioners who will design and build the service-oriented, API-enabled, semantically governed platforms that AI depends on.",
  "Heads of Digital Transformation & Innovation: Leaders driving AI adoption who need to understand what must change in the operating model before AI can deliver sustained value.",
  "Data Architects & Chief Data Officers: Professionals responsible for the data foundations that feed AI models - this programme connects their work to the broader enterprise architecture and AI governance picture.",
  "Line of Business Executives: Senior leaders evaluating AI investments who need a framework to assess whether their organisation has the enabling conditions to succeed.",
];

const formatParagraphs = [
  "This is an intensive, in-person 2-day programme combining expert-led sessions, real-world case studies, facilitated discussion, and hands-on workshops. The programme is not a lecture series - it is designed to be interactive, with participants applying frameworks to their own organisational context throughout.",
  "Each day follows a structured rhythm: morning sessions establish the concepts and evidence base, afternoon sessions apply them through exercises and synthesis. Participants work individually and in groups, and leave with tangible artefacts they can use immediately.",
  "Day 1 is a complete experience in its own right - participants attending only Day 1 will leave with a strategic framework and self-assessment. Day 2 extends the programme for those roles that go into architectural depth, and builds directly on Day 1 content.",
];

export default function ArchitectingAIPoweredBank() {
  useEffect(() => {
    window.scrollTo(0, 0);

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Architecting the AI-Powered Bank is a 2-day executive and architect programme on the enterprise architecture foundations required for AI at scale in banking.",
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
        "A 2-day banking programme on architecture-led AI transformation, anchored in case studies from leading banks and practical BIAN-based tooling.",
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
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold uppercase tracking-[0.18em] mb-6">
              Banking Programme
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 font-['Playfair_Display',serif]">
              Architecting the AI-Powered Bank
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto mb-8 leading-relaxed">
              Enterprise architecture is the most underestimated enabler of AI at scale. This intensive 2-day programme - built on case studies from the world's leading banks - equips banking leaders and architects with the frameworks and practical tools to start getting a positive ROI on their AI investment.
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

      <section className="py-20 section-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Who Should Attend</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              This programme is designed for banking professionals at institutions of all sizes who are navigating the intersection of AI ambition and architectural reality.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {attendees.map((audience, index) => (
              <Card key={index} className="premium-card">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <i className="fas fa-user-tie text-primary"></i>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{audience}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="max-w-4xl mx-auto mt-10">
            <p className="text-lg text-muted-foreground leading-relaxed text-center">
              Day 1 is relevant to all of the above. Day 2 is specifically designed for architects and technical leaders who will advance to hands-on depth on the architectural foundation.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto mt-10">
            <Card className="premium-card">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-card-foreground mb-4">Programme Format</h3>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  {formatParagraphs.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="premium-card">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-card-foreground mb-4">Programme Leadership</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-xl font-semibold text-card-foreground mb-2">Likhit Wagle</h4>
                    <p className="text-primary font-medium mb-2">Principal Consultant & Advisor, CC&C Solutions</p>
                    <p className="text-muted-foreground">[Bio placeholder - to be provided by Likhit]</p>
                  </div>
                  <div className="border-t border-border pt-6">
                    <h4 className="text-xl font-semibold text-card-foreground mb-2">Nishan Jebanasam</h4>
                    <p className="text-primary font-medium mb-2">Principal Consultant, CC&C Solutions</p>
                    <p className="text-muted-foreground">[Bio placeholder - to be provided by Nish]</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 section-darker">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <CTASection
            tag="Express Your Interest"
            title="Express Your Interest"
            description="This programme is delivered on-site for banking institutions. If you're interested in bringing it to your organisation, or would like to discuss how it could work for your team, we'd welcome a conversation."
            buttonText="Express Your Interest"
          />
        </div>
      </section>

      <Footer />
    </div>
  );
}