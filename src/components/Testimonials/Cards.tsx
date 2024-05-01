"use client";
import React from "react";
import Image from "next/image";
import Carousal from "./Carousal";
import { CarouselContent } from "../ui/carousel";

function Cards({ data, images }: { data: any[]; images: any[] }) {
  return (
    <Carousal>
      <CarouselContent className="mt-20 flex gap-x-12 flex justify-center">
        {data.map((item: any, index: number) => (
          <div
            key={index}
            className="w-1/4 h-fit  min-w-[220px]  bg-white rounded-xl shadow-lg shadow-red-200 "
          >
            <div className="p-4 relative -top-12">
              <div className="flex items-center justify-center relative ">
                <Image
                  src={images[index]}
                  alt={`${item.fields.name} image`}
                  priority
                  width={100}
                  height={100}
                  className="rounded-full shadow border-secondary border-2 object-cover"
                />
              </div>
              <div className="text-center relative top-8">
                <h3 className="text-lg font-semibold  h-14">
                  {item.fields.name}
                </h3>
                <p className="text-sm text-gray-500">{item.fields.rank}</p>
              </div>
              <p className="text-gray-700 relative top-6 text-center mt-4 italic line-clamp-6">
                {item.fields.description}
              </p>
            </div>
          </div>
        ))}
      </CarouselContent>
    </Carousal>
  );
}

export default Cards;
