export default function AboutSection() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="py-20 section-darker">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-8">About CC&C Solutions</h2>
            <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
              For over 20 years, CC&C Solutions has been at the forefront of enterprise architecture consulting, 
              training, and digital transformation delivery services for the world's most successful organizations.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We bring together the most talented leaders and experts in Financial Services, Insurance, 
              Telecommunications, Retail, and Health sectors, with an unparalleled record for delighting 
              customers and making them successful.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <i className="fas fa-check-circle text-secondary mr-3"></i>
                <span className="text-foreground">20+ years of industry leadership</span>
              </div>
              <div className="flex items-center">
                <i className="fas fa-check-circle text-secondary mr-3"></i>
                <span className="text-foreground">Global footprint across 25+ countries</span>
              </div>
              <div className="flex items-center">
                <i className="fas fa-check-circle text-secondary mr-3"></i>
                <span className="text-foreground">Only BIAN-accredited training organization globally</span>
              </div>
            </div>
            
            <button 
              onClick={scrollToContact}
              className="bg-accent text-accent-foreground px-8 py-3 rounded-lg font-semibold hover:bg-accent/90 transition-colors"
              data-testid="button-get-started"
            >
              Get Started Today
            </button>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Professional team collaboration" 
              className="rounded-xl shadow-2xl"
            />
            <div className="absolute -bottom-8 -left-8 bg-secondary text-secondary-foreground p-6 rounded-xl shadow-lg">
              <div className="text-2xl font-bold">500+</div>
              <div className="text-sm">Successful Projects</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
