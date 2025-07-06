export interface SearchCountTextProps {
  totalCount: number;
}

const SearchCountText = ({ totalCount }: SearchCountTextProps) => {
  return (
    <div className="flex flex-row items-center gap-4">
      <p className="text-base font-medium text-[#353C49]">도서 검색 결과</p>
      <p className="text-base font-medium text-[#353C49]">
        총
        <span className="text-[#4880EE] font-medium">
          {totalCount.toLocaleString()}
        </span>
        건
      </p>
    </div>
  );
};

export default SearchCountText;
