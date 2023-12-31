"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const Links = [
  {
    id: 1,
    title: "home",
    url: "/",
  },

  {
    id: 2,
    title: "about",
    url: "/about",
  },

  {
    id: 3,
    title: "contact",
    url: "/contact",
  },

  {
    id: 4,
    title: "product",
    url: "/product",
  },
];

function Navbar() {
  const currentPath = usePathname();
  return (
    <div>
      <div className="flex items-center justify-center gap-5 text-xl m-5 p-5">
        {Links.map((link) => {
          return (
            <Link
              className={
                currentPath === link.url
                  ? "text-green-600"
                  : "bg-gradient-to-r from-yellow-900 to-gray-700 bg-clip-text text-transparent "
              }
              key={link.id}
              href={link.url}
            >
              {link.title}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Navbar;
