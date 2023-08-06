import Link from "next/link";
import React from "react";

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
  return (
    <div>
      <div className="flex items-center justify-center gap-5 text-xl m-5 p-5">
        {Links.map((link) => {
          return (
            <Link
              className="bg-gradient-to-r from-yellow-900 to-gray-700 bg-clip-text text-transparent"
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
