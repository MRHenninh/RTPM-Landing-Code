import React from 'react';

const CheckIcon = () => (
  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
  </svg>
);

interface BenefitCardProps {
  title: string;
  description: string;
}

const BenefitCard: React.FC<BenefitCardProps> = ({ title, description }) => (
  <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
    <div className="flex items-center mb-4">
      <div className="bg-rtpm-blue-700 rounded-full p-3 mr-4">
        <CheckIcon />
      </div>
      <h3 className="text-xl font-bold text-rtpm-blue-800">{title}</h3>
    </div>
    <p className="text-gray-600">{description}</p>
  </div>
);

const Benefits: React.FC = () => {
  return (
    <section id="benefits" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-4xl font-bold text-rtpm-blue-800 mb-4">From Project Chaos to Complete Control</h2>
          <p className="text-lg text-gray-600">
            RTPM doesn't just manage your projects; it transforms how you work, giving you back time, money, and peace of mind.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <BenefitCard 
            title="Eliminate 80% of Admin Work"
            description="Our AI-driven automation and smart alerts handle the tedious updates, freeing your team to focus on high-value tasks."
          />
          <BenefitCard 
            title="Gain Instant Project Clarity"
            description="Real-time dashboards give every stakeholder—from the site to the C-suite—a live, accurate view of project health."
          />
          <BenefitCard 
            title="Slash Status Meetings"
            description="When everyone has access to the same live data, you can cut pointless status meetings by up to 50% and make decisions faster."
          />
           <BenefitCard 
            title="Boost Team Adoption"
            description="RTPM lives inside Microsoft Teams. No new logins, no new apps. Just seamless integration that your team will actually use."
          />
           <BenefitCard 
            title="Ensure Total Compliance"
            description="With a compliance-by-design architecture, all data and communications are tracked, secure, and auditable within your own tenant."
          />
           <BenefitCard 
            title="Deliver with Confidence"
            description="Proactively identify risks, track KPIs in real-time, and make data-driven decisions that keep projects on time and on budget."
          />
        </div>
      </div>
    </section>
  );
};

export default Benefits;