import { Book } from "@/model/book.dto";
import BookItem from "../BookItem";

export interface BookListProps {
  books: Book[];
}

const BookList = ({ books }: BookListProps) => {
  return (
    <div>
      {books.map((book, idx) => (
        <BookItem key={idx} book={book} />
      ))}
    </div>
  );
};

export default BookList;
