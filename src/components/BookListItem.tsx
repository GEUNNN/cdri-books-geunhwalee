import { Book } from "@/model/book.dto";
import Button from "./button";
import Image from "next/image";

export interface BookListItemProps {
  book: Book;
}

const BookListItem = ({ book }: BookListItemProps) => {
  return (
    <article className="flex flex-row justify-between p-4 border-b border-[#D2D6DA]">
      <div className="flex items-center pl-8 gap-12">
        <Image src={book.thumbnail} alt={book.title} width={48} height={68} />
        <div className="flex flex-row gap-1">
          <div>{book.title}</div>
          <div>{book.authors}</div>
        </div>
      </div>
      <div className="flex gap-2 items-center">
        <span>{book.sale_price.toLocaleString()}원</span>
        <div className="flex flex-row gap-2">
          <Button variant="primary" />
          <Button variant="secondary" />
        </div>
      </div>
    </article>
  );
};

export default BookListItem;
