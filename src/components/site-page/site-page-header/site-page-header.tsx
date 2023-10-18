import Image from "next/image";

const SitePageHeader = () => {
  return (
    <div className="flex flex-col w-full h-96 bg-[url('/masthead_background.jpg')]  bg-auto ">
      <div className="mx-auto	w-6/12">
        <div className="py-4">
          <Image
            alt="Goodreads: Book reviews, recommendations, and discussion"
            src="/header-logo.png"
            width={200}
            height={370}
          />
        </div>
        <span className="py-10 text-center min-w-[550px] max-w-[700px] bg-gradient-to-b from-light-brown to-dark-brown text-transparent bg-clip-text text-7xl  inline-block">
          Meet your next favoirte book
        </span>
      </div>
    </div>
  );
};

export default SitePageHeader;
