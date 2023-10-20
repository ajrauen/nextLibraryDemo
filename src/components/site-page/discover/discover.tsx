import Image from "next/image";
import { getDiscoverBooksData } from "../../../../lib/book";
import DiscoveryBook from "./discovery-book/discovery-book";
import { redirect } from "next/navigation";
import Link from "next/link";

interface DiscoverProps {
  subject: string;
  becauseText: string;
  discoveredPronoun: string;
  hideQuestion?: boolean;
}

const Discover = async ({ hideQuestion = false, ...props }: DiscoverProps) => {
  const books = await getDiscoverBooksData(props.subject);
  const lastBook = books?.works?.splice(books.length - 1, 1)[0];

  // some subjects can be ridiculously long, so get 3 of them that are of length 10 or less
  const filteredSubject = lastBook.subject
    .filter(
      function (subject: string) {
        if (this.count < 10 && subject.length < 10) {
          this.count++;
          return true;
        }
        return false;
      },
      { count: 0 }
    )
    .splice(0, 3)
    .map(
      (subjectItem: String, idx: number) =>
        `${subjectItem}${idx < 2 ? ", " : ""}`
    );

  const navigateToBook = (isbn: string) => {
    console.log(isbn);
    redirect(`/books/${isbn}`);
  };

  return (
    <div className="mx-auto w-6/12 max-w-2xl ">
      <div className="bg-tan-brown rounded-t-lg	p-3">
        {!hideQuestion && (
          <div className="flex flex-row ">
            <h3>What will</h3> <h3 className="mx-1 italic">you</h3>{" "}
            <h3>discovery</h3>
          </div>
        )}

        <div className="flex flex row mt-5">
          <div className="text-xs ">{props.becauseText}</div>
          <div className="text-xs ml-auto">
            <div>He discovered:</div>
          </div>
        </div>
        <div className="flex flex row">
          {books?.works?.map((book: any) => (
            <Link href={`/book/${book.key.split("/")[2]}`} scroll={false}>
              <DiscoveryBook id={book.cover_id} key={book.key} />
            </Link>
          ))}

          <div className="mx-2.5 mx-2.5 my-auto relative top-3">
            <Image
              alt="Goodreads: Book reviews, recommendations, and discussion"
              src="/arrow.png"
              width={21}
              height={28}
            />
          </div>
          <DiscoveryBook id={lastBook.cover_id} />
          <div className="w-20 mt-4 text-xs	font-bold">{filteredSubject}</div>
        </div>

        <div className="bg-gradient-to-b from-idx-discover-begin-gradient to-idx-discover-end-gradient h-8 -mb-3 -mx-3" />
      </div>
    </div>
  );
};

export default Discover;
