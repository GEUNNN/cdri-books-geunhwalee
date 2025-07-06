"use client";
import CountText from "@/components/CountText";
import { useWishList } from "@/hooks/wishlist/useWishList";
import BookList from "@/components/BookList";
import NoData from "@/components/NoData";

const WishList = () => {
  const { wishList, isLoading } = useWishList();

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      <CountText type="wishlist" totalCount={0} />
      {wishList && wishList.length > 0 ? (
        <BookList books={wishList} />
      ) : (
        <NoData type="wishlist" />
      )}
    </div>
  );
};

export default WishList;
