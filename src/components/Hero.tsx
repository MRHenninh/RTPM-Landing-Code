import React from 'react';

const Hero: React.FC = () => {
  const handleScrollToContact = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-gradient-to-br from-rtpm-blue-700 to-rtpm-blue-800 text-white pt-16 pb-20">
      <div className="container mx-auto px-6 text-center">
        <div className="mb-12">
          <img src="https://raw.githubusercontent.com/MRHenninh/RTPM-landing/main/RTPMwhiteRealTimeUnderLogo.svg" alt="RTPM Logo" className="mx-auto h-24 w-auto" />
        </div>
        
        <p className="text-sm md:text-base font-semibold tracking-wider text-white/80 mb-4">
            For CEOs, CFOs & Project Directors Leading Renewable Projects
        </p>

        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 max-w-4xl mx-auto">
          End Project Chaos. Deliver with Confidence. Inside Microsoft Teams.
        </h1>
        <h2 className="text-lg md:text-xl font-light mb-10 max-w-3xl mx-auto opacity-95">
          Free your internal and external teams from endless updates—gain instant clarity and cut status meetings by up to 50%, right inside Microsoft Teams.
        </h2>

        <div className="mb-12">
          <a href="#contact" onClick={handleScrollToContact} className="bg-rtpm-yellow-400 text-rtpm-blue-800 font-bold text-lg px-10 py-4 rounded-full shadow-lg hover:bg-rtpm-yellow-500 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 ease-in-out inline-block">
            Book a Live Demo
          </a>
        </div>
        
<div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-lg rounded-2xl p-2.5 shadow-2xl">
        <div className="aspect-video"> 
            <iframe 
                src="https://www.youtube-nocookie.com/embed/q--RMi3-UXs?si=XjSeZCrWsuDGvr5E" 
                title="RTPM Founder Video" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="w-full h-full rounded-lg shadow-xl">
            </iframe>
        </div>
    </div>
        
        <div className="mt-16">
          <p className="text-sm uppercase tracking-widest font-semibold mb-6">Trusted by industry leaders</p>
          <img src="https://raw.githubusercontent.com/MRHenninh/RTPM-landing/main/RTPMWhiteTrustedByLogoLarge.svg" alt="Trusted By Logos" className="mx-auto h-20 w-auto opacity-90" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
