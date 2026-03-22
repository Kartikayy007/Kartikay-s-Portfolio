export default function FeaturedInSection() {
  return (
    <section className="w-full mt-10">
      <h2 className="text-[22px] font-bold text-white mb-4">Featured In</h2>
      
      <div className="flex overflow-x-auto gap-4 scrollbar-hide snap-x pb-4">
        {/* Card 1 */}
        <div className="flex-none w-[280px] md:w-[360px] snap-center group cursor-pointer">
          <div className="w-full aspect-[4/3] rounded-xl overflow-hidden mb-3 relative bg-[#1e1e24]">
            <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=450&fit=crop" alt="Featured 1" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
          </div>
          <span className="text-[11px] font-bold text-gray-400 tracking-wider uppercase">Get Started</span>
          <h3 className="text-[17px] font-semibold text-white leading-tight mt-0.5 group-hover:underline">5 Tips to Build Your Portfolio</h3>
          <p className="text-[14px] text-gray-500 mt-1 line-clamp-2">The best features to level up your front-end architecture and UI.</p>
        </div>

        {/* Card 2 */}
        <div className="flex-none w-[280px] md:w-[360px] snap-center group cursor-pointer">
          <div className="w-full aspect-[4/3] rounded-xl overflow-hidden mb-3 relative bg-[#1e1e24]">
            <img src="https://images.unsplash.com/photo-1618477388954-7852f32655ec?w=600&h=450&fit=crop" alt="Featured 2" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
          </div>
          <span className="text-[11px] font-bold text-gray-400 tracking-wider uppercase">App Culture</span>
          <h3 className="text-[17px] font-semibold text-white leading-tight mt-0.5 group-hover:underline">Travel With Code</h3>
          <p className="text-[14px] text-gray-500 mt-1 line-clamp-2">How remote work shapes the modern developer's life and codebase.</p>
        </div>
      </div>
      
      <hr className="border-gray-800 mt-6" />
    </section>
  );
}
