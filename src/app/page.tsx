"use client";
import { useHome } from "@/hooks/home/useHome";
import BookList from "./components/main/BookList";
import SearchTab from "./components/main/Searchbox";
import NoData from "./components/main/NoData";

const Home = () => {
  const { bookData, isLoading } = useHome();
  const { books, totalCount } = bookData || { books: [], totalCount: 0 };

  if (isLoading) return <div>Loading...</div>;

  return (
    <section>
      <SearchTab totalCount={totalCount} />
      {books && books.length > 0 ? (
        <BookList books={books} />
      ) : (
        <NoData type="search" />
      )}
    </section>
  );
};

export default Home;
