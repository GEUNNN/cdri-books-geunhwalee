import { useQueryWishList } from "@/api/wishlist/query";

export const useWishList = () => {
  const { data: wishList, isLoading } = useQueryWishList();
  return {
    wishList,
    isLoading,
  };
};
