import { useMutation, useQuery } from "@tanstack/react-query";
import { getWishList, removeWishList, setWishList } from "./wishlist";
import { Book } from "@/model/book.dto";

export const useQueryWishList = () =>
  useQuery({
    queryKey: ["wishlist"],
    queryFn: () => getWishList(),
  });

export const useMutationSetWishList = () =>
  useMutation({
    mutationFn: (value: Book) => setWishList(value),
  });

export const useMutationRemoveWishList = () =>
  useMutation({
    mutationFn: (value: Book) => removeWishList(value),
  });
