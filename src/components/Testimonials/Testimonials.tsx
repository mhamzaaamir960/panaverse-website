import React from "react";
import getData, { getImages } from "@/lib/getData";
import Cards from "./Cards";
import Plugin from "./Plugin";
import Carousal from "./Carousal"
import {  CarouselContent } from "@/components/ui/carousel";

async function Testimonials() {
  const data = await getData();
  const testimonialsData = await data.items.filter(
    (item: any) => item.sys.contentType.sys.id === "testimonials"
  );

  return (
    <section
      id="testimonials"
      className="w-full relative min-h-[560px] bg-primary flex flex-col items-center  "
    >
      <div className="text-center flex flex-col ">
        <h2 className="font-semibold text-2xl md:text-3xl mt-10">
          Students<span className="text-secondary"> Testimonials</span>
        </h2>
      </div>

     <Carousal >
        <CarouselContent className="mt-20 flex gap-x-12 flex justify-center">
          {testimonialsData.map(async (item: any, index: number) => {
            let image: any = await getImages(item.fields.image.sys.id);

            return (
              <Cards
                image={image}
                name={item.fields.name}
                rank={item.fields.rank}
                description={item.fields.description}
                index={index}
              />
            );
          })}
        </CarouselContent>
      </Carousal>
    </section>
  );
}

export default Testimonials;
