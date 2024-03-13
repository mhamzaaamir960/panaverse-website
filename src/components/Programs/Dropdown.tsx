import React from "react";
import Link from "next/link";
import { PiVideoFill } from "react-icons/pi";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

function Dropdown() {
  return (
    <div className="w-[50%] min-w-[260px]  sm:mt-6 p-6 sm:p-2">
      <Accordion
        type="multiple"
        className="bg-secondary rounded px-2 sm:px-4 text-white"
      >
        <AccordionItem value="item-1">
          <AccordionTrigger className=" text-md sm:text-lg">
            TypeScript Leactures
          </AccordionTrigger>

          <AccordionContent className="  flex w-full items-center gap-4 border-b mb-2   ">
            <PiVideoFill className="text- h-5 w-5" />
            <Link href={"/"} className="hover:underline line-clamp-1 ">
              Yes. It adheres to the WAI-ARIA design pattern
            </Link>
          </AccordionContent>
          <AccordionContent className="  flex w-full items-center gap-4 border-b mb-2   ">
            <PiVideoFill className="text- h-5 w-5" />
            <Link href={"/"} className="hover:underline line-clamp-1 ">
              Yes. It adheres to the WAI-ARIA design pattern
            </Link>
          </AccordionContent>
          <AccordionContent className="  flex w-full items-center gap-4 border-b mb-2   ">
            <PiVideoFill className="text- h-5 w-5" />
            <Link href={"/"} className="hover:underline line-clamp-1 ">
              Yes. It adheres to the WAI-ARIA design pattern
            </Link>
          </AccordionContent>
          <AccordionContent className="  flex w-full items-center gap-4 border-b mb-2   ">
            <PiVideoFill className="text- h-5 w-5" />
            <Link href={"/"} className="hover:underline line-clamp-1 ">
              Yes. It adheres to the WAI-ARIA design pattern
            </Link>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export default Dropdown;
