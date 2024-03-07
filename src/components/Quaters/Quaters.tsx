import React from "react";

function Quaters() {
  return (
    <div className="w-full min-h-screen bg-primary flex flex-col items-center  ">
      <div className="w-full mt-14 mb-5  text-center flex flex-col gap-2 justify-center items-center mx-auto p-2 ">
        <h2 className="font-semibold text-3xl md:text-4xl mt-10">
          Quarter <span className="text-secondary"># 1</span>
        </h2>
        <p className="text-lg sm:text-xl font-light">
          Detailed Syllabus of Quarter 1
        </p>
        <p className=" text-secondary font-medium text-sm ">
          Duration 13 weeks
        </p>
        <h4 className="font-medium text-lg sm:text-xl md:text-2xl">
          CS-101: Object-Oriented Programming using TypeScript
        </h4>
        <h5 className="w-[60%] mt-5 text-secondary text-center sm:text-start font-semibold text-lg md:text-xl">
          Course Description:
        </h5>
        <p className="w-[60%] text-center sm:text-justify ">
          We will start the program by learning the fundamentals of
          Object-Oriented programming using JavaScript and TypeScript. We will
          also understand the latest Web trends i.e. Web 3.0 and Metaverse
          concepts and try to understand their working from the perspective of
          the users.
        </p>
      </div>
      <div>
        <h2 className="font-semibold text-xl md:text-2xl mt-4 underline">
          Learn <span className="text-secondary underline">TypeScript</span>
        </h2>
      </div>
    </div>
  );
}

export default Quaters;
