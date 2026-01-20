
import React, { useState } from 'react';
import { generatePersonalManifest } from '../geminiService';
import { Link } from 'react-router-dom';

const Account: React.FC = () => {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({ name: '', role: '', struggle: '' });
  const [manifest, setManifest] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const result = await generatePersonalManifest(formData);
    setManifest(result || "Your path is unique.");
    setLoading(false);
    setStep(2);
  };

  if (step === 0) {
    return (
      <div className="max-w-md mx-auto px-6 py-32 text-center animate-in fade-in">
        <h1 className="text-4xl serif mb-6">Your Life OS Hub</h1>
        <p className="text-gray-500 mb-12">A private space for your reflections and insights. Calm and secure.</p>
        <div className="space-y-4">
          <button onClick={() => setStep(1)} className="w-full py-5 bg-black text-white rounded-2xl font-medium shadow-xl shadow-black/10 hover:bg-zinc-800 transition-colors">
            Start My Onboarding
          </button>
          <button className="w-full py-5 border border-gray-200 rounded-2xl font-medium hover:bg-gray-50 text-gray-500 transition-colors">
            Sign in to existing account
          </button>
        </div>
        <p className="mt-12 text-[10px] text-gray-300 uppercase tracking-widest font-bold">Privacy First • No Data Selling</p>
      </div>
    );
  }

  if (step === 1) {
    return (
      <div className="max-w-xl mx-auto px-6 py-20 animate-in slide-in-from-right-4 duration-500">
        <h1 className="text-3xl serif mb-2 text-center">The Baseline Audit.</h1>
        <p className="text-center text-gray-400 mb-12 text-sm">Let's understand where you are starting from.</p>
        <form onSubmit={handleSubmit} className="space-y-10">
          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">Your Name</label>
            <input 
              required
              className="w-full bg-white border border-gray-100 p-5 rounded-2xl focus:outline-none focus:ring-2 focus:ring-black/5 transition-all text-lg shadow-sm"
              placeholder="How should the OS address you?"
              value={formData.name}
              onChange={e => setFormData({...formData, name: e.target.value})}
            />
          </div>
          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">Current Path</label>
            <div className="grid grid-cols-2 gap-3">
              {['student', 'creator', 'professional', 'founder'].map((r) => (
                <button
                  key={r}
                  type="button"
                  onClick={() => setFormData({...formData, role: r})}
                  className={`p-4 rounded-2xl border text-sm capitalize transition-all duration-300 flex items-center justify-center gap-2 ${
                    formData.role === r 
                    ? 'bg-black text-white border-black scale-[1.02] shadow-md shadow-black/10' 
                    : 'bg-white border-gray-100 hover:border-gray-300 text-gray-500'
                  }`}
                >
                  {r}
                  {formData.role === r && (
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  )}
                </button>
              ))}
            </div>
          </div>
          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">Your Biggest "Noise"</label>
            <textarea 
              required
              className="w-full bg-white border border-gray-100 p-5 rounded-2xl h-40 focus:outline-none focus:ring-2 focus:ring-black/5 transition-all text-lg shadow-sm resize-none"
              placeholder="Is it the constant buzz of notifications? The pressure to always be 'on'? Or perhaps a lack of clear direction? Tell us what feels heaviest today..."
              value={formData.struggle}
              onChange={e => setFormData({...formData, struggle: e.target.value})}
            />
          </div>
          <button 
            type="submit" 
            disabled={loading}
            className="w-full py-5 bg-black text-white rounded-2xl font-medium disabled:opacity-50 text-lg shadow-xl shadow-black/10 hover:bg-zinc-800 transition-all active:scale-[0.98]"
          >
            {loading ? (
              <span className="flex items-center justify-center gap-2">
                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                Calibrating...
              </span>
            ) : 'Generate My 90-Day Manifest'}
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-20 animate-in zoom-in-95 duration-500">
      <div className="flex items-center justify-between mb-12">
        <h1 className="text-3xl serif italic">Dashboard</h1>
        <div className="flex gap-4">
           <div className="px-3 py-1 bg-green-50 text-green-600 rounded-full text-[10px] font-bold uppercase">System Active</div>
           <div className="text-[10px] text-gray-400 font-bold uppercase py-1">Season 01</div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-8">
          <div className="bg-white border border-gray-100 p-12 rounded-[40px] card-shadow relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-gray-50 via-gray-200 to-gray-50" />
            <h2 className="text-[10px] font-bold uppercase tracking-widest text-gray-300 mb-8">Personal 90-Day Manifest</h2>
            <div className="serif text-3xl leading-relaxed text-gray-800 italic">
              "{manifest}"
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="p-8 bg-white border border-gray-100 rounded-3xl">
              <h4 className="text-[10px] font-bold uppercase tracking-widest text-gray-300 mb-4">Mood Average</h4>
              <p className="text-2xl font-medium">Calm • 🌱</p>
            </div>
            <div className="p-8 bg-white border border-gray-100 rounded-3xl">
              <h4 className="text-[10px] font-bold uppercase tracking-widest text-gray-300 mb-4">Focus Peak</h4>
              <p className="text-2xl font-medium">09:00 — 11:30</p>
            </div>
          </div>
        </div>

        <div className="space-y-8">
           <div className="bg-black text-white p-8 rounded-[3rem] text-center">
              <h4 className="text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-6">Current Progress</h4>
              <div className="relative w-32 h-32 mx-auto mb-6">
                <svg className="w-full h-full transform -rotate-90">
                  <circle cx="64" cy="64" r="58" stroke="currentColor" strokeWidth="8" fill="transparent" className="text-zinc-800" />
                  <circle cx="64" cy="64" r="58" stroke="currentColor" strokeWidth="8" fill="transparent" strokeDasharray="364.4" strokeDashoffset="360" className="text-white" />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center text-2xl serif">Day 01</div>
              </div>
              <p className="text-xs text-gray-400">89 days remaining in <br />Season 1</p>
           </div>
           
           <div className="p-8 border border-gray-100 rounded-3xl">
             <h4 className="text-[10px] font-bold uppercase tracking-widest text-gray-300 mb-4">Quick Links</h4>
             <ul className="space-y-3 text-sm font-medium">
               <li><Link to="/journal" className="hover:text-black">Reflection History</Link></li>
               <li><Link to="/planner" className="hover:text-black">Order Next Planner</Link></li>
               <li><a href="#" className="hover:text-black">Export Season Data</a></li>
             </ul>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
