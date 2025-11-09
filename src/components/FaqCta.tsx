import React, { useState, FormEvent } from 'react';

interface FaqItemProps {
  question: string;
  children: React.ReactNode;
}

const FaqItem: React.FC<FaqItemProps> = ({ question, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-white/20">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left flex justify-between items-center py-5"
      >
        <span className="text-lg font-semibold">{question}</span>
        <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
        </span>
      </button>
      {isOpen && <div className="pb-5 pr-6 text-white/80">{children}</div>}
    </div>
  );
};

const FaqCta: React.FC = () => {
  type FormStep = 'form' | 'schedule' | 'loading' | 'confirmed' | 'error';
  const [formStep, setFormStep] = useState<FormStep>('form');
  const [formData, setFormData] = useState({ name: '', email: '', company: '' });
  const [demoDateTime, setDemoDateTime] = useState({ date: '', time: '' });
  const [notification, setNotification] = useState<string | null>(null);

  // Power Automate URL for scheduling the Teams meeting
  const powerAutomateUrl = 'https://default131fd6e7ce8341a29fa8a3a0c41e91.41.environment.api.powerplatform.com:443/powerautomate/automations/direct/workflows/aab437eb6f004a548e649b6fd8744ebd/triggers/manual/paths/invoke?api-version=1&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=Gw76rxeZ5YUXc6I9kJsinFdP-2ZebFq2hvEnb9306sQ';

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const data = new FormData(form);
    setFormData({
      name: data.get('name') as string,
      email: data.get('email') as string,
      company: data.get('company') as string,
    });
    setFormStep('schedule');
  };

  const handleBooking = async () => {
    const dateInput = document.getElementById('demoDate') as HTMLInputElement;
    const timeInput = document.getElementById('demoTime') as HTMLInputElement;

    if (!dateInput.value || !timeInput.value) {
      setNotification('Please select both a date and time for your demo.');
      setTimeout(() => setNotification(null), 3000);
      return;
    }
    
    setNotification(null);
    setDemoDateTime({ date: dateInput.value, time: timeInput.value });
    setFormStep('loading');
    
    const payload = {
      name: formData.name,
      email: formData.email,
      company: formData.company || 'Not specified',
      demoDate: dateInput.value,
      demoTime: timeInput.value,
    };

    try {
      const response = await fetch(powerAutomateUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.statusText}`);
      }

      setFormStep('confirmed');

    } catch (error) {
      console.error('Error scheduling demo:', error);
      setFormStep('error');
    }
  };
  
  const getFormattedDateTime = () => {
    if (!demoDateTime.date || !demoDateTime.time) return { displayDate: '', displayTime: '' };
    const selectedDate = new Date(`${demoDateTime.date}T${demoDateTime.time}`);
    const displayDate = selectedDate.toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' });
    const displayTime = selectedDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    return { displayDate, displayTime };
  };

  const renderFormContent = () => {
    const { displayDate, displayTime } = getFormattedDateTime();

    switch(formStep) {
      case 'form':
        return (
          <form onSubmit={handleSubmit}>
            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold mb-2">Name *</label>
                <input type="text" id="name" name="name" required className="w-full p-4 rounded-lg bg-white/90 text-gray-800 focus:outline-none focus:ring-2 focus:ring-rtpm-blue-700" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold mb-2">Email *</label>
                <input type="email" id="email" name="email" required className="w-full p-4 rounded-lg bg-white/90 text-gray-800 focus:outline-none focus:ring-2 focus:ring-rtpm-blue-700" />
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-semibold mb-2">Company</label>
                <input type="text" id="company" name="company" className="w-full p-4 rounded-lg bg-white/90 text-gray-800 focus:outline-none focus:ring-2 focus:ring-rtpm-blue-700" />
              </div>
            </div>
            <button type="submit" className="w-full mt-8 bg-rtpm-yellow-400 text-rtpm-blue-800 font-bold text-lg py-4 rounded-full shadow-lg hover:bg-rtpm-yellow-500 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
              Schedule Your Demo
            </button>
          </form>
        );
      case 'schedule':
        return (
           <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Choose Your Demo Time</h3>
            <p className="mb-6 opacity-90">Select a date and time for your live Teams demo.</p>
            {notification && <div className="bg-red-500 text-white p-3 rounded-lg mb-4">{notification}</div>}
            <div className="space-y-4 mb-6 text-left">
              <div>
                <label htmlFor="demoDate" className="block text-sm font-semibold mb-2">Date</label>
                <input type="date" id="demoDate" min={new Date().toISOString().split('T')[0]} className="w-full p-4 rounded-lg bg-white/90 text-gray-800 focus:outline-none focus:ring-2 focus:ring-rtpm-blue-700" />
              </div>
              <div>
                <label htmlFor="demoTime" className="block text-sm font-semibold mb-2">Time</label>
                <input type="time" id="demoTime" className="w-full p-4 rounded-lg bg-white/90 text-gray-800 focus:outline-none focus:ring-2 focus:ring-rtpm-blue-700" />
              </div>
            </div>
            <button onClick={handleBooking} className="w-full mt-4 bg-white text-rtpm-blue-700 font-bold text-lg py-4 rounded-full shadow-lg hover:bg-gray-200 transform hover:-translate-y-1 transition-all duration-300">
              Confirm & Book Demo
            </button>
          </div>
        );
      case 'loading':
        return (
            <div className="text-center py-8 min-h-[300px] flex flex-col justify-center">
                <div className="text-6xl mb-4">⏳</div>
                <h3 className="text-2xl font-bold mb-2">Scheduling your demo...</h3>
                <p className="opacity-90">Please wait a moment while we confirm your slot for {displayDate} at {displayTime}.</p>
            </div>
        );
      case 'confirmed':
        return (
          <div className="text-center py-8 min-h-[300px] flex flex-col justify-center">
            <div className="text-6xl mb-4">✅</div>
            <h3 className="text-2xl font-bold mb-2">Demo Scheduled!</h3>
            <p className="opacity-90">Thank you, {formData.name}. Your RTPM demo is scheduled for {displayDate} at {displayTime}.</p>
            <p className="opacity-90">A calendar invitation has been sent to your email.</p>
          </div>
        );
      case 'error':
        return (
            <div className="text-center py-8 min-h-[300px] flex flex-col justify-center">
                <div className="text-6xl mb-4">❌</div>
                <h3 className="text-2xl font-bold mb-2">Booking Failed</h3>
                <p className="opacity-90 mb-6">We're sorry, but we couldn't schedule your demo. Please try again or contact us directly.</p>
                <button onClick={() => setFormStep('schedule')} className="w-full bg-rtpm-yellow-400 text-rtpm-blue-800 font-bold text-lg py-4 rounded-full shadow-lg hover:bg-rtpm-yellow-500 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                    Try Again
                </button>
            </div>
        );
    }
  }

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-rtpm-blue-700 to-rtpm-blue-800 text-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-4xl font-bold mb-4">Ready to End Project Chaos?</h2>
            <p className="text-xl opacity-90 mb-8">First, let's answer a few common questions.</p>
            <div className="space-y-2">
              <FaqItem question="How long does it take to get started?">
                <p>Onboarding takes just 1 hour. Since RTPM lives inside your existing Microsoft Teams and SharePoint environment, there are no new tools for your team to learn. We focus on a rapid, seamless integration.</p>
              </FaqItem>
              <FaqItem question="Is our project data secure?">
                <p>Absolutely. RTPM is 100% Microsoft-native. All your data stays within your own secure Microsoft tenant, inheriting all your existing enterprise-grade security, compliance, and data residency policies.</p>
              </FaqItem>
               <FaqItem question="Will this work for our specific industry workflows?">
                <p>Yes. RTPM is designed for complex projects and is highly configurable. We tailor the platform to your exact workflows, whether you're in Construction, Renewable Energy, Pharmaceuticals, or another demanding industry.</p>
              </FaqItem>
               <FaqItem question="What is the pricing model?">
                <p>Our pricing is based on the scope and complexity of your project portfolio. We offer flexible plans to suit different needs. Book a demo for a personalized quote and a clear ROI breakdown.</p>
              </FaqItem>
            </div>
          </div>
          <div>
             <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl">
              <img src="https://raw.githubusercontent.com/MRHenninh/RTPM-landing/main/RTPMwhiteRTPMlogo.svg" alt="RTPM Logo" className="mx-auto h-12 w-auto mb-6" />
              <h3 className="text-2xl font-bold text-center mb-6">Book Your Live Teams Demo</h3>
              {renderFormContent()}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqCta;