import { useQuerySearchBooks } from "@/api/book/query";

export const useHome = () => {
  const {
    data: bookData,
    isLoading,
    isError,
    fetchNextPage,
    hasNextPage,
  } = useQuerySearchBooks({ query: "안녕" });

  return { bookData, isLoading, isError, fetchNextPage, hasNextPage };
};
