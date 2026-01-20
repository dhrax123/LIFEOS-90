
import React, { useState } from 'react';
import { generatePersonalManifest } from '../geminiService';
import { Link } from 'react-router-dom';

const Account: React.FC = () => {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({ name: '', role: '', struggle: '', customRole: '' });
  const [manifest, setManifest] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const roleToUse = formData.role === 'other' ? formData.customRole : formData.role;
    const result = await generatePersonalManifest({ ...formData, role: roleToUse });
    setManifest(result || "Your path is unique. Focus on the breath of today, and let the 90 days unfold with grace.");
    setLoading(false);
    setStep(2);
  };

  if (step === 0) {
    return (
      <div className="max-w-md mx-auto px-6 py-32 text-center animate-in fade-in">
        <h1 className="text-4xl md:text-5xl serif mb-6 italic">Who are you this season?</h1>
        <p className="text-gray-500 mb-12 font-light leading-relaxed">Before the planner arrives, we need to find your baseline. A 3-minute audit to anchor your next 90 days.</p>
        <button onClick={() => setStep(1)} className="w-full py-5 bg-black text-white rounded-2xl font-medium shadow-xl shadow-black/10 hover:bg-zinc-800 transition-all hover:scale-[1.02]">
          Start My Audit
        </button>
        <p className="mt-8 text-[10px] text-gray-300 uppercase tracking-widest font-bold">Privacy First • India Only</p>
      </div>
    );
  }

  if (step === 1) {
    return (
      <div className="max-w-xl mx-auto px-6 py-20 animate-in slide-in-from-right-4 duration-500">
        <h1 className="text-3xl serif mb-2 text-center italic">The Baseline Audit.</h1>
        <p className="text-center text-gray-400 mb-12 text-sm font-light">Quiet your mind and be honest.</p>
        <form onSubmit={handleSubmit} className="space-y-10">
          <div>
            <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-4">Identity Name</label>
            <input 
              required
              className="w-full bg-white border border-gray-100 p-6 rounded-[2rem] focus:outline-none focus:ring-2 focus:ring-black/5 transition-all text-lg shadow-sm font-light"
              placeholder="How should we address you?"
              value={formData.name}
              onChange={e => setFormData({...formData, name: e.target.value})}
            />
          </div>
          <div>
            <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-4">Current Path</label>
            <div className="grid grid-cols-2 gap-4 mb-4">
              {['student', 'creator', 'founder', 'other'].map((r) => (
                <button
                  key={r}
                  type="button"
                  onClick={() => setFormData({...formData, role: r})}
                  className={`p-5 rounded-3xl border text-sm capitalize transition-all duration-300 flex items-center justify-center gap-2 ${
                    formData.role === r 
                    ? 'bg-black text-white border-black scale-[1.02] shadow-xl shadow-black/10' 
                    : 'bg-white border-gray-100 hover:border-gray-200 text-gray-400 font-light'
                  }`}
                >
                  {r === 'other' ? 'Custom Path' : r}
                  {formData.role === r && <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>}
                </button>
              ))}
            </div>
            {formData.role === 'other' && (
              <input 
                required
                className="w-full bg-white border border-gray-100 p-6 rounded-[2rem] focus:outline-none focus:ring-2 focus:ring-black/5 transition-all text-lg shadow-sm animate-in slide-in-from-top-2"
                placeholder="Describe your role..."
                value={formData.customRole}
                onChange={e => setFormData({...formData, customRole: e.target.value})}
              />
            )}
          </div>
          <div>
            <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-4">Core Noise</label>
            <textarea 
              required
              className="w-full bg-white border border-gray-100 p-6 rounded-[2rem] h-40 focus:outline-none focus:ring-2 focus:ring-black/5 transition-all text-lg shadow-sm resize-none font-light"
              placeholder="What feels heaviest today? The pressure to always be 'on'?"
              value={formData.struggle}
              onChange={e => setFormData({...formData, struggle: e.target.value})}
            />
          </div>
          <button 
            type="submit" 
            disabled={loading}
            className="w-full py-6 bg-black text-white rounded-[2rem] font-bold disabled:opacity-50 text-lg shadow-2xl shadow-black/10 hover:bg-zinc-800 transition-all active:scale-[0.98]"
          >
            {loading ? 'Analyzing Baseline...' : 'Generate Identity Card'}
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-20 animate-in zoom-in-95 duration-700">
      <div className="text-center mb-16">
        <h1 className="text-4xl serif italic mb-3">Choosing Less.</h1>
        <p className="text-gray-400 text-sm font-light">Your Season 01 Identity Card is ready for archival.</p>
      </div>

      <div className="flex flex-col items-center">
        {/* The "Identity Card" - Pinterest-core Aesthetic Artifact */}
        <div className="w-full max-w-lg bg-[#FDFCFB] border border-gray-50 p-12 rounded-[56px] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.06)] relative overflow-hidden mb-16 group soft-gradient">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gray-100 to-transparent opacity-50" />
          
          <div className="flex justify-between items-start mb-20">
             <div className="flex flex-col">
               <span className="text-[10px] font-bold text-gray-300 uppercase tracking-[0.4em] mb-1">Season 01</span>
               <span className="text-[10px] text-gray-400 italic">Identity Fragment</span>
             </div>
             <div className="w-14 h-14 rounded-full border border-gray-100 flex items-center justify-center text-[10px] font-bold text-gray-200 italic bg-white shadow-sm">OS90</div>
          </div>
          
          <div className="serif text-3xl leading-relaxed text-gray-800 italic mb-20 pr-4">
            "This season, you are becoming..."
            <p className="text-base font-light text-gray-500 mt-6 not-italic leading-relaxed">
              {manifest}
            </p>
          </div>
          
          <div className="flex justify-between items-end pt-10 border-t border-gray-100/50">
            <div>
              <p className="text-[9px] font-bold text-gray-300 uppercase tracking-[0.3em] mb-2">Subject</p>
              <p className="text-sm font-medium text-gray-700">{formData.name}</p>
            </div>
            <div className="text-right">
              <p className="text-[9px] font-bold text-gray-300 uppercase tracking-[0.3em] mb-2">Core Path</p>
              <p className="text-sm font-medium text-gray-700 capitalize">
                {formData.role === 'other' ? formData.customRole : formData.role}
              </p>
            </div>
          </div>
          
          <div className="absolute inset-x-0 bottom-4 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
            <span className="text-[8px] text-gray-300 uppercase tracking-[0.5em] font-bold">Screenshot to save your manifest</span>
          </div>
        </div>
        
        {/* Post-Audit CTA */}
        <div className="w-full max-w-lg p-12 bg-black text-white rounded-[48px] text-center shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 blur-3xl" />
          <h3 className="text-3xl serif mb-4 italic relative z-10">Anchor Your Identity.</h3>
          <p className="text-gray-400 mb-10 text-sm leading-relaxed font-light relative z-10">
            Your Identity Card is the software. Now you need the hardware. Your 180-page anchor ships in a hand-woven basket with ritual silk and candles.
          </p>
          <Link 
            to="/planner" 
            className="inline-block w-full py-6 bg-white text-black rounded-full font-bold text-xl hover:scale-[1.03] transition-transform active:scale-95 shadow-xl relative z-10"
          >
            Claim My Season Kit — Buy Now
          </Link>
          <div className="mt-8 flex items-center justify-center gap-3 relative z-10">
             <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
             <p className="text-[10px] text-gray-500 uppercase tracking-[0.3em] font-bold">Batch 04 India Shipments Active</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
