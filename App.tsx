
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Icons } from './constants';
import Home from './pages/Home';
import WhatIs from './pages/WhatIs';
import HowItWorks from './pages/HowItWorks';
import Features from './pages/Features';
import Planner from './pages/Planner';
import WhoItsFor from './pages/WhoItsFor';
import About from './pages/About';
import Account from './pages/Account';
import Checkout from './pages/Checkout';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);
  return null;
};

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => setIsOpen(false), [location]);

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#FAF9F6]/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="text-xl font-medium tracking-tight hover:opacity-70 transition-opacity flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-black animate-pulse" />
          Life OS <span className="text-gray-400">90</span>
        </Link>
        
        <div className="hidden md:flex items-center space-x-10 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500">
          <Link to="/what-is" className="hover:text-black transition-colors">Philosophy</Link>
          <Link to="/how-it-works" className="hover:text-black transition-colors">Method</Link>
          <Link to="/planner" className="hover:text-black transition-colors">The Kit</Link>
          <Link to="/account" className="px-6 py-2.5 bg-black text-white rounded-full hover:bg-zinc-800 transition-all shadow-lg shadow-black/5">
            Begin Audit
          </Link>
        </div>

        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
          {isOpen ? <Icons.Close /> : <Icons.Menu />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-[#FAF9F6] border-b border-gray-100 p-8 flex flex-col space-y-8 animate-in slide-in-from-top-4 duration-300">
          <Link to="/what-is" className="text-2xl serif italic">Philosophy</Link>
          <Link to="/how-it-works" className="text-2xl serif italic">Method</Link>
          <Link to="/planner" className="text-2xl serif italic">The Kit</Link>
          <Link to="/account" className="text-lg font-bold uppercase tracking-widest text-black">Start My Audit</Link>
        </div>
      )}
    </nav>
  );
};

const Footer: React.FC = () => (
  <footer className="bg-white border-t border-gray-100 pt-32 pb-16">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-20 mb-20">
        <div className="col-span-1 md:col-span-2">
          <h2 className="text-3xl serif mb-8 italic">Life OS 90</h2>
          <p className="text-gray-400 max-w-sm leading-relaxed mb-8 font-light text-lg">
            A system for clarity in a world of infinite noise. Built for the intentional few.
          </p>
          <div className="flex gap-4">
             <div className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center opacity-40 hover:opacity-100 cursor-pointer transition-opacity">𝕏</div>
             <div className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center opacity-40 hover:opacity-100 cursor-pointer transition-opacity">📸</div>
          </div>
        </div>
        <div>
          <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-300 mb-8">Navigation</h4>
          <ul className="space-y-4 text-sm text-gray-500 font-light">
            <li><Link to="/planner" className="hover:text-black transition-colors">The Physical Kit</Link></li>
            <li><Link to="/how-it-works" className="hover:text-black transition-colors">90-Day Method</Link></li>
            <li><Link to="/account" className="hover:text-black transition-colors">Onboarding Audit</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-300 mb-8">Access</h4>
          <ul className="space-y-4 text-sm text-gray-500 font-light">
            <li><Link to="/about" className="hover:text-black transition-colors">About Us</Link></li>
            <li><a href="mailto:hello@lifeos90.com" className="hover:text-black transition-colors">Privacy Policy</a></li>
            <li><span className="text-green-600 font-bold tracking-widest">BATCH 04 LIVE</span></li>
          </ul>
        </div>
      </div>
      <div className="pt-10 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center text-[10px] text-gray-300 font-bold uppercase tracking-[0.3em]">
        <p>© {new Date().getFullYear()} Life OS 90. India Domestic Fulfillment.</p>
        <p className="mt-4 md:mt-0">Calm is the ultimate luxury.</p>
      </div>
    </div>
  </footer>
);

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col pt-20">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/what-is" element={<WhatIs />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/features" element={<Features />} />
            <Route path="/planner" element={<Planner />} />
            <Route path="/who-its-for" element={<WhoItsFor />} />
            <Route path="/about" element={<About />} />
            <Route path="/account" element={<Account />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
