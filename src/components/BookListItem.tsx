import { Book } from "@/model/book.dto";
import Button from "./button";
import Image from "next/image";
import { useState } from "react";
import { BookItemDetail } from "./BookItemDetail";

export interface BookListItemProps {
  book: Book;
}

const BookListItem = ({ book }: BookListItemProps) => {
  const [isListItem, setIsListItem] = useState(true);

  return (
    <article className="flex flex-col border-b border-[#D2D6DA]">
      {isListItem && (
        <div className="flex flex-row justify-between p-4 ">
          <div className="flex items-center pl-8 gap-12">
            <Image
              src={book.thumbnail}
              alt={book.title || "책 제목"}
              width={48}
              height={68}
            />
            <div className="flex flex-row items-center gap-4">
              <div className="text-lg font-bold text-[#353C49]">
                {book.title}
              </div>
              <div className="font-medium text-sm text-[#6D7582]">
                {book.authors}
              </div>
            </div>
          </div>
          <div className="flex gap-14 items-center">
            <span className="text-lg font-bold text-[#353C49]">
              {book.sale_price.toLocaleString()}원
            </span>
            <div className="flex flex-row gap-2">
              <Button variant="primary" />
              <Button
                variant="secondary"
                folded={!isListItem}
                onClick={() => setIsListItem(!isListItem)}
              />
            </div>
          </div>
        </div>
      )}
      {!isListItem && (
        <BookItemDetail
          book={book}
          onClick={() => setIsListItem(!isListItem)}
        />
      )}
    </article>
  );
};

export default BookListItem;
