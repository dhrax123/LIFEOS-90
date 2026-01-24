
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-24 animate-in fade-in duration-1000">
      <div className="mb-24 text-center">
        <h1 className="text-6xl md:text-8xl serif mb-8 italic tracking-tight">Built for humans, <br />not users.</h1>
        <p className="text-xl text-gray-400 font-light tracking-wide uppercase text-[10px] font-bold italic">The story behind Linen Logic.</p>
      </div>

      <div className="prose prose-lg text-gray-600 space-y-16 leading-relaxed max-w-none">
        <section className="space-y-8">
          <p className="text-3xl md:text-4xl serif text-gray-900 leading-[1.3] font-light">
            We spent years trying to optimize our lives. We downloaded every app, followed every 5 AM routine, and tried every "hustle" hack. 
            All it led to was a higher-functioning version of burnout.
          </p>
          <p className="text-lg text-gray-500 font-light leading-relaxed">
            Linen Logic was born from a simple realization: <strong>Productivity is the byproduct of clarity, not the goal.</strong> 
            If you don't know who you are and what you care about, "doing more" just gets you lost faster. We wanted to build something that felt like a breath of fresh air in a room full of smoke.
          </p>
        </section>

        <section className="bg-white p-14 md:p-20 rounded-[80px] border border-gray-100 card-shadow">
          <h2 className="text-4xl serif text-gray-900 mb-12 italic">What we refuse to be.</h2>
          <div className="grid md:grid-cols-2 gap-16">
            <div className="space-y-3">
              <h4 className="font-bold text-[10px] uppercase tracking-[0.3em] text-black">No Gamification</h4>
              <p className="text-sm text-gray-400 font-light leading-relaxed">We don't use streaks, badges, or red dots to manipulate your brain into using our app. We want you to use it and then put your phone away.</p>
            </div>
            <div className="space-y-3">
              <h4 className="font-bold text-[10px] uppercase tracking-[0.3em] text-black">No "Hustle" Talk</h4>
              <p className="text-sm text-gray-400 font-light leading-relaxed">We don't believe in "grinding" or "crushing it". We believe in rhythmic focus, sustainable effort, and intentional rest.</p>
            </div>
            <div className="space-y-3">
              <h4 className="font-bold text-[10px] uppercase tracking-[0.3em] text-black">No Data Exploitation</h4>
              <p className="text-sm text-gray-400 font-light leading-relaxed">Your reflections are your own. We build tools that protect your private thoughts with the same rigor we use to organize them.</p>
            </div>
            <div className="space-y-3">
              <h4 className="font-bold text-[10px] uppercase tracking-[0.3em] text-black">No Clutter</h4>
              <p className="text-sm text-gray-400 font-light leading-relaxed">If a feature doesn't contribute to your clarity, we don't build it. Simple as that.</p>
            </div>
          </div>
        </section>

        <section className="text-center py-24 border-t border-gray-100 mt-24">
          <div className="mb-14 flex justify-center">
             <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center text-white text-2xl shadow-2xl font-bold">DK</div>
          </div>
          <h2 className="text-4xl serif mb-12 italic">A Note from Dhiraj Kumar.</h2>
          <div className="relative">
            <div className="absolute -top-16 -left-10 text-[15rem] text-gray-50 opacity-50 serif italic pointer-events-none select-none">"</div>
            <p className="literary italic text-2xl md:text-4xl text-gray-800 max-w-3xl mx-auto leading-[1.6] relative z-10 font-light px-4">
              Linen Logic isn’t just paper and wax—it’s a quiet rebellion against the scroll. 
              We spent too long living in the cloud while our real lives stayed on the ground, disconnected and faint. 
              This system is my personal map back to the present. A way to build with gravity, to dream without drowning in data, and to trust the pace of a handwritten line. 
              We don't need faster tools; we need quieter ones. It’s time we reclaim our attention. It’s time we inhabit our own lives again.
            </p>
          </div>
          <div className="mt-16 space-y-2">
            <p className="font-bold text-[10px] uppercase tracking-[0.6em] text-black">Dhiraj Kumar</p>
            <p className="text-[10px] uppercase tracking-[0.4em] text-gray-300">Founder, Linen Logic</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
