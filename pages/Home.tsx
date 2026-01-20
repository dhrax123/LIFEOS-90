
import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-1000">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-24 md:py-40 text-center">
        <div className="inline-block px-4 py-1.5 bg-gray-100 rounded-full text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-8 animate-in slide-in-from-bottom-2">
          Hybrid Offline + Online System
        </div>
        <h1 className="text-5xl md:text-8xl serif leading-[1.1] mb-8 text-gray-900">
          A life system that <br />
          <span className="italic text-gray-400">adapts to you.</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-500 max-w-2xl mx-auto mb-12 leading-relaxed font-light">
          Clarity shouldn't be a chore. Life OS 90 is a calm, 90-day framework to reclaim your attention and understand your patterns.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link to="/planner" className="w-full sm:w-auto px-10 py-5 bg-black text-white rounded-full font-medium hover:scale-105 transition-all shadow-xl shadow-black/10">
            Get the 90-Day System
          </Link>
          <Link to="/how-it-works" className="w-full sm:w-auto px-10 py-5 bg-white border border-gray-200 text-black rounded-full font-medium hover:bg-gray-50 transition-colors">
            See how it works
          </Link>
        </div>
      </section>

      {/* The Loop Section */}
      <section className="bg-white py-24 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl serif text-center mb-16">The Clarity Loop</h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
            <div className="text-center p-6">
              <div className="text-3xl mb-4">📓</div>
              <h4 className="font-medium text-sm mb-1">Planner</h4>
              <p className="text-xs text-gray-400">Set Intentions</p>
            </div>
            <div className="hidden md:block text-center text-gray-200 text-2xl">→</div>
            <div className="text-center p-6 bg-[#FAF9F6] rounded-3xl">
              <div className="text-3xl mb-4">🧘</div>
              <h4 className="font-medium text-sm mb-1">Reflection</h4>
              <p className="text-xs text-gray-400">Light Check-in</p>
            </div>
            <div className="hidden md:block text-center text-gray-200 text-2xl">→</div>
            <div className="text-center p-6">
              <div className="text-3xl mb-4">🤖</div>
              <h4 className="font-medium text-sm mb-1">Insight</h4>
              <p className="text-xs text-gray-400">Spot Patterns</p>
            </div>
          </div>
          <p className="text-center mt-12 text-sm text-gray-500 max-w-lg mx-auto">
            A continuous cycle of awareness. No rigid rules, just a gentle return to yourself every morning and evening.
          </p>
        </div>
      </section>

      {/* Validation Section */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-24 items-center">
          <div>
            <h2 className="text-4xl serif mb-8 leading-tight">We know the feeling. <br />The "Always-On" weight.</h2>
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-50 text-red-400 flex items-center justify-center text-sm">✕</div>
                <div>
                  <h4 className="font-medium mb-1">Overwhelmed by Tools</h4>
                  <p className="text-sm text-gray-500">You have 10 productivity apps, but your head still feels like it has 50 tabs open.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-50 text-red-400 flex items-center justify-center text-sm">✕</div>
                <div>
                  <h4 className="font-medium mb-1">Busy but Stagnant</h4>
                  <p className="text-sm text-gray-500">Checking boxes all day, but at night you wonder if you actually did anything that mattered.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-50 text-red-400 flex items-center justify-center text-sm">✕</div>
                <div>
                  <h4 className="font-medium mb-1">The Hustle Guilt</h4>
                  <p className="text-sm text-gray-500">Feeling like "rest" is just a missed opportunity to be productive. It's exhausting.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#F5F3EF] p-12 rounded-[40px]">
            <h3 className="text-2xl serif mb-6">Life OS 90 is NOT:</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-gray-600">
                <span className="text-gray-300">—</span> A way to do more work
              </li>
              <li className="flex items-center gap-3 text-gray-600">
                <span className="text-gray-300">—</span> A rigid 5 AM wake-up guide
              </li>
              <li className="flex items-center gap-3 text-gray-600">
                <span className="text-gray-300">—</span> A source of notifications
              </li>
              <li className="flex items-center gap-3 text-gray-600 font-medium">
                <span className="text-black">✓</span> It's a way to feel lighter.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-24 bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-12">Built with early users from Mumbai, Bangalore, and New York</p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-white rounded-3xl text-left border border-gray-100">
              <p className="text-sm text-gray-600 italic mb-4">"Finally, a system that doesn't make me feel bad for having a low-energy Tuesday."</p>
              <p className="text-xs font-medium">— Ananya, Product Designer</p>
            </div>
            <div className="p-8 bg-white rounded-3xl text-left border border-gray-100">
              <p className="text-sm text-gray-600 italic mb-4">"The physical planner is my anchor. The app is my mirror. They just work."</p>
              <p className="text-xs font-medium">— Kabir, Solo Founder</p>
            </div>
            <div className="p-8 bg-white rounded-3xl text-left border border-gray-100">
              <p className="text-sm text-gray-600 italic mb-4">"I used to jump from app to app. This is the first thing I've stuck with for 90 days."</p>
              <p className="text-xs font-medium">— Sarah, Student</p>
            </div>
          </div>
        </div>
      </section>

      {/* Waitlist */}
      <section className="py-32 max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl serif mb-6">Join the next batch.</h2>
        <p className="text-gray-500 mb-12">We release 90 planners every month to maintain a calm community experience.</p>
        <div className="flex flex-col md:flex-row gap-3 max-w-md mx-auto">
          <input type="email" placeholder="email@clarity.com" className="flex-grow px-6 py-4 rounded-full border border-gray-200 focus:outline-none focus:ring-1 focus:ring-black" />
          <button className="px-8 py-4 bg-black text-white rounded-full font-medium">Secure Access</button>
        </div>
      </section>
    </div>
  );
};

export default Home;
