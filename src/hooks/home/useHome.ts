import { useQuerySearchBooks, useQuerySearchHistory } from "@/api/book/query";

export const useHome = () => {
  const {
    data: bookData,
    isLoading,
    isError,
    fetchNextPage,
    hasNextPage,
  } = useQuerySearchBooks({ query: "안녕" });

  const { data: searchHistory } = useQuerySearchHistory();

  return {
    bookData,
    isLoading,
    isError,
    fetchNextPage,
    hasNextPage,
    searchHistory,
  };
};
