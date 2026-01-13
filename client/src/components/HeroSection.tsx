import { useLocation } from "wouter";
import { useState, useEffect } from "react";

export default function HeroSection() {
  const [, setLocation] = useLocation();
  const [showPopup, setShowPopup] = useState(false);

  const goToWhatWeDo = () => {
    setLocation('/what-we-do');
  };

  const goToSeeItInAction = () => {
    setLocation('/insights');
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  // Navigate to /ccandc-training when image clicked
  const handleImageClick = () => {
    setLocation('/ccandc-training');
  };

  // Auto-open popup after 2 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // Close on Escape key & prevent body scroll
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closePopup();
      }
    };
    
    if (showPopup) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }
    
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [showPopup]);

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            poster="/assets/Images/Hero_Globe.png"
            onError={(e) => {
              console.log('Video failed to load:', e);
              const target = e.target as HTMLVideoElement;
              target.style.display = 'none';
            }}
          >
            <source src="/assets/videos/BackgroundBGVideo.mp4" type="video/mp4" />
            <source src="/assets/videos/EarthBGVideo.mp4" type="video/mp4" />
          </video>
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('/assets/Images/Hero_Globe.png')`,
              zIndex: -1
            }}
          />
        </div>
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-transparent to-black/50" />
        
        {/* Content */}
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Powering Digital Transformation Through{' '}
            <span className="text-[#2177cd]">World-Class Architecture</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            We're transformation consultants working at the intersection of business strategy, 
            technology and architecture. Our mission is to simplify change and help you realise your vision for the future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={goToWhatWeDo}
              className="premium-button px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105"
              data-testid="button-explore-services"
            >
              Explore Our Services
            </button>
            <button 
              onClick={goToSeeItInAction}
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-primary transition-all"
              data-testid="button-view-case-studies"
            >
              View Case Studies
            </button>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <i className="fas fa-chevron-down text-2xl"></i>
        </div>
      </section>

      {/* ANIMATED IMAGE POPUP - IMAGE LINKS TO /ccandc-training */}
      {showPopup && (
        <div 
          className="fixed inset-0 bg-black/75 z-[9999] flex items-center justify-center p-6 animate-fadeIn"
          onClick={closePopup}
        >
          {/* Container fits image naturally */}
          <div className="flex items-center justify-center relative">
            {/* WHITE CIRCLE CLOSE BUTTON */}
            <button
              onClick={closePopup}
              className="absolute -top-4 -right-4 w-10 h-10 bg-white rounded-full shadow-2xl flex items-center justify-center hover:bg-gray-100 hover:scale-110 transition-all duration-300 z-20 border-3 border-white/60"
              aria-label="Close"
              data-testid="close-popup-button"
            >
              <svg 
                className="w-5 h-5 text-black font-bold" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="3" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            {/* IMAGE NAVIGATES TO /ccandc-training */}
            <img
              src="/assets/Images/ccandclaunch.jpg"
              alt="Hero Image - Click to visit CCANDC Training"
              className="max-h-[70vh] max-w-[90vw] w-auto h-auto object-contain rounded-[10px] shadow-[0_35px_60px_rgba(0,0,0,0.6)] border-4 border-white/30 hover:shadow-[0_45px_70px_rgba(0,0,0,0.8)] transition-all duration-500 cursor-pointer mx-auto"
              onClick={handleImageClick}
              data-testid="hero-popup-image"
            />
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
      `}</style>
    </>
  );
}
