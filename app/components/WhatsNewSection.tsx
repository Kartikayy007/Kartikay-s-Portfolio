export default function WhatsNewSection({ reposData }: any) {
  const latestRepo = reposData?.[0];
  const dateStr = latestRepo?.updated_at 
    ? new Date(latestRepo.updated_at).toLocaleDateString(undefined, {month: 'short', day: 'numeric'}) 
    : "1d ago";

  return (
    <section className="w-full mt-10">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-[22px] font-bold text-white flex items-center gap-1 cursor-pointer hover:opacity-80 transition-opacity">
          What's New 
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-[18px] h-[18px] text-gray-500 mt-0.5"><path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" /></svg>
        </h2>
      </div>

      <div className="flex flex-col md:flex-row justify-between mb-4 mt-2">
        <p className="text-[15px] text-[#e5e5e5] leading-[1.6] md:max-w-[70%] order-2 md:order-1 mt-4 md:mt-0">
          We've improved how you find and connect with the right developer you want—whether it's an app, a website, or something long-term.
          <br /><br />
          Get one step closer to what you're looking for with an upgraded tech stack, integrating Next.js 15, Tailwind CSS v4, and fully native web implementations of native UI patterns.
        </p>

        <div className="flex flex-col text-left md:text-right order-1 md:order-2">
          <span className="text-[15px] text-gray-400">Latest Commit</span>
          <span className="text-[14px] text-gray-500 mt-0.5">{dateStr}</span>
        </div>
      </div>

      <hr className="border-gray-800 mt-10" />
    </section>
  );
}
