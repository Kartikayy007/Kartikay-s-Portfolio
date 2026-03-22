"use client";
import QuickInfoBar from "./QuickInfoBar";

export default function Header({ userData }: any) {
  return (
    <div className="w-full text-white">
      {/* Gradient Header Area */}
      <div className="w-full bg-gradient-to-br from-[#FF5A60] via-[#fc4a6a] to-[#ffb8c1] pt-12 pb-10">
        <div className="max-w-5xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center md:items-start gap-8">
          
          {/* App Icon */}
          <div className="relative flex-shrink-0 mt-4">
            <img
              src={userData?.avatar_url || "https://images.unsplash.com/photo-1547082299-de196ea013d6?w=400&h=400&fit=crop"}
              alt="App Icon"
              className="w-[140px] h-[140px] md:w-[150px] md:h-[150px] rounded-[34px] shadow-[0_4px_24px_rgba(0,0,0,0.15)] object-cover bg-white"
            />
          </div>
          
          {/* App Info */}
          <div className="flex flex-col text-center md:text-left mt-2 md:mt-3 flex-1">
            <h1 className="text-3xl md:text-[36px] font-bold tracking-tight drop-shadow-sm leading-tight text-white line-clamp-2">
              {userData?.name || userData?.login || "Kartikay Singh"}
            </h1>
            <p className="text-lg md:text-[20px] font-semibold text-white/90 mt-1 drop-shadow-sm line-clamp-1">
              {userData?.bio || "Full Stack & iOS Developer"}
            </p>
            <p className="text-sm md:text[14px] font-medium text-white/70 mt-1.5">
              Open for Opportunities
            </p>

            {/* Action Button: Pill Shape Share */}
            <div className="mt-5 flex justify-center md:justify-start">
              <button 
                onClick={() => {
                  if (navigator.share) {
                    navigator.share({
                      title: 'Kartikay Singh - Portfolio',
                      url: window.location.href
                    }).catch(console.error);
                  } else {
                    navigator.clipboard.writeText(window.location.href);
                    alert("Link copied to clipboard!");
                  }
                }}
                className="flex items-center justify-center gap-2 px-5 py-1.5 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md transition-colors font-semibold text-white text-[15px]"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
                </svg>
                Share
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Info Bar */}
      <div className="w-full bg-[#18181b] border-b border-gray-800">
        <div className="max-w-5xl mx-auto px-6 lg:px-12 py-5">
          <QuickInfoBar userData={userData} />
        </div>
      </div>
    </div>
  );
}
