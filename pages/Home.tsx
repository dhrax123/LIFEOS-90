
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const [activeSection, setActiveSection] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const sections = [
    { id: 'hero' },
    { id: 'loop' },
    { id: 'validation' },
    { id: 'community' },
    { id: 'cta' }
  ];

  const handleScroll = () => {
    if (!containerRef.current) return;
    const scrollPosition = containerRef.current.scrollTop;
    const height = containerRef.current.clientHeight;
    const index = Math.round(scrollPosition / height);
    setActiveSection(index);
  };

  return (
    <div className="relative">
      {/* Vertical Navigation Dots */}
      <div className="fixed right-8 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-4">
        {sections.map((_, i) => (
          <div 
            key={i} 
            className={`w-1.5 h-1.5 rounded-full transition-all duration-500 ${
              activeSection === i ? 'bg-black h-8' : 'bg-gray-200'
            }`}
          />
        ))}
      </div>

      <div 
        ref={containerRef}
        onScroll={handleScroll}
        className="h-[calc(100vh-80px)] overflow-y-auto snap-y snap-mandatory scroll-smooth"
      >
        {/* Hero Section */}
        <section className="snap-start w-full h-[calc(100vh-80px)] flex flex-col items-center justify-center px-6 text-center bg-[#FAF9F6]">
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000 max-w-5xl">
            <div className="inline-block px-4 py-1.5 bg-gray-100 rounded-full text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-8">
              Hybrid Offline + Online System • S1
            </div>
            <h1 className="text-6xl md:text-[10rem] serif leading-[0.9] mb-10 text-gray-900 tracking-tight">
              A life system <br />
              <span className="italic text-gray-300">that breathes.</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto mb-14 leading-relaxed font-light italic">
              Clarity shouldn't be a chore. Linen Logic is a calm, 90-day framework to reclaim your attention.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link to="/account" className="w-full sm:w-auto px-12 py-6 bg-black text-white rounded-full font-bold hover:scale-105 transition-all shadow-2xl shadow-black/10">
                Start My Onboarding Audit
              </Link>
              <Link to="/how-it-works" className="w-full sm:w-auto px-12 py-6 bg-white border border-gray-100 text-black rounded-full font-medium hover:bg-gray-50 transition-colors">
                See the Method
              </Link>
            </div>
          </div>
        </section>

        {/* The Loop Section */}
        <section className="snap-start w-full h-[calc(100vh-80px)] flex flex-col items-center justify-center bg-white border-y border-gray-50 px-6">
          <div className="max-w-7xl w-full">
            <h2 className="text-4xl md:text-6xl serif text-center mb-32 italic">The Clarity Loop</h2>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center max-w-5xl mx-auto">
              <div className="text-center p-8 transition-all hover:translate-y-[-10px] duration-500">
                <div className="text-6xl mb-8">📓</div>
                <h4 className="font-bold text-[10px] mb-3 uppercase tracking-[0.3em]">Planner</h4>
                <p className="text-xs text-gray-400 font-light">Set Daily Intentions</p>
              </div>
              <div className="hidden md:block text-center text-gray-100 text-4xl font-light">→</div>
              <div className="text-center p-12 bg-[#FAF9F6] rounded-[60px] shadow-sm border border-gray-50 transition-all hover:scale-105 duration-500">
                <div className="text-6xl mb-8">🧘</div>
                <h4 className="font-bold text-[10px] mb-3 uppercase tracking-[0.3em]">Reflection</h4>
                <p className="text-xs text-gray-400 font-light">Evening Pulse Check</p>
              </div>
              <div className="hidden md:block text-center text-gray-100 text-4xl font-light">→</div>
              <div className="text-center p-8 transition-all hover:translate-y-[-10px] duration-500">
                <div className="text-6xl mb-8">🤖</div>
                <h4 className="font-bold text-[10px] mb-3 uppercase tracking-[0.3em]">Insight</h4>
                <p className="text-xs text-gray-400 font-light">AI Pattern Synthesis</p>
              </div>
            </div>
          </div>
        </section>

        {/* Validation Section */}
        <section className="snap-start w-full h-[calc(100vh-80px)] flex flex-col items-center justify-center px-6 bg-[#FAF9F6]">
          <div className="max-w-7xl w-full grid md:grid-cols-2 gap-24 items-center">
            <div className="space-y-16">
              <h2 className="text-5xl md:text-7xl serif leading-tight italic">We know the feeling. <br />The "Always-On" weight.</h2>
              <div className="space-y-12">
                <div className="flex gap-8">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-red-50 text-red-400 flex items-center justify-center text-lg font-bold">✕</div>
                  <div>
                    <h4 className="font-bold text-[11px] uppercase tracking-[0.3em] mb-3">Tool Fatigue</h4>
                    <p className="text-lg text-gray-400 font-light leading-relaxed">You have 10 productivity apps, but your head still feels like it has 50 tabs open.</p>
                  </div>
                </div>
                <div className="flex gap-8">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-red-50 text-red-400 flex items-center justify-center text-lg font-bold">✕</div>
                  <div>
                    <h4 className="font-bold text-[11px] uppercase tracking-[0.3em] mb-3">Performative Hustle</h4>
                    <p className="text-lg text-gray-400 font-light leading-relaxed">Feeling like "rest" is just a missed opportunity to be productive. It's exhausting.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white p-24 rounded-[100px] card-shadow border border-gray-50 transform rotate-1 md:rotate-2">
              <h3 className="text-3xl serif mb-12 italic">Linen Logic is NOT:</h3>
              <ul className="space-y-10">
                <li className="flex items-center gap-8 text-gray-300 font-light text-xl">
                  <span className="text-gray-100 font-bold text-3xl">—</span> A way to do more work
                </li>
                <li className="flex items-center gap-8 text-gray-300 font-light text-xl">
                  <span className="text-gray-100 font-bold text-3xl">—</span> A source of notifications
                </li>
                <li className="flex items-center gap-8 text-gray-900 font-bold text-2xl">
                  <span className="text-black text-3xl">✓</span> It's a way to feel lighter.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Community Section */}
        <section className="snap-start w-full h-[calc(100vh-80px)] flex flex-col items-center justify-center px-6 bg-white">
          <div className="max-w-7xl w-full text-center">
            <p className="text-[10px] font-bold uppercase tracking-[0.6em] text-gray-300 mb-24">The Community Baseline</p>
            <div className="grid md:grid-cols-3 gap-16">
              {[
                { text: "Finally, a system that doesn't make me feel bad for having a low-energy Tuesday.", author: "Ananya, Bangalore" },
                { text: "The unboxing alone calmed me down. The basket is a permanent desk anchor now.", author: "Kabir, Mumbai" },
                { text: "180 pages of pure focus. I've implemented more this week than the whole of last month.", author: "Sarah, Delhi" }
              ].map((testimonial, i) => (
                <div key={i} className="p-14 bg-[#FAF9F6] rounded-[80px] text-left border border-gray-50 card-shadow transition-all duration-700 hover:scale-[1.03]">
                  <p className="text-xl text-gray-500 italic mb-10 leading-relaxed font-light">"{testimonial.text}"</p>
                  <div className="flex items-center gap-6">
                    <div className="w-10 h-px bg-gray-200" />
                    <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-gray-900">{testimonial.author}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="snap-start w-full h-[calc(100vh-80px)] flex flex-col items-center justify-center px-6 text-center bg-[#FAF9F6] border-t border-gray-100 relative overflow-hidden">
          <div className="max-w-4xl relative z-10">
            <h2 className="text-6xl md:text-[9rem] serif mb-14 italic tracking-tighter">Commit to You.</h2>
            <p className="text-2xl md:text-3xl text-gray-400 mb-20 font-light max-w-2xl mx-auto italic">
              "90 days of grounding. 180 pages of truth."
            </p>
            <div className="flex flex-col items-center gap-10">
              <Link to="/checkout" className="w-full sm:w-auto px-20 py-8 bg-black text-white rounded-full font-bold text-2xl shadow-2xl shadow-black/30 hover:scale-[1.05] transition-all active:scale-95 text-center">
                Order Season 1 Kit — $19
              </Link>
              <div className="space-y-3">
                <p className="text-[11px] font-bold uppercase tracking-[0.8em] text-black">BATCH 04 • 85% SOLD OUT</p>
                <p className="text-[10px] text-gray-300 font-bold uppercase tracking-[0.4em]">Fulfillment Centers: Bangalore | Mumbai | NCR</p>
              </div>
            </div>
          </div>
          {/* Subtle Background Element */}
          <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-gray-100 rounded-full blur-[100px] opacity-50" />
        </section>
      </div>
    </div>
  );
};

export default Home;
