
import React from 'react';
import { Link } from 'react-router-dom';

const Step = ({ num, title, desc, icon }: { num: string, title: string, desc: string, icon: string }) => (
  <div className="relative pl-24 pb-20 group">
    <div className="absolute left-0 top-0 w-16 h-16 rounded-3xl bg-white border border-gray-100 card-shadow flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
      {icon}
    </div>
    <div className="absolute left-8 top-16 w-[1px] h-full bg-gray-100" />
    <div className="absolute left-[30px] top-4 text-[10px] font-bold text-gray-200 z-10">{num}</div>
    <h3 className="text-2xl serif mb-3 text-gray-900">{title}</h3>
    <p className="text-gray-500 leading-relaxed max-w-xl">{desc}</p>
  </div>
);

const HowItWorks: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-24 animate-in fade-in duration-700">
      <div className="mb-24 text-center">
        <h1 className="text-5xl md:text-6xl serif mb-8 italic">The 90-Day Loop</h1>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto">
          From the moment you receive your box to your final season review. 
          A simple, structured path to awareness.
        </p>
      </div>
      
      <div className="mt-20">
        <Step 
          num="01" 
          icon="🧩"
          title="Onboarding Audit" 
          desc="Answer a series of questions about your relationship with time, focus, and energy. We use this to generate your 'Season Baseline' and identify your core noise."
        />
        <Step 
          num="02" 
          icon="🎁"
          title="Order Your Kit" 
          desc="Your physical 90-day planner arrives. Take a moment to unbox, feel the paper, and read the introductory guide. This is your foundation."
        />
        <Step 
          num="03" 
          icon="☀️"
          title="The Morning Anchor" 
          desc="Spend 3 minutes with your planner before touching your phone. Identify your Core Focus for the day. This simple act reclaims your sovereignty."
        />
        <Step 
          num="04" 
          icon="🌙"
          title="Nightly Reflection" 
          desc="Open the companion tool for 30 seconds. Tap your mood, tap your energy, and record one thought. No pressure to write a novel, just a pulse check."
        />
        <Step 
          num="05" 
          icon="📉"
          title="The Insight Loop" 
          desc="Every week, see a calm summary of your patterns. 'You were most focused on mornings after a walk.' Use this to plan your next week."
        />
        <Step 
          num="06" 
          icon="📖"
          title="The Season Review" 
          desc="On Day 90, perform a guided review of your journey. Archive your physical planner and start a new season with deeper self-knowledge."
        />
      </div>

      <div className="mt-24 bg-black text-white p-12 rounded-[50px] text-center">
        <h2 className="text-3xl serif mb-6">Ready to start Day 01?</h2>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link to="/account" className="px-10 py-5 bg-white text-black rounded-full font-bold">Start Onboarding Audit</Link>
          <Link to="/planner" className="px-10 py-5 bg-zinc-800 text-white rounded-full font-medium border border-white/10">Skip to Planner</Link>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
