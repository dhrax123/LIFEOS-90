
import React from 'react';

const Journal: React.FC = () => {
  const posts = [
    {
      title: "The Architecture of a Quiet Morning",
      excerpt: "Why the first 20 minutes of your day define your emotional baseline for the next 12 hours. The neuroscience of silence.",
      date: "Oct 12, 2024",
      category: "Neuroscience",
      image: "https://picsum.photos/seed/quiet-room/800/600"
    },
    {
      title: "Why Hustle Culture is a Bug, Not a Feature",
      excerpt: "Deconstructing the myth of the 4am wake-up and why 'intentional slow' is the ultimate competitive advantage.",
      date: "Oct 05, 2024",
      category: "Critique",
      image: "https://picsum.photos/seed/rest-nature/800/600"
    },
    {
      title: "The Neuroplasticity of 90 Days",
      excerpt: "How three months of consistent intention re-wires your prefrontal cortex for better focus and lower anxiety.",
      date: "Sep 28, 2024",
      category: "Science",
      image: "https://picsum.photos/seed/brain-art/800/600"
    },
    {
      title: "Digital Minimalism in Tier-1 Cities",
      excerpt: "Survival strategies for the attention economy when you live in a concrete jungle. Reclaiming your mental space.",
      date: "Sep 20, 2024",
      category: "Lifestyle",
      image: "https://picsum.photos/seed/city-calm/800/600"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-24 animate-in fade-in duration-700">
      <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div>
          <h1 className="text-6xl serif mb-6 italic">Journal.</h1>
          <p className="text-xl text-gray-400 max-w-xl font-light">Long-form thoughts on clarity, systems, and living well in the digital age.</p>
        </div>
        <div className="flex gap-4 text-xs font-bold uppercase tracking-widest">
           <span className="text-black underline underline-offset-8">Latest</span>
           <span className="text-gray-300 hover:text-black cursor-pointer">Philosophy</span>
           <span className="text-gray-300 hover:text-black cursor-pointer">Systems</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        {posts.map((post, i) => (
          <div key={i} className="group cursor-pointer">
            <div className="relative overflow-hidden rounded-[40px] mb-8 aspect-[16/10]">
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
              />
              <div className="absolute top-6 left-6 bg-white/90 backdrop-blur px-4 py-2 rounded-full text-[10px] uppercase font-bold tracking-widest">
                {post.category}
              </div>
            </div>
            <div className="px-4">
              <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-4 block">{post.date}</span>
              <h3 className="text-3xl serif mb-4 group-hover:text-gray-500 transition-colors leading-tight">{post.title}</h3>
              <p className="text-gray-500 leading-relaxed font-light">{post.excerpt}</p>
              <button className="mt-6 text-sm font-bold uppercase tracking-widest underline underline-offset-8 decoration-gray-200 group-hover:decoration-black transition-all">Read Essay</button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-32 p-16 bg-white border border-gray-100 rounded-[60px] text-center card-shadow">
        <h2 className="text-3xl serif mb-6 italic">The Sunday Prompt.</h2>
        <p className="text-gray-500 mb-10 max-w-xl mx-auto">One essay. One reflection prompt. One grounding thought. Delivered every Sunday morning to help you plan your week with clarity.</p>
        <form className="flex flex-col sm:flex-row w-full max-w-md mx-auto gap-3">
          <input className="flex-grow px-8 py-5 bg-[#FAF9F6] border border-gray-100 rounded-full focus:outline-none" placeholder="Enter your email" />
          <button className="px-10 py-5 bg-black text-white rounded-full font-medium">Join 5,000+ Readers</button>
        </form>
      </div>
    </div>
  );
};

export default Journal;
