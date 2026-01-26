
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const FAQItem = ({ q, a }: { q: string, a: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-gray-100 py-6">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left hover:text-gray-400 transition-colors"
      >
        <span className="font-medium text-gray-800 text-base">{q}</span>
        <span className="text-xl font-light text-gray-300">{isOpen ? '−' : '+'}</span>
      </button>
      {isOpen && <p className="mt-4 text-sm text-gray-500 leading-relaxed animate-in slide-in-from-top-2 max-w-2xl font-light italic">{a}</p>}
    </div>
  );
};

const Planner: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-1000">
      {/* Hero: The Aesthetic Object */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-20 items-center">
        <div className="animate-in slide-in-from-left-4 duration-1000">
          <div className="inline-block px-4 py-1 bg-gray-100 rounded-full text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-6 italic">Season One • Foundational Kit</div>
          <h1 className="text-5xl md:text-7xl serif mb-6 italic leading-tight">Nothing Glossy. <br />Nothing Loud.</h1>
          <p className="text-lg text-gray-500 mb-8 leading-relaxed font-light italic">
            Linen Logic is a physical weight in your hand. Designed to slow you down, it replaces the digital buzz with the tactile reality of 180 pages, custom scents, and focused reflection.
          </p>
          
          <div className="flex items-center space-x-6 mb-10 p-6 bg-white rounded-[32px] border border-gray-100 card-shadow inline-flex">
            <div className="flex flex-col text-center">
              <span className="text-3xl font-medium text-black">$19.00</span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">USD</span>
            </div>
            <div className="h-8 w-px bg-gray-100" />
            <div className="text-xs text-gray-400 font-medium italic">
              Worldwide Delivery <br />Calculated at checkout.
            </div>
          </div>
          
          <Link 
            to="/checkout"
            className="w-full md:w-auto px-12 py-5 bg-black text-white rounded-full font-bold text-lg hover:scale-[1.02] active:scale-95 hover:bg-zinc-800 transition-all duration-300 shadow-xl shadow-black/20 inline-block text-center"
          >
             Secure Your Anchor
          </Link>
        </div>
        
        <div className="relative flex justify-end">
           <div className="bg-[#F5F3EF] rounded-[60px] p-2 card-shadow overflow-hidden max-w-lg aspect-[3/4.5] flex items-center justify-center">
             {/* Main image placeholder for the user's kit photo */}
             <img 
              src="https://images.unsplash.com/photo-1769286145156-70a40fff80ec?q=80&w=1200&auto=format&fit=crop" 
              alt="Linen Logic Seasonal Kit (Woven Basket & Cream Ribbon)" 
              className="rounded-[58px] shadow-sm w-full h-full object-cover grayscale-[0.05] hover:grayscale-0 transition-all duration-1000"
             />
           </div>
           <div className="absolute -bottom-6 -right-6 bg-white p-8 rounded-[40px] shadow-2xl border border-gray-50 max-w-xs hidden lg:block">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-300 mb-4 italic">The Sensory Audit</p>
              <ul className="space-y-4 text-xs text-gray-500 font-medium">
                <li className="flex gap-3 italic">
                  <span className="text-black font-bold">Sound:</span> The satisfying 'thump' of 180 heavy pages.
                </li>
                <li className="flex gap-3 italic">
                  <span className="text-black font-bold">Touch:</span> Grainy linen cover and silk-ribbon friction.
                </li>
                <li className="flex gap-3 italic">
                  <span className="text-black font-bold">Smell:</span> Faint notes of cedarwood and fresh paper.
                </li>
              </ul>
           </div>
        </div>
      </section>

      {/* The Unboxing Ritual */}
      <section className="bg-white py-32 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl serif mb-4 italic">Unboxing Pace.</h2>
          <p className="text-gray-400 mb-24 max-w-xl mx-auto font-light leading-relaxed italic">
            "Designed to slow you down." Opening your kit is your first act of intentionality. It arrives at your door not as a package, but as a guest.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="text-center group">
              <div className="w-24 h-24 bg-[#FAF9F6] rounded-full mx-auto mb-8 flex items-center justify-center text-4xl group-hover:scale-110 transition-transform shadow-sm">🧺</div>
              <h4 className="font-bold text-[10px] uppercase tracking-[0.2em] mb-3">Woven Basket</h4>
              <p className="text-xs text-gray-400 leading-relaxed px-6 font-light italic">A hand-woven minimalist vessel, yours to keep as a permanent desk anchor for your seasonal tools.</p>
            </div>
            <div className="text-center group">
              <div className="w-24 h-24 bg-[#FAF9F6] rounded-full mx-auto mb-8 flex items-center justify-center text-4xl group-hover:scale-110 transition-transform shadow-sm">📓</div>
              <h4 className="font-bold text-[10px] uppercase tracking-[0.2em] mb-3">The 180-Page Anchor</h4>
              <p className="text-xs text-gray-400 leading-relaxed px-6 font-light italic">Left side: Your daily plan. Right side: A blank sanctuary to capture what was learned and implemented.</p>
            </div>
            <div className="text-center group">
              <div className="w-24 h-24 bg-[#FAF9F6] rounded-full mx-auto mb-8 flex items-center justify-center text-4xl group-hover:scale-110 transition-transform shadow-sm">🕯️</div>
              <h4 className="font-bold text-[10px] uppercase tracking-[0.2em] mb-3">Scented Ritual</h4>
              <p className="text-xs text-gray-400 leading-relaxed px-6 font-light italic">Includes custom scented elements to signal to your brain that it's time to quiet the external noise.</p>
            </div>
            <div className="text-center group">
              <div className="w-24 h-24 bg-[#FAF9F6] rounded-full mx-auto mb-8 flex items-center justify-center text-4xl group-hover:scale-110 transition-transform shadow-sm">🎀</div>
              <h4 className="font-bold text-[10px] uppercase tracking-[0.2em] mb-3">The Silk Ribbon</h4>
              <p className="text-xs text-gray-400 leading-relaxed px-6 font-light italic">A ribbon tied with intention. Untying it is the start of your commitment to clarity.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Clarity Section */}
      <section className="py-32 bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-24 items-center">
          <div className="rounded-[40px] overflow-hidden card-shadow group transition-all duration-700 relative h-[500px]">
            <img 
              src="https://images.unsplash.com/photo-1769286145156-70a40fff80ec?q=80&w=1200&auto=format&fit=crop" 
              alt="Serene workspace with Linen Logic Kit" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 grayscale-[0.2]"
            />
            <div className="absolute inset-0 bg-black/5" />
          </div>
          <div>
            <h2 className="text-4xl md:text-5xl serif italic mb-8">Clarity over chaos.</h2>
            <p className="text-gray-500 font-light leading-relaxed mb-8 text-lg italic">
              "The transition from digital to paper felt like coming home. Every morning, the 180-page anchor is the only notification I listen to."
            </p>
            <div className="flex items-center gap-4">
               <div className="w-10 h-px bg-gray-200" />
               <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400">Foundational Member</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-start">
        <div className="bg-black text-white p-16 rounded-[60px] shadow-2xl">
          <h2 className="text-3xl serif mb-10 italic">Common Queries.</h2>
          <div className="space-y-4">
            <div className="p-6 bg-zinc-900 rounded-3xl border border-white/5">
              <p className="text-xs font-bold uppercase tracking-[0.2em] mb-2 text-zinc-500">Delivery</p>
              <p className="text-sm font-light leading-relaxed italic">We deliver worldwide. Shipping rates and estimated arrival times are calculated at checkout based on your location.</p>
            </div>
            <div className="p-6 bg-zinc-900 rounded-3xl border border-white/5">
              <p className="text-xs font-bold uppercase tracking-[0.2em] mb-2 text-zinc-500">The Method</p>
              <p className="text-sm font-light leading-relaxed italic">It's a 90-day cycle. We believe three months is the perfect duration to build a baseline of clarity without feeling like an endless chore.</p>
            </div>
          </div>
        </div>
        <div className="space-y-2">
          <FAQItem 
            q="Is there a digital version?" 
            a="We provide a companion web app for synthesis, but the core system is physical. The goal is to move you away from screens, allowing your thoughts to take up real space."
          />
          <FAQItem 
            q="What if I miss a day?" 
            a="There are no penalties. Linen Logic is a system for clarity, not a productivity trap. The pages are undated; pick up exactly where you left off."
          />
          <FAQItem 
            q="Why the craft-focused pricing?" 
            a="We source sustainable linen and premium paper while partnering with local artisans. Every dollar ensures a slower, more intentional process for those creating your kit."
          />
        </div>
      </section>
      
      {/* Final Drive */}
      <section className="py-40 text-center bg-[#FAF9F6] border-t border-gray-100 px-6">
        <h2 className="text-5xl md:text-7xl serif italic mb-12">Commit to the Season.</h2>
        <Link 
          to="/checkout"
          className="px-16 py-7 bg-black text-white rounded-full font-bold text-xl hover:scale-105 transition-all shadow-2xl active:scale-95 inline-block"
        >
          Secure Your Kit — $19
        </Link>
        <p className="mt-8 text-[10px] text-gray-400 uppercase tracking-[0.4em] font-bold italic">Crafted in limited seasonal cycles.</p>
      </section>
    </div>
  );
};

export default Planner;
