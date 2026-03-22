"use client";

import { useState } from "react";

export default function DescriptionSection({ userData }: any) {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="w-full mt-6">
      <div className="relative">
        <p className={`text-[#e5e5e5] text-[15px] leading-[1.6] ${!expanded ? "line-clamp-3" : ""}`}>
          {userData?.bio ? `${userData.bio}\n\n` : ""}Hi there! I am Kartikay Singh, a dedicated Software Engineer and UI/UX Designer aiming to craft flawless digital experiences. This App Store portfolio is a showcase of my ability to replicate complex, high-fidelity UI constraints using Next.js and Tailwind CSS natively on the web. Over the past 5+ years, I have worked independently building dynamic, full-stack tools integrating everything from complex web rendering pipelines and interactive user interfaces to scalable infrastructure.
          <br /><br />
          My development philosophy emphasizes visual clarity, responsive fluid motion, and strict attention to human-interface guidelines. I love pushing the boundaries of web apps to feel like native experiences. Have a project that needs a polished touch? Let's connect!
        </p>
        
        {!expanded && (
          <button 
            onClick={() => setExpanded(true)}
            className="text-[#1e86ff] hover:opacity-80 transition-opacity font-medium text-[15px] absolute bottom-0 right-0 bg-[#1e1e24] pl-3 leading-[1.6]"
          >
            more
          </button>
        )}
      </div>

      <div className="mt-8 flex justify-between items-center cursor-pointer group">
        <div>
          <h3 className="text-[15px] text-[#1e86ff] group-hover:underline mb-0.5">Kartikay LLC</h3>
          <p className="text-[13px] text-gray-500">Developer</p>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-[18px] h-[18px] text-gray-500">
          <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
        </svg>
      </div>

      <hr className="border-gray-800 mt-6" />
    </section>
  );
}
