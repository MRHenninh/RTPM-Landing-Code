import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-4">
            <img src="https://raw.githubusercontent.com/MRHenninh/RTPM-landing/main/RTPMblueRTPMlogo.svg" alt="RTPM Logo" className="h-10 w-auto" />
            <p className="text-gray-600 text-sm">
              Vejle, Denmark | Founded 2016 <br />
              © Real Time Project Management. All rights reserved.
            </p>
          </div>
          <div className="flex items-center gap-6">
            <a href="https://www.linkedin.com/company/real-time-project-management/?viewAsMember=true" target="_blank" rel="noopener noreferrer" className="opacity-80 hover:opacity-100 transition-opacity">
              <img src="https://raw.githubusercontent.com/MRHenninh/RTPM-landing-Asset/main/LinkedInLightBg.svg" alt="LinkedIn" className="w-6 h-6" />
            </a>
            <a href="https://x.com/Real_Time_PM" target="_blank" rel="noopener noreferrer" className="opacity-80 hover:opacity-100 transition-opacity">
              <img src="https://raw.githubusercontent.com/MRHenninh/RTPM-landing/main/Xlogo-black.png" alt="X" className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;