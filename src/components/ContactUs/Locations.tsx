import React from "react";
import { SlLocationPin } from "react-icons/sl";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";

function Locations() {
  const locations: string[] = [
    "Bahria University, Karachi",
    "UMT, Lahore",
    "Air University, Islamabad",
    "CECOS University, Peshawar",
    "National Textile University, Faisalabad",
  ];
  return (
    <div className="flex flex-col items-center max-w-[400px] border-2 border-secondary w-full rounded shadow min-h-[470px] p-4 bg-white  ">
      <div className=" flex flex-col justify-center w-full mt-6">
        <h4 className="text-2xl font-semibold text-secondary mb-4">
          On-Site Locations:
        </h4>
        <div className="w-full flex flex-col ">
          {locations.map((location: string, index: number) => (
            <p
              key={index}
              className="text-lg flex items-center mr-2 w-full p-1 font-medium"
            >
              <span>
                <SlLocationPin className="text-2xl mr-2 text-secondary font-bold  " />
              </span>
              {location}
            </p>
          ))}
        </div>
      </div>
      <div className="flex flex-col justify-center w-full mt-10  gap-2">
        <h4 className="text-2xl font-semibold text-secondary mb-3">
          Contact Us:
        </h4>
        <p className="flex text-xl items-center ml-2">
          <span>
            <MdEmail className="text-secondary text-xl sm:text-2xl mr-4" />
          </span>
          education@piaic.org
        </p>
        <p className="flex text-xl items-center ml-2">
          <span>
            <FaPhone className="text-secondary text-xl sm:text-2xl mr-4" />
          </span>
          +92-308-2220203
        </p>
      </div>
    </div>
  );
}

export default Locations;
