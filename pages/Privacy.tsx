
import React from 'react';

const Privacy: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto px-6 py-24 md:py-32 animate-in fade-in duration-1000">
      <header className="mb-20 text-center">
        <h1 className="text-4xl md:text-6xl serif italic mb-6">Privacy Policy.</h1>
        <p className="text-gray-400 font-light italic">Your reflections are yours alone.</p>
      </header>

      <div className="space-y-12 text-gray-600 font-light leading-relaxed">
        <section className="space-y-4">
          <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-black">Our Philosophy</h2>
          <p className="italic literary text-xl text-gray-800">
            We believe that a quiet life requires protected thoughts. We do not sell data, we do not use trackers, and we certainly do not exploit your vulnerabilities.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-black">Data Handling</h2>
          <p>
            When you use the Linen Logic synthesis tool, your inputs are used solely to generate your personalized manifest. We do not store these reflections in a persistent database linked to your identity. Once the manifest is generated, the input data is cleared from our immediate session.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-black">Third Parties</h2>
          <p>
            We partner with secure payment providers and the Gemini API for text synthesis. These partners have their own strict privacy standards. We only share the minimum context necessary to provide our service.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-black">Your Rights</h2>
          <p>
            You have the right to disappear. Should you wish for any trace of your interaction with our onboarding systems to be removed, simply reach out. We are built for humans, and humans deserve to be forgotten if they so choose.
          </p>
        </section>

        <footer className="pt-12 border-t border-gray-100 text-center">
          <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-gray-300 italic">Last updated: October 2024</p>
        </footer>
      </div>
    </div>
  );
};

export default Privacy;
