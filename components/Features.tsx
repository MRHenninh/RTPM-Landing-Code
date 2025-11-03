
import React, { useState, useRef, useEffect } from 'react';

const FeatureTable: React.FC<{ headers: string[]; data: string[] }> = ({ headers, data }) => (
  <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-8">
    <table className="w-full text-left">
      <thead>
        <tr>
          {headers.map((header, index) => (
            <th key={index} className="bg-rtpm-blue-800 text-white p-6 font-bold">{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr>
          {data.map((cell, index) => (
            <td key={index} className="p-6 border-t border-gray-200 text-gray-700">{cell}</td>
          ))}
        </tr>
      </tbody>
    </table>
  </div>
);

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
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-rtpm-blue-800 mb-4">Everything You Need for Complete Project Control</h2>
          <p className="text-lg text-gray-600">
            RTPM is more than a dashboard; it's a complete project control system built for the complexities of modern projects.
          </p>
        </div>
        
 <div ref={videoContainerRef} className="max-w-5xl mx-auto mb-16">
    <div className="bg-black rounded-2xl shadow-2xl p-2.5 border-2 border-rtpm-blue-700">
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
          <FeatureTable 
            headers={['Timeline & Milestones', 'Live KPIs', 'My To-Do Dashboard']}
            data={[
              'Visual project timeline with critical path tracking and milestone alerts.',
              'Real-time budget, schedule, and quality metrics with trend analysis.',
              'Personalized task management with priority scoring and deadline tracking.'
            ]}
          />
          <FeatureTable 
            headers={['Module Cards', 'Teams Integration', 'Security & Compliance']}
            data={[
              'Docs, Correspondence, Quality, Permits - all in organized, searchable modules.',
              '100% native to Microsoft Teams. No context switching required.',
              'Enterprise-grade security with data residency in your own Microsoft tenant.'
            ]}
          />
        </div>

        <div className="mt-20 max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-center text-rtpm-blue-800 mb-12">Built for Demanding Industries and Critical Roles</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-8 rounded-2xl border-l-4 border-rtpm-blue-700 shadow-lg">
              <h4 className="text-2xl font-bold text-rtpm-blue-800 mb-6">Industries We Serve</h4>
              <ul className="space-y-3 text-gray-700">
                <li className="font-medium">✓ Construction & Infrastructure</li>
                <li className="font-medium">✓ Renewable Energy</li>
                <li className="font-medium">✓ Pharmaceutical</li>
                <li className="font-medium">✓ Defense & Aerospace</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl border-l-4 border-rtpm-blue-700 shadow-lg">
              <h4 className="text-2xl font-bold text-rtpm-blue-800 mb-6">Roles We Empower</h4>
              <ul className="space-y-3 text-gray-700">
                <li className="font-medium">✓ Executive Leadership & PMO Directors</li>
                <li className="font-medium">✓ Project & Site Managers</li>
                <li className="font-medium">✓ Procurement & IT Directors</li>
                <li className="font-medium">✓ Document Controllers</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
