"use client";
import React from "react";
import Link from "next/link";
import { PiVideoFill } from "react-icons/pi";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

function Dropdown({
  trigger,
  content,
}: {
  trigger: string;
  content: { link: string; title: string }[];
}) {
  return (
    <div className="w-[60%] min-w-[200px]  bg-secondary text-white focus:border-2 focus:border-secondary border-b rounded  ">
      <Accordion type="single" className="rounded px-2 sm:px-2 " collapsible>
        <AccordionItem value="item-1  ">
          <AccordionTrigger className="text-md ">{trigger}</AccordionTrigger>
          {content.map((item: any, index: number) => (
            <AccordionContent
              key={index}
              className="flex w-full items-center gap-4  mb-2   "
            >
              <PiVideoFill className="text- h-5 w-5" />
              <Link
                href={item.link}
                target="blank"
                className="hover:underline t  "
              >
                {index + 1}
                {" - "}
                {item.title}
              </Link>
            </AccordionContent>
          ))}
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export default Dropdown;
