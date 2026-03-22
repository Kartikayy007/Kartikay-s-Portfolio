"use client";
import { useState } from "react";

export default function DescriptionSection({ userData }: any) {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="w-full mt-10 relative">
      <h2 className="text-[22px] font-bold text-white mb-3">About the Developer</h2>
      
      <div className={`text-[#e5e5e5] text-[15px] leading-[1.6] overflow-hidden transition-all duration-300 ${expanded ? 'max-h-[3000px]' : 'max-h-[160px]'}`}>
        
        <p className="mb-4 text-white font-medium">
          Kartikay Singh Pundir is a software engineer based in Ghaziabad, India, specializing in native iOS development, full-stack web, and cloud infrastructure.
        </p>

        <p className="mb-4">
          He ships production iOS apps with real-world traction — TrackSheet 2 hit 3.2K+ installs and 1.3K daily active users, while BunkBite achieved a 26.4% App Store conversion rate and 0% crash rate. On the web side, he builds with React, Next.js, TypeScript, and Python, backed by AWS infrastructure spanning Lambda, API Gateway, Cognito, DynamoDB, Step Functions, and WebSocket APIs.
        </p>
        
        <p className="mb-4">
          His work ranges from SwiftUI interfaces with CoreMotion and HealthKit, to Hexagonal-architected microservices handling 10K+ concurrent connections, to AI pipelines using LangChain, Groq, and Gemini.
        </p>

        <p className="mb-4">
          <strong>Achievements:</strong> Smart India Hackathon winner &middot; Codeforces Specialist (max 1429) &middot; 1st place, INCLUDE 3.0 (500+ participants) &middot; 1st place, HackTech 2025
        </p>

      </div>
      
      {/* Expanding Overlay */}
      {!expanded && (
        <div className="absolute bottom-0 right-0 bg-[#151515] bg-opacity-90 pl-6 py-1 flex items-center shadow-[-20px_0_15px_-5px_#151515]">
          <button 
            onClick={() => setExpanded(true)}
            className="text-[#1e86ff] text-[15px] font-semibold hover:opacity-80 transition-opacity"
          >
            more
          </button>
        </div>
      )}

      <hr className="border-gray-800 mt-6" />
    </section>
  );
}
