import React from "react";
import Image from "next/image";

function Cards({
  image,
  name,
  rank,
  description,
  index,
}: {
  image: HTMLImageElement;
  name: string;
  rank: string;
  description: string;
  index: number;
}) {
  return (
    
    <div className="w-1/4 h-fit  min-w-[220px]  bg-white rounded-xl shadow-lg shadow-red-200 ">
      <section key={index} className="p-4 relative -top-12">
        <div className="flex items-center justify-center relative ">
          <Image
            src={image}
            alt={`${name} image`}
            priority
            width={100}
            height={100}
            className="rounded-full shadow border-secondary border-2 object-cover"
          />
        </div>
        <div className="text-center relative top-8">
          <h3 className="text-lg font-semibold  h-14">{name}</h3>
          <p className="text-sm text-gray-500">{rank}</p>
        </div>
        <p className="text-gray-700 relative top-6 text-center mt-4 italic line-clamp-6">
          {description}
        </p>
      </section>
    </div>
  );
}

export default Cards;
