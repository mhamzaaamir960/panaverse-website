"use client"
import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Links from "./Links";
import LoginRegister from "./LoginRegister";

export default function Mobile() {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <>
      <div className="absolute  top-6 right-4 text-2xl sm:text-3xl ml-4 cursor-pointer md:hidden ">
        <span
          className="transition-all ease-in-out delay-100 duration-500"
          onClick={() => setOpen(!open)}
        >
          {open ? (
            <AiOutlineClose className="transition-all ease-in-out delay-150 duration-500" />
          ) : (
            <AiOutlineMenu className="transition-all ease-in-out delay-150 duration-500" />
          )}
        </span>
      </div>
      <div
        className={` flex flex-col md:flex-row md:justify-around absolute md:static items-center  transition-all ease-in-out duration-500 delay-100 w-full ${
          open ? "top-20" : "-top-[490px] "
        }  bg-inherit z-0 p-4 md:p-0 md:max-w-[80%] w-full `}
      >
        <ul className="flex flex-col md:flex-row justify-center md:justify-start md:items-center gap-4 mb-4 md:mb-0  w-full  md:w-fit ">
          <Links />
        </ul>
        <div className="flex flex-col md:flex-row w-full md:w-fit gap-y-2 md:gap-4 md:items-center md:ml-10  ">
          <LoginRegister />
        </div>
      </div>
    </>
  );
}
