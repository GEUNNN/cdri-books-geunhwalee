import NoData from "./components/noData";
import SearchTab from "./components/searchbox";

const Home = () => {
  return (
    <div>
      <SearchTab />
      <NoData type="search" />
    </div>
  );
};

export default Home;
