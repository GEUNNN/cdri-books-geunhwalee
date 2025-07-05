import { useQuerySearchBooks } from "@/api/query";

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
