
import React from 'react';

interface StepCardProps {
  icon: string;
  title: string;
  description: string;
  stepNumber: number;
}

const StepCard: React.FC<StepCardProps> = ({ icon, title, description, stepNumber }) => (
  <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 text-center border-t-4 border-rtpm-blue-700">
    <div className="text-5xl text-rtpm-blue-700 mb-4 inline-block">{icon}</div>
    <h3 className="text-xl font-bold text-rtpm-blue-800 mb-2">{stepNumber}. {title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-4xl font-bold text-rtpm-blue-800 mb-4">Your 4-Step Path to Project Clarity</h2>
          <p className="text-lg text-gray-600">
            We've streamlined our implementation process to get you up and running in record time, with minimal disruption.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          <StepCard 
            stepNumber={1}
            icon="🔍"
            title="Discovery"
            description="We analyze your current processes and identify key opportunities for automation and optimization."
          />
          <StepCard 
            stepNumber={2}
            icon="🔧"
            title="Build"
            description="We tailor the RTPM configuration to your specific workflows, KPIs, and reporting requirements."
          />
          <StepCard 
            stepNumber={3}
            icon="🚀"
            title="Integrate & Launch"
            description="Seamlessly deploy within your Microsoft Teams/SharePoint. No new tools to learn, just immediate value."
          />
          <StepCard 
            stepNumber={4}
            icon="📈"
            title="Support & Optimize"
            description="We provide ongoing support and continuous improvement based on usage data to maximize your ROI."
          />
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
