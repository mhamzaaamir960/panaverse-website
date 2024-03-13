import React from "react";
import Image from "next/image";
import Link from "next/link";
import Blockchain from "@/assets/Blockchain.jpg";

function ProgramsData({ data, index }: { data: any; index: number }) {
  const dummyData = [
    {
      fields: {
        title: "TypeScript",
        date: "Quater 1",
        description:
          "hamzaA one year blockchain program designed for absolute beginners getting Pakistan ready for the new era of blockchain, fintech, and smart contracts.",
        quarter: "Q1",
      },
    },
    {
      fields: {
        title: "Modern Frontend Development",
        date: "Quater 2",
        description:
          "hamzaA one year blockchain program designed for absolute beginners getting Pakistan ready for the new era of blockchain, fintech, and smart contracts.",
        quarter: "Q2",
      },
    },
    {
      fields: {
        title: "Solidity",
        date: "Quater 3",
        description:
          "hamzaA one year blockchain program designed for absolute beginners getting Pakistan ready for the new era of blockchain, fintech, and smart contracts.",
        quarter: "Q3",
      },
    },
    {
      fields: {
        title: "Blockchain Developer",
        date: "Quater 4",
        description:
          "hamzaA one year blockchain program designed for absolute beginners getting Pakistan ready for the new era of blockchain, fintech, and smart contracts.",
        quarter: "Q4",
      },
    },
  ];
  return (
    <div className="w-full gap-2 min-h-screen flex flex-col bg-primary   ">
      {/* 1 */}
      <div className="relative top-20  w-full h-[350px] sm:h-[300px] flex items-center  ">
        <div className="w-full h-full absolute top-0 z-0">
          <Image
            src={Blockchain}
            alt="Image"
            className="w-full h-full object-cover "
          />
        </div>
        <div className="z-1  mt-20 xs:mt-0  text-white relative  flex flex-col items-center justify-center w-full  gap-4 p-6  text-center ">
          <h3 className=" text-lg xxs:text-2xl xs:text-3xl rounded  text-primary bg-secondary px-4 py-2">
            {data.fields.title}
          </h3>
          <p className=" text-sm xs:text-md sm:text-lg md:text-xl max-w-[1200px]">
            {data.fields.description}
          </p>
        </div>
      </div>

      <div className="w-full mt-14 mb-10  text-center flex flex-col gap-2 justify-center items-center ">
        <h2 className="font-semibold text-2xl md:text-3xl mt-10">
          Program <span className="text-secondary">Structure</span>
        </h2>
        <p className="text-md sm:text-lg font-light">
          4 Quarters program for complete {data.fields.title} Development
        </p>
      </div>
      <div className="mt-4">
        <div className="flex w-full justify-center mb-6 ">
          <Link href={"/programs/learnbasics"}>
            <div className="bg-white rounded shadow px-6 py-2 text-center border border-secondary shadow hover:scale-105 transition-all ease-in-out duration-300 delay-100 w-fit shrink-0  ">
              <h4 className=" text-lg sm:text-xl md:text-2xl font-medium  ">
                Learn basics before Q1
              </h4>

              <span className=" text-sm sm:text-lg text-gray-700">
                HTML / CSS / JavaScript
              </span>
            </div>
          </Link>
        </div>
        <div className=" p-4 w-4/5 mx-auto ">
          <div className="   w-full    ">
            {dummyData.map((event, index) => (
              <div
                key={index}
                className="flex justify-center relative items-center h-full py-2 gap-10 "
              >
                <div
                  className={`bg-white border border-gray-300 rounded-lg shadow-md p-4 md:w-2/5  z-[1]  w-fit ml-10 md:m-0  ${
                    index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"
                  }`}
                >
                  <p className="font-semibold">{event.fields.title}</p>
                  <p className="text-sm text-secondary text-gray-600">
                    {event.fields.date}
                  </p>
                  <p className="text-sm mt-1">{event.fields.description}</p>
                </div>
                <div className="w-1  bg-secondary flex flex-col justify-center items-center absolute left-2 md:left-1/2 h-full max-h-fit   ">
                  <div className="bg-white w-8 h-8 rounded-full flex justify-center items-center font-bold text-secondary border border-2 border-gray-200  ">
                    {event.fields.quarter}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProgramsData;
