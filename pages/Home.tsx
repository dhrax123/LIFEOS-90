
import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-1000 overflow-x-hidden">
      {/* Hero Section */}
      <section className="min-h-[85vh] flex flex-col items-center justify-center px-6 py-16 md:py-24 text-center bg-[#FAF9F6]">
        <div className="animate-in slide-in-from-bottom-4 duration-1000 max-w-5xl">
          <div className="inline-block px-4 py-1.5 bg-gray-100 rounded-full text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-8 italic">
            Hybrid Offline + Online System • Season 1
          </div>
          <h1 className="text-5xl sm:text-7xl md:text-9xl serif leading-[1.1] mb-8 text-gray-900 tracking-tight">
            A life system <br />
            <span className="italic text-gray-400">that adapts to you.</span>
          </h1>
          <p className="text-lg md:text-2xl text-gray-500 max-w-2xl mx-auto mb-12 leading-relaxed font-light italic">
            Clarity shouldn't be a chore. Linen Logic is a calm, 90-day framework to reclaim your attention.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6">
            <Link to="/account" className="w-full sm:w-auto px-10 py-5 bg-black text-white rounded-full font-bold hover:scale-105 transition-all shadow-xl shadow-black/10 text-center">
              Start My Onboarding Audit
            </Link>
            <Link to="/how-it-works" className="w-full sm:w-auto px-10 py-5 bg-white border border-gray-100 text-black rounded-full font-medium hover:bg-gray-50 transition-colors text-center">
              See the Method
            </Link>
          </div>
        </div>
      </section>

      {/* The Loop Section */}
      <section className="py-24 md:py-32 bg-white border-y border-gray-100 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-6xl serif text-center mb-20 md:mb-32 italic">The Clarity Loop</h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-8 items-center max-w-5xl mx-auto">
            <div className="text-center p-4 transition-all hover:translate-y-[-5px]">
              <div className="text-5xl md:text-6xl mb-6">📓</div>
              <h4 className="font-bold text-[10px] mb-2 uppercase tracking-[0.3em]">Planner</h4>
              <p className="text-xs text-gray-400 font-light">Set Daily Intentions</p>
            </div>
            <div className="hidden md:block text-center text-gray-100 text-4xl font-light">→</div>
            <div className="text-center p-10 md:p-12 bg-[#FAF9F6] rounded-[40px] md:rounded-[60px] shadow-sm border border-gray-50 transition-all hover:scale-105">
              <div className="text-5xl md:text-6xl mb-6">🧘</div>
              <h4 className="font-bold text-[10px] mb-2 uppercase tracking-[0.3em]">Reflection</h4>
              <p className="text-xs text-gray-400 font-light">Evening Pulse Check</p>
            </div>
            <div className="hidden md:block text-center text-gray-100 text-4xl font-light">→</div>
            <div className="text-center p-4 transition-all hover:translate-y-[-5px]">
              <div className="text-5xl md:text-6xl mb-6">🐚</div>
              <h4 className="font-bold text-[10px] mb-2 uppercase tracking-[0.3em]">Insight</h4>
              <p className="text-xs text-gray-400 font-light">Organic Pattern Synthesis</p>
            </div>
          </div>
        </div>
      </section>

      {/* Validation Section */}
      <section className="py-24 md:py-32 bg-[#FAF9F6] px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center">
          <div className="space-y-12 md:space-y-16">
            <h2 className="text-4xl md:text-7xl serif leading-tight italic">The "Always-On" weight.</h2>
            <div className="space-y-10 md:space-y-12">
              <div className="flex gap-6 md:gap-8">
                <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full bg-red-50 text-red-400 flex items-center justify-center text-sm md:text-lg font-bold">✕</div>
                <div>
                  <h4 className="font-bold text-[10px] md:text-[11px] uppercase tracking-[0.3em] mb-2">Tool Fatigue</h4>
                  <p className="text-base md:text-lg text-gray-400 font-light leading-relaxed">You have 10 productivity apps, but your head still feels like it has 50 tabs open.</p>
                </div>
              </div>
              <div className="flex gap-6 md:gap-8">
                <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full bg-red-50 text-red-400 flex items-center justify-center text-sm md:text-lg font-bold">✕</div>
                <div>
                  <h4 className="font-bold text-[10px] md:text-[11px] uppercase tracking-[0.3em] mb-2">Performative Hustle</h4>
                  <p className="text-base md:text-lg text-gray-400 font-light leading-relaxed">Feeling like "rest" is just a missed opportunity to be productive. It's exhausting.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white p-4 rounded-[60px] md:rounded-[100px] card-shadow border border-gray-50 transform lg:rotate-2 overflow-hidden aspect-[3/4]">
             <img 
              src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1200&auto=format&fit=crop" 
              alt="Linen Logic Full Kit" 
              className="w-full h-full object-cover grayscale-[0.1] hover:grayscale-0 transition-all duration-1000"
            />
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 md:py-48 px-6 text-center bg-[#FAF9F6] border-t border-gray-100 relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-5xl md:text-8xl lg:text-[9rem] serif mb-10 md:mb-14 italic tracking-tighter">Inhabit Your Life.</h2>
          <p className="text-xl md:text-3xl text-gray-400 mb-16 md:mb-20 font-light max-w-2xl mx-auto italic leading-relaxed">
            Every 90 days, we craft exactly 90 units for those seeking a deeper baseline. This is not a batch; it is a seasonal commitment to clarity.
          </p>
          <div className="flex flex-col items-center gap-8 md:gap-10">
            <Link to="/checkout" className="w-full sm:w-auto px-12 md:px-20 py-6 md:py-8 bg-black text-white rounded-full font-bold text-xl md:text-2xl shadow-2xl shadow-black/30 hover:scale-[1.05] transition-all active:scale-95 text-center">
              Claim Your Kit — $19
            </Link>
            <div className="space-y-3">
              <p className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.8em] text-black italic">Crafted for the intentional few.</p>
              <p className="text-[10px] text-gray-300 font-bold uppercase tracking-[0.4em]">Worldwide Shipping Available</p>
            </div>
          </div>
        </div>
        <div className="absolute -bottom-20 -right-20 w-64 h-64 md:w-96 md:h-96 bg-gray-100 rounded-full blur-[100px] opacity-50" />
      </section>
    </div>
  );
};

export default Home;
