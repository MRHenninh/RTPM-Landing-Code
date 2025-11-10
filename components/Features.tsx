
import React, { useState, useRef, useEffect } from 'react';

const featureSet1 = [
  {
    title: 'Timeline & Milestones',
    description: 'Visual project timeline with critical path tracking and milestone alerts.',
  },
  {
    title: 'Live KPIs',
    description: 'Real-time budget, schedule, and quality metrics with trend analysis.',
  },
  {
    title: 'My To-Do Dashboard',
    description: 'Personalized task management with priority scoring and deadline tracking.',
  },
];

const featureSet2 = [
  {
    title: 'Module Cards',
    description: 'Docs, Correspondence, Quality, Permits - all in organized, searchable modules.',
  },
  {
    title: 'Teams Integration',
    description: '100% native to Microsoft Teams. No context switching required.',
  },
  {
    title: 'Security & Compliance',
    description: 'Enterprise-grade security with data residency in your own Microsoft tenant.',
  },
];

const ResponsiveFeatureGrid: React.FC<{features: {title: string, description: string}[]}> = ({ features }) => {
  return (
    <div className="rounded-2xl shadow-xl overflow-hidden mb-8">
      <div className="grid grid-cols-1 md:grid-cols-3">
        {features.map((feature, index) => (
          <div key={index} className={`
            flex flex-col
            ${index > 0 ? 'border-t md:border-t-0 md:border-l' : ''} 
            border-gray-200
          `}>
            <div className="bg-rtpm-blue-800 text-white p-6 font-bold text-left">
              <h3>{feature.title}</h3>
            </div>
            <div className="p-6 bg-white border-t border-gray-200 text-gray-700 text-left flex-grow">
              <p>{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


const Features: React.FC = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVideoPlaying(true);
          observer.disconnect(); // Disconnect after it's visible to avoid re-triggering
        }
      },
      {
        rootMargin: '0px',
        threshold: 0.5, // Trigger when 50% of the element is visible
      }
    );

    const currentRef = videoContainerRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const videoSrc = isVideoPlaying
    ? 'https://www.youtube.com/embed/5LIsXOU-HWI?autoplay=1&mute=1&loop=1&playlist=5LIsXOU-HWI&controls=0&modestbranding=1&showinfo=0'
    : 'https://www.youtube.com/embed/5LIsXOU-HWI?controls=0&modestbranding=1&showinfo=0';


  return (
    <section id="features" className="py-20 bg-rtpm-blue-700">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <img src="https://raw.githubusercontent.com/MRHenninh/RTPM-landing/main/RTPMwhiteRTPMlogo.svg" alt="RTPM Logo" className="mx-auto h-16 w-auto mb-6" />
          <h2 className="text-4xl font-bold text-white mb-4">Everything You Need for Complete Project Control</h2>
          <p className="text-lg text-white/90">
            RTPM is more than a dashboard; it's a complete project control system built for the complexities of modern projects.
          </p>
        </div>
        
 <div ref={videoContainerRef} className="max-w-5xl mx-auto mb-16">
    <div className="bg-rtpm-blue-900 rounded-2xl shadow-2xl p-2.5">
        <div className="aspect-video rounded-lg overflow-hidden"> 
            <iframe 
                src={videoSrc}
                title="RTPM Dashboard Demo" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen
                className="w-full h-full">
            </iframe>
        </div>
    </div>
</div>

        <div className="max-w-6xl mx-auto">
          <ResponsiveFeatureGrid features={featureSet1} />
          <ResponsiveFeatureGrid features={featureSet2} />
        </div>

        <div className="mt-20 max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-center text-white mb-12">Manage your projects directly in Microsoft 365 and Teams</h3>
          <div className="flex justify-center items-center flex-wrap gap-8 md:gap-16">
            <img src="https://raw.githubusercontent.com/MRHenninh/RTPM-landing-Asset/main/Microsoft_Teams.svg" alt="Microsoft Teams Logo" className="h-16 md:h-20 w-auto" />
            <img src="https://raw.githubusercontent.com/MRHenninh/RTPM-landing-Asset/main/Outlook.svg" alt="Microsoft Outlook Logo" className="h-16 md:h-20 w-auto" />
            <img src="https://raw.githubusercontent.com/MRHenninh/RTPM-landing-Asset/main/M365-copilot-logo.svg" alt="Microsoft 365 Logo" className="h-16 md:h-20 w-auto" />
            <img src="https://raw.githubusercontent.com/MRHenninh/RTPM-landing-Asset/main/PowerBI.svg" alt="Power BI Logo" className="h-16 md:h-20 w-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
