"use client";
import { useRef } from "react";

export default function MediaSection({ reposData }: any) {
  const topRepos = reposData?.slice(0, 3) || [];
  const scrollRef = useRef<HTMLDivElement>(null);

  // Reliable Tenor GIF links 
  const bgGifs = [
    "https://media.giphy.com/media/NTur7XlVDUdqM/giphy.gif", 
    "https://tenor.com/view/cat-gif-26024704.gif", 
    "https://tenor.com/view/laptop-gif-26065234.gif", 
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -350 : 350;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="w-full mt-6 relative group/section">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-[22px] font-bold text-white">Top Repositories</h2>
        <div className="hidden md:flex gap-2 opacity-0 group-hover/section:opacity-100 transition-opacity">
          <button 
            onClick={() => scroll('left')} 
            className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-gray-700 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" /></svg>
          </button>
          <button 
            onClick={() => scroll('right')} 
            className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-gray-700 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg>
          </button>
        </div>
      </div>
      
      {/* Scrollable container */}
      <div 
        ref={scrollRef} 
        className="flex overflow-x-auto gap-4 pb-4 scrollbar-hide snap-x"
      >
        {topRepos.map((repo: any, index: number) => (
          <div key={repo.id || repo.name} className="relative flex-none w-[280px] md:w-[450px] aspect-[16/10] rounded-xl overflow-hidden border border-gray-800 snap-center bg-[#1c1c1e] p-6 md:p-8 flex flex-col justify-between group cursor-pointer">
            
            {/* Animated GIF Background with low opacity */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-[0.3] group-hover:opacity-[0.15] transition-opacity duration-500 scale-[1.05]">
              <img 
                src={bgGifs[index % bgGifs.length]} 
                alt="bg" 
                className="w-full h-full object-cover mix-blend-screen"
              />
            </div>
            
            <div className="relative z-10 pointer-events-none">
              <h3 className="text-xl md:text-[24px] font-bold text-white mb-2 leading-tight drop-shadow-md">{repo.name}</h3>
              <p className="text-[14px] md:text-[15px] text-gray-400 line-clamp-3 md:line-clamp-4 leading-relaxed drop-shadow-md">{repo.description || "No description provided."}</p>
            </div>
            <div className="relative z-10 flex justify-between items-end mt-4 pointer-events-none">
              <span className="text-xs font-bold px-2.5 py-1 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20 shadow-sm">{repo.language || "Code"}</span>
              <span className="text-xs font-semibold text-gray-400 flex items-center gap-1.5 drop-shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-yellow-500"><path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" /></svg>
                {repo.stargazers_count}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center gap-2 mt-2 text-[#8e8e93]">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-[18px] h-[18px]">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25" />
        </svg>
        <span className="text-[12px] font-semibold tracking-wide">Mac</span>
      </div>
      
      <hr className="border-gray-800 mt-8" />
    </section>
  );
}
