import React from "react";
import Image from "next/image";
import hero_section_image from "@/assets/Images/hero_section_image.png";


function HeroImage() {
  return (
    <div className=" flex justify-center mt-6 md:mt-10  ">
      <Image
        priority
        quality={100}
        src={hero_section_image}
        alt="Hero Section Image"
        width={500}
        height={500}
        className="xl:block hidden"
      />
      <Image
        priority
        quality={100}
        src={hero_section_image}
        alt="Hero Section Image"
        width={350}
        height={350}
        className=" hidden  md:block xl:hidden"
      />
      <Image
        priority
        quality={100}
        src={hero_section_image}
        alt="Hero Section Image"
        width={300}
        height={300}
        className="block min-w-[200px] md:hidden "
      />
    </div>
  );
}

export default HeroImage;
