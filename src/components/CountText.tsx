export interface SearchCountTextProps {
  type: "search" | "wishlist";
  totalCount: number;
}

const CountText = ({ type, totalCount }: SearchCountTextProps) => {
  const text = type === "search" ? "도서 검색 결과" : "찜한 책";
  return (
    <div className="flex flex-row items-center gap-4">
      <p className="text-base font-medium text-[#353C49]">{text}</p>
      <p className="text-base font-medium text-[#353C49]">
        총{" "}
        <span className="text-[#4880EE] font-medium">
          {totalCount.toLocaleString()}
        </span>
        건
      </p>
    </div>
  );
};

export default CountText;
