import { BookSearchRequest, BookSearchResponse } from "@/model/book.dto";
import instance from "./axios";
const API_URL = "https://dapi.kakao.com/v3/search/book/";

export const searchBooks = async ({
  query,
  sort,
  page,
  size,
  target,
}: BookSearchRequest) => {
  const response = await instance.get<BookSearchResponse>(API_URL, {
    params: {
      query,
      sort,
      page,
      size,
      target,
    },
  });

  return response;
};
