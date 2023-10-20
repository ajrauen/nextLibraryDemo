import BookPurchase from "@/components/book/book-purchase/book-purchase";
import { getBookAuthor, getBookData } from "../../../../lib/book";
import { redirect } from "next/navigation";
import BookDescription from "@/components/book/book-description/book-description";

const BookDetail = async ({ params }: { params: { bookId: string } }) => {
  const book = await getBookData(params.bookId);
  const author = await getBookAuthor(book.authors[0].author.key);

  console.log(book);

  if (book.error === "notfound") {
    redirect("/404");
  }

  return (
    <div className="grid lg:grid-cols-12 sm:grid-cols-1">
      <BookPurchase id={book.covers[0]} />
      <BookDescription book={book} author={author} />
    </div>
  );
};

export default BookDetail;
