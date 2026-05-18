import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function Offerings() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const pdfResources = [
    {
      name: "BIAN Advisory & Implementation Consulting.pdf",
      thumbnail: "/assets/pdf_downloads/Thumbnail_pdf_001.png",
    },
    {
      name: "BIAN Data Architecture Practitioner Certification Training (Trainer-Led).pdf",
      thumbnail: "/assets/pdf_downloads/Thumbnail_pdf_002.png",
    },
    {
      name: "BIAN Discovery Workshop.pdf",
      thumbnail: "/assets/pdf_downloads/Thumbnail_pdf_003.png",
    },
    {
      name: "BIAN Executive Workshop.pdf",
      thumbnail: "/assets/pdf_downloads/Thumbnail_pdf_004.png",
    },
    {
      name: "BIAN Foundation & Practitioner Certification Training (Trainer-Led).pdf",
      thumbnail: "/assets/pdf_downloads/Thumbnail_pdf_005.png",
    },
    {
      name: "BIAN Foundation Certification Training (Trainer-Led).pdf",
      thumbnail: "/assets/pdf_downloads/Thumbnail_pdf_006.png",
    },
    // {
    //   name: "BIAN Practitioner Certification Training (Trainer-Led).pdf",
    //   thumbnail: "/assets/pdf_downloads/Thumbnail_pdf_007.png",
    // },
  ];

  return (
    <>
      <Navigation />
      
      <main className="min-h-screen bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Our Offerings
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Access our comprehensive collection of BIAN training materials, consulting guides, and workshop resources.
            </p>
          </div>
       
        
          
          {/* PDF Downloads Section */}
          <div className="mt-24">
            
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pdfResources.map((pdf, index) => (
                <div key={index} className="bg-card rounded-lg border border-border hover:shadow-lg transition-all duration-300 hover:border-primary/50 overflow-hidden flex flex-col">
                  {/* Thumbnail Image */}
                  <div className="w-full flex justify-center bg-gray-200 overflow-hidden">
                    <div className="w-full max-w-[320px] h-48 overflow-hidden">
                      <img 
                        src={pdf.thumbnail}
                        alt={`Thumbnail for ${pdf.name}`}
                        className="w-full h-full object-cover object-top cursor-pointer hover:scale-105 transition-transform"
                        onClick={() => window.open(`/assets/pdf_downloads/${pdf.name}`, '_blank')}
                      />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <h3 className="text-base font-bold text-foreground mb-4 leading-tight">
                      <button
                        onClick={() => window.open(`/assets/pdf_downloads/${pdf.name}`, '_blank')}
                        className="text-left w-full text-base font-bold text-foreground cursor-pointer hover:text-primary transition-colors"
                      >
                        {pdf.name.replace('.pdf', '')}
                      </button>
                    </h3>
                    <button
                      onClick={() => window.open(`/assets/pdf_downloads/${pdf.name}`, '_blank')}
                      className="text-primary hover:text-primary/80 transition-colors text-xs font-semibold inline-flex items-center cursor-pointer"
                    >
                      <i className="fas fa-download mr-1"></i>
                      View PDF
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
}