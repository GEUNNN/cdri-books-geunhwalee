"use client";
import { useHome } from "@/hooks/home/useHome";
import BookList from "./components/BookList";
import SearchTab from "./components/Searchbox";
import NoData from "./components/NoData";

const Home = () => {
  const { bookData, isLoading } = useHome();
  const { books, totalCount } = bookData || { books: [], totalCount: 0 };

  if (isLoading) return <div>Loading...</div>;

  return (
    <section className="w-[960px] mx-auto">
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
