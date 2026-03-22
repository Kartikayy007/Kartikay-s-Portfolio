export default function InformationSection({ userData, reposData }: any) {
  // Try to calculate an arbitrary size from repos or mock it
  const totalKb = reposData?.reduce((acc: number, curr: any) => acc + (curr.size || 0), 0) || 376500;
  const sizeMb = (totalKb / 1024).toFixed(1);
  
  // Try to find languages
  const langsList = Array.from(new Set(reposData?.map((r: any) => r.language).filter(Boolean)));
  const langsStr = langsList.length > 0 
    ? `${langsList[0]}${langsList.length > 1 ? ` and ${langsList.length - 1} more` : ''}`
    : "English";

  return (
    <section className="w-full mt-10">
      <h2 className="text-[22px] font-bold text-white mb-4">Information</h2>
      
      <div className="flex flex-col gap-0 md:flex-row md:flex-wrap">
        
        {/* Item 1 */}
        <div className="w-full md:w-1/2 flex justify-between py-3 border-b border-gray-800 md:pr-6">
          <span className="text-[15px] text-gray-500">Seller</span>
          <span className="text-[15px] text-[#e5e5e5]">{userData?.name || userData?.login || "Kartikay LLC"}</span>
        </div>

        {/* Item 2 */}
        <div className="w-full md:w-1/2 flex justify-between py-3 border-b border-gray-800 md:pl-6">
          <span className="text-[15px] text-gray-500">Size</span>
          <span className="text-[15px] text-[#e5e5e5]">{sizeMb} MB</span>
        </div>

        {/* Item 3 */}
        <div className="w-full md:w-1/2 flex justify-between py-3 border-b border-gray-800 md:pr-6">
          <span className="text-[15px] text-gray-500">Category</span>
          <span className="text-[15px] text-[#e5e5e5]">Developer / Software</span>
        </div>

        {/* Item 4 */}
        <div className="w-full md:w-1/2 flex justify-between py-3 border-b border-gray-800 md:pl-6">
          <span className="text-[15px] text-gray-500">Compatibility</span>
          <div className="flex items-center gap-1 cursor-pointer">
            <span className="text-[15px] text-[#e5e5e5]">Works on modern Web</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-[14px] h-[14px] text-gray-500 mt-0.5"><path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" /></svg>
          </div>
        </div>

        {/* Item 5 */}
        <div className="w-full md:w-1/2 flex justify-between py-3 border-b border-gray-800 md:pr-6">
          <span className="text-[15px] text-gray-500">Languages</span>
          <div className="flex items-center gap-1 cursor-pointer">
            <span className="text-[15px] text-[#e5e5e5]">{langsStr}</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-[14px] h-[14px] text-gray-500 mt-0.5"><path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" /></svg>
          </div>
        </div>

        {/* Item 6 */}
        <div className="w-full md:w-1/2 flex justify-between py-3 border-b border-gray-800 md:pl-6">
          <span className="text-[15px] text-gray-500">Age Rating</span>
          <div className="flex items-center gap-1 cursor-pointer">
            <span className="text-[15px] text-[#e5e5e5]">4+</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-[14px] h-[14px] text-gray-500 mt-0.5"><path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" /></svg>
          </div>
        </div>

        {/* Item 7 */}
        <div className="w-full md:w-1/2 flex justify-between py-3 border-b border-gray-800 md:pr-6">
          <span className="text-[15px] text-gray-500">Copyright</span>
          <span className="text-[15px] text-[#e5e5e5]">© 2026 {userData?.name || "Kartikay"}.</span>
        </div>
      </div>

      <div className="flex flex-wrap gap-x-6 gap-y-3 mt-6 text-[15px] text-[#1e86ff] cursor-pointer">
        <span className="hover:underline flex items-center gap-1">Developer Website <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3.5 h-3.5"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" /></svg></span>
        <span className="hover:underline flex items-center gap-1">Privacy Policy <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3.5 h-3.5"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" /></svg></span>
        <span className="hover:underline">License Agreement</span>
      </div>

    </section>
  );
}
