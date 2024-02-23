"use client";
import React, { useState } from "react";
import Image from "next/image";
import PanaverseLogo from "@/assets/PanaverseLogo.jpg";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Button from "./Button";

function Mobile() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="w-full min-h-[80px] bg-primary md:hidden justify-between items-center fixed top-0 z-10 ">
      <div className=" relative top-4 left-4 shrink-0 overflow-x-hidden ">
        <Image
          src={PanaverseLogo}
          alt="Panaverse DAO Logo"
          height={400}
          width={400}
          className=" shrink-0 h-[60px] w-[90px]"
        />
      </div>

      <div className="absolute top-6 right-4 text-2xl sm:text-3xl ml-4 cursor-pointer md:hidden">
        <span
          className="transition-all ease-in-out delay-75 duration-300"
          onClick={() => setOpen(!open)}
        >
          {open ? (
            <AiOutlineClose className="transition-all ease-in-out delay-100 duration-500" />
          ) : (
            <AiOutlineMenu className="transition-all ease-in-out delay-100 duration-500" />
          )}
        </span>
      </div>

      <div
        className={`flex flex-col justify-center items-center absolute border-t-4 bg-inherit p-4 ${
          open ? "top-20" : "top-[-490px]"
        }  z-[-1] pb-12 w-full transition-all duration-500 ease-in`}
      >
        <div className="flex flex-col justify-center items-center mb-4">
          <ul className="flex flex-col  items-center gap-y-2 xl:gap-8 shrink-0">
            <li>
              <Button href={"/"} title="Home" />
            </li>
            <li>
              <Button href={"/about"} title="About" />
            </li>
            <li className="shrink-0">
              <Button href={"/"} title="Available Programs" />
            </li>
            <li>
              <Button href={"/"} title="Instructors" />
            </li>
            <li>
              <Button href={"/"} title="Testimonials" />
            </li>
            <li className="shrink-0">
              <Button href={"/contact"} title="Contact Us" />
            </li>
          </ul>
        </div>

        <div className="flex flex-col items-center gap-y-2 md:gap-4 ">
          <Button
            href={"https://portal.piaic.org/"}
            className=" text-secondary"
            title="Login"
          />
          <Button
            href={"https://portal.piaic.org/signup"}
            className="border bg-secondary text-white px-4 py-1 rounded"
            title="Register"
          />
        </div>
      </div>
    </nav>
  );
}

export default Mobile;
