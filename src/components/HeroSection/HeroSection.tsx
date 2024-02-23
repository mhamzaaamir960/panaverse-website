import React from "react";
import Image from "next/image";
import herosection2 from "@/assets/herosection2.jpg";
import { FaRegCirclePlay } from "react-icons/fa6";
import Button from "./Button";

async function getData() {
  try {
    const url = `https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/${process.env.CONTENTFUL_ENVIRONMENT}/entries/5Jy3vOgkmz8G0hPdSk2WvL
?access_token=${process.env.CONTENTFUL_ACCESS_TOKEN}`;

    const res = await fetch(url, { cache: "no-store" });
    const data = await res.json();
    if (!res.ok) {
      console.log("failed to fetch data");
      throw new Error("Failed to fetch data");
    }
    return data;
  } catch (err) {
    console.log(err);
  }
}

async function HeroSection() {
  const data = await getData();
  // console.log(data.fields)
  return (
    <main className=" w-full  min-h-[400px] lg:min-h-[620px] 3xl:min-h-[800px] bg-primary relative mt-20 flex justify-center items-center  mb-10 ">
      <div className=" w-11/12 3xl:w-4/5 p-2 grid grid-cols-1 md:grid-cols-2 items-center mt-10 gap-4 ">
        <div className="order-last md:order-first  flex flex-col justify-start sm:justify-center items-center gap-4 p-2 mx-6 ">
          {/* text area */}
          <div className="mt-10 flex flex-col ">
            <p className=" shrink-0 text-md xm:text-lg md:text-xl lg:text-2xl font-semibold text-secondary">
              {data.fields.paragraph}
            </p>
            <h1 className=" mb-2 md:mb-1 lg:mb-4 mt-2 md:mt-0 lg:mt-2 text-xl xs:text-2xl  sm:text-3xl md:text-2xl lg:text-4xl lg:leading-normal lg:tracking-normal font-semibold">
              {data.fields.title}
            </h1>
            <p className=" text-sm xs:text-base md:text-sm lg:text-lg text-gray-700 leading-tighter tracking-tighter">
              {data.fields.paragraph2}
            </p>
          </div>

          {/* button */}
          <div className="flex self-start gap-4 flex justify-center mt-2 flex-wrap md:mt-2 lg:mt-6  ">
            <Button
              href={"/"}
              className="bg-secondary flex justify-center shrink-0 rounded-full text-white px-2  xs:px-4"
              title="Get Started"
            />
            <Button
              href={"/"}
              className=" flex min-w-36 max-w-72    gap-x-2 shrink-0 items-center border px-4 md:px-6 rounded-full text-secondary border-secondary"
              icon={
                <span>
                  <FaRegCirclePlay />
                </span>
              }
              title={`Watch Video`}
            />
          </div>
        </div>

        {/* Image area */}

        <div className="shrink-0 hidden xxs:flex justify-center order-first md:order-last">
          <Image
            src={herosection2}
            alt="Image"
            width={700}
            height={700}
            className="   flex shrink-0"
          />
        </div>
      </div>
    </main>
  );
}

export default HeroSection;
