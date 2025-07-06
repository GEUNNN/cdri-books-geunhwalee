"use client";
import { useHome } from "@/hooks/home/useHome";
import BookList from "@/components/BookList";
import SearchTab from "./components/Searchbox";
import NoData from "@/components/NoData";
import CountText from "@/components/CountText";

const Home = () => {
  const {
    bookData,
    isLoading,
    searchHistory,
    query,
    setQuery,
    deleteSearchHistory,
  } = useHome();
  const { books, totalCount } = bookData || { books: [], totalCount: 0 };

  if (isLoading) return <div>Loading...</div>;

  return (
    <section className="w-[960px] mx-auto">
      <div className="flex flex-col gap-4 mb-9">
        <SearchTab
          query={query}
          setQuery={setQuery}
          searchHistory={searchHistory}
          deleteSearchHistory={deleteSearchHistory}
        />
        <CountText type="search" totalCount={totalCount} />
      </div>
      {books && books.length > 0 ? (
        <BookList books={books} />
      ) : (
        <NoData type="search" />
      )}
    </section>
  );
};

export default Home;
