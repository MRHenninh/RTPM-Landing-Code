import React from 'react';

const FactIcon: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="text-4xl mr-5 flex-shrink-0">{children}</div>
);

// New icon for the "agitate" section
const AgitateIcon: React.FC = () => (
  <svg className="w-6 h-6 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
  </svg>
);


const ProblemSolution: React.FC = () => {
  return (
    <section id="problem" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-rtpm-blue-800 mb-4">Your Projects Are Leaking Money and Time.</h2>
          <p className="text-lg text-gray-600 mb-12">
            The project management industry is plagued by inefficiency. Teams are drowning in admin work instead of driving progress. This isn't just frustrating—it's costing you millions.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {/* PAIN */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-12">
            <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">The Harsh Reality of Project Management</h3>
            <div className="space-y-6">
              <div className="flex items-start bg-gradient-to-r from-red-500 to-orange-500 text-white p-6 rounded-xl shadow-lg">
                <FactIcon>📊</FactIcon>
                <div>
                  <p className="font-bold text-lg">Only 2.5–8.5% of projects finish on time and on budget.</p>
                  <p className="text-sm opacity-90">— McKinsey, KPMG</p>
                </div>
              </div>
              <div className="flex items-start bg-gradient-to-r from-red-500 to-orange-500 text-white p-6 rounded-xl shadow-lg">
                <FactIcon>💰</FactIcon>
                <div>
                  <p className="font-bold text-lg">98% of projects run over budget, often by 30% or more.</p>
                  <p className="text-sm opacity-90">— McKinsey, Loginets</p>
                </div>
              </div>
              <div className="flex items-start bg-gradient-to-r from-red-500 to-orange-500 text-white p-6 rounded-xl shadow-lg">
                <FactIcon>📈</FactIcon>
                <div>
                  <p className="font-bold text-lg">95% of project data is ignored, leading to missed KPIs.</p>
                  <p className="text-sm opacity-90">— FMI, Beck, Autodesk</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* AGITATE */}
          <div className="bg-orange-500 text-white rounded-2xl shadow-xl p-8 md:p-12 mb-12">
            <h3 className="text-2xl font-bold text-center mb-6">Does This Sound Familiar?</h3>
            <ul className="space-y-4 text-lg">
              <li className="flex items-start"><AgitateIcon /> Your best people spend 80% of their time chasing updates, not managing projects.</li>
              <li className="flex items-start"><AgitateIcon /> Teams are drowning in spreadsheets, disconnected from the real-time truth.</li>
              <li className="flex items-start"><AgitateIcon /> Critical decisions are based on outdated reports, leading to costly firefighting.</li>
            </ul>
          </div>
          
          {/* SOLUTION */}
          <div className="text-center max-w-3xl mx-auto">
             <h3 className="text-3xl font-bold text-rtpm-blue-800 mb-4">There Is a Better Way.</h3>
            <p className="text-xl text-gray-700">
              RTPM provides a single source of truth, directly inside Microsoft Teams. We turn project chaos into clarity, empowering your teams to deliver with confidence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;