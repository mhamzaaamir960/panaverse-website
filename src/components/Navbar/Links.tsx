import React from "react";
import { menu } from "./data";
import Link from "next/link";

function Links() {
  return (
    <>
      {menu.map((item: { title: string; link: string }, index: number) => (
        <li
          key={item.title}
          className={`shrink-0 border-b-2 md:border-none ${
            (item.title === "Instructors" || item.title === "Testimonials") &&
            "md:hidden lg:block "
          }`}
        >
          <Link
            className={`hover:text-secondary transition-all ease-in-out duration-500 delay-150 font-medium  `}
            href={item.link}
          >
            {item.title}
          </Link>
        </li>
      ))}
    </>
  );
}

export default Links;
