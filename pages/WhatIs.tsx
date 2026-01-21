
import React from 'react';

const WhatIs: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-24 animate-in fade-in duration-1000">
      
      {/* Header */}
      <header className="mb-24 text-center">
        <h1 className="text-5xl md:text-7xl serif italic mb-8">The Philosophy of Direction.</h1>
        <p className="text-xl text-gray-400 font-light max-w-2xl mx-auto leading-relaxed italic">
          Clarity is not a feeling. It is the result of a deliberate system.
        </p>
      </header>

      <div className="space-y-32">
        
        {/* 1. How We See Life */}
        <section className="space-y-8">
          <h2 className="text-sm font-bold uppercase tracking-[0.4em] text-gray-300">01 / The Nature of Phases</h2>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <p className="literary text-2xl md:text-3xl text-gray-800 leading-snug font-light italic">
              Life does not move at a single speed. It moves in distinct phases.
            </p>
            <div className="space-y-6 text-gray-500 font-light leading-relaxed">
              <p>
                Not every season is meant for high-speed output. Some phases require deep learning, while others are built for precise execution. 
              </p>
              <p>
                When you try to force a growth phase during a recovery phase, you create friction. We believe in identifying the timing of your current chapter so you can work with it, not against it.
              </p>
            </div>
          </div>
        </section>

        {/* 2. The Problem We Notice */}
        <section className="space-y-8">
          <h2 className="text-sm font-bold uppercase tracking-[0.4em] text-gray-300">02 / The Cost of Noise</h2>
          <div className="bg-white p-12 md:p-16 rounded-[48px] border border-gray-100 card-shadow">
            <h3 className="text-3xl serif mb-10 italic">The Performance Pressure.</h3>
            <div className="grid md:grid-cols-2 gap-16">
              <div className="space-y-6">
                <p className="text-sm font-bold uppercase tracking-widest text-black">The Always-On Weight</p>
                <p className="text-gray-500 font-light text-sm leading-relaxed">
                  Modern professional life creates a false sense of urgency. You are told to perform constantly, which leads to shallow decisions and mental fatigue.
                </p>
              </div>
              <div className="space-y-6">
                <p className="text-sm font-bold uppercase tracking-widest text-black">Rushed Logic</p>
                <p className="text-gray-500 font-light text-sm leading-relaxed">
                  When you have fifty tabs open, your choices are reactive, not considered. Most people aren't failing because of a lack of effort, but because of a lack of focus.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Our Philosophy */}
        <section className="space-y-8">
          <h2 className="text-sm font-bold uppercase tracking-[0.4em] text-gray-300">03 / Core Thinking</h2>
          <div className="space-y-12">
            <div className="border-l-2 border-gray-100 pl-10 space-y-4">
              <h4 className="text-xl serif italic">Timing Over Pressure.</h4>
              <p className="text-gray-500 font-light leading-relaxed max-w-2xl">
                Right action is dependent on the context of your season. Growth is often invisible while it is happening. We prioritize the foundation over the appearance of progress.
              </p>
            </div>
            <div className="border-l-2 border-gray-100 pl-10 space-y-4">
              <h4 className="text-xl serif italic">Structure as Freedom.</h4>
              <p className="text-gray-500 font-light leading-relaxed max-w-2xl">
                True flexibility comes from a known baseline. By establishing a clear daily anchor, you reduce the number of minor decisions you have to make, freeing your mind for higher-level work.
              </p>
            </div>
          </div>
        </section>

        {/* 4. How the Product Helps */}
        <section className="bg-black text-white p-16 md:p-24 rounded-[60px] shadow-2xl">
          <h2 className="text-3xl md:text-4xl serif mb-12 italic">A Practical Framework.</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <h5 className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-500">Intentional Friction</h5>
              <p className="text-zinc-300 font-light text-sm leading-relaxed">
                Linen Logic is designed to slow you down. By moving key reflections to a physical anchor, we remove the digital noise that prevents deep thought.
              </p>
            </div>
            <div className="space-y-4">
              <h5 className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-500">Structured Guidance</h5>
              <p className="text-zinc-300 font-light text-sm leading-relaxed">
                We provide a system to categorize your focus. This isn't generic advice; it's a template for you to apply your own context and make better decisions.
              </p>
            </div>
          </div>
        </section>

        {/* 5. What This Is Not */}
        <section className="text-center py-10">
          <h2 className="text-sm font-bold uppercase tracking-[0.4em] text-gray-300 mb-12">Boundaries of the System</h2>
          <div className="flex flex-wrap justify-center gap-10 opacity-60">
            <div className="flex items-center gap-3">
              <span className="text-gray-300">—</span>
              <span className="text-xs font-bold uppercase tracking-widest">No Hustle Culture</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-gray-300">—</span>
              <span className="text-xs font-bold uppercase tracking-widest">No Instant Motivation</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-gray-300">—</span>
              <span className="text-xs font-bold uppercase tracking-widest">No Productivity Pressure</span>
            </div>
          </div>
        </section>

        {/* 6. Closing Direction */}
        <section className="text-center pt-20 pb-10">
          <p className="literary italic text-3xl md:text-4xl text-gray-800 font-light leading-relaxed max-w-3xl mx-auto mb-16">
            You do not need to be faster. <br />You need to be clearer about where you are going.
          </p>
          <div className="flex justify-center items-center gap-4">
             <div className="w-12 h-px bg-gray-100" />
             <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-gray-400">Steady. Grounded. Resolved.</p>
             <div className="w-12 h-px bg-gray-100" />
          </div>
        </section>

      </div>
    </div>
  );
};

export default WhatIs;