"use client";
import getData from "@/lib/getData";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@radix-ui/react-accordion";
import React from "react";
import { PiVideoFill } from "react-icons/pi";

async function Basics() {
  const data = await getData();
  const learnBasics = await data.items.filter(
    (item: any) => item.sys.contentType.sys.id === "basics"
  );

  return (
    <div className="w-full min-h-screen ">
      {learnBasics.map((item: any) => (
        <Accordion
          type="multiple"
          className="bg-secondary rounded px-2 sm:px-4 text-white"
        >
          <AccordionItem value="item-1">
            <AccordionTrigger className=" text-md sm:text-lg mt-40">
              {item.fields.title2}
            </AccordionTrigger>

            <AccordionContent className="  flex w-full items-center gap-4 border-b mb-2   ">
              <PiVideoFill className="text- h-5 w-5" />
              <Link href={"/"} className="hover:underline line-clamp-1 ">
                Yes. It adheres to the WAI-ARIA design pattern
              </Link>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      ))}
    </div>
  );
}

export default Basics;
