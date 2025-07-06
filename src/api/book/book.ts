import { BookSearchRequest, BookSearchResponse } from "@/model/book.dto";
import instance from "../axios";

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

export const getSearchHistory = async () => {
  try {
    const history = localStorage.getItem("searchHistory");
    return history ? JSON.parse(history) : [];
  } catch {
    console.error("검색 기록 조회 실패");
  }
};

export const setSearchHistory = async (value: string) => {
  try {
    const history = localStorage.getItem("searchHistory");
    const parsedHistory = history ? JSON.parse(history) : [];

    if (parsedHistory.length >= 8) {
      parsedHistory.pop();
    }
    if (parsedHistory.includes(value)) {
      parsedHistory.splice(parsedHistory.indexOf(value), 1);
    }
    parsedHistory.unshift(value);
    localStorage.setItem("searchHistory", JSON.stringify(parsedHistory));
  } catch {
    console.error("검색 기록 추가 실패");
  }
};

export const removeSearchHistory = async (value: string) => {
  try {
    const history = localStorage.getItem("searchHistory");
    const parsedHistory = history ? JSON.parse(history) : [];

    if (parsedHistory.includes(value)) {
      parsedHistory.splice(parsedHistory.indexOf(value), 1);
    }
    localStorage.setItem("searchHistory", JSON.stringify(parsedHistory));
  } catch {
    console.error("검색 기록 제거 실패");
  }
};
