const SearchTab = () => {
  return (
    <div>
      <p>도서 검색</p>
      <div className="flex items-center gap-1.5">
        <input
          className="w-120 h-[50px] rounded-2xl bg-[#F2F4F6]"
          type="text"
          placeholder="검색어를 입력해주세요."
        />
        <button>상세 검색</button>
      </div>
      <div>
        <p>도서 검색 결과</p>
        <p>
          총<span>0</span>건
        </p>
      </div>
    </div>
  );
};

export default SearchTab;
