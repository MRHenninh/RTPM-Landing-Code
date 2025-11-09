import React from 'react';

const testimonials = [
  {
    quote: "Henning’s commitment and problem-solving skills strengthened our wind farm project. His work made documentation and real-time reporting with all contractors effortless, supporting transparency and smooth project execution.",
    name: "Stig Balduin Andersen",
    title: "Project Director (HOFOR)",
  },
  {
    quote: "Henning is a role model for hands-on solutions. He’s driven documentation excellence—making it simple, effective, and reliable.",
    name: "Frederik Barth",
    title: "Head of Project Documentation Management (Siemens Gamesa)",
  },
  {
    quote: "Henning is an inspiring, knowledgeable leader who always gets results. He brings teams together, streamlines workflows, and ensures projects deliver—even under tight constraints.",
    name: "Vibeke Pedersen",
    title: "Product Safety & Compliance Leader (KOMPAN Global)",
  }
];

const SocialProof: React.FC = () => {
  return (
    <section id="social-proof" className="py-20 bg-rtpm-blue-800 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
           <h2 className="text-4xl font-bold max-w-3xl mx-auto">“Trusted by Leaders to Deliver Projects On Time and On Budget”</h2>
        </div>
        
        <div className="max-w-6xl mx-auto mb-20">
          <h3 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 flex flex-col shadow-lg border border-white/10">
                <blockquote className="text-base italic text-white/90 flex-grow mb-4">
                  “{testimonial.quote}”
                </blockquote>
                <cite className="mt-auto not-italic pt-4 border-t border-white/10">
                  <p className="font-bold text-white">{testimonial.name}</p>
                  <p className="text-sm text-white/70">{testimonial.title}</p>
                </cite>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-lg rounded-2xl p-8 md:p-12 shadow-2xl">
          <div className="flex flex-col md:flex-row items-center text-center md:text-left gap-8">
            <img 
              src="https://raw.githubusercontent.com/MRHenninh/RTPM-landing/main/HKprofileBlueShirt.jpg" 
              alt="Henning Kristensen, Founder of RTPM"
              className="w-40 h-40 rounded-full object-cover border-4 border-white/50 shadow-lg flex-shrink-0"
            />
            <div>
              <blockquote className="text-lg md:text-xl italic mb-6">
                "Studies show 95% of construction data goes unused—costing millions and leaving teams blind to real performance. After 10 years helping large projects improve, I built Real-Time Project Management—so you can focus on what matters instead of chasing updates."
              </blockquote>
              <cite className="not-italic">
                <p className="font-bold text-lg">Henning Kristensen</p>
                <p className="text-white/80">Founder, RTPM</p>
              </cite>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default SocialProof;