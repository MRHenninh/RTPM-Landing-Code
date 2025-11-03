
import React from 'react';

const StickyCta: React.FC = () => {
  return (
    <a href="#contact" className="fixed bottom-6 right-6 z-50 bg-rtpm-blue-700 text-white font-bold px-6 py-4 rounded-full shadow-2xl hover:bg-rtpm-blue-800 transform hover:scale-105 transition-all duration-300 ease-in-out flex items-center gap-2">
      <span role="img" aria-label="phone icon">📞</span>
      Book Demo
    </a>
  );
};

export default StickyCta;
