
import React from 'react';

const FeatureCard = ({ title, desc, icon }: { title: string, desc: string, icon: string }) => (
  <div className="p-8 bg-white border border-gray-100 rounded-3xl card-shadow hover:-translate-y-1 transition-transform">
    <div className="text-3xl mb-4">{icon}</div>
    <h3 className="font-medium text-lg mb-2">{title}</h3>
    <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
  </div>
);

const Features: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20 animate-in fade-in duration-700">
      <div className="text-center mb-20">
        <h1 className="text-5xl serif mb-6">Designed for depth.</h1>
        <p className="text-gray-500 max-w-xl mx-auto">Every feature is built to reduce cognitive load, not increase it.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <FeatureCard 
          icon="📓"
          title="90-Day Physical Planner" 
          desc="Tactile, lay-flat, 120gsm paper designed for deep focus. No templates that feel like work."
        />
        <FeatureCard 
          icon="👤"
          title="Identity & Direction" 
          desc="Not 'Goals'. We help you define who you are becoming, making decisions easier."
        />
        <FeatureCard 
          icon="⚖️"
          title="Weekly Reality Check" 
          desc="A 10-minute Sunday ritual to look at your energy, not just your to-do list."
        />
        <FeatureCard 
          icon="🧘"
          title="Minimal Daily Focus" 
          desc="Focus on the 'Core 3'. Everything else is secondary. Eliminate the guilt of unfinished lists."
        />
        <FeatureCard 
          icon="⚡"
          title="Mood & Energy Tracking" 
          desc="Understand your rhythms. The app learns when you are at your best and suggests tasks accordingly."
        />
        <FeatureCard 
          icon="🤖"
          title="Personalization Engine" 
          desc="Our AI (powered by Gemini) analyzes your reflections to give you calm, grounding insights."
        />
        <FeatureCard 
          icon="📦"
          title="Reflection Archive" 
          desc="Every 90 days, your digital companion creates a 'Season Summary'—your life in chapters."
        />
        <FeatureCard 
          icon="🔐"
          title="Privacy-First" 
          desc="End-to-end encryption. Your thoughts are yours. We don't sell data. Ever."
        />
        <FeatureCard 
          icon="🤝"
          title="Gentle Accountability" 
          desc="No streaks. No loud notifications. Just a gentle nudge when you've been away too long."
        />
      </div>

      <div className="mt-20 p-12 bg-black text-white rounded-3xl flex flex-col md:flex-row items-center justify-between gap-8">
        <div>
          <h2 className="text-3xl serif mb-4">Want to see it in action?</h2>
          <p className="text-gray-400">Join a 15-minute community demo session.</p>
        </div>
        <button className="px-8 py-4 bg-white text-black rounded-full font-medium hover:scale-105 transition-transform">
          Register for Demo
        </button>
      </div>
    </div>
  );
};

export default Features;
