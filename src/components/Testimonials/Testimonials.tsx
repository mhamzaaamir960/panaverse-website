import React from "react";
import Image from "next/image";
import getData, { getImages } from "@/lib/getData";

async function Testimonials() {
  const data = await getData();
  const testimonialsData = await data.items.filter(
    (item: any) => item.sys.contentType.sys.id === "testimonials"
  );
  return (
    <section className="w-full relative min-h-[560px] bg-primary flex flex-col items-center  ">
      <div className="text-center flex flex-col ">
        <h2 className="font-semibold text-2xl md:text-3xl mt-10">
          Students<span className="text-secondary"> Testimonials</span>
        </h2>
      </div>

      <div className="flex flex-wrap w-4/5 gap-16 justify-center mt-20 mb-12">
        {testimonialsData.map(async (item: any, index: number) => {
          let image: any = await getImages(item.fields.image.sys.id);
          return (
            <div
              key={index}
              className="w-1/4 h-fit  min-w-[220px]  bg-white rounded-xl shadow-lg shadow-red-200 "
            >
              <div className="p-4 relative -top-12">
                <div className="flex items-center justify-center relative ">
                  <Image
                    src={image}
                    alt={`${item.fields.name} image`}
                    // alt='image'
                    width={100}
                    height={100}
                    className="rounded-full shadow border-secondary border-2 object-cover"
                  />
                </div>
                <div className="text-center relative top-8">
                  <h3 className="text-lg font-semibold">{item.fields.name}</h3>
                  <p className="text-sm text-gray-500">{item.fields.rank}</p>
                </div>
                <p className="text-gray-700 relative top-6 text-center mt-4 italic line-clamp-6">
                  {item.fields.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Testimonials;
