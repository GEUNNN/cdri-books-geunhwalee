"use client";
import { useHome } from "@/hooks/home/useHome";
import SearchTab from "./components/searchbox";
import NoData from "./components/noData";

const Home = () => {
  const { bookData } = useHome();

  return (
    <div>
      <SearchTab />
      <NoData type="search" />
    </div>
  );
};

export default Home;
