"use client";
import React, { useMemo, useRef } from "react";
import { Button } from "@mui/material";
import Rating from "@mui/material/Rating";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import BookGenres from "./book-genres/book-genres";
import { type } from "os";

interface BookPurchaseProps {
  book: any;
  author: any;
}

const randomRating =
  Math.floor(Math.random() * (5 * 10 - 1 * 10) + 1 * 10) / (1 * 10);

const BookDescription = (props: BookPurchaseProps) => {
  const [showMoreDiscriptionButton, setShowMoreDiscriptionButton] =
    React.useState(true);
  let descriptionRef = React.createRef<HTMLDivElement>();

  const descriptionClass = useMemo(() => {
    return showMoreDiscriptionButton
      ? "max-h-28 overflow-hidden relative"
      : "relative";
  }, [showMoreDiscriptionButton]);

  const description: string = useMemo(() => {
    if (props.book.description) {
      if (typeof props.book.description === "string")
        return props.book.description;

      if (props.book.description?.value) return props.book.description.value;
      return "";
    }
  }, []);

  React.useEffect(() => {
    if (descriptionRef && descriptionRef.current) {
      const hasOverflowingChildren =
        descriptionRef.current.offsetHeight <
          descriptionRef.current.scrollHeight ||
        descriptionRef.current.offsetWidth < descriptionRef.current.scrollWidth;
      console.log(hasOverflowingChildren);
      if (!hasOverflowingChildren) {
        setShowMoreDiscriptionButton(false);
      }
    }
  }, [descriptionRef]);

  return (
    <div className="col-span-9">
      <div className="flex">
        <h1 className="text-6xl	font-bold">{props.book.title}</h1>
      </div>
      <h3 className="font-normal underline text-4xl mt-8 font-copern">
        {props.author.name}
      </h3>
      <div>
        <Rating
          name="read-only"
          value={randomRating}
          precision={0.25}
          readOnly
        />
      </div>
      <div className={descriptionClass} ref={descriptionRef}>
        <p>{description}</p>
        {showMoreDiscriptionButton && (
          <div
            className="absolute absolute bottom-0 w-full pt-5"
            style={{
              background:
                "linear-gradient(to bottom,rgba(255,255,255,0),#fff 1.6rem)",
            }}
          >
            <Button
              endIcon={<ExpandMoreIcon />}
              onClick={() => setShowMoreDiscriptionButton(false)}
            >
              ShowMore
            </Button>
          </div>
        )}
      </div>
      <BookGenres genres={props.book.subjects} />
    </div>
  );
};

export default BookDescription;
