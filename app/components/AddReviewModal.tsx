"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddReviewModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.currentTarget);
    const data = {
      title: formData.get("title"),
      name: formData.get("name"),
      rating: parseInt(formData.get("rating") as string),
      content: formData.get("content"),
    };

    try {
      await fetch("/api/reviews", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      setIsOpen(false);
      router.refresh(); // Refresh Server Components to show the new review
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className="text-[15px] text-[#1e86ff] hover:opacity-80 transition-opacity font-semibold"
      >
        Write a Review
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="bg-[#1c1c1e] w-full max-w-md rounded-2xl shadow-2xl border border-gray-800 overflow-hidden">
            <div className="flex justify-between items-center p-4 border-b border-gray-800">
              <h3 className="text-white font-bold">Write a Review</h3>
              <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white">✕</button>
            </div>
            
            <form onSubmit={handleSubmit} className="p-4 flex flex-col gap-4">
              <div>
                <label className="text-[13px] text-gray-400 mb-1 block">Your Name (Alias)</label>
                <input required name="name" type="text" className="w-full bg-[#2c2c2e] text-white rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[#1e86ff]" placeholder="e.g. CodeNinja99" />
              </div>
              
              <div>
                <label className="text-[13px] text-gray-400 mb-1 block">Review Title</label>
                <input required name="title" type="text" className="w-full bg-[#2c2c2e] text-white rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[#1e86ff]" placeholder="e.g. Absolutely flawless!" />
              </div>

              <div>
                <label className="text-[13px] text-gray-400 mb-1 block">Rating (1-5)</label>
                <select required name="rating" className="w-full bg-[#2c2c2e] text-white rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[#1e86ff]">
                  <option value="5">5 Stars</option>
                  <option value="4">4 Stars</option>
                  <option value="3">3 Stars</option>
                  <option value="2">2 Stars</option>
                  <option value="1">1 Star</option>
                </select>
              </div>

              <div>
                <label className="text-[13px] text-gray-400 mb-1 block">Review Text</label>
                <textarea required name="content" rows={4} className="w-full bg-[#2c2c2e] text-white rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[#1e86ff] resize-none" placeholder="Write your thoughts here..."></textarea>
              </div>

              <button 
                type="submit" 
                disabled={loading}
                className="w-full bg-[#1e86ff] text-white font-bold rounded-xl py-3 mt-2 hover:opacity-90 transition-opacity disabled:opacity-50"
              >
                {loading ? "Submitting..." : "Submit Review"}
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
