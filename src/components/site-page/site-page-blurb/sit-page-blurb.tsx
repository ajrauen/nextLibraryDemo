import Image from "next/image";

interface SiteHeaderProps {
  title: string;
  text: string;
}

const SitePageBlurb = (props: SiteHeaderProps) => {
  return (
    <div className="flex flex-col w-96 mr-11 w-6/12">
      <div className="text-xl">{props.title}</div>

      <p className="text-sm	py-3">{props.text}</p>
    </div>
  );
};

export default SitePageBlurb;
