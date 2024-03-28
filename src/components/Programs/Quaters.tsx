import React from "react";
import Dropdown from "./Dropdown";
import { TiTick } from "react-icons/ti";
import Link from "next/link";

function Quaters({ data }: { data: any }) {
  return (
    <div className="w-full min-h-screen bg-white flex flex-col items-center p-4 mb-4 ">
      <div className="w-full mt-14 mb-5  flex flex-col gap-2 justify-center items-center mx-auto p-2 ">
        <h2 className="font-semibold text-3xl md:text-4xl mt-10">
          Quarter{" "}
          <span className="text-secondary"># {data.fields.quarterNo}</span>
        </h2>
        <p className="text-lg sm:text-xl font-light">
          Detailed Syllabus of Quarter {data.fields.quarterNo}
        </p>
        <p className=" text-secondary font-medium text-sm ">
          Duration 13 weeks
        </p>
        <h4 className="font-medium text-center text-lg sm:text-xl md:text-2xl">
          {data.fields.quarterCore}
        </h4>

        {/* Course Description */}
        {data.fields.description && (
          <>
            <h5 className="sm:w-[60%] w-[90%] mt-5 text-secondary text-start font-semibold text-lg md:text-xl">
              Course Description:
            </h5>
            <p className="sm:w-[60%] w-[90%] text-start sm:text-justify ml-4  ">
              {data.fields.description}
            </p>
          </>
        )}

        {/* Course Outline */}
        {data.fields.courseOutline && (
          <>
            <h5 className="sm:w-[60%] w-[90%] mt-5 text-secondary text-start font-semibold text-lg md:text-xl">
              Course Outline:
            </h5>
            <div className="sm:w-[60%] w-[90%] text-start sm:text-justify ml-4   ">
              {data.fields.courseOutline.map((item: any) => (
                <div className="mb-2">
                  <h5 className="text-lg font-medium mb-2">{item.name}</h5>
                  {item.resources.map((item2: any, index: number) => (
                    <Link
                      target="blank"
                      href={item2.link}
                      className="flex flex-col gap-2  "
                    >
                      <p className="hover:text-blue-500 w-fit transition-all duration-300 delay-75 ease-in-out">
                        {index + 1} - {item2.text}
                      </p>
                    </Link>
                  ))}
                </div>
              ))}
            </div>
          </>
        )}

        {/* Dropdown */}
        <div className="sm:w-[80%] w-[90%] flex flex-col items-center justify-center sm:mt-8 gap-3 ">
          <Dropdown
            trigger={` ${data.fields.title} Video Leactures`}
            content={data.fields.leactures}
          />
        </div>

        {/* Assignments */}
        {data.fields.projects && (
          <div className="sm:w-[60%] w-[90%] flex flex-col justify-center sm:mt-8 gap-3">
            <h5 className=" text-secondary text-start font-semibold text-lg md:text-xl">
              Assignments:
            </h5>
            <p className="font-medium ml-2">
              By the end of this quarter we do the following projects.
            </p>
            <ul className="ml-2">
              {data.fields.projects.map((item: any) => (
                <li className="flex gap-2 items-center">
                  <TiTick className="text-lg text-teal-600" /> {item.name}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Quiz  */}
        {data.fields.quiz && (
          <div className="sm:w-[60%] w-[90%] flex flex-col justify-center sm:mt-8">
            <h5 className="mb-2 text-secondary text-start font-semibold text-lg md:text-xl">
              Quiz:
            </h5>
            <p className="ml-2">{data.fields.quiz}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Quaters;
