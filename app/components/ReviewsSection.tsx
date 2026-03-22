import { sql } from '@vercel/postgres';
import AddReviewModal from './AddReviewModal';

export default async function ReviewsSection() {
  let reviews: any[] = [];
  let avgRating = "4.9";
  let totalRatings = "1.7M";
  let ratingsCount = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };

  try {
    const data = await sql`SELECT * FROM reviews ORDER BY created_at DESC LIMIT 15`;
    reviews = data.rows;
    if (reviews.length > 0) {
      const sum = reviews.reduce((acc, curr) => acc + curr.rating, 0);
      avgRating = (sum / reviews.length).toFixed(1);
      totalRatings = reviews.length.toString();
      
      reviews.forEach(r => {
        if (r.rating >= 1 && r.rating <= 5) ratingsCount[r.rating as keyof typeof ratingsCount]++;
      });
    }
  } catch (e) {
    console.error("DB not initialized yet or query failed.", e);
  }

  // Width generator for bars
  const getWidth = (count: number) => {
    if (reviews.length === 0) return '0%';
    return `${(count / reviews.length) * 100}%`;
  };
  const StarIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-2.5 h-2.5">
      <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
    </svg>
  );

  return (
    <section className="w-full mt-10">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-[22px] font-bold text-white flex items-center gap-1 cursor-pointer hover:opacity-80 transition-opacity">
          Ratings & Reviews 
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-[18px] h-[18px] text-gray-500 mt-0.5"><path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" /></svg>
        </h2>
        <AddReviewModal />
      </div>

      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <div className="flex flex-col items-center">
            <span className="text-[64px] font-bold text-white leading-none tracking-tighter">{avgRating}</span>
            <span className="text-[14px] font-bold text-gray-400 mt-1">out of 5</span>
          </div>

          <div className="flex flex-col gap-1 w-[140px] md:w-[200px] mt-1">
            {/* 5 Stars */}
            <div className="flex items-center gap-2">
              <div className="flex text-gray-500 justify-end w-[45px] gap-0.5">
                {Array.from({length: 5}).map((_, i) => <StarIcon key={`5-${i}`} />)}
              </div>
              <div className="h-1.5 flex-1 bg-[#333] rounded-full overflow-hidden"><div className="h-full bg-white w-[95%]"></div></div>
            </div>
            {/* 4 Stars */}
            <div className="flex items-center gap-2">
              <div className="flex text-gray-500 justify-end w-[45px] gap-0.5">
                {Array.from({length: 4}).map((_, i) => <StarIcon key={`4-${i}`} />)}
              </div>
              <div className="h-1.5 flex-1 bg-[#333] rounded-full overflow-hidden"><div className="h-full bg-white w-[12%]"></div></div>
            </div>
            {/* 3 Stars */}
            <div className="flex items-center gap-2">
              <div className="flex text-gray-500 justify-end w-[45px] gap-0.5">
                {Array.from({length: 3}).map((_, i) => <StarIcon key={`3-${i}`} />)}
              </div>
              <div className="h-1.5 flex-1 bg-[#333] rounded-full overflow-hidden"><div className="h-full bg-white w-[4%]"></div></div>
            </div>
            {/* 2 Stars */}
            <div className="flex items-center gap-2">
              <div className="flex text-gray-500 justify-end w-[45px] gap-0.5">
                {Array.from({length: 2}).map((_, i) => <StarIcon key={`2-${i}`} />)}
              </div>
              <div className="h-1.5 flex-1 bg-[#333] rounded-full overflow-hidden"><div className="h-full bg-white w-[1%]"></div></div>
            </div>
            {/* 1 Stars */}
            <div className="flex items-center gap-2">
              <div className="flex text-gray-500 justify-end w-[45px] gap-0.5">
                {Array.from({length: 1}).map((_, i) => <StarIcon key={`1-${i}`} />)}
              </div>
              <div className="h-1.5 flex-1 bg-[#333] rounded-full overflow-hidden"><div className="h-full bg-white w-[2%]"></div></div>
            </div>
          </div>
        </div>

        <div className="text-[14px] text-gray-500 mt-auto mb-1">
          {totalRatings} Ratings
        </div>
      </div>

      {/* Review Cards */}
      <div className="flex overflow-x-auto gap-4 scrollbar-hide snap-x pb-4">
        {/* Editors Choice Card */}
        <div className="flex-none w-[320px] md:w-[380px] bg-[#222224] rounded-2xl p-5 snap-center flex flex-col justify-start">
          <div className="flex justify-center items-center gap-2 mb-3 mt-1">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-400"><path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" /></svg>
            <span className="text-[17px] font-bold text-white tracking-wide">Editors' Choice</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-400 scale-x-[-1]"><path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" /></svg>
          </div>
          <p className="text-[14px] leading-[1.4] text-[#e5e5e5]">
            More than just a standard developer, Kartikay has been upgraded to become one of the most engaging, talented, and reliable engineers around. Of course, writing clean code is still a huge highlight—but with smart UI/UX implementations, an awesome design eye... <span className="text-[#1e86ff] cursor-pointer">more</span>
          </p>
        </div>

        {/* Dynamic Reviews from DB */}
        {reviews.map((review) => {
          const dateStr = new Date(review.created_at).toLocaleDateString(undefined, { year: 'numeric', month: '2-digit', day: '2-digit' });
          return (
            <div key={review.id} className="flex-none w-[320px] md:w-[380px] bg-[#222224] rounded-2xl p-5 snap-center flex flex-col justify-start">
              <div className="flex justify-between items-start mb-1">
                <span className="text-[15px] font-bold text-white leading-tight">{review.title}</span>
                <span className="text-[13px] text-gray-500">{dateStr}</span>
              </div>
              <div className="flex justify-between items-center mb-3">
                <div className="flex text-[#ff8c00] gap-0.5">
                  {Array.from({length: review.rating}).map((_, i) => <StarIcon key={`s-full-${i}`} />)}
                  {Array.from({length: 5 - review.rating}).map((_, i) => (
                    <svg key={`s-empty-${i}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3.5 h-3.5 text-gray-600">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                    </svg>
                  ))}
                </div>
                <span className="text-[13px] text-gray-500">{review.name}</span>
              </div>
              <p className="text-[14px] leading-[1.4] text-[#e5e5e5] whitespace-pre-wrap">
                {review.content}
              </p>
            </div>
          );
        })}
      </div>

      <hr className="border-gray-800 mt-10" />
    </section>
  );
}
