
import React from 'react';

const WhatIs: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-20 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <h1 className="text-6xl md:text-7xl serif mb-8 italic">Philosophy Over Features.</h1>
      <p className="text-xl text-gray-400 mb-20 leading-relaxed max-w-2xl font-light">
        Life OS 90 isn't another tool to manage your time. It's a framework to manage your attention.
      </p>

      <div className="space-y-32">
        {/* Comparison Section - Anti-Productivity */}
        <section>
          <h2 className="text-3xl serif italic mb-12 text-center">Choosing Less.</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-white border border-gray-100 rounded-[32px] card-shadow">
              <h3 className="font-bold text-[10px] uppercase tracking-widest text-gray-300 mb-6 italic">Notion / Digital Tools</h3>
              <ul className="space-y-4 text-sm text-gray-500">
                <li className="flex gap-2"><span>✕</span> Infinite distraction</li>
                <li className="flex gap-2"><span>✕</span> Rewards "Busy Work"</li>
                <li className="flex gap-2"><span>✕</span> Notification fatigue</li>
                <li className="flex gap-2"><span>✕</span> Hard to see energy trends</li>
              </ul>
            </div>
            <div className="p-10 bg-black text-white rounded-[40px] shadow-2xl shadow-black/20 scale-105 z-10 border border-white/10">
              <h3 className="font-bold text-[10px] uppercase tracking-widest text-zinc-500 mb-6 italic">Life OS 90</h3>
              <ul className="space-y-5 text-sm text-zinc-300">
                <li className="flex gap-2"><span className="text-white font-bold">✓</span> Intentional Friction</li>
                <li className="flex gap-2"><span className="text-white font-bold">✓</span> Rewards Deep Focus</li>
                <li className="flex gap-2"><span className="text-white font-bold">✓</span> Zero Noise Environment</li>
                <li className="flex gap-2"><span className="text-white font-bold">✓</span> Holistic Energy Mapping</li>
              </ul>
            </div>
            <div className="p-8 bg-white border border-gray-100 rounded-[32px] card-shadow">
              <h3 className="font-bold text-[10px] uppercase tracking-widest text-gray-300 mb-6 italic">Old School Planners</h3>
              <ul className="space-y-4 text-sm text-gray-500">
                <li className="flex gap-2"><span>✕</span> Rigid, dated pressure</li>
                <li className="flex gap-2"><span>✕</span> Guilt for missing days</li>
                <li className="flex gap-2"><span>✕</span> Purely task-oriented</li>
                <li className="flex gap-2"><span>✕</span> No reflection archive</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="grid md:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-4xl serif italic mb-8">The 90-Day Ideal</h2>
            <p className="text-gray-500 leading-relaxed mb-8 font-light text-lg">
              One year is a marathon. One week is a sprint. 90 days is a <strong>Season</strong>.
              It's the psychological sweet spot—long enough to rewire your brain, short enough to stay urgent.
            </p>
            <div className="p-8 bg-[#FAF9F6] rounded-[32px] border border-gray-100 italic text-sm text-gray-600 leading-relaxed">
              "We don't plan for the next 5 years. We plan for the person you are becoming this season."
            </div>
          </div>
          <div className="bg-white p-12 rounded-[48px] card-shadow relative">
             <div className="flex flex-col gap-10">
               <div className="flex gap-6">
                 <div className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center font-bold flex-shrink-0">1</div>
                 <p className="text-sm text-gray-500"><span className="text-black font-bold block mb-1">Clarity First.</span> We help you identify what matters before you ever touch a pen.</p>
               </div>
               <div className="flex gap-6">
                 <div className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center font-bold flex-shrink-0">2</div>
                 <p className="text-sm text-gray-500"><span className="text-black font-bold block mb-1">Awareness Second.</span> Tracking energy is more important than tracking checkboxes.</p>
               </div>
               <div className="flex gap-6">
                 <div className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center font-bold flex-shrink-0">3</div>
                 <p className="text-sm text-gray-500"><span className="text-black font-bold block mb-1">Insight Always.</span> The system turns silent thoughts into actionable self-knowledge.</p>
               </div>
             </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default WhatIs;
