export default function EventsSection({ reposData }: any) {
  const latestRepo = reposData?.[0];

  return (
    <section className="w-full mt-10">
      <h2 className="text-[22px] font-bold text-white mb-4">Events</h2>
      
      <div className="flex flex-col">
        <span className="text-[12px] font-bold tracking-widest text-[#1e86ff] mb-2 uppercase">Now Available</span>
        
        <div className="relative w-full md:w-[450px] aspect-[16/9] rounded-2xl overflow-hidden cursor-pointer group">
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=450&fit=crop" 
            alt="Event Background" 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          
          {/* Internal shadow overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
          
          <div className="absolute bottom-4 left-4 right-4 text-white">
            <span className="text-[11px] font-semibold tracking-wider text-white/80 uppercase">Latest Project Update</span>
            <h3 className="text-[24px] font-bold leading-tight mt-1">{latestRepo?.name || "Version 2.0 Launch"}</h3>
            <p className="text-[14px] text-white/90 mt-1 line-clamp-2">{latestRepo?.description || "Exploring new framework structures, lightning-fast transitions, and the App Store UI look."}</p>
          </div>
        </div>
      </div>
      
      <hr className="border-gray-800 mt-10" />
    </section>
  );
}
