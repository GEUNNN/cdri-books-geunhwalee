export interface BookSearch {
  meta: {
    totalCount: number;
    isEnd: boolean;
    pageableCount: number;
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
  salePrice: number;
  thumbnail: string;
  status: string;
}
