import Header from "./components/Header";
import MediaSection from "./components/MediaSection";
import DescriptionSection from "./components/DescriptionSection";
import EventsSection from "./components/EventsSection";
import ReviewsSection from "./components/ReviewsSection";
import WhatsNewSection from "./components/WhatsNewSection";
import InformationSection from "./components/InformationSection";
import FeaturedInSection from "./components/FeaturedInSection";
import YouMightAlsoLikeSection from "./components/YouMightAlsoLikeSection";

export default async function Page() {
  const userRes = await fetch("https://api.github.com/users/Kartikayy007", { next: { revalidate: 3600 } });
  const userData = await userRes.json();

  const reposRes = await fetch("https://api.github.com/users/Kartikayy007/repos?sort=updated&per_page=30", { next: { revalidate: 3600 } });
  let allRepos = await reposRes.json();
  if (!Array.isArray(allRepos)) allRepos = [];

  const topRepos = [...allRepos].sort((a, b) => (b.stargazers_count || 0) - (a.stargazers_count || 0)).slice(0, 3);
  
  const otherRepos = allRepos.filter((r: any) => !topRepos.find((tr: any) => tr.id === r.id));

  return (
    <main className="min-h-screen pb-20">
      <Header userData={userData} />
      <div className="max-w-5xl mx-auto px-6 lg:px-12">
        <MediaSection reposData={topRepos} />
        <DescriptionSection userData={userData} />
        <EventsSection reposData={allRepos} />
        <ReviewsSection />
        <WhatsNewSection reposData={allRepos} />
        <InformationSection userData={userData} reposData={allRepos} />
        <FeaturedInSection />
        <YouMightAlsoLikeSection reposData={otherRepos} />
      </div>
    </main>
  );
}
