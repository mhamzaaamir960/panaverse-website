import getData from "@/lib/getData";
import React from "react";
import Link from "next/link";
import Dropdown from "./Dropdown";

async function Basics() {
  const data: any = await getData();
  const basics: any = await data.items.filter(
    (item: any) => item.sys.contentType.sys.id === "basics"
  );
  const resources = basics.map((item: any) => item.fields.resources);
  return (
    <div className="w-full min-h-[80vh] bg-primary flex justify-center">
      <div className="w-full flex flex-col items-center mt-20   ">
        <div className="text-center flex flex-col ">
          <h2 className="font-semibold text-2xl md:text-3xl my-10">
            Video <span className="text-secondary">Leactures</span>
          </h2>
        </div>
        <div className="w-full flex flex-col items-center justify-center">
          {basics.map((item: any) => (
            <Dropdown
              trigger={item.fields.title1}
              content={item.fields.videolinks}
            />
          ))}
        </div>
        <div className="text-start flex flex-col  w-[50%] ">
          <h4 className="font-semibold text-secondary text-xl mt-10 mb-2">
            Resource:
          </h4>
          <Link href={resources}>{resources}</Link>
        </div>
      </div>
    </div>
  );
}

export default Basics;
