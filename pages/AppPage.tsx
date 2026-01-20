
import React from 'react';
import { Link } from 'react-router-dom';

const AppPage: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-700">
      <section className="max-w-7xl mx-auto px-6 py-20 flex flex-col items-center text-center">
        <div className="inline-block px-4 py-1.5 bg-black text-white rounded-full text-[10px] font-bold uppercase tracking-widest mb-8">
          Non-Addictive Design
        </div>
        <h1 className="text-5xl md:text-7xl serif mb-6">The Quiet <br />Companion</h1>
        <p className="text-lg text-gray-500 max-w-2xl mb-12">
          An app designed to be closed. It holds your reflections, spots your patterns, and gets out of your way. 
          No doomscrolling. No red dots. Just clarity.
        </p>
        
        {/* Phone Mockup Mockup */}
        <div className="relative w-full max-w-sm mb-24">
           <div className="bg-[#222] aspect-[9/18.5] rounded-[3.5rem] p-3 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] ring-1 ring-white/10">
             <div className="bg-[#FAF9F6] h-full w-full rounded-[2.8rem] p-8 flex flex-col justify-between overflow-hidden relative">
                <div className="space-y-8 mt-4">
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] font-bold text-gray-300 uppercase tracking-widest">Season 1 • Day 14</span>
                    <div className="w-8 h-8 rounded-full bg-gray-100" />
                  </div>
                  <div>
                    <h2 className="text-3xl serif text-gray-900 mb-2">Breathe in.</h2>
                    <p className="text-sm text-gray-400">Record your evening reflection.</p>
                  </div>
                  <div className="space-y-4">
                    <div className="p-5 bg-white rounded-[2rem] border border-gray-100 shadow-sm">
                      <p className="text-[10px] uppercase font-bold text-gray-300 mb-2">Today's Pattern</p>
                      <p className="text-sm font-medium text-gray-800 italic">"You feel 30% more focused on days you start offline."</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4 mb-4">
                  <div className="bg-black py-4 rounded-2xl text-white text-center text-sm font-medium">
                    New Check-in
                  </div>
                  <div className="text-center">
                    <span className="text-[10px] text-gray-400 uppercase tracking-widest">Last synced 2m ago</span>
                  </div>
                </div>
             </div>
           </div>
           
           {/* Floaties */}
           <div className="absolute -left-32 top-1/4 hidden lg:block p-6 bg-white border border-gray-100 rounded-3xl card-shadow w-56 text-left animate-in fade-in slide-in-from-right-4">
              <p className="text-[10px] font-bold text-gray-300 mb-2 uppercase tracking-tighter">Emotional Pulse</p>
              <div className="h-12 flex items-end gap-1">
                {[4,7,5,8,6,9,7].map((h, i) => (
                  <div key={i} style={{height: `${h*10}%`}} className="flex-grow bg-gray-100 rounded-t-sm" />
                ))}
              </div>
           </div>
        </div>
      </section>

      {/* Features Table */}
      <section className="bg-white py-24 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-16">
            <div className="text-center">
              <div className="text-3xl mb-4">🧠</div>
              <h3 className="font-medium mb-2">Onboarding Quiz</h3>
              <p className="text-sm text-gray-500">We don't just dump you into a tool. We start by understanding your current relationship with focus and noise.</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-4">✨</div>
              <h3 className="font-medium mb-2">Daily Check-ins</h3>
              <p className="text-sm text-gray-500">Log mood and energy in 30 seconds. No typing required, just feel and tap.</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-4">🔍</div>
              <h3 className="font-medium mb-2">Insights Dashboard</h3>
              <p className="text-sm text-gray-500">AI-driven patterns that show you the "why" behind your "how". Powered by Gemini for calm clarity.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Promise */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl serif mb-8">Our Privacy Promise.</h2>
          <p className="text-lg text-gray-400 mb-12 leading-relaxed">
            Your inner thoughts are not for sale. We use end-to-end encryption for all reflection data. 
            We do not sell your habits, moods, or patterns to advertisers. Ever. 
            We are a privacy-first company, funded by users, not data brokers.
          </p>
          <div className="flex justify-center gap-12">
            <div>
              <p className="text-2xl font-medium mb-1">E2E</p>
              <p className="text-[10px] text-gray-500 uppercase">Encrypted</p>
            </div>
            <div>
              <p className="text-2xl font-medium mb-1">0</p>
              <p className="text-[10px] text-gray-500 uppercase">Trackers</p>
            </div>
            <div>
              <p className="text-2xl font-medium mb-1">100%</p>
              <p className="text-[10px] text-gray-500 uppercase">User Owned</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-2xl serif mb-6">Experience the demo.</h2>
        <Link to="/account" className="inline-block px-10 py-5 bg-[#FAF9F6] border border-gray-200 rounded-full font-medium">
          Start Interactive Onboarding
        </Link>
      </section>
    </div>
  );
};

export default AppPage;
