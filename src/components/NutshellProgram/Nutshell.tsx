import React from "react";
import Image from "next/image";
import It_student from "@/assets/Images/IT_student.png";

export function Nutshell() {
  return (
    <section className="flex flex-wrap gap-4 justify-center items-center bg-white w-full min-h-[400px] my-6 p-8">
      {/* image */}
      <div>
        <Image
          src={It_student}
          alt="Image of IT student"
          width={400}
          height={400}
          className="min-w-[200px] w-[260px] h-[260px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px]"
        />
      </div>

      {/* description */}
      <div className=" text-start sm:text-center lg:text-start flex flex-col gap-4 sm:mx-8 max-w-xl sm:max-w-3xl ">
        <h2 className="font-semibold text-2xl md:text-3xl">
          The Program in a Nutshell
        </h2>
        <h3 className="text-secondary font-medium text-2xl md:text-3xl">
          Earn While You Learn
        </h3>
        <p className="sm:text-lg text-lg text-gray-900 ">
          In this brand-new type of curriculum, students will learn how to make
          money and boost exports in the classroom and will begin doing so
          within six months of the program’s beginning. It resembles a cross
          between a corporate venture and an educational project.
        </p>
      </div>
    </section>
  );
}
