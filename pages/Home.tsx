
import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="h-[calc(100vh-80px)] overflow-y-auto snap-y snap-mandatory scroll-smooth">
      {/* Hero Section */}
      <section className="snap-start w-full h-[calc(100vh-80px)] flex flex-col items-center justify-center px-6 text-center bg-[#FAF9F6]">
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <div className="inline-block px-4 py-1.5 bg-gray-100 rounded-full text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-8">
            Hybrid Offline + Online System • India Only
          </div>
          <h1 className="text-6xl md:text-9xl serif leading-[1] mb-8 text-gray-900">
            A life system that <br />
            <span className="italic text-gray-400">adapts to you.</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-500 max-w-2xl mx-auto mb-12 leading-relaxed font-light">
            Clarity shouldn't be a chore. Linen Logic is a calm, 90-day framework to reclaim your attention for just $19.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link to="/account" className="w-full sm:w-auto px-10 py-5 bg-black text-white rounded-full font-medium hover:scale-105 transition-all shadow-xl shadow-black/10">
              Start My Onboarding Audit
            </Link>
            <Link to="/how-it-works" className="w-full sm:w-auto px-10 py-5 bg-white border border-gray-200 text-black rounded-full font-medium hover:bg-gray-50 transition-colors">
              See how it works
            </Link>
          </div>
        </div>
      </section>

      {/* The Loop Section */}
      <section className="snap-start w-full h-[calc(100vh-80px)] flex flex-col items-center justify-center bg-white border-y border-gray-100 px-6">
        <div className="max-w-7xl w-full">
          <h2 className="text-4xl md:text-5xl serif text-center mb-24 italic">The Clarity Loop</h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center max-w-4xl mx-auto">
            <div className="text-center p-8 transition-all hover:scale-105">
              <div className="text-5xl mb-6">📓</div>
              <h4 className="font-bold text-xs mb-2 uppercase tracking-widest">Planner</h4>
              <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Set Intentions</p>
            </div>
            <div className="hidden md:block text-center text-gray-200 text-3xl font-light">→</div>
            <div className="text-center p-10 bg-[#FAF9F6] rounded-[40px] shadow-sm border border-gray-50 transition-all hover:scale-105">
              <div className="text-5xl mb-6">🧘</div>
              <h4 className="font-bold text-xs mb-2 uppercase tracking-widest">Reflection</h4>
              <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Light Check-in</p>
            </div>
            <div className="hidden md:block text-center text-gray-200 text-3xl font-light">→</div>
            <div className="text-center p-8 transition-all hover:scale-105">
              <div className="text-5xl mb-6">🤖</div>
              <h4 className="font-bold text-xs mb-2 uppercase tracking-widest">Insight</h4>
              <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Spot Patterns</p>
            </div>
          </div>
        </div>
      </section>

      {/* Validation Section */}
      <section className="snap-start w-full h-[calc(100vh-80px)] flex flex-col items-center justify-center px-6 bg-[#FAF9F6]">
        <div className="max-w-7xl w-full grid md:grid-cols-2 gap-24 items-center">
          <div className="space-y-12">
            <h2 className="text-5xl md:text-6xl serif leading-tight italic">We know the feeling. <br />The "Always-On" weight.</h2>
            <div className="space-y-10">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-red-50 text-red-400 flex items-center justify-center text-sm font-bold">✕</div>
                <div>
                  <h4 className="font-bold text-[10px] uppercase tracking-[0.2em] mb-2">Overwhelmed by Tools</h4>
                  <p className="text-base text-gray-500 font-light leading-relaxed">You have 10 productivity apps, but your head still feels like it has 50 tabs open.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-red-50 text-red-400 flex items-center justify-center text-sm font-bold">✕</div>
                <div>
                  <h4 className="font-bold text-[10px] uppercase tracking-[0.2em] mb-2">Hustle Culture Guilt</h4>
                  <p className="text-base text-gray-500 font-light leading-relaxed">Feeling like "rest" is just a missed opportunity to be productive. It's exhausting.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white p-20 rounded-[80px] card-shadow border border-gray-100">
            <h3 className="text-3xl serif mb-10 italic">Linen Logic is NOT:</h3>
            <ul className="space-y-8">
              <li className="flex items-center gap-6 text-gray-400 font-light text-lg">
                <span className="text-gray-200 font-bold text-2xl">—</span> A way to do more work
              </li>
              <li className="flex items-center gap-6 text-gray-400 font-light text-lg">
                <span className="text-gray-200 font-bold text-2xl">—</span> A source of notifications
              </li>
              <li className="flex items-center gap-6 text-gray-900 font-bold text-xl">
                <span className="text-black text-2xl">✓</span> It's a way to feel lighter.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="snap-start w-full h-[calc(100vh-80px)] flex flex-col items-center justify-center px-6 bg-white">
        <div className="max-w-7xl w-full text-center">
          <p className="text-[10px] font-bold uppercase tracking-[0.5em] text-gray-300 mb-20">The Community Baseline</p>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { text: "Finally, a system that doesn't make me feel bad for having a low-energy Tuesday.", author: "Ananya, Bangalore" },
              { text: "The unboxing alone calmed me down. The basket is a permanent desk anchor now.", author: "Kabir, Mumbai" },
              { text: "180 pages of pure focus. I've implemented more this week than the whole of last month.", author: "Sarah, Delhi" }
            ].map((testimonial, i) => (
              <div key={i} className="p-12 bg-[#FAF9F6] rounded-[60px] text-left border border-gray-50 card-shadow transition-transform hover:scale-[1.02]">
                <p className="text-lg text-gray-600 italic mb-8 leading-relaxed font-light">"{testimonial.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-8 h-px bg-gray-200" />
                  <p className="text-[10px] font-bold uppercase tracking-widest text-gray-900">{testimonial.author}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Batch Invite Section */}
      <section className="snap-start w-full h-[calc(100vh-80px)] flex flex-col items-center justify-center px-6 text-center bg-[#FAF9F6] border-t border-gray-100">
        <div className="max-w-4xl">
          <h2 className="text-5xl md:text-8xl serif mb-10 italic">Join the next batch.</h2>
          <p className="text-xl md:text-2xl text-gray-400 mb-16 font-light max-w-2xl mx-auto italic">
            "We release only 90 units per cycle. Every page is a commitment to the season ahead."
          </p>
          <div className="flex flex-col items-center gap-8">
            <Link to="/checkout" className="w-full sm:w-auto px-16 py-8 bg-black text-white rounded-full font-bold text-xl shadow-2xl shadow-black/20 hover:scale-[1.05] transition-all active:scale-95 text-center">
              Secure My Kit Now — $19
            </Link>
            <div className="space-y-2">
              <p className="text-[10px] font-bold uppercase tracking-[0.6em] text-black">BATCH 04 • 85% SOLD OUT</p>
              <p className="text-[10px] text-gray-300 font-bold uppercase tracking-[0.4em]">Dispatching from Bangalore hub</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
