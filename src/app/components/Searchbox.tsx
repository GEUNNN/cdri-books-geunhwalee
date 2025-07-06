import Image from "next/image";

interface SearchTabProps {
  query: string;
  setQuery: (query: string) => void;
  searchHistory: string[];
}

const SearchTab = ({ query, setQuery, searchHistory }: SearchTabProps) => {
  return (
    <search className="flex flex-col gap-4">
      <p className="text-[22px] w-120 font-bold text-[#1A1E27]">도서 검색</p>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="flex items-center gap-4"
      >
        <div className="relative">
          <input
            className={`w-120 h-[50px] rounded-t-2xl bg-[#F2F4F6] pl-[50px] ${
              searchHistory.length > 0 ? "rounded-b-none" : "rounded-b-2xl"
            }`}
            type="text"
            placeholder="검색어를 입력해주세요."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <Image
            src="/icon_search.svg"
            alt="search"
            width={30}
            height={30}
            className="absolute left-2.5 top-1/2 -translate-y-1/2"
          />
        </div>
        <button className="px-2.5 py-[5px] border-[1px] border-[#8D94A0] text-sm font-medium text-[#8D94A0] rounded-md">
          상세검색
        </button>
      </form>
      {searchHistory.length > 0 && (
        <div className="flex flex-col mt-[-16px]">
          {searchHistory.map((history, idx) => (
            <div
              key={idx}
              className={`flex items-center justify-between pr-[25px] w-120 h-[50px] pl-[50px] text-base font-medium text-[#8D94A0] bg-[#F2F4F6] ${
                idx === searchHistory.length - 1 ? "rounded-b-2xl" : ""
              }`}
            >
              {history}
              <Image src="/icon_close.svg" alt="close" width={24} height={24} />
            </div>
          ))}
        </div>
      )}
    </search>
  );
};

export default SearchTab;
