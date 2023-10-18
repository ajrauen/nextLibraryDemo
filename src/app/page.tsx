import SitePageHeader from "@/components/site-page/site-page-header/site-page-header";
import Image from "next/image";
import { getBookData } from "../../lib/book";
import SitePageBlurb from "@/components/site-page/site-page-blurb/sit-page-blurb";

const Home = async () => {
  const posts = await getBookData();
  console.log(posts);

  return (
    <main className="flex flex-col min-w-[1000px]">
      <SitePageHeader />
      <div className="flex w-full  justify-center">
        <div className="flex w-6/12 py-3">
          {blurbData.map((data) => (
            <SitePageBlurb title={data.title} text={data.text} />
          ))}
        </div>
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
