import { Book } from "@/model/book.dto";

export interface BookItemProps {
  book: Book;
}

const BookItem = ({ book }: BookItemProps) => {
  return <article>{book.title}</article>;
};

export default BookItem;
