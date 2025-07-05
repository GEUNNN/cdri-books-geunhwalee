"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;
  const isActiveStyle = "underline underline-offset-8 decoration-[#4880EE]";

  return (
    <header className="bg-background text-foreground h-20 flex items-center">
      <h1 className="pl-40 py-4 font-bold text-2xl flex-none">
        CERTICOS BOOKS
      </h1>
      <div className="pl-100 flex gap-14">
        {menuItems.map((item) => (
          <Link
            key={item.path}
            href={item.path}
            className={`text-xl font-medium ${
              isActive(item.path) ? isActiveStyle : ""
            }`}
          >
            {item.label}
          </Link>
        ))}
      </div>
      <div className="flex-none min-w-20" />
    </header>
  );
};

const menuItems = [
  {
    label: "도서 검색",
    path: "/",
  },
  {
    label: "내가 찜한 책",
    path: "/wishlist",
  },
];

export default Header;
