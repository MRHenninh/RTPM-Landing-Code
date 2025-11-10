import React from 'react';
import Hero from './components/Hero';
import ProblemSolution from './components/ProblemSolution';
import Benefits from './components/Benefits';
import SocialProof from './components/SocialProof';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';
import FuturePaths from './components/FuturePaths';
import FaqCta from './components/FaqCta';
import Footer from './components/Footer';
import StickyCta from './components/StickyCta';

const App: React.FC = () => {
  return (
    <div>
      <main>
        <Hero />
        <ProblemSolution />
        <div className="h-[3px] bg-rtpm-blue-700" />
        <Benefits />
        <div className="h-[3px] bg-rtpm-blue-700" />
        <SocialProof />
        <HowItWorks />
        <div className="h-[3px] bg-rtpm-blue-700" />
        <Features />
        <div className="h-[3px] bg-rtpm-blue-700" />
        <FuturePaths />
        <FaqCta />
      </main>
      <Footer />
      <StickyCta />
    </div>
  );
};

export default App;