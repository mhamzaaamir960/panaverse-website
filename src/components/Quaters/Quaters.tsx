import React from "react";
import Dropdown from "./Dropdown";
import { TiTick } from "react-icons/ti";

function Quaters() {
  return (
    <div className="w-full min-h-screen bg-primary flex flex-col items-center p-4 mb-4 ">
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
        <h5 className="sm:w-[60%] w-[90%] mt-5 text-secondary text-start font-semibold text-lg md:text-xl">
          Course Description:
        </h5>
        <p className="sm:w-[60%] w-[90%] text-start sm:text-justify  ">
          We will start the program by learning the fundamentals of
          Object-Oriented programming using JavaScript and TypeScript. We will
          also understand the latest Web trends i.e. Web 3.0 and Metaverse
          concepts and try to understand their working from the perspective of
          the users.
        </p>
      </div>
      <div className="w-full flex flex-col justify-center items-center ">
        <Dropdown />
        <div className="sm:w-[60%] w-[90%] flex flex-col justify-center sm:mt-8 gap-3">
          <h5 className=" text-secondary text-start font-semibold text-lg md:text-xl">
            Assignments & Quizes:
          </h5>
          <p className="font-medium ml-2">
            By the end of this quarter we do the following node projects.
          </p>
          <ul className="ml-2">
            <li className="flex gap-2 items-center">
              <TiTick className="text-lg text-teal-600" /> Todo List
            </li>
            <li className="flex gap-2 items-center">
              <TiTick className="text-lg text-teal-600" /> Student Management
              system
            </li>
            <li className="flex gap-2 items-center">
              <TiTick className="text-lg text-teal-600" /> Currency Converter
            </li>
            <li className="flex gap-2 items-center">
              <TiTick className="text-lg text-teal-600" />
              Bank App
            </li>
          </ul>
          <p className="font-medium ml-2">
            After the completion of assignments everyone will appear in the
            TypeScript foundation Quiz.
          </p>
          <h5 className=" text-secondary text-start font-semibold text-lg md:text-xl">
            Learning Resources:
          </h5>
          <ul className="flex flex-col gap-2 font-medium">
            <li>1. Learn Typescript in baby steps</li>
            <li>
              2. Minimal TypeScript Crash Course For React With Interactive Code
              Exercises
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Quaters;
