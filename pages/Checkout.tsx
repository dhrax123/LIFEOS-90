
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const PaymentOption = ({ id, label, selected, onSelect, icon }: { id: string, label: string, selected: boolean, onSelect: (id: string) => void, icon?: string }) => (
  <button
    type="button"
    onClick={() => onSelect(id)}
    className={`w-full p-5 rounded-2xl border flex items-center gap-4 transition-all duration-300 ${
      selected 
        ? 'border-black bg-black text-white shadow-xl shadow-black/10' 
        : 'border-gray-100 bg-white hover:border-gray-200 text-gray-500'
    }`}
  >
    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${selected ? 'border-white' : 'border-gray-200'}`}>
      {selected && <div className="w-2.5 h-2.5 rounded-full bg-white" />}
    </div>
    <span className="text-sm font-medium">{label}</span>
  </button>
);

const Checkout: React.FC = () => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('upi');

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-[#FAF9F6] flex items-center justify-center p-6 animate-in zoom-in-95 duration-700">
        <div className="max-w-md w-full text-center">
          <div className="w-24 h-24 bg-white rounded-full mx-auto mb-10 flex items-center justify-center text-3xl shadow-sm border border-gray-100">🌿</div>
          <h1 className="text-4xl serif italic mb-6">Your season begins.</h1>
          <p className="text-gray-500 font-light leading-relaxed mb-12">
            Order confirmed. You are officially part of Batch 04. Your 180-page anchor and ritual kit will ship within 24 hours.
          </p>
          <div className="p-8 bg-white rounded-[40px] border border-gray-100 text-left mb-12">
            <p className="text-[10px] font-bold uppercase tracking-widest text-gray-300 mb-4">Order Details</p>
            <div className="flex justify-between text-sm mb-2">
              <span className="text-gray-400 italic">Order ID</span>
              <span className="font-mono text-gray-800">#OS90-B4-{(Math.random() * 10000).toFixed(0)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-400 italic">Delivery</span>
              <span className="text-gray-800">3-5 Days (Tier-1 India)</span>
            </div>
          </div>
          <Link to="/" className="inline-block px-10 py-5 bg-black text-white rounded-full font-medium hover:scale-105 transition-transform">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FAF9F6] animate-in fade-in duration-1000">
      <div className="max-w-6xl mx-auto px-6 py-20 lg:py-32 grid lg:grid-cols-12 gap-20">
        
        {/* Left Column: Form */}
        <div className="lg:col-span-7 space-y-16">
          <div>
            <Link to="/planner" className="text-xs font-bold uppercase tracking-widest text-gray-300 hover:text-black transition-colors flex items-center gap-2 mb-12">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
              Back to Planner
            </Link>
            <h1 className="text-4xl md:text-5xl serif italic mb-4">Finalizing the Anchor.</h1>
            <p className="text-gray-400 font-light">Enter your Indian shipping credentials below.</p>
          </div>

          <form className="space-y-10" onSubmit={(e) => { e.preventDefault(); setIsSuccess(true); }}>
            <section className="space-y-8">
              <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-300">Shipping Details</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <input required placeholder="Full Name" className="w-full bg-white p-5 rounded-2xl border border-gray-100 focus:outline-none focus:border-black/20 text-sm font-light shadow-sm" />
                <input required placeholder="Phone Number" className="w-full bg-white p-5 rounded-2xl border border-gray-100 focus:outline-none focus:border-black/20 text-sm font-light shadow-sm" />
              </div>
              <input required placeholder="Apartment, Street Address" className="w-full bg-white p-5 rounded-2xl border border-gray-100 focus:outline-none focus:border-black/20 text-sm font-light shadow-sm" />
              <div className="grid md:grid-cols-3 gap-6">
                <input required placeholder="City (e.g. Bangalore)" className="w-full bg-white p-5 rounded-2xl border border-gray-100 focus:outline-none focus:border-black/20 text-sm font-light shadow-sm" />
                <input required placeholder="State" className="w-full bg-white p-5 rounded-2xl border border-gray-100 focus:outline-none focus:border-black/20 text-sm font-light shadow-sm" />
                <input required placeholder="PIN Code" className="w-full bg-white p-5 rounded-2xl border border-gray-100 focus:outline-none focus:border-black/20 text-sm font-light shadow-sm" />
              </div>
            </section>

            <section className="space-y-8">
              <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-300">Payment Selection</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <PaymentOption id="phonepe" label="PhonePe" selected={paymentMethod === 'phonepe'} onSelect={setPaymentMethod} />
                <PaymentOption id="gpay" label="Google Pay" selected={paymentMethod === 'gpay'} onSelect={setPaymentMethod} />
                <PaymentOption id="upi" label="BHIM UPI" selected={paymentMethod === 'upi'} onSelect={setPaymentMethod} />
                <PaymentOption id="card" label="Credit/Debit Card" selected={paymentMethod === 'card'} onSelect={setPaymentMethod} />
              </div>
              <div className="p-6 bg-white rounded-[2rem] border border-gray-100 flex items-center gap-4 animate-in slide-in-from-top-2">
                <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-lg">🔒</div>
                <p className="text-[10px] text-gray-400 leading-relaxed font-medium">
                  Payments are processed through a secure, encrypted gateway. No financial data is stored on Life OS 90 servers.
                </p>
              </div>
            </section>

            <button type="submit" className="w-full py-6 bg-black text-white rounded-full font-bold text-xl hover:scale-[1.02] transition-transform shadow-2xl shadow-black/10 active:scale-95">
              Complete Purchase — $19.00
            </button>
          </form>
        </div>

        {/* Right Column: Order Summary */}
        <div className="lg:col-span-5">
          <div className="sticky top-32 p-10 bg-white rounded-[48px] border border-gray-100 card-shadow">
            <h3 className="text-xl serif italic mb-8">Summary</h3>
            
            <div className="flex gap-5 mb-10 pb-10 border-b border-gray-100">
               <div className="w-20 h-24 bg-[#F5F3EF] rounded-2xl overflow-hidden flex-shrink-0">
                  <img src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=200&auto=format&fit=crop" className="w-full h-full object-cover grayscale" alt="Season 1 Kit" />
               </div>
               <div>
                 <p className="text-[10px] font-bold uppercase tracking-widest text-gray-300 mb-1">Season 1 Bundle</p>
                 <h4 className="font-medium text-gray-800 mb-2">Life OS 90 Toolkit</h4>
                 <p className="text-sm font-medium text-black">$19.00</p>
               </div>
            </div>

            <div className="space-y-4 mb-10">
              <div className="flex justify-between text-xs">
                <span className="text-gray-400">Seasonal Artifacts</span>
                <span>$19.00</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-gray-400">Tier-1 Express Shipping</span>
                <span className="text-green-600 font-bold uppercase tracking-tighter">Complimentary</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-gray-400">Carbon Offset</span>
                <span className="text-gray-300">INCLUDED</span>
              </div>
            </div>

            <div className="pt-6 border-t border-gray-100 flex justify-between items-end mb-8">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-gray-300 block mb-1">Total Pay</span>
                <span className="text-3xl font-medium text-black">$19.00</span>
              </div>
              <span className="text-[10px] text-gray-400 font-medium italic">GST Applied at Source</span>
            </div>

            <div className="bg-[#FAF9F6] p-6 rounded-3xl border border-gray-100">
              <p className="text-[10px] text-gray-400 leading-relaxed font-light italic">
                "By completing this purchase, you agree to commit to 90 days of intentional living and a slower morning ritual."
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Checkout;
