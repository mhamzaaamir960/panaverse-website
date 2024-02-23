import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import getData, {getImages} from "@/lib/getData";

async function Instructors() {
  
  const data = await getData();
  const instructorsData = await data.items.filter(
    (item: any) => item.sys.contentType.sys.id === "instructors"
  );
  // console.log(instructorsData[0])
  return (
    <section className="w-full min-h-[600px] flex flex-col justify-center items-center bg-white">
      <div className="text-center flex flex-col ">
        <h2 className="font-semibold text-2xl md:text-3xl mt-10">
          Meet our Executive
          <span className="text-secondary"> Instructors</span>
        </h2>
      </div>

      <div className="w-11/12 flex flex-wrap items-center justify-center gap-6 my-14 ">
        {instructorsData.map(async (item: any, index: number) => {
          let image: any = await getImages(item.fields.image.sys.id);
          return (
            <div
              key={index}
              className="sm:w-[450px] flex sm:justify-evenly items-center flex-wrap w-[300px] p-4 justify-center sm:h-40 rounded shadow-xl  bg-primary border-2 border-secondary"
            >
              <div className="flex shrink-0 items-center justify-center">
                <Image
                  alt="Image"
                  width={130}
                  height={130}
                  src={image}
                  className="rounded-full border-2 shrink-0"
                />
              </div>

              <div className="flex  flex-col justify-center items-center sm:items-start ">
                <h4 className="text-2xl font-semibold flex shrink-0">
                  {item.fields.name}
                </h4>
                <p className="text-lg text-gray-800 mb-2 ">
                  {item.fields.rank}
                </p>

                <div className="flex gap-2">
                  <Link className="text-3xl " href={item.fields.Linkedin}>
                    <FaLinkedin />
                  </Link>
                  <Link className="text-3xl " href={item.fields.github}>
                    <FaGithub />
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Instructors;
