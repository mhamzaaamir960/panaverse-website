import React from "react";
import Image from "next/image";
import { myData, myType } from "./data";

function Community() {
  return (
    <section className="w-full bg-white flex flex-col justify-center items-center justify-center min-h-[400px]">
      {/* Heading */}
      <div className="text-center flex flex-col gap-4 mt-6">
        <h2 className="font-semibold text-2xl md:text-3xl">
          Our Learning <span className="text-secondary">Community</span>
        </h2>
        <p className="sm:text-xl text-lg mx-4 text-gray-900">
          Join our vibrant learning community for excellence and shared growth.
        </p>
      </div>

      {/* cards */}

      <div className="w-11/12 flex flex-wrap justify-center gap-y-6 gap-x-20 items-center text-white my-10 mx-10">
        {myData.map((item: myType, index: number) => (
          <div
            key={index}
            className={`flex shadow-xl min-w-[220px] p-2 sm:w-72 sm:h-64 shrink-0  flex-col justify-center  items-center   xs:p-10 sm:p-14 rounded ${item.card_color}  cursor-pointer`}
          >
            <Image
              src={item.path}
              alt="Image"
              priority={true}
              width={80}
              height={80}
            />
            <span className="font-semibold xs:text-2xl xs:mt-4">
              {item.quantity}
            </span>
            <p className="  shrink-0 ">{item.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Community;
