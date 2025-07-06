import { useEffect, useState } from "react";
import { useQuerySearchBooks, useQuerySearchHistory } from "@/api/book/query";

export const useHome = () => {
  const [query, setQuery] = useState("");

  const {
    data: bookData,
    isLoading,
    isError,
    fetchNextPage,
    hasNextPage,
    refetch,
  } = useQuerySearchBooks({ query });

  useEffect(() => {
    refetch();
  }, [query, refetch]);

  const { data: searchHistory } = useQuerySearchHistory();

  return {
    query,
    setQuery,
    bookData,
    isLoading,
    isError,
    fetchNextPage,
    hasNextPage,
    searchHistory,
  };
};
