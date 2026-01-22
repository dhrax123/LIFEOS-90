
import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-1000">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-24 md:py-40 text-center">
        <div className="inline-block px-4 py-1.5 bg-gray-100 rounded-full text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-8 animate-in slide-in-from-bottom-2">
          Hybrid Offline + Online System • India Only
        </div>
        <h1 className="text-5xl md:text-8xl serif leading-[1.1] mb-8 text-gray-900">
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
      </section>

      {/* The Loop Section */}
      <section className="bg-white py-24 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl serif text-center mb-16 italic">The Clarity Loop</h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
            <div className="text-center p-6">
              <div className="text-3xl mb-4">📓</div>
              <h4 className="font-medium text-sm mb-1 uppercase tracking-widest">Planner</h4>
              <p className="text-xs text-gray-400">Set Intentions</p>
            </div>
            <div className="hidden md:block text-center text-gray-200 text-2xl">→</div>
            <div className="text-center p-6 bg-[#FAF9F6] rounded-3xl">
              <div className="text-3xl mb-4">🧘</div>
              <h4 className="font-medium text-sm mb-1 uppercase tracking-widest">Reflection</h4>
              <p className="text-xs text-gray-400">Light Check-in</p>
            </div>
            <div className="hidden md:block text-center text-gray-200 text-2xl">→</div>
            <div className="text-center p-6">
              <div className="text-3xl mb-4">🤖</div>
              <h4 className="font-medium text-sm mb-1 uppercase tracking-widest">Insight</h4>
              <p className="text-xs text-gray-400">Spot Patterns</p>
            </div>
          </div>
        </div>
      </section>

      {/* Validation Section */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-24 items-center">
          <div>
            <h2 className="text-4xl serif mb-8 leading-tight italic">We know the feeling. <br />The "Always-On" weight.</h2>
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-50 text-red-400 flex items-center justify-center text-sm font-bold">✕</div>
                <div>
                  <h4 className="font-bold text-xs uppercase tracking-widest mb-1">Overwhelmed by Tools</h4>
                  <p className="text-sm text-gray-500 font-light">You have 10 productivity apps, but your head still feels like it has 50 tabs open.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-50 text-red-400 flex items-center justify-center text-sm font-bold">✕</div>
                <div>
                  <h4 className="font-bold text-xs uppercase tracking-widest mb-1">Hustle Culture Guilt</h4>
                  <p className="text-sm text-gray-500 font-light">Feeling like "rest" is just a missed opportunity to be productive. It's exhausting.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#F5F3EF] p-16 rounded-[60px] card-shadow">
            <h3 className="text-2xl serif mb-8 italic">Linen Logic is NOT:</h3>
            <ul className="space-y-6">
              <li className="flex items-center gap-4 text-gray-600 font-light">
                <span className="text-gray-300 font-bold">—</span> A way to do more work
              </li>
              <li className="flex items-center gap-4 text-gray-600 font-light">
                <span className="text-gray-300 font-bold">—</span> A source of notifications
              </li>
              <li className="flex items-center gap-4 text-gray-900 font-bold">
                <span className="text-black">✓</span> It's a way to feel lighter.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Social Proof (Pure text only) */}
      <section className="py-24 bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-gray-400 mb-16">Active in Bangalore, Mumbai, and Delhi</p>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="p-10 bg-white rounded-[40px] text-left border border-gray-100 card-shadow">
              <p className="text-sm text-gray-500 italic mb-6 leading-relaxed">"Finally, a system that doesn't make me feel bad for having a low-energy Tuesday."</p>
              <p className="text-[10px] font-bold uppercase tracking-widest text-gray-900">— Ananya, Bangalore</p>
            </div>
            <div className="p-10 bg-white rounded-[40px] text-left border border-gray-100 card-shadow">
              <p className="text-sm text-gray-500 italic mb-6 leading-relaxed">"The unboxing alone calmed me down. The basket is a nice touch."</p>
              <p className="text-[10px] font-bold uppercase tracking-widest text-gray-900">— Kabir, Mumbai</p>
            </div>
            <div className="p-10 bg-white rounded-[40px] text-left border border-gray-100 card-shadow">
              <p className="text-sm text-gray-500 italic mb-6 leading-relaxed">"180 pages of pure focus. I've implemented more this week than this month."</p>
              <p className="text-[10px] font-bold uppercase tracking-widest text-gray-900">— Sarah, Delhi</p>
            </div>
          </div>
        </div>
      </section>

      {/* Batch Invite */}
      <section className="py-32 max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl serif mb-8 italic">Join the next batch.</h2>
        <p className="text-gray-500 mb-12 font-light">We release 90 planners every month to keep the community intentional.</p>
        <div className="flex flex-col md:flex-row gap-4 max-w-md mx-auto items-center justify-center">
          <Link to="/checkout" className="w-full sm:w-auto px-12 py-6 bg-black text-white rounded-full font-bold shadow-xl shadow-black/10 hover:scale-[1.03] transition-transform active:scale-95 text-center">
            Secure My Kit Now — $19
          </Link>
        </div>
        <p className="mt-8 text-[9px] font-bold uppercase tracking-[0.5em] text-gray-300">BATCH 04 • 85% SOLD OUT</p>
      </section>
    </div>
  );
};

export default Home;
