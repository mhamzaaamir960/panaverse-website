import React from "react";
import Image from "next/image";
import getData, { getImages } from "@/lib/getData";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";

async function About() {
  const data = await getData();
  const aboutSection = await data.items.filter(
    (item: any) => item.sys.contentType.sys.id === "about"
  );
  let image: any = await getImages(aboutSection[0].fields.image.sys.id);
  console.log(image);
  return (
    <section className=" flex w-full  min-h-screen bg-primary mb-4">
      <div className="w-full  flex flex-col mt-20 min-h-fit ">
        <h2 className="flex justify-center items-center w-full h-[70px]  font-semibold text-2xl md:text-3xl bg-secondary text-white">
          About Us
        </h2>
        <div className="flex flex-col justify-center items-center mt-6 gap-2 p-4 m-4  ">
          <Image
            src={image}
            alt="ziaKhan"
            width={120}
            height={120}
            className="rounded-full border-2 border-primary ring-1 ring-[#AD1A1A]"
          />
          <h4 className="text-4xl font-bold mt-2">
            {aboutSection[0].fields.name}
          </h4>
          <p className="text-lg text-gray-600 ">
            {aboutSection[0].fields.profession}
          </p>
          <div className="flex gap-2 ">
            <Link href={aboutSection[0].fields.linkedinurl}>
              <FaLinkedin className="text-[#0077b5] text-xl" />
            </Link>
            <Link href={aboutSection[0].fields.url}>
              <FaXTwitter className="text-black text-xl" />
            </Link>
          </div>
          <p className="text-justify  text-xl font-light italic w-[80%] ">
            {aboutSection[0].fields.description}
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
