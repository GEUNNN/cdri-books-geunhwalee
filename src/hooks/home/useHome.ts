import { useEffect, useState } from "react";
import { useQuerySearchBooks, useQuerySearchHistory } from "@/api/book/query";
import useDebounce from "../useDebounce";
import { removeSearchHistory, setSearchHistory } from "@/api/book/book";
import { useQueryClient } from "@tanstack/react-query";

export const useHome = () => {
  const queryClient = useQueryClient();
  const [query, setQuery] = useState("");
  const debouncedQuery = useDebounce(query, 300);

  const {
    data: bookData,
    isLoading,
    isError,
    fetchNextPage,
    hasNextPage,
    refetch,
  } = useQuerySearchBooks({ query: debouncedQuery });

  useEffect(() => {
    refetch()
      .then(() => setSearchHistory(debouncedQuery))
      .then(() => {
        queryClient.invalidateQueries({ queryKey: ["searchHistory"] });
      });
  }, [debouncedQuery, refetch]);

  const { data: searchHistory } = useQuerySearchHistory();

  const deleteSearchHistory = (value: string) => {
    removeSearchHistory(value);
    queryClient.invalidateQueries({ queryKey: ["searchHistory"] });
  };

  return {
    query,
    setQuery,
    bookData,
    isLoading,
    isError,
    fetchNextPage,
    hasNextPage,
    searchHistory,
    deleteSearchHistory,
  };
};
