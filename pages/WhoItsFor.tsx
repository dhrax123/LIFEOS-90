
import React from 'react';

const Profile = ({ title, forText, struggle, solves }: { title: string, forText: string, struggle: string, solves: string }) => (
  <div className="p-12 bg-white border border-gray-100 rounded-[40px] card-shadow">
    <h3 className="text-2xl serif mb-4">{title}</h3>
    <p className="text-sm text-gray-400 uppercase tracking-widest mb-6 font-medium">{forText}</p>
    <div className="space-y-6">
      <div>
        <p className="text-xs text-gray-400 mb-1">The Struggle</p>
        <p className="text-gray-600 italic">"{struggle}"</p>
      </div>
      <div>
        <p className="text-xs text-gray-400 mb-1">The OS 90 Solution</p>
        <p className="text-gray-600">{solves}</p>
      </div>
    </div>
  </div>
);

const WhoItsFor: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20 animate-in fade-in duration-700">
      <div className="text-center mb-20">
        <h1 className="text-5xl serif mb-6">A framework for <br />every path.</h1>
        <p className="text-gray-500">One system, personalized to your role.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Profile 
          title="The Student"
          forText="Tier-1 University Students"
          struggle="I'm juggling internships, courses, and a social life. I feel like I'm falling behind even when I'm busy."
          solves="Focus on 'Maintenance Mode' during exam weeks and 'Deep Work' cycles for research."
        />
        <Profile 
          title="The Creator"
          forText="Designers, Writers, Artists"
          struggle="I'm constantly looking for inspiration but end up just doom-scrolling. I lack a structure for my messy ideas."
          solves="The Daily Intention pages help bridge the gap between creative chaos and actual output."
        />
        <Profile 
          title="The Professional"
          forText="Early Career Tech & Finance"
          struggle="My calendar is full of meetings. I've lost track of what my actual career goals were."
          solves="The Weekly Reality Check forces you to look at 'Value work' vs 'Performative work'."
        />
        <Profile 
          title="The Founder"
          forText="Solo-founders & Early Stage"
          struggle="I'm the bottleneck. I'm burnt out but can't stop. Everything feels like a priority."
          solves="The 'Core 3' philosophy ruthlessly prioritizes high-leverage tasks over busywork."
        />
      </div>
    </div>
  );
};

export default WhoItsFor;
