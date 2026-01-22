
import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { generatePersonalManifestStream } from '../geminiService';

const Account: React.FC = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const autoStart = queryParams.get('autoStart') === 'true';

  // Step 0: Hero Intro
  // Step 1: Configuration Form
  // Step 2: Synthesis Results
  const [step, setStep] = useState(autoStart ? 1 : 0);
  const [formData, setFormData] = useState({ name: '', role: '', struggle: '', customRole: '' });
  
  const [isThinking, setIsThinking] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [fullManifestText, setFullManifestText] = useState('');
  const [displayedText, setDisplayedText] = useState('');
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

  // If the user lands with autoStart, force them into the configuration form immediately
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
    
    const roleToUse = formData.role === 'other' ? formData.customRole : formData.role;
    const stream = generatePersonalManifestStream({ ...formData, role: roleToUse });
    
    let aiAccumulated = '';
    const fetchPromise = (async () => {
      for await (const chunk of stream) {
        aiAccumulated += chunk;
      }
      return aiAccumulated;
    })();

    const pausePromise = new Promise(resolve => setTimeout(resolve, 8500));
    const [finalAIContent] = await Promise.all([fetchPromise, pausePromise]);
    
    setFullManifestText(finalAIContent.trim());
    setIsThinking(false);
    setIsTyping(true);
  };

  useEffect(() => {
    if (isTyping && fullManifestText) {
      let index = 0;
      const interval = setInterval(() => {
        setDisplayedText(fullManifestText.slice(0, index + 1));
        index++;
        if (index >= fullManifestText.length) {
          clearInterval(interval);
          setIsTyping(false);
          setTimeout(() => setShowCTA(true), 1500);
        }
      }, 40); 
      return () => clearInterval(interval);
    }
  }, [isTyping, fullManifestText]);

  if (step === 0) {
    return (
      <div className="max-w-md mx-auto px-6 py-32 text-center animate-in fade-in zoom-in-95 duration-1000">
        <h1 className="text-5xl md:text-7xl serif mb-8 italic leading-[1.1]">Identify Your <br/>Baseline.</h1>
        <p className="text-gray-400 mb-12 font-light leading-relaxed text-lg">
          The hardware arrives in 3 days. <br/>Let's configure the software today.
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
      <div className="max-w-xl mx-auto px-6 py-20 animate-in fade-in slide-in-from-bottom-4 duration-700">
        <h1 className="text-4xl md:text-5xl serif mb-16 text-center italic">The Configuration.</h1>
        <form onSubmit={handleAuditSubmit} className="space-y-12">
          <div className="space-y-4">
            <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-300 ml-2">Human Name</label>
            <input 
              required
              className="w-full bg-white border border-gray-100 p-6 rounded-3xl focus:outline-none focus:border-black/10 transition-all text-xl font-light"
              placeholder="First name or alias"
              value={formData.name}
              onChange={e => setFormData({...formData, name: e.target.value})}
            />
          </div>

          <div className="space-y-4">
            <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-300 ml-2">Archetype</label>
            <div className="grid grid-cols-2 gap-4">
              {['student', 'creator', 'founder', 'other'].map((r) => (
                <button
                  key={r}
                  type="button"
                  onClick={() => setFormData({...formData, role: r})}
                  className={`p-6 rounded-3xl border text-sm capitalize transition-all duration-300 ${
                    formData.role === r ? 'bg-black text-white border-black' : 'bg-white border-gray-100 text-gray-400'
                  }`}
                >
                  {r}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-300 ml-2">Current Weight</label>
            <textarea 
              required
              className="w-full bg-white border border-gray-100 p-7 rounded-[2.5rem] h-40 focus:outline-none focus:border-black/10 transition-all text-lg font-light resize-none"
              placeholder="What feels heaviest?"
              value={formData.struggle}
              onChange={e => setFormData({...formData, struggle: e.target.value})}
            />
          </div>

          <button 
            type="submit" 
            className="w-full py-7 bg-black text-white rounded-full font-bold text-xl transition-all"
          >
            Synthesize My Manifest
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="min-h-[85vh] flex flex-col items-center justify-center px-6 py-20 bg-[#FAF9F6] animate-in fade-in duration-1000">
      
      {/* The Narrow, Book-like card */}
      <div className="w-full max-w-sm bg-white p-12 md:p-14 rounded-[40px] border border-gray-100 manifest-glow relative min-h-[420px] flex items-center justify-center">
        
        {/* Subtle Marker */}
        <div className="absolute top-10 right-10 text-[8px] font-bold text-gray-200 uppercase tracking-[0.5em] italic select-none">LL/S1</div>

        <div className="w-full">
          {isThinking ? (
            <div className="space-y-6 text-center animate-in fade-in duration-1000">
               <div className="flex justify-center items-center gap-1.5 opacity-20">
                  <div className="w-1 h-1 bg-black rounded-full animate-pulse" />
                  <div className="w-1 h-1 bg-black rounded-full animate-pulse [animation-delay:200ms]" />
                  <div className="w-1 h-1 bg-black rounded-full animate-pulse [animation-delay:400ms]" />
               </div>
               <p className="literary italic text-sm text-gray-300 font-light tracking-wide">
                 Mapping your season...
               </p>
            </div>
          ) : (
            <div className="space-y-10">
              <p className="literary italic text-xl md:text-2xl leading-[1.75] text-gray-700 font-light text-left whitespace-pre-wrap">
                {displayedText}
                {isTyping && <span className="inline-block w-[1px] h-5 bg-gray-200 ml-1 animate-pulse" />}
              </p>
              
              {!isTyping && (
                <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-gray-300 animate-in fade-in duration-1000">
                  — {chaskaMaska}
                </p>
              )}
            </div>
          )}
        </div>
      </div>

      {showCTA && (
        <div className="mt-16 text-center animate-in slide-in-from-bottom-8 duration-1000">
          <Link 
            to="/checkout"
            className="inline-block px-12 py-5 bg-black text-white rounded-full font-bold text-lg hover:scale-[1.03] transition-transform active:scale-95 shadow-xl shadow-black/5"
          >
            Claim My Season Kit — $19
          </Link>
          <div className="mt-6 flex items-center justify-center gap-3 opacity-20">
             <div className="w-1 h-px bg-black flex-grow max-w-[20px]" />
             <p className="text-[9px] text-black uppercase tracking-[0.4em] font-bold">India Domestic Fulfillment</p>
             <div className="w-1 h-px bg-black flex-grow max-w-[20px]" />
          </div>
        </div>
      )}

    </div>
  );
};

export default Account;
