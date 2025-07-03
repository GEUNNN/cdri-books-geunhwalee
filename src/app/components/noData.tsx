"use client";

import Image from "next/image";

interface NoDataProps {
  type: "search" | "wishlist";
}

const NoData = ({ type }: NoDataProps) => {
  const message =
    type === "search" ? "검색된 결과가 없습니다." : "찜한 책이 없습니다.";

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-6">
      <Image src="/icon_book.png" alt="no-data" width={80} height={80} />
      <p className="text-base text-[#6D7582] font-medium">{message}</p>
    </div>
  );
};

export default NoData;
