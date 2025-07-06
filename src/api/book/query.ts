import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { getSearchHistory, searchBooks } from "./book";
import { BookSearchRequest } from "@/model/book.dto";

export const useQuerySearchBooks = ({
  query,
  sort,
  size,
  target,
}: BookSearchRequest) =>
  useInfiniteQuery({
    queryKey: ["books", query],
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

export const useQuerySearchHistory = () =>
  useQuery({
    queryKey: ["searchHistory"],
    queryFn: () => getSearchHistory(),
  });
