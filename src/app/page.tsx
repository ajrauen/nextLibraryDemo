import SitePageHeader from "@/components/site-page/site-page-header/site-page-header";
import SitePageBlurb from "@/components/site-page/site-page-blurb/sit-page-blurb";
import Discover from "@/components/site-page/discover/discover";

const Home = async () => {
  return (
    <main className="flex flex-col min-w-[1000px]">
      <SitePageHeader />
      <div className="flex w-full  flex=row">
        <div className="flex flex=col mx-auto w-6/12  max-w-2xl">
          {blurbData.map((data) => (
            <SitePageBlurb title={data.title} text={data.text} />
          ))}
        </div>
      </div>
      <div className="flex w-full flex-col">
        <Discover
          subject="science"
          becauseText="Because Aj liked"
          discoveredPronoun="He"
        />
        <Discover
          subject="history"
          becauseText="Because Megan liked"
          discoveredPronoun="She"
          hideQuestion={true}
        />
      </div>
    </main>
  );
};

export default Home;

const blurbData = [
  {
    title: "Deciding what to read next?",
    text: `You’re in the right place. Tell us what titles or genres you’ve enjoyed in the past, and we’ll give you surprisingly insightful recommendations.`,
  },
  {
    title: "What are your friends reading?",
    text: `Chances are your friends are discussing their favorite (and least favorite) books on Goodreads.`,
  },
];
