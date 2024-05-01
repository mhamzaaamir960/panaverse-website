"use client";
import React, { ReactNode, useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import { Carousel } from "../ui/carousel";

function Carousal({ children }: { children: ReactNode }) {
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true, }));
  return (
    <Carousel
      plugins={[plugin.current]}
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
      className="flex  flex-wrap w-4/5 gap-4 justify-center mt-8 min-h-[500px] p-4"
    >
      {children}
    </Carousel>
  );
}

export default Carousal;
