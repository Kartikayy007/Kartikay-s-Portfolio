export default function MediaSection({ reposData }: any) {
  const topRepos = reposData?.slice(0, 3) || [];

  return (
    <section className="w-full mt-6">
      <h2 className="text-[22px] font-bold text-white mb-4">Top Repositories</h2>
      
      {/* Scrollable container */}
      <div className="flex overflow-x-auto gap-4 pb-4 scrollbar-hide snap-x">
        {topRepos.map((repo: any) => (
          <div key={repo.id || repo.name} className="relative flex-none w-[280px] md:w-[450px] aspect-[16/10] rounded-xl overflow-hidden border border-gray-800 snap-center bg-[#1a1a1c] p-6 md:p-8 flex flex-col justify-between">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 pointer-events-none"></div>
            <div className="relative z-10">
              <h3 className="text-xl md:text-[24px] font-bold text-white mb-2 leading-tight">{repo.name}</h3>
              <p className="text-[14px] md:text-[15px] text-gray-400 line-clamp-3 md:line-clamp-4 leading-relaxed">{repo.description || "No description provided."}</p>
            </div>
            <div className="relative z-10 flex justify-between items-end mt-4">
              <span className="text-xs font-bold px-2.5 py-1 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20">{repo.language || "Code"}</span>
              <span className="text-xs font-semibold text-gray-500 flex items-center gap-1.5">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5"><path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" /></svg>
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
