import { useInfiniteQuery, useMutation, useQuery } from "@tanstack/react-query";
import {
  getSearchHistory,
  removeSearchHistory,
  searchBooks,
  setSearchHistory,
} from "./book";
import { BookSearchRequest } from "@/model/book.dto";

export const useQuerySearchBooks = ({
  query,
  sort,
  size,
  target,
}: BookSearchRequest) =>
  useInfiniteQuery({
    queryKey: ["books"],
    queryFn: ({ pageParam = 1 }) =>
      searchBooks({ query, page: pageParam, sort, size, target }),
    getNextPageParam: (lastPage, pages) => {
      return lastPage.data.meta.is_end ? undefined : pages.length + 1;
    },
    initialPageParam: 1,
    select: (data) => {
      const books = data.pages.flatMap((page) => page.data.documents);
      return {
        books,
        totalCount: data.pages[0].data.meta.total_count,
      };
    },
  });

export const useQueryGetSearchHistory = () =>
  useQuery({
    queryKey: ["searchHistory"],
    queryFn: () => getSearchHistory(),
  });

export const useMutationSetSearchHistory = () =>
  useMutation({
    mutationFn: (value: string) => setSearchHistory(value),
  });

export const useMutationRemoveSearchHistory = () =>
  useMutation({
    mutationFn: (value: string) => removeSearchHistory(value),
  });
