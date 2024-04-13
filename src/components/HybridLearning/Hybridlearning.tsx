import React from "react";
import Image from "next/image";
import HybridLearning from "@/assets/HybridLearning.png";

export function Hybridlearning() {
  return (
    <section className="flex flex-wrap-reverse gap-4 justify-center items-center bg-primary w-full min-h-[400px]  p-10 ">
      {/* description */}
      <div className="text-start sm:text-center lg:text-start flex flex-col gap-6 sm:mx-8 max-w-xl sm:max-w-3xl mt-6 ">
        <h2 className="font-semibold text-2xl md:text-3xl">
          Foundations of Software Development
        </h2>
        <h3 className="text-secondary font-medium text-2xl md:text-3xl">
          Hybrid Learning Program with Online and Onsite Classes
        </h3>
        <p className="sm:text-lg text-lg text-gray-900 ">
          This curriculum is intended for beginners who want to learn software
          development from the ground up. The first two quarters are shared by
          all specialities and are dedicated to studying Object-Oriented
          Programming and cutting-edge Full-Stack Web 2.0 development. It is
          going to be a year-long hybrid programme that includes both onsite and
          online classes and is divided into four quarters of 13 weeks each. The
          emphasis will be on hands-on learning by educating students to produce
          projects. To accommodate everyone, courses will be held primarily on
          weekends or after 6:00 p.m. (Pakistan Time) on weekdays. It employs a
          hybrid teaching format, with core onsite classes complemented by
          online Zoom laboratories and recorded videos.
        </p>
      </div>

      {/* image */}
      <div>
        <Image
          src={HybridLearning}
          alt="Image of Hybrid Learning"
          width={400}
          height={400}
          className="w-[260px] h-[260px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] "
        />
      </div>
    </section>
  );
}
