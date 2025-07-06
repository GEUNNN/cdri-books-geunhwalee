import { Book } from "@/model/book.dto";
import Button from "./button";
import Image from "next/image";
import { useMutationSetWishList } from "@/api/wishlist/query";

export interface BookItemDetailProps {
  book: Book;
  onClick: () => void;
}

export const BookItemDetail = ({ book, onClick }: BookItemDetailProps) => {
  const { mutate: setWishList } = useMutationSetWishList();
  return (
    <div className="flex pl-14 py-6">
      <div className="grow-3 relative">
        <Image src={book.thumbnail} alt={book.title} width={210} height={280} />
        <Image
          src="/icon_wishlist_line.svg"
          alt="bookmark"
          width={24}
          height={24}
          className="absolute top-2 right-15"
          onClick={() => {
            setWishList(book);
          }}
        />
      </div>
      <div className="grow-7 flex flex-col gap-4 w-90">
        <div className="flex flex-row items-center gap-4">
          <p className="text-lg font-bold text-[#353C49]">{book.title}</p>
          <p className="text-sm font-medium text-[#6D7582]">{book.authors}</p>
        </div>
        <div className="flex flex-col gap-2">
          <p>책소개</p>
          <p className="text-sm text-[#6D7582]">{book.contents}</p>
        </div>
      </div>
      <div className="grow-3 flex flex-col items-center justify-between">
        <Button variant="secondary" onClick={onClick} />
        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-2 items-end">
            <div className="flex flex-row items-center gap-2">
              <p className="text-[10px] font-[350] text-[#6D7582]">원가</p>
              <p className="text-lg font-[350] text-[#353C49] line-through">
                {book.price.toLocaleString()}원
              </p>
            </div>
            {book.sale_price && (
              <div className="flex flex-row items-center gap-2">
                <p className="text-[10px] font-[350] text-[#6D7582]">할인가</p>
                <p className="text-lg font-bold text-[#353C49]">
                  {book.sale_price.toLocaleString()}원
                </p>
              </div>
            )}
          </div>

          <Button variant="primary" />
        </div>
      </div>
    </div>
  );
};
