import React from "react";
import Image from "next/image";
import Link from "next/link";
import PanaverseLogo from "@/assets/Images/PanaverseLogo.png";
import { SiMinutemailer } from "react-icons/si";
import { menu, support, icons } from "./data";

function Footer() {
  return (
    <footer className="w-full min-h-[400px] bg-[#f8b4b4] bg-opacity-45  flex  flex-col ">
      <div className="p-10 w-full w-4/5 flex flex-wrap gap-8 justify-start lg:justify-center">
        {/* logo & description*/}
        <div className="w-1/3 w-full max-w-[500px] flex flex-col ">
          <div className="shrink-0 mt-2">
            <Image
              src={PanaverseLogo}
              alt="Panaverse Logo"
              priority
              width={170}
              height={170}
              style={{width:"auto", height:"auto"}}
              className="shrink-0 "
            />
          </div>
          <div className="mt-8 text-gray-800 w-full">
            <p>
              The Future of the Web is Web 3.0, Metaverse, and Edge Computing.
              Panaverse DAO is a movement to spread these technolgies globally.
              It is community of Web 3 and Metaverse developers, designers,
              trainers, startup founders and service providers.
            </p>
          </div>
        </div>

        {/* Menu */}
        <div className="w-1/4 w-fit  sm:mt-10">
          <h6 className="font-bold text-2xl">Menu</h6>
          <ul className="flex flex-col gap-2 mt-6 ">
            {menu.map(
              (item: { title: string; link: string }, index: number) => (
                <Link key={index} href={item.link}>
                  <li className="text-gray-800 hover:text-secondary transition-all delay-75">
                    {item.title}
                  </li>
                </Link>
              )
            )}
          </ul>
        </div>

        {/* Support */}
        <div className="w-1/4 w-fit sm:mt-10">
          <h6 className="font-bold text-2xl">Support</h6>
          <ul className="flex flex-col gap-2 mt-6 ">
            {support.map(
              (item: { title: string; link: string }, index: number) => (
                <Link key={index} href={item.link}>
                  <li className="text-gray-800 hover:text-secondary transition-all delay-75">
                    {item.title}
                  </li>
                </Link>
              )
            )}
          </ul>
        </div>

        {/* Get in Touch */}
        <div className="w-1/4 sm:mt-10 w-fit ">
          <h6 className="font-bold text-2xl ">Get in Touch</h6>
          <p className="mt-6">
            Subscribe by our newsletter and stay up to date.
          </p>
          <div className="bg-primary focus:border focus:border-secondary rounded flex justify-end max-w-[220px] xs:max-w-full sm:w-full mt-4 ">
            <input
              type="email"
              placeholder="Enter your email..."
              className="flex-1 bg-transparent outline-none p-2 overflow-hidden "
            />
            <button
              type="submit"
              className="w-fit bg-secondary text-xl p-4 rounded-r"
            >
              <SiMinutemailer type="submit" className="text-xl text-white" />
            </button>
          </div>
          <ul className="flex flex-wrap w-full gap-2 sm:gap-4 mt-4">
            {icons.map((icon: any, index: number) => (
              <Link key={index} href={icon.link}>
                <li className="text-black hover:text-secondary transition-all delay-75 duration-300 ease-in-out p-2 bg-primary rounded-full">
                  <icon.title className="text-2xl" />
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
