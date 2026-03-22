export default function QuickInfoBar({ userData }: any) {
  return (
    <div className="w-full overflow-x-auto scrollbar-hide">
      <div className="flex items-center min-w-max md:w-full justify-between gap-8 md:gap-4 text-[#8e8e93]">
        
        {/* Item 1 */}
        <div className="flex flex-col items-center min-w-[100px]">
          <span className="text-[10px] font-bold tracking-wider text-gray-400 mb-1 uppercase">Repositories</span>
          <span className="text-[22px] font-bold text-[#e5e5e5]">{userData?.public_repos || "30"}</span>
          <div className="flex gap-0.5 mt-0.5 text-gray-400">
            {/* Stars rendering */}
            {Array.from({length: 5}).map((_, i) => (
              <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={i === 4 ? "url(#half)" : "currentColor"} className={`w-3.5 h-3.5 ${i === 4 ? "text-gray-600" : ""}`}>
                <defs>

                  <linearGradient id="half">
                    <stop offset="50%" stopColor="currentColor" />
                    <stop offset="50%" stopColor="transparent" />
                  </linearGradient>
                </defs>
                <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
              </svg>
            ))}
          </div>
        </div>

        <div className="w-[1px] h-9 bg-gray-800 hidden md:block" />

        {/* Item 2 */}
        <div className="flex flex-col items-center min-w-[100px]">
          <span className="text-[10px] font-bold tracking-wider text-gray-400 mb-1">AWARDS</span>
          <span className="text-[13px] font-medium text-[#e5e5e5] mt-1 text-center leading-tight">Editors'<br/>Choice</span>
          <span className="text-[11px] text-gray-500 mt-1">Portfolio</span>
        </div>

        <div className="w-[1px] h-9 bg-gray-800 hidden md:block" />

        {/* Item 3 */}
        <div className="flex flex-col items-center min-w-[100px]">
          <span className="text-[10px] font-bold tracking-wider text-gray-400 mb-1">EXPERIENCE</span>
          <span className="text-[22px] font-bold text-[#e5e5e5]">5+</span>
          <span className="text-[11px] text-gray-500 mt-0.5">Years</span>
        </div>

        <div className="w-[1px] h-9 bg-gray-800 hidden md:block" />

        {/* Item 4 */}
        <div className="flex flex-col items-center min-w-[100px]">
          <span className="text-[10px] font-bold tracking-wider text-gray-400 mb-1">CATEGORY</span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-[26px] h-[26px] mt-0.5 text-[#e5e5e5]">
            <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75 16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z" />
          </svg>
          <span className="text-[11px] text-gray-500 mt-1">Engineering</span>
        </div>

        <div className="w-[1px] h-9 bg-gray-800 hidden md:block" />
        
        {/* Item 5 */}
        <div className="flex flex-col items-center min-w-[100px]">
          <span className="text-[10px] font-bold tracking-wider text-gray-400 mb-1">DEVELOPER</span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-[26px] h-[26px] mt-0.5 text-[#e5e5e5]">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
          </svg>
          <span className="text-[11px] text-gray-500 mt-1">{userData?.login || "Kartikay"}</span>
        </div>

        <div className="w-[1px] h-9 bg-gray-800 hidden md:block" />

        {/* Item 6 */}
        <div className="flex flex-col items-center min-w-[100px]">
          <span className="text-[10px] font-bold tracking-wider text-gray-400 mb-1">FOLLOWERS</span>
          <span className="text-[22px] font-bold text-[#e5e5e5]">{userData?.followers || "0"}</span>
          <span className="text-[11px] text-gray-500 mt-0.5">Following {userData?.following || "0"}</span>
        </div>

        <div className="w-[1px] h-9 bg-gray-800 hidden md:block" />

        {/* Item 7 */}
        <div className="flex flex-col items-center min-w-[100px]">
          <span className="text-[10px] font-bold tracking-wider text-gray-400 mb-1">SIZE</span>
          <span className="text-[22px] font-bold text-[#e5e5e5]">104.5</span>
          <span className="text-[11px] text-gray-500 mt-0.5">MB</span>
        </div>

      </div>
    </div>
  );
}
