
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
  const [isTyping, setIsTyping] = useState(false);
  const [fullManifestText, setFullManifestText] = useState('');
  const [displayedText, setDisplayedText] = useState('');
  const [showCTA, setShowCTA] = useState(false);
  const [chaskaMaska, setChaskaMaska] = useState('');
  const [loadingTextIndex, setLoadingTextIndex] = useState(0);

  const loadingMessages = [
    "Analyzing baseline rhythms...",
    "Filtering digital noise...",
    "Synthesizing focus markers...",
    "Mapping the seasonal path...",
    "Preparing your manifest..."
  ];

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

  // Loading text cycle
  useEffect(() => {
    let interval: any;
    if (isThinking) {
      interval = setInterval(() => {
        setLoadingTextIndex((prev) => (prev + 1) % loadingMessages.length);
      }, 2000);
    }
    return () => clearInterval(interval);
  }, [isThinking]);

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

    // Artificial delay to make it feel more "synthesized"
    const pausePromise = new Promise(resolve => setTimeout(resolve, 6000));
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
      }, 35); 
      return () => clearInterval(interval);
    }
  }, [isTyping, fullManifestText]);

  if (step === 0) {
    return (
      <div className="max-w-md mx-auto px-6 py-40 text-center animate-in fade-in zoom-in-95 duration-1000">
        <h1 className="text-6xl md:text-8xl serif mb-10 italic leading-[1.1] tracking-tight">Identify Your <br/>Baseline.</h1>
        <p className="text-gray-400 mb-14 font-light leading-relaxed text-xl italic">
          The hardware arrives in 3 days. <br/>Let's configure the software today.
        </p>
        <button 
          onClick={() => setStep(1)} 
          className="w-full py-8 bg-black text-white rounded-full font-bold text-2xl shadow-2xl hover:bg-zinc-800 transition-all hover:scale-[1.02] active:scale-95"
        >
          Begin The Audit
        </button>
      </div>
    );
  }

  if (step === 1) {
    return (
      <div className="max-w-2xl mx-auto px-6 py-20 animate-in fade-in slide-in-from-bottom-4 duration-700">
        <h1 className="text-5xl md:text-6xl serif mb-20 text-center italic">The Configuration.</h1>
        <form onSubmit={handleAuditSubmit} className="space-y-16">
          <div className="space-y-6">
            <label className="text-[10px] font-bold uppercase tracking-[0.4em] text-gray-300 ml-4">Human Name</label>
            <input 
              required
              className="w-full bg-white border border-gray-100 p-8 rounded-[40px] focus:outline-none focus:border-black/10 transition-all text-2xl font-light card-shadow"
              placeholder="First name or alias"
              value={formData.name}
              onChange={e => setFormData({...formData, name: e.target.value})}
            />
          </div>

          <div className="space-y-6">
            <label className="text-[10px] font-bold uppercase tracking-[0.4em] text-gray-300 ml-4">Archetype</label>
            <div className="grid grid-cols-2 gap-4">
              {['student', 'creator', 'founder', 'other'].map((r) => (
                <button
                  key={r}
                  type="button"
                  onClick={() => setFormData({...formData, role: r})}
                  className={`p-8 rounded-[40px] border text-sm capitalize transition-all duration-500 font-bold tracking-widest ${
                    formData.role === r ? 'bg-black text-white border-black shadow-xl scale-105' : 'bg-white border-gray-100 text-gray-400 hover:border-gray-200'
                  }`}
                >
                  {r}
                </button>
              ))}
            </div>
            {formData.role === 'other' && (
              <div className="animate-in slide-in-from-top-2 duration-500">
                <input 
                  required
                  className="w-full bg-white border border-gray-100 p-8 rounded-[40px] focus:outline-none focus:border-black/10 transition-all text-xl font-light card-shadow italic"
                  placeholder="What is your path?"
                  value={formData.customRole}
                  onChange={e => setFormData({...formData, customRole: e.target.value})}
                />
              </div>
            )}
          </div>

          <div className="space-y-6">
            <label className="text-[10px] font-bold uppercase tracking-[0.4em] text-gray-300 ml-4">Current Weight</label>
            <textarea 
              required
              className="w-full bg-white border border-gray-100 p-10 rounded-[60px] h-52 focus:outline-none focus:border-black/10 transition-all text-xl font-light resize-none card-shadow"
              placeholder="What feels heaviest right now?"
              value={formData.struggle}
              onChange={e => setFormData({...formData, struggle: e.target.value})}
            />
          </div>

          <button 
            type="submit" 
            className="w-full py-8 bg-black text-white rounded-full font-bold text-2xl transition-all shadow-2xl hover:bg-zinc-900"
          >
            Synthesize My Manifest
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="min-h-[85vh] flex flex-col items-center justify-center px-6 py-20 bg-[#FAF9F6] animate-in fade-in duration-1000">
      
      {/* The Manifest Card */}
      <div className="w-full max-w-lg bg-white p-14 md:p-20 rounded-[80px] border border-gray-100 manifest-glow relative min-h-[500px] flex items-center justify-center">
        
        <div className="absolute top-12 right-12 text-[9px] font-bold text-gray-200 uppercase tracking-[0.8em] italic select-none">LL/S1</div>

        <div className="w-full">
          {isThinking ? (
            <div className="space-y-8 text-center animate-in fade-in duration-1000">
               <div className="flex justify-center items-center gap-2 opacity-30">
                  <div className="w-1.5 h-1.5 bg-black rounded-full animate-pulse" />
                  <div className="w-1.5 h-1.5 bg-black rounded-full animate-pulse [animation-delay:200ms]" />
                  <div className="w-1.5 h-1.5 bg-black rounded-full animate-pulse [animation-delay:400ms]" />
               </div>
               <p className="literary italic text-lg text-gray-400 font-light tracking-wide animate-pulse">
                 {loadingMessages[loadingTextIndex]}
               </p>
            </div>
          ) : (
            <div className="space-y-12">
              <p className="literary italic text-2xl md:text-3xl leading-[1.8] text-gray-800 font-light text-left whitespace-pre-wrap">
                {displayedText}
                {isTyping && <span className="inline-block w-[1.5px] h-6 bg-black/20 ml-1 animate-pulse" />}
              </p>
              
              {!isTyping && (
                <p className="text-[10px] font-bold uppercase tracking-[0.6em] text-gray-300 animate-in fade-in duration-1000">
                  — {chaskaMaska}
                </p>
              )}
            </div>
          )}
        </div>
      </div>

      {showCTA && (
        <div className="mt-20 text-center animate-in slide-in-from-bottom-8 duration-1000">
          <Link 
            to="/checkout"
            className="inline-block px-16 py-7 bg-black text-white rounded-full font-bold text-2xl hover:scale-[1.05] transition-all active:scale-95 shadow-2xl shadow-black/20"
          >
            Claim My Season Kit — $19
          </Link>
          <div className="mt-10 flex items-center justify-center gap-4 opacity-30">
             <div className="w-12 h-px bg-black" />
             <p className="text-[10px] text-black uppercase tracking-[0.6em] font-bold">Linen Logic • India 2024</p>
             <div className="w-12 h-px bg-black" />
          </div>
        </div>
      )}

    </div>
  );
};

export default Account;
