
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
          <h2 className="text-4xl font-bold text-rtpm-blue-800 mb-4">3 Steps to Real-Time Clarity and Project Control</h2>
          <p className="text-lg text-gray-600">
            We streamline implementation and get your team up and running fast for instant project clarity.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <StepCard 
            stepNumber={1}
            icon="🔍"
            title="Analyze & Simplify"
            description="We review your current workflows, eliminate non-value-added steps, and create optimized flowcharts tailored to your goals."
          />
          <StepCard 
            stepNumber={2}
            icon="🔧"
            title="Configure & Test"
            description="We build a draft configuration, run test cycles, and provide quick guides and training to ensure smooth adoption."
          />
          <StepCard 
            stepNumber={3}
            icon="🚀"
            title="Launch & Improve"
            description="We deploy inside Microsoft Teams and SharePoint, then continuously improve based on real user feedback—no manuals, just results."
          />
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;