import React from "react";
import Link from "next/link";
import HeroImage from "./HeroImage";
import { getHeroSectionData } from "@/lib/getData";
import { FaRegCirclePlay } from "react-icons/fa6";

async function HeroSection() {
  const data = await getHeroSectionData();
  return (
    <main className=" min-h-screen sm:min-h-[70vh] lg:min-h-screen w-full bg-primary flex flex-wrap justify-center md:justify-evenly  p-6 items-center relative top-0  ">
      <div className="w-full md:w-1/2 mt-32 md:mt-14 flex flex-col gap-2   ">
        <p className="text-secondary text-base sm:text-lg font-medium">
          {data.fields.paragraph}
        </p>
        <h1 className=" text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold w-full ">
          {data.fields.title}
        </h1>
        <p className="text-gray-700 mt-2 my-4 text-sm sm:text-base  md:text-lg">
          {data.fields.paragraph2}
        </p>
        <Link href="https://youtu.be/cGcjsvUxzbE?feature=shared">
          <button
            className="flex justify-center items-center  text-white bg-secondary opacity-90 hover:opacity-100 hover:transition-all hover:ease-in-out hover:delay-70 hover:duration-300 w-fit py-1 px-4 xs:px-6 md:px-10 rounded-full max-w-[200px] w-fit "
          >
            <FaRegCirclePlay className="mr-2 shrink-0" /> {""} Watch Video
          </button>
        </Link>
      </div>
      <HeroImage />
    </main>
  );
}

export default HeroSection;
