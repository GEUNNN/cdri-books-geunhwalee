export interface SearchTabProps {
  totalCount: number;
}

const SearchTab = ({ totalCount }: SearchTabProps) => {
  return (
    <search>
      <p>도서 검색</p>
      <form className="flex items-center gap-1.5">
        <input
          className="w-120 h-[50px] rounded-2xl bg-[#F2F4F6]"
          type="text"
          placeholder="검색어를 입력해주세요."
        />
        <button>상세 검색</button>
      </form>
      <div>
        <p>도서 검색 결과</p>
        <p>
          총<span>{totalCount.toLocaleString()}</span>건
        </p>
      </div>
    </search>
  );
};

export default SearchTab;
