
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Icons } from './constants';
import Home from './pages/Home';
import WhatIs from './pages/WhatIs';
import HowItWorks from './pages/HowItWorks';
import Features from './pages/Features';
import Planner from './pages/Planner';
import AppPage from './pages/AppPage';
import WhoItsFor from './pages/WhoItsFor';
import About from './pages/About';
import Journal from './pages/Journal';
import Account from './pages/Account';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => setIsOpen(false), [location]);

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#FAF9F6]/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="text-xl font-medium tracking-tight hover:opacity-70 transition-opacity">
          Life OS <span className="text-gray-400">90</span>
        </Link>
        
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-600">
          <Link to="/what-is" className="hover:text-black transition-colors">Philosophy</Link>
          <Link to="/how-it-works" className="hover:text-black transition-colors">How it works</Link>
          <Link to="/features" className="hover:text-black transition-colors">Features</Link>
          <Link to="/planner" className="hover:text-black transition-colors">Planner</Link>
          <Link to="/app" className="hover:text-black transition-colors">Digital App</Link>
          <Link to="/journal" className="hover:text-black transition-colors">Journal</Link>
          <Link to="/account" className="px-5 py-2.5 bg-black text-white rounded-full hover:bg-gray-800 transition-all">
            Dashboard
          </Link>
        </div>

        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
          {isOpen ? <Icons.Close /> : <Icons.Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-[#FAF9F6] border-b border-gray-100 p-6 flex flex-col space-y-6 animate-in slide-in-from-top-4 duration-300">
          <Link to="/what-is" className="text-lg">Philosophy</Link>
          <Link to="/how-it-works" className="text-lg">How it works</Link>
          <Link to="/features" className="text-lg">Features</Link>
          <Link to="/planner" className="text-lg">The Physical Planner</Link>
          <Link to="/app" className="text-lg">The Digital App</Link>
          <Link to="/who-its-for" className="text-lg">Who it's for</Link>
          <Link to="/journal" className="text-lg">Journal</Link>
          <Link to="/account" className="text-lg font-medium">My Account</Link>
        </div>
      )}
    </nav>
  );
};

const Footer: React.FC = () => (
  <footer className="bg-white border-t border-gray-100 pt-20 pb-10">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-1 md:col-span-2">
          <h2 className="text-2xl serif mb-6">Life OS 90</h2>
          <p className="text-gray-500 max-w-sm leading-relaxed mb-6">
            A system for clarity in a world of noise. We believe productivity is about knowing yourself, not just doing more.
          </p>
          <div className="flex space-x-4">
             <Link to="/about" className="text-sm text-gray-400 hover:text-black underline underline-offset-4">Our Values</Link>
             <Link to="/privacy" className="text-sm text-gray-400 hover:text-black underline underline-offset-4">Privacy First</Link>
          </div>
        </div>
        <div>
          <h4 className="font-medium mb-6">The System</h4>
          <ul className="space-y-4 text-sm text-gray-500">
            <li><Link to="/planner" className="hover:text-black">Physical Planner</Link></li>
            <li><Link to="/app" className="hover:text-black">Digital Companion</Link></li>
            <li><Link to="/how-it-works" className="hover:text-black">90-Day Journey</Link></li>
            <li><Link to="/features" className="hover:text-black">Feature Map</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-medium mb-6">Connect</h4>
          <ul className="space-y-4 text-sm text-gray-500">
            <li><Link to="/journal" className="hover:text-black">Journal</Link></li>
            <li><Link to="/who-its-for" className="hover:text-black">For Creators</Link></li>
            <li><Link to="/who-its-for" className="hover:text-black">For Founders</Link></li>
            <li><a href="mailto:hello@lifeos90.com" className="hover:text-black">Email Support</a></li>
          </ul>
        </div>
      </div>
      <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
        <p>© {new Date().getFullYear()} Life OS 90. Built for clarity, not performance.</p>
        <p className="mt-4 md:mt-0">Designed for the Tier-1 Digital Nomad & Local Creator.</p>
      </div>
    </div>
  </footer>
);

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col pt-20">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/what-is" element={<WhatIs />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/features" element={<Features />} />
            <Route path="/planner" element={<Planner />} />
            <Route path="/app" element={<AppPage />} />
            <Route path="/who-its-for" element={<WhoItsFor />} />
            <Route path="/about" element={<About />} />
            <Route path="/journal" element={<Journal />} />
            <Route path="/account" element={<Account />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
