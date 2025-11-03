
import React from 'react';

const FuturePaths: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-4xl font-bold text-rtpm-blue-800 mb-4">You Have Two Paths Forward</h2>
          <p className="text-lg text-gray-600">The choice you make today will define your project outcomes for years to come.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Path 1: Do Nothing */}
          <div className="bg-white border-2 border-red-200 p-8 rounded-2xl shadow-lg">
            <div className="text-center mb-4">
                <span className="text-5xl">❌</span>
                <h3 className="text-2xl font-bold text-red-600 mt-4">Path 1: The Status Quo</h3>
            </div>
            <ul className="space-y-3 text-gray-700 list-disc list-outside pl-5">
              <li>Continue the struggle with spreadsheets and endless meetings.</li>
              <li>Face more surprise budget overruns and timeline delays.</li>
              <li>Burn out your best talent with frustrating administrative work.</li>
              <li>Remain reactive, constantly firefighting instead of innovating.</li>
            </ul>
          </div>

          {/* Path 2: Take Action */}
          <div className="bg-white border-2 border-green-200 p-8 rounded-2xl shadow-lg">
            <div className="text-center mb-4">
                <span className="text-5xl">✅</span>
                <h3 className="text-2xl font-bold text-green-600 mt-4">Path 2: The RTPM Way</h3>
            </div>
            <ul className="space-y-3 text-gray-700 list-disc list-outside pl-5">
              <li>Deliver projects consistently on time and under budget.</li>
              <li>Empower your entire team with a single source of real-time truth.</li>
              <li>Free up your project managers to focus on what truly matters.</li>
              <li>Make confident, data-driven decisions that drive success.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FuturePaths;
