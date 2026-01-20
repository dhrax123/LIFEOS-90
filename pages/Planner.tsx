
import React from 'react';

const Planner: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-700">
      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-20 items-center">
        <div>
          <h1 className="text-5xl md:text-6xl serif mb-6">The Analog <br />Foundation</h1>
          <p className="text-lg text-gray-500 mb-8 leading-relaxed">
            A premium, 90-day physical planner designed to be your morning anchor. 
            No dates, no pressure, just the space you need to breathe and plan.
          </p>
          <div className="space-y-4 mb-10">
            <div className="flex items-center gap-3 text-sm text-gray-600">
              <div className="w-1.5 h-1.5 rounded-full bg-black" />
              90 Days of Structured Clarity
            </div>
            <div className="flex items-center gap-3 text-sm text-gray-600">
              <div className="w-1.5 h-1.5 rounded-full bg-black" />
              120 GSM Cream Italian Paper
            </div>
            <div className="flex items-center gap-3 text-sm text-gray-600">
              <div className="w-1.5 h-1.5 rounded-full bg-black" />
              Minimal, lay-flat design
            </div>
          </div>
          <div className="flex items-center space-x-6 mb-10 p-6 bg-white rounded-3xl border border-gray-100 card-shadow inline-flex">
            <div className="flex flex-col">
              <span className="text-3xl font-medium text-black">$49.00</span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">One-time payment</span>
            </div>
            <div className="h-8 w-px bg-gray-100" />
            <div className="text-xs text-gray-400">
              Includes free access to the <br />Digital Companion for 1 year.
            </div>
          </div>
          <button className="w-full md:w-auto px-12 py-5 bg-black text-white rounded-full font-medium text-lg hover:scale-[1.02] active:scale-95 hover:bg-zinc-800 transition-all duration-300 shadow-lg shadow-black/20">
            Buy Season 1 Planner
          </button>
        </div>
        <div className="relative">
           <img 
            src="https://picsum.photos/seed/planner-aesthetic/1200/1200" 
            alt="Physical Planner mockup" 
            className="rounded-[60px] card-shadow grayscale contrast-110"
           />
           <div className="absolute top-10 -right-10 bg-white p-6 rounded-3xl shadow-xl hidden lg:block border border-gray-50">
              <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">Morning Ritual</p>
              <p className="text-sm serif text-gray-800">"3 minutes. 1 focus. <br />Quiet mind."</p>
           </div>
        </div>
      </section>

      {/* Who it's for / not for */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          <div className="p-12 bg-[#FAF9F6] rounded-[40px]">
            <h3 className="text-2xl serif mb-8">This is for you if...</h3>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <span className="text-green-500 font-bold">✓</span>
                <p className="text-sm text-gray-600">You feel overwhelmed by digital notifications and need a tactile reset.</p>
              </li>
              <li className="flex gap-4">
                <span className="text-green-500 font-bold">✓</span>
                <p className="text-sm text-gray-600">You value quality and want a planner that feels like a premium object.</p>
              </li>
              <li className="flex gap-4">
                <span className="text-green-500 font-bold">✓</span>
                <p className="text-sm text-gray-600">You want to track your energy and mood alongside your tasks.</p>
              </li>
            </ul>
          </div>
          <div className="p-12 border border-gray-100 rounded-[40px]">
            <h3 className="text-2xl serif mb-8 text-gray-400">This is NOT for you if...</h3>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <span className="text-gray-300 font-bold">—</span>
                <p className="text-sm text-gray-400">You want to time-block every 15-minute increment of your day.</p>
              </li>
              <li className="flex gap-4">
                <span className="text-gray-300 font-bold">—</span>
                <p className="text-sm text-gray-400">You prefer stickers and "bujo" art over clean, functional space.</p>
              </li>
              <li className="flex gap-4">
                <span className="text-gray-300 font-bold">—</span>
                <p className="text-sm text-gray-400">You are looking for a 'hustle' tracker to maximize output at any cost.</p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-6 border-t border-gray-100">
        <h2 className="text-3xl serif text-center mb-16">The Daily Layout</h2>
        <div className="grid md:grid-cols-4 gap-8">
           {[
             { t: "Intentions", d: "Not a to-do list. What is the one thing that will make today feel successful?" },
             { t: "Energy Check", d: "A simple visual gauge to help you plan your tasks based on how you actually feel." },
             { t: "Focus Space", d: "A clean, unguided grid for notes, thoughts, and messy sketches." },
             { t: "End of Day", d: "A 30-second grounding prompt to close the loop before sleep." }
           ].map((item, i) => (
             <div key={i} className="text-center">
               <h4 className="font-medium mb-2">{item.t}</h4>
               <p className="text-xs text-gray-500 leading-relaxed">{item.d}</p>
             </div>
           ))}
        </div>
      </section>
    </div>
  );
};

export default Planner;
