export interface BookSearchRequest {
  query: string;
  sort?: "accuracy" | "recency";
  page?: number;
  size?: number;
  target?: "title" | "isbn" | "publisher" | "person";
}

export interface BookSearchResponse {
  meta: {
    total_count: number;
    is_end: boolean;
    pageable_count: number;
  };
  documents: Book[];
}

export interface Book {
  title: string;
  contents: string;
  url: string;
  isbn: string;
  datetime: string;
  authors: string[];
  publisher: string;
  translators: string[];
  price: number;
  sale_price: number;
  thumbnail: string;
  status: string;
}
