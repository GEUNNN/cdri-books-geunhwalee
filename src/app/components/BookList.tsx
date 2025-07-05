import { Book } from "@/model/book.dto";
import BookListItem from "../../components/BookListItem";

export interface BookListProps {
  books: Book[];
}

const BookList = ({ books }: BookListProps) => {
  return (
    <div>
      {books.map((book, idx) => (
        <BookListItem key={idx} book={book} />
      ))}
    </div>
  );
};

export default BookList;
