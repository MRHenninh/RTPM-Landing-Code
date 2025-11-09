import React from 'react';

const StickyCta: React.FC = () => {
  const handleScrollToContact = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <a href="#contact" onClick={handleScrollToContact} className="fixed bottom-6 right-6 z-50 bg-rtpm-yellow-400 text-rtpm-blue-800 font-bold px-6 py-4 rounded-full shadow-2xl hover:bg-rtpm-yellow-500 transform hover:scale-105 transition-all duration-300 ease-in-out flex items-center gap-2">
      <span role="img" aria-label="phone icon">📞</span>
      Book Demo
    </a>
  );
};

export default StickyCta;