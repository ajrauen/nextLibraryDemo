import Link from "next/link";
import { Key } from "react";

interface BookGenresProps {
  genres: [String];
}

const BookGenres = (props: BookGenresProps) => {
  return (
    <ul className="pt-2 font-semibold">
      <span className="mr-2">Genres</span>
      <span>
        {props.genres?.slice(0, 6).map((genre) => (
          <div
            key={genre as Key}
            className={`pb-2 pr-2  mr-1 mb-1  text-center inline-block After relative text-sm `}
          >
            <Link
              className={`mr-2 border-solid border-[#419970] border-b-4 pb-1 `}
              href="/"
            >
              {genre}
            </Link>
          </div>
        ))}
      </span>
      <Link
        className={`mr-2 border-solid border-[#419970] border-b-4 pb-1 `}
        href="/"
      >
        ...more
      </Link>
    </ul>
  );
};

export default BookGenres;
