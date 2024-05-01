import React from "react";
import getData, { getImages } from "@/lib/getData";
import Cards from "./Cards";

async function Testimonials() {
  const data = await getData();
  const testimonialsData = await data.items.filter(
    (item: any) => item.sys.contentType.sys.id === "testimonials"
  );

  const images = await Promise.all(
    testimonialsData.map((item: any) => getImages(item.fields.image.sys.id))
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

      <Cards images={images} data={testimonialsData} />
    </section>
  );
}

export default Testimonials;
