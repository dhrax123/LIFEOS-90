
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
      {isOpen && <p className="mt-4 text-sm text-gray-500 leading-relaxed animate-in slide-in-from-top-2 max-w-2xl font-light">{a}</p>}
    </div>
  );
};

const CheckoutDrawer = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
  const navigate = useNavigate();
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-[100] overflow-hidden">
      <div className="absolute inset-0 bg-black/10 backdrop-blur-[2px]" onClick={onClose} />
      <div className="absolute right-0 top-0 h-full w-full max-w-sm bg-white shadow-[-20px_0_60px_-15px_rgba(0,0,0,0.1)] animate-in slide-in-from-right duration-500 p-8 flex flex-col">
        <div className="flex justify-between items-center mb-12">
          <div className="flex flex-col">
            <h2 className="text-2xl serif italic">Your Kit</h2>
            <span className="text-[10px] font-bold text-gray-300 uppercase tracking-widest">Secured for Batch 04</span>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-gray-50 rounded-full transition-colors group">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="group-hover:rotate-90 transition-transform"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>
        </div>

        <div className="flex-grow">
          <div className="flex gap-5 items-start p-5 bg-[#FAF9F6] rounded-[2rem] border border-gray-100 mb-8">
            <div className="w-20 h-24 bg-gray-200 rounded-2xl overflow-hidden flex-shrink-0 shadow-sm">
               <img src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=400&auto=format&fit=crop" className="w-full h-full object-cover" alt="Season 1 Kit" />
            </div>
            <div className="py-1">
              <h4 className="font-bold text-[10px] uppercase tracking-widest mb-1">Life OS 90: Season 1</h4>
              <p className="text-xs text-gray-400 mb-3 leading-tight">180-page Planner + Ritual Kit</p>
              <p className="text-lg font-medium text-black">$19.00</p>
            </div>
          </div>

          <div className="space-y-4 px-2">
            <div className="flex justify-between text-xs">
              <span className="text-gray-400">Seasonal Bundle</span>
              <span>$19.00</span>
            </div>
            <div className="flex justify-between text-xs">
              <span className="text-gray-400">Tier-1 India Shipping</span>
              <span className="text-green-600 font-medium">COMPLIMENTARY</span>
            </div>
            <div className="pt-6 border-t border-gray-100 flex justify-between font-bold text-lg">
              <span>Total</span>
              <span>$19.00</span>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <button 
            onClick={() => navigate('/checkout')}
            className="w-full py-5 bg-black text-white rounded-full font-bold text-lg hover:bg-zinc-800 transition-all shadow-xl shadow-black/10 active:scale-[0.98]"
          >
            Checkout in India
          </button>
          <div className="flex items-center justify-center gap-2 opacity-30">
             <div className="w-1 h-1 rounded-full bg-black" />
             <p className="text-[8px] text-center text-black uppercase tracking-[0.3em] font-bold">Encrypted Checkout</p>
             <div className="w-1 h-1 rounded-full bg-black" />
          </div>
        </div>
      </div>
    </div>
  );
};

const Planner: React.FC = () => {
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  return (
    <div className="animate-in fade-in duration-1000">
      <CheckoutDrawer isOpen={isCheckoutOpen} onClose={() => setIsCheckoutOpen(false)} />

      {/* Hero: The Aesthetic Object */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-20 items-center">
        <div className="animate-in slide-in-from-left-4 duration-1000">
          <div className="inline-block px-4 py-1 bg-gray-100 rounded-full text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-6 italic">Batch 04 • India Exclusive</div>
          <h1 className="text-5xl md:text-7xl serif mb-6 italic leading-tight">Nothing Glossy. <br />Nothing Loud.</h1>
          <p className="text-lg text-gray-500 mb-8 leading-relaxed font-light">
            Life OS 90 is a physical weight in your hand. Designed to slow you down, it replaces the digital buzz with the tactile reality of 180 pages, scented candles, and focused reflection.
          </p>
          
          <div className="flex items-center space-x-6 mb-10 p-6 bg-white rounded-[32px] border border-gray-100 card-shadow inline-flex">
            <div className="flex flex-col">
              <span className="text-3xl font-medium text-black">$19.00</span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Seasonal Kit</span>
            </div>
            <div className="h-8 w-px bg-gray-100" />
            <div className="text-xs text-gray-400 font-medium">
              Free Express Shipping <br />to Tier-1 Indian Cities
            </div>
          </div>
          
          <button 
            onClick={() => setIsCheckoutOpen(true)}
            className="w-full md:w-auto px-12 py-5 bg-black text-white rounded-full font-bold text-lg hover:scale-[1.02] active:scale-95 hover:bg-zinc-800 transition-all duration-300 shadow-xl shadow-black/20"
          >
            Secure Season 1 Kit
          </button>
        </div>
        
        <div className="relative">
           <div className="bg-[#F5F3EF] rounded-[60px] p-6 card-shadow overflow-hidden">
             <img 
              src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=1000&auto=format&fit=crop" 
              alt="Minimalist vertical white book" 
              className="rounded-[50px] shadow-sm"
             />
           </div>
           <div className="absolute -bottom-6 -right-6 bg-white p-8 rounded-[40px] shadow-2xl border border-gray-50 max-w-xs hidden lg:block">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-300 mb-4 italic">The Sensory Audit</p>
              <ul className="space-y-4 text-xs text-gray-500 font-medium">
                <li className="flex gap-3">
                  <span className="text-black italic">Sound:</span> The satisfying 'thump' of 180 heavy pages.
                </li>
                <li className="flex gap-3">
                  <span className="text-black italic">Touch:</span> Grainy linen cover and silk-ribbon friction.
                </li>
                <li className="flex gap-3">
                  <span className="text-black italic">Smell:</span> Faint notes of cedarwood and fresh paper.
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
            "Designed to slow you down." Opening your kit is your first act of intentionality. It arrives at your door not as a package, but as a gift.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="text-center group">
              <div className="w-24 h-24 bg-[#FAF9F6] rounded-full mx-auto mb-8 flex items-center justify-center text-4xl group-hover:scale-110 transition-transform shadow-sm">🧺</div>
              <h4 className="font-bold text-[10px] uppercase tracking-[0.2em] mb-3">Woven Basket</h4>
              <p className="text-xs text-gray-400 leading-relaxed px-6 font-light">Your OS arrives in a hand-woven minimalist basket, yours to keep as a permanent desk anchor for your seasonal tools.</p>
            </div>
            <div className="text-center group">
              <div className="w-24 h-24 bg-[#FAF9F6] rounded-full mx-auto mb-8 flex items-center justify-center text-4xl group-hover:scale-110 transition-transform shadow-sm">📓</div>
              <h4 className="font-bold text-[10px] uppercase tracking-[0.2em] mb-3">The 180-Page Anchor</h4>
              <p className="text-xs text-gray-400 leading-relaxed px-6 font-light">Left side: Your daily 90-day plan. Right side: A blank sanctuary to capture what was learned and implemented.</p>
            </div>
            <div className="text-center group">
              <div className="w-24 h-24 bg-[#FAF9F6] rounded-full mx-auto mb-8 flex items-center justify-center text-4xl group-hover:scale-110 transition-transform shadow-sm">🕯️</div>
              <h4 className="font-bold text-[10px] uppercase tracking-[0.2em] mb-3">Scented Ritual</h4>
              <p className="text-xs text-gray-400 leading-relaxed px-6 font-light">Includes custom scented candles to signal to your brain that it's time to quiet the external noise and begin reflection.</p>
            </div>
            <div className="text-center group">
              <div className="w-24 h-24 bg-[#FAF9F6] rounded-full mx-auto mb-8 flex items-center justify-center text-4xl group-hover:scale-110 transition-transform shadow-sm">🎀</div>
              <h4 className="font-bold text-[10px] uppercase tracking-[0.2em] mb-3">The Silk Ribbon</h4>
              <p className="text-xs text-gray-400 leading-relaxed px-6 font-light">A nice, cute ribbon tied with intention. Untying it is the start of your 90-day commitment to clarity.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Clarity & Workspace Section (No people) */}
      <section className="py-32 bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-24 items-center">
          <div className="rounded-[40px] overflow-hidden card-shadow group transition-all duration-700 relative">
            <img 
              src="https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?q=80&w=1000&auto=format&fit=crop" 
              alt="Serene minimalist book on desk" 
              className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-700 grayscale-[0.1]"
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
               <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400">Seasonal Member #082</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-start">
        <div className="bg-black text-white p-16 rounded-[60px] shadow-2xl">
          <h2 className="text-3xl md:text-4xl serif mb-10 italic">This is NOT for you if...</h2>
          <ul className="space-y-10">
            <li className="flex gap-6">
              <span className="text-zinc-600 text-2xl font-bold">—</span>
              <div>
                <h4 className="font-bold text-[10px] uppercase tracking-[0.2em] text-zinc-500 mb-2">Hustle Culture Loyalists</h4>
                <p className="text-zinc-400 text-sm leading-relaxed font-light">If your goal is to "crush" your day and track 50 tasks, the intentional friction of paper will frustrate you.</p>
              </div>
            </li>
            <li className="flex gap-6">
              <span className="text-zinc-600 text-2xl font-bold">—</span>
              <div>
                <h4 className="font-bold text-[10px] uppercase tracking-[0.2em] text-zinc-500 mb-2">Life Hackers</h4>
                <p className="text-zinc-400 text-sm leading-relaxed font-light">We don't do "hacks". We do seasons. If you want results in 7 days, look elsewhere. We build for 90-day cycles.</p>
              </div>
            </li>
          </ul>
        </div>
        
        <div className="py-10">
          <h2 className="text-3xl serif mb-12 italic">India-Only Support.</h2>
          <div className="space-y-2">
            <FAQItem 
              q="Shipping timeline (Bangalore/Mumbai/Delhi)?" 
              a="We offer guaranteed 3-5 day express delivery to all Tier-1 Indian cities. Your basket is hand-packed in Bangalore and shipped with carbon-neutral logistics." 
            />
            <FAQItem 
              q="Paper weight and texture?" 
              a="120 GSM Italian cream paper. It has a slight 'tooth' to it, making it satisfying for fountain pens and pencils alike. Zero bleed, maximum tactile feedback." 
            />
            <FAQItem 
              q="Is the digital companion mandatory?" 
              a="Optional. The planner works perfectly on its own. The app is a quiet space to see long-term patterns once a week." 
            />
            <FAQItem 
              q="What happens after 90 days?" 
              a="You archive your book—a tactile record of your season. You can then order a Season 02 kit for the next chapter." 
            />
            <FAQItem 
              q="Refunds or replacements?" 
              a="If your ribbon is frayed or the candle is cracked, we replace it instantly. If the OS doesn't feel like the 'anchor' you needed, we offer a 14-day calm refund." 
            />
          </div>
        </div>
      </section>

      {/* Final Conversion */}
      <section className="py-40 text-center bg-[#FAF9F6] border-t border-gray-100">
        <h2 className="text-5xl md:text-7xl serif italic mb-12">Commit to the Season.</h2>
        <button 
          onClick={() => setIsCheckoutOpen(true)}
          className="px-16 py-7 bg-black text-white rounded-full font-bold text-xl hover:scale-105 transition-all shadow-2xl active:scale-95"
        >
          Order Season 1 Kit — $19
        </button>
        <p className="mt-8 text-[10px] text-gray-400 uppercase tracking-[0.4em] font-bold">BATCH 04 IS 85% SOLD OUT IN INDIA</p>
      </section>
    </div>
  );
};

export default Planner;
