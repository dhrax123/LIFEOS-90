
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-24 animate-in fade-in duration-700">
      <div className="mb-20 text-center">
        <h1 className="text-6xl serif mb-6 italic">Built for humans, <br />not users.</h1>
        <p className="text-xl text-gray-500 font-light">The story behind Linen Logic.</p>
      </div>

      <div className="prose prose-lg text-gray-600 space-y-12 leading-relaxed max-w-none">
        <section>
          <p className="text-2xl serif text-gray-900 leading-snug">
            We spent years trying to optimize our lives. We downloaded every app, followed every 5 AM routine, and tried every "hustle" hack. 
            All it led to was a higher-functioning version of burnout.
          </p>
          <p className="mt-8">
            Linen Logic was born from a simple realization: <strong>Productivity is the byproduct of clarity, not the goal.</strong> 
            If you don't know who you are and what you care about, "doing more" just gets you lost faster. 
          </p>
        </section>

        <section className="bg-[#FAF9F6] p-12 rounded-[50px] border border-gray-100">
          <h2 className="text-3xl serif text-gray-900 mb-8">What we refuse to be.</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h4 className="font-bold text-xs uppercase tracking-widest mb-2">No Gamification</h4>
              <p className="text-sm">We don't use streaks, badges, or red dots to manipulate your brain into using our app. We want you to use it and then put your phone away.</p>
            </div>
            <div>
              <h4 className="font-bold text-xs uppercase tracking-widest mb-2">No "Hustle" Talk</h4>
              <p className="text-sm">We don't believe in "grinding" or "crushing it". We believe in rhythmic focus, sustainable effort, and intentional rest.</p>
            </div>
            <div>
              <h4 className="font-bold text-xs uppercase tracking-widest mb-2">No Data Exploitation</h4>
              <p className="text-sm">Your reflections are your own. We build tools that protect your private thoughts with the same rigor we use to organize them.</p>
            </div>
            <div>
              <h4 className="font-bold text-xs uppercase tracking-widest mb-2">No Clutter</h4>
              <p className="text-sm">If a feature doesn't contribute to your clarity, we don't build it. Simple as that.</p>
            </div>
          </div>
        </section>

        <section className="text-center py-20 border-t border-gray-100 mt-20">
          <div className="mb-12 flex justify-center">
             <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-white text-xl shadow-lg">DK</div>
          </div>
          <h2 className="text-3xl serif mb-10 italic">A Note from Dhiraj.</h2>
          <div className="relative">
            <div className="absolute -top-10 -left-10 text-9xl text-gray-50 opacity-50 serif italic pointer-events-none select-none">"</div>
            <p className="literary italic text-2xl md:text-3xl text-gray-700 max-w-3xl mx-auto leading-relaxed relative z-10 font-light">
              Linen Logic isn’t just paper and wax—it’s a rebellion against the scroll. We spent too long living in the cloud while our real lives stayed on the ground, disconnected. 
              This system is my personal map back to the present. A way to build without burning out, and to dream without drowning in data. 
              We don't need faster tools; we need quieter ones. It’s time we reclaim our attention. It’s time we breathe again.
            </p>
          </div>
          <p className="mt-16 font-bold text-[10px] uppercase tracking-[0.5em] text-gray-300">— Dhiraj Kumar, Founder of Linen Logic</p>
        </section>
      </div>
    </div>
  );
};

export default About;
