import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { generatePersonalManifestStream } from '../geminiService';

const Account: React.FC = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const autoStart = queryParams.get('autoStart') === 'true';

  const [step, setStep] = useState(autoStart ? 1 : 0);
  const [formData, setFormData] = useState({ name: '', role: '', struggle: '', customRole: '' });
  
  const [isThinking, setIsThinking] = useState(false);
  const [fullManifestText, setFullManifestText] = useState('');
  const [showCTA, setShowCTA] = useState(false);
  const [chaskaMaska, setChaskaMaska] = useState('');

  const chaskaOptions = [
    "Relax. You're actually doing fine.",
    "The algorithm can wait. You can't.",
    "One tab at a time. No rush.",
    "You're not late. You're just building different.",
    "This part is quieter. That's a good thing.",
    "Your baseline is solid. Trust it."
  ];

  useEffect(() => {
    if (autoStart) {
      setStep(1);
    }
  }, [autoStart]);

  const handleAuditSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    setStep(2); 
    setIsThinking(true);
    setChaskaMaska(chaskaOptions[Math.floor(Math.random() * chaskaOptions.length)]);
    
    const roleToUse = formData.role === 'other' ? (formData.customRole || 'Explorer') : formData.role;
    const stream = generatePersonalManifestStream({ ...formData, role: roleToUse, struggle: formData.struggle });
    
    let aiAccumulated = '';
    try {
      for await (const chunk of stream) {
        aiAccumulated += chunk;
      }
      setFullManifestText(aiAccumulated.trim());
    } catch (err) {
      console.error(err);
    } finally {
      setIsThinking(false);
      setTimeout(() => setShowCTA(true), 1000);
    }
  };

  if (step === 0) {
    return (
      <div className="max-w-md mx-auto px-6 py-20 md:py-40 text-center animate-in fade-in zoom-in-95 duration-1000">
        <h1 className="text-5xl md:text-7xl serif mb-8 italic leading-[1.1]">Identify Your <br/>Baseline.</h1>
        <p className="text-gray-400 mb-12 font-light leading-relaxed text-lg italic">
          While we prepare your physical kit, <br/>let's configure the direction today.
        </p>
        <button 
          onClick={() => setStep(1)} 
          className="w-full py-6 bg-black text-white rounded-full font-bold text-xl shadow-2xl hover:bg-zinc-800 transition-all hover:scale-[1.02] active:scale-95"
        >
          Begin The Audit
        </button>
      </div>
    );
  }

  if (step === 1) {
    return (
      <div className="max-w-2xl mx-auto px-6 py-12 md:py-20 animate-in fade-in slide-in-from-bottom-4 duration-700">
        <h1 className="text-4xl md:text-6xl serif mb-10 md:mb-16 text-center italic">The Configuration.</h1>
        <form onSubmit={handleAuditSubmit} className="space-y-8 md:space-y-12">
          <div className="space-y-4">
            <label className="text-[10px] font-bold uppercase tracking-[0.4em] text-gray-300 ml-4">Human Name</label>
            <input 
              required
              className="w-full bg-white border border-gray-100 p-6 md:p-8 rounded-[32px] md:rounded-[40px] focus:outline-none focus:border-black/10 transition-all text-lg md:text-2xl font-light shadow-sm italic"
              placeholder="First name or alias"
              value={formData.name}
              onChange={e => setFormData({...formData, name: e.target.value})}
            />
          </div>

          <div className="space-y-4">
            <label className="text-[10px] font-bold uppercase tracking-[0.4em] text-gray-300 ml-4">Archetype</label>
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              {['student', 'creator', 'founder', 'other'].map((r) => (
                <button
                  key={r}
                  type="button"
                  onClick={() => setFormData({...formData, role: r})}
                  className={`p-5 md:p-8 rounded-[24px] md:rounded-[40px] border text-xs md:text-sm capitalize transition-all duration-300 font-bold tracking-widest ${
                    formData.role === r ? 'bg-black text-white border-black shadow-lg scale-[1.02]' : 'bg-white border-gray-100 text-gray-400'
                  }`}
                >
                  {r}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <label className="text-[10px] font-bold uppercase tracking-[0.4em] text-gray-300 ml-4">Current Weight</label>
            <textarea 
              required
              className="w-full bg-white border border-gray-100 p-8 md:p-10 rounded-[32px] md:rounded-[48px] min-h-[160px] md:min-h-[200px] focus:outline-none focus:border-black/10 transition-all text-base md:text-xl font-light shadow-sm italic"
              placeholder="What feels heaviest right now?"
              value={formData.struggle}
              onChange={e => setFormData({...formData, struggle: e.target.value})}
            />
          </div>

          <button 
            type="submit" 
            className="w-full py-6 md:py-8 bg-black text-white rounded-full font-bold text-lg md:text-2xl transition-all shadow-xl hover:bg-zinc-900 active:scale-95"
          >
            Synthesize My Manifest
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="min-h-[85vh] flex flex-col items-center justify-center px-6 py-12 md:py-20 bg-[#FAF9F6] animate-in fade-in duration-1000">
      
      <div className="w-full max-w-lg bg-white p-8 md:p-20 rounded-[40px] md:rounded-[80px] border border-gray-100 manifest-glow relative min-h-[400px] md:min-h-[550px] flex items-center justify-center">
        
        <div className="absolute top-10 right-10 text-[8px] md:text-[9px] font-bold text-gray-200 uppercase tracking-[0.6em] italic select-none">LL/S1</div>

        <div className="w-full">
          {isThinking ? (
            <div className="space-y-8 text-center animate-in fade-in duration-1000">
               <div className="flex justify-center items-center gap-2 opacity-30">
                  <div className="w-1.5 h-1.5 bg-black rounded-full animate-pulse" />
                  <div className="w-1.5 h-1.5 bg-black rounded-full animate-pulse [animation-delay:200ms]" />
                  <div className="w-1.5 h-1.5 bg-black rounded-full animate-pulse [animation-delay:400ms]" />
               </div>
               <p className="literary italic text-lg text-gray-400 font-light tracking-wide animate-pulse">
                 Synthesizing baseline markers...
               </p>
            </div>
          ) : (
            <div className="space-y-12 animate-in fade-in duration-1000">
              <p className="text-[10px] font-bold uppercase tracking-[0.6em] text-gray-300 italic">Seasonal Guidance</p>
              <p className="literary italic text-xl md:text-4xl leading-[1.7] md:leading-[1.8] text-gray-800 font-light text-left whitespace-pre-wrap">
                {fullManifestText}
              </p>
              
              <p className="text-[10px] font-bold uppercase tracking-[0.6em] text-gray-300 italic">
                — {chaskaMaska}
              </p>
            </div>
          )}
        </div>
      </div>

      {showCTA && !isThinking && (
        <div className="mt-16 md:mt-24 text-center animate-in slide-in-from-bottom-8 duration-1000">
          <Link 
            to="/checkout"
            className="inline-block px-12 md:px-16 py-5 md:py-7 bg-black text-white rounded-full font-bold text-xl md:text-2xl hover:scale-[1.05] transition-all active:scale-95 shadow-2xl shadow-black/10"
          >
            Claim My Season Kit — $19
          </Link>
          <div className="mt-8 flex items-center justify-center gap-4 opacity-30">
             <div className="w-12 h-px bg-black" />
             <p className="text-[10px] text-black uppercase tracking-[0.6em] font-bold">Linen Logic • 2024</p>
             <div className="w-12 h-px bg-black" />
          </div>
        </div>
      )}

    </div>
  );
};

export default Account;
