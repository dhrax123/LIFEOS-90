
import React from 'react';

const WhatIs: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <h1 className="text-5xl serif mb-8">What is Life OS 90?</h1>
      <p className="text-xl text-gray-600 mb-12 leading-relaxed">
        Life OS 90 is a framework for intentional living. It combines the tactile focus of an analog planner with the intelligent patterns of a digital companion.
      </p>

      <div className="space-y-16">
        <section>
          <h2 className="text-2xl font-medium mb-4">The 90-Day Philosophy</h2>
          <p className="text-gray-500 leading-relaxed">
            One year is too long to plan. One week is too short to change. 
            90 days is the sweet spot for neuroplasticity and meaningful habit shifts. 
            It's exactly one season—a natural cycle of birth, growth, and reflection.
          </p>
        </section>

        <section className="grid md:grid-cols-2 gap-12">
          <div className="p-8 bg-white border border-gray-100 rounded-2xl">
            <h3 className="font-medium mb-3">Why traditional apps fail</h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              They focus on quantity. Gamification tricks your brain into doing "stuff" rather than meaningful work. 
              The digital noise often adds to the overwhelm it promises to solve.
            </p>
          </div>
          <div className="p-8 bg-white border border-gray-100 rounded-2xl">
            <h3 className="font-medium mb-3">Why standard planners fail</h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              They are rigid. They don't adapt to your low-energy days. 
              They become a source of guilt when you miss a week. 
              Life OS 90 is designed to be picked up exactly where you left off.
            </p>
          </div>
        </section>

        <section className="py-12 border-t border-gray-100">
          <h2 className="text-2xl font-medium mb-6">A Hybrid Approach</h2>
          <div className="space-y-6">
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center font-medium">01</div>
              <div>
                <h4 className="font-medium mb-1">Analog for Focus</h4>
                <p className="text-sm text-gray-500">Your morning begins with paper. No screens. No notifications. Just your core 3 intentions.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center font-medium">02</div>
              <div>
                <h4 className="font-medium mb-1">Digital for Insights</h4>
                <p className="text-sm text-gray-500">A 30-second evening check-in on the app captures your mood and energy patterns that you'd otherwise miss.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default WhatIs;
