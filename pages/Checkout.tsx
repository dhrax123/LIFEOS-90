
import React, { useState } from 'react';
import { Link, useNavigate, useBlocker } from 'react-router-dom';

const PaymentOption = ({ id, label, selected, onSelect }: { id: string, label: string, selected: boolean, onSelect: (id: string) => void }) => (
  <button
    type="button"
    onClick={() => onSelect(id)}
    className={`w-full p-6 rounded-[2rem] border-2 flex items-center gap-4 transition-all duration-500 ${
      selected 
        ? 'border-black bg-gradient-to-br from-zinc-800 to-black text-white shadow-2xl shadow-black/20 scale-[1.02]' 
        : 'border-gray-100 bg-white hover:border-gray-200 text-gray-400'
    }`}
  >
    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${selected ? 'border-white/40' : 'border-gray-200'}`}>
      {selected && <div className="w-2.5 h-2.5 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]" />}
    </div>
    <span className={`text-sm tracking-tight transition-all ${selected ? 'font-bold' : 'font-medium'}`}>{label}</span>
  </button>
);

const ExitIntentModal = ({ blocker }: { blocker: any }) => {
  const navigate = useNavigate();

  if (blocker.state !== "blocked") return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-6 animate-in fade-in duration-500">
      <div className="absolute inset-0 bg-[#FAF9F6]/80 backdrop-blur-md" />
      <div className="relative w-full max-w-sm bg-white p-12 rounded-[50px] shadow-2xl border border-gray-100 text-center animate-in zoom-in-95 duration-500">
        <div className="w-16 h-16 bg-[#FAF9F6] rounded-full mx-auto mb-8 flex items-center justify-center text-2xl">🌱</div>
        <h2 className="text-3xl serif italic mb-6">Pause for a moment.</h2>
        <p className="text-gray-500 font-light leading-relaxed mb-10 text-sm">
          Do you want to get a free audit to understand what this does before you commit?
        </p>
        <div className="space-y-4">
          <button 
            onClick={() => {
              // ALWAYS lead to the audit experience
              blocker.reset();
              navigate('/account?autoStart=true');
            }}
            className="w-full py-5 bg-black text-white rounded-full font-bold text-base hover:scale-[1.02] transition-transform active:scale-95"
          >
            Yes, begin my audit
          </button>
          <button 
            onClick={() => {
              // Explicitly move away to Home without friction
              blocker.reset();
              navigate('/');
            }}
            className="w-full py-4 text-gray-300 text-[10px] font-bold uppercase tracking-[0.3em] hover:text-black transition-colors"
          >
            No, take me back
          </button>
        </div>
      </div>
    </div>
  );
};

const Checkout: React.FC = () => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('upi');

  // Navigation Blocker: Intercepts when user tries to leave checkout via Back or links
  const blocker = useBlocker(
    ({ currentLocation, nextLocation }) =>
      !isSuccess && currentLocation.pathname !== nextLocation.pathname
  );

  if (isSuccess) {
    const today = new Date();
    const start = new Date(today);
    start.setDate(today.getDate() + 3);
    const end = new Date(today);
    end.setDate(today.getDate() + 5);
    const options: Intl.DateTimeFormatOptions = { month: 'short', day: 'numeric' };
    const dateRange = `${start.toLocaleDateString('en-US', options)} – ${end.toLocaleDateString('en-US', options)}`;

    return (
      <div className="min-h-screen bg-[#FAF9F6] flex items-center justify-center p-6 animate-in zoom-in-95 duration-700">
        <div className="max-w-md w-full text-center">
          <div className="w-24 h-24 bg-white rounded-full mx-auto mb-10 flex items-center justify-center text-3xl shadow-sm border border-gray-100">🌿</div>
          <h1 className="text-4xl serif italic mb-6">Your season begins.</h1>
          <p className="text-gray-500 font-light leading-relaxed mb-12">
            Order confirmed. You are officially part of Batch 04. Your 180-page anchor and ritual kit will ship within 24 hours.
          </p>
          <div className="p-10 bg-white rounded-[40px] border border-gray-100 text-left mb-12 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-5">
              <svg width="100" height="100" viewBox="0 0 24 24" fill="currentColor"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20V2H6.5A2.5 2.5 0 0 0 4 4.5v15z"/></svg>
            </div>
            <p className="text-[10px] font-bold uppercase tracking-widest text-gray-300 mb-6">Order Logistics</p>
            <div className="space-y-5">
              <div className="flex justify-between text-sm">
                <span className="text-gray-400 italic">Order ID</span>
                <span className="font-mono text-gray-800">#LL-B4-{(Math.random() * 10000).toFixed(0)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-400 italic">Expected Arrival</span>
                <span className="text-gray-900 font-bold">{dateRange}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-400 italic">Current Status</span>
                <span className="text-zinc-500 font-medium">Preparing for Dispatch</span>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-50">
               <a href="#" onClick={(e) => e.preventDefault()} className="text-[10px] font-bold uppercase tracking-[0.2em] text-black underline underline-offset-4 hover:opacity-50 transition-opacity">
                 Track your anchor →
               </a>
            </div>
          </div>
          <Link to="/" className="inline-block px-10 py-5 bg-black text-white rounded-full font-medium hover:scale-105 transition-transform shadow-2xl shadow-black/10">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FAF9F6] animate-in fade-in duration-1000">
      <ExitIntentModal blocker={blocker} />
      
      <div className="max-w-7xl mx-auto px-6 py-20 lg:py-32 grid lg:grid-cols-12 gap-12">
        
        {/* Left Column: Form (Shipping & Identity) */}
        <div className="lg:col-span-7 space-y-16">
          <div>
            <Link to="/planner" className="text-xs font-bold uppercase tracking-widest text-gray-300 hover:text-black transition-colors flex items-center gap-2 mb-12">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
              Back to Planner
            </Link>
            <h1 className="text-4xl md:text-5xl serif italic mb-4 leading-tight">Securing the Foundation.</h1>
            <p className="text-gray-400 font-light max-w-md">Your kit will be dispatched from our Bangalore hub within 24 hours of confirmation.</p>
          </div>

          <form className="space-y-12" onSubmit={(e) => { e.preventDefault(); setIsSuccess(true); }}>
            <section className="space-y-8">
              <h3 className="text-[10px] font-bold uppercase tracking-[0.4em] text-gray-300 border-b border-gray-100 pb-2">01 / Shipping Credentials</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[8px] uppercase tracking-widest font-bold text-gray-400 ml-1">Full Name</label>
                  <input required placeholder="E.g. Ananya Rao" className="w-full bg-white p-5 rounded-2xl border border-gray-100 focus:outline-none focus:border-black/20 text-sm font-light shadow-sm" />
                </div>
                <div className="space-y-2">
                  <label className="text-[8px] uppercase tracking-widest font-bold text-gray-400 ml-1">Phone Number</label>
                  <input required placeholder="+91" className="w-full bg-white p-5 rounded-2xl border border-gray-100 focus:outline-none focus:border-black/20 text-sm font-light shadow-sm" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[8px] uppercase tracking-widest font-bold text-gray-400 ml-1">Domestic Address</label>
                <input required placeholder="Apartment, House, Street" className="w-full bg-white p-5 rounded-2xl border border-gray-100 focus:outline-none focus:border-black/20 text-sm font-light shadow-sm" />
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                <input required placeholder="City" className="w-full bg-white p-5 rounded-2xl border border-gray-100 focus:outline-none focus:border-black/20 text-sm font-light shadow-sm" />
                <input required placeholder="State" className="w-full bg-white p-5 rounded-2xl border border-gray-100 focus:outline-none focus:border-black/20 text-sm font-light shadow-sm" />
                <input required placeholder="PIN Code" className="w-full bg-white p-5 rounded-2xl border border-gray-100 focus:outline-none focus:border-black/20 text-sm font-light shadow-sm" />
              </div>
            </section>

            <section className="space-y-8">
              <h3 className="text-[10px] font-bold uppercase tracking-[0.4em] text-gray-300 border-b border-gray-100 pb-2">02 / Payment Mode</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <PaymentOption id="phonepe" label="PhonePe" selected={paymentMethod === 'phonepe'} onSelect={setPaymentMethod} />
                <PaymentOption id="gpay" label="Google Pay" selected={paymentMethod === 'gpay'} onSelect={setPaymentMethod} />
                <PaymentOption id="upi" label="BHIM UPI" selected={paymentMethod === 'upi'} onSelect={setPaymentMethod} />
                <PaymentOption id="card" label="Credit/Debit Card" selected={paymentMethod === 'card'} onSelect={setPaymentMethod} />
              </div>
            </section>

            <button type="submit" className="w-full py-7 bg-black text-white rounded-full font-bold text-xl hover:scale-[1.01] transition-transform shadow-2xl shadow-black/20 active:scale-[0.98]">
              Finalize Order — $19.00
            </button>
          </form>
        </div>

        {/* Right Column: The Integrated Drawer Summary */}
        <div className="lg:col-span-5 relative">
          <div className="sticky top-32 bg-white rounded-[50px] p-10 border border-gray-100 shadow-[-10px_20px_60px_-15px_rgba(0,0,0,0.03)] flex flex-col h-fit">
            <div className="absolute top-10 right-10 text-[8px] font-bold text-gray-200 uppercase tracking-[0.6em] italic">LL/S1</div>
            
            <h3 className="text-2xl serif italic mb-10">The Kit Summary.</h3>
            
            {/* Secured Item */}
            <div className="flex gap-6 mb-12 pb-10 border-b border-gray-50 items-start">
               <div className="w-24 h-28 bg-[#F5F3EF] rounded-[2rem] overflow-hidden flex-shrink-0 shadow-sm border border-gray-50">
                  <img src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=400&auto=format&fit=crop" className="w-full h-full object-cover grayscale" alt="Season 1 Kit" />
               </div>
               <div className="py-2">
                 <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-gray-300 mb-2">Batch 04 • Secured</p>
                 <h4 className="font-medium text-gray-800 text-lg mb-1 leading-tight">Linen Logic S1 <br/>Foundational Kit</h4>
                 <p className="text-xs text-gray-400 font-light">180-pg Anchor + Ritual Set</p>
               </div>
            </div>

            {/* Price Breakdown */}
            <div className="space-y-5 mb-12 px-2">
              <div className="flex justify-between text-xs font-light">
                <span className="text-gray-400">Tactile Artifacts (Net)</span>
                <span className="text-gray-600">$16.10</span>
              </div>
              <div className="flex justify-between text-xs font-light">
                <span className="text-gray-400">India GST (18%)</span>
                <span className="text-gray-600">$2.90</span>
              </div>
              <div className="flex justify-between text-xs font-light">
                <span className="text-gray-400 italic">Shipping & Carbon Neutrality</span>
                <span className="text-green-600 font-bold uppercase tracking-tight">Included</span>
              </div>
            </div>

            {/* Total Footer */}
            <div className="pt-8 border-t border-black/5 flex justify-between items-end mb-10">
              <div className="space-y-1">
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-300 block">Total Due</span>
                <span className="text-4xl font-medium text-black">$19.00</span>
              </div>
              <div className="text-right">
                <p className="text-[8px] font-bold text-gray-400 uppercase tracking-widest leading-relaxed">
                  Price in USD <br/>(Approx. ₹1,599)
                </p>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="bg-[#FAF9F6] p-6 rounded-[2.5rem] border border-gray-50 flex items-start gap-4">
              <div className="text-xl">🛡️</div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-gray-800 mb-1">Encrypted Baseline</p>
                <p className="text-[9px] text-gray-400 leading-relaxed font-light">
                  Your transaction is processed through a Tier-1 Indian payment hub. Linen Logic never stores your credit or UPI credentials.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Checkout;
