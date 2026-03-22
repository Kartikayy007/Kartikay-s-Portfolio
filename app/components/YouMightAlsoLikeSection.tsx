export default function YouMightAlsoLikeSection({ reposData }: any) {
  // Use remaining repos or an empty array if none
  const otherRepos = reposData || [];
  if (otherRepos.length === 0) return null;

  // GIF backgrounds for the icon boxes
  const iconGifs = [
    "https://media.giphy.com/media/13HgwGsXF0aiGY/giphy.gif",
    "https://media.giphy.com/media/aB5xY1mB6o22Y/giphy.gif",
    "https://media.giphy.com/media/3ov9jEciDzP1J8Hl84/giphy.gif",
    "https://media.giphy.com/media/26tn33aiTi1jVDzO0/giphy.gif",
    "https://media.giphy.com/media/l41YtZOb9EUABnuqA/giphy.gif"
  ];

  return (
    <section className="w-full mt-10">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-[22px] font-bold text-white flex items-center gap-1 cursor-pointer hover:opacity-80 transition-opacity">
          You Might Also Like 
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-[18px] h-[18px] text-gray-500 mt-0.5"><path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" /></svg>
        </h2>
      </div>

      <div className="w-full overflow-x-auto pb-6 scrollbar-hide snap-x">
        <div className="grid grid-rows-2 grid-flow-col gap-x-8 gap-y-4 w-max">
          {otherRepos.map((repo: any, index: number) => {
            const gifUrl = iconGifs[index % iconGifs.length];
            return (
              <div key={repo.id || repo.name} className="w-[300px] md:w-[320px] flex items-center gap-3 snap-center cursor-pointer group">
                {/* Repo Icon */}
                <div className={`w-[60px] h-[60px] flex-shrink-0 rounded-[14px] border border-gray-700/50 flex flex-col items-center justify-center shadow-sm overflow-hidden relative bg-[#1c1c1e]`}>
                  <img src={gifUrl} alt="icon-bg" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                <div className="flex-1 min-w-0 pr-2 border-b border-gray-800/50 pb-2">
                  <h4 className="text-[15px] font-semibold text-[#e5e5e5] leading-tight line-clamp-1 group-hover:text-white transition-colors">{repo.name}</h4>
                  <p className="text-[13px] text-gray-500 line-clamp-1 mt-0.5">{repo.description || "Open Source Repository"}</p>
                </div>

                <a 
                  href={repo.html_url}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-shrink-0 w-[60px] h-[28px] bg-[#2c2c2e] hover:bg-[#3a3a3c] rounded-full flex items-center justify-center text-[13px] font-bold text-[#1e86ff] transition-colors -my-1 self-center"
                >
                  View
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
