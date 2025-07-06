import Image from "next/image";

const SearchTab = () => {
  return (
    <search className="flex flex-col gap-4">
      <p className="text-[22px] w-120 font-bold text-[#1A1E27]">도서 검색</p>
      <form className="flex items-center gap-4">
        <div className="relative">
          <input
            className="w-120 h-[50px] rounded-2xl bg-[#F2F4F6] pl-[50px]"
            type="text"
            placeholder="검색어를 입력해주세요."
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
    </search>
  );
};

export default SearchTab;
