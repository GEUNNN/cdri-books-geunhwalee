import { Book } from "@/model/book.dto";

export const getWishList = async () => {
  try {
    const value = localStorage.getItem("wishlist");
    return value ? JSON.parse(value) : [];
  } catch {
    console.error("찜하기 조회 실패");
  }
};

export const setWishList = async (value: Book) => {
  try {
    const wishlist = localStorage.getItem("wishlist");
    const parsedWishlist = wishlist ? JSON.parse(wishlist) : [];

    if (parsedWishlist.includes(value)) {
      parsedWishlist.splice(parsedWishlist.indexOf(value), 1);
    }
    parsedWishlist.unshift(value);
    localStorage.setItem("wishlist", JSON.stringify(parsedWishlist));
  } catch {
    console.error("찜하기 실패");
  }
};

export const removeWishList = async (value: Book) => {
  try {
    const wishlist = localStorage.getItem("wishlist");
    const parsedWishlist = wishlist ? JSON.parse(wishlist) : [];

    if (parsedWishlist.includes(value)) {
      parsedWishlist.splice(parsedWishlist.indexOf(value), 1);
    }
    localStorage.setItem("wishlist", JSON.stringify(parsedWishlist));
  } catch {
    console.error("찜하기 제거 실패");
  }
};
