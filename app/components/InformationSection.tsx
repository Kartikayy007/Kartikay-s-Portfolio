export default function InformationSection({ userData, reposData }: any) {
  // Try to calculate an arbitrary size from repos or mock it
  const totalKb = reposData?.reduce((acc: number, curr: any) => acc + (curr.size || 0), 0) || 376500;
  const sizeMb = (totalKb / 1024).toFixed(1);
  
  // Try to find languages
  const langsList = Array.from(new Set(reposData?.map((r: any) => r.language).filter(Boolean)));
  const langsStr = langsList.length > 0 
    ? `${langsList[0]}${langsList.length > 1 ? ` and ${langsList.length - 1} more` : ''}`
    : "EN";

  const data = [
    { label: "Provider", value: userData?.name || userData?.login || "Kartikay Singh Pundir" },
    { label: "Size", value: `${sizeMb} MB` },
    { label: "Category", value: "Developer Tools" },
    { label: "Compatibility", value: "Works on this device", collapsable: true },
    { label: "Languages", value: langsStr, collapsable: true },
    { label: "Age Rating", value: "4+", collapsable: true },
    { label: "Copyright", value: `© ${new Date().getFullYear()} ${userData?.name || "Kartikay Singh Pundir"}` },
  ];

  return (
    <section className="w-full mt-10">
      <h2 className="text-[22px] font-bold text-white mb-4">Information</h2>
      
      <div className="flex flex-col">
        {data.map((item, i) => (
          <div key={item.label} className={`flex justify-between py-3.5 ${i !== data.length - 1 ? 'border-b border-gray-800/60' : ''}`}>
            <span className="text-[15px] text-[#8e8e93] whitespace-nowrap">{item.label}</span>
            <div className="flex items-center gap-1 cursor-pointer text-right">
              <span className="text-[15px] text-[#e5e5e5]">{item.value}</span>
              {item.collapsable && (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-[14px] h-[14px] text-gray-500 mt-0.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-4 mt-6 pb-2">
        <div className="flex justify-between items-center cursor-pointer group">
          <span className="text-[15px] text-[#1e86ff] group-hover:underline">Developer Website</span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-gray-600"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" /></svg>
        </div>
        <div className="flex justify-between items-center cursor-pointer group">
          <span className="text-[15px] text-[#1e86ff] group-hover:underline">Privacy Policy</span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-gray-600"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" /></svg>
        </div>
      </div>
    </section>
  );
}
