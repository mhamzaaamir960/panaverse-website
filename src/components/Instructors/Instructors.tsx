import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import getData, { getImages } from "@/lib/getData";

async function Instructors() {
  const data = await getData();
  const instructorsData = await data.items.filter(
    (item: any) => item.sys.contentType.sys.id === "instructors"
  );

  return (
    <section
      id="instructors"
      className="w-full min-h-[400px] flex flex-col justify-center items-center bg-white mb-6"
    >
      <div className="text-center flex flex-col ">
        <h2 className="font-semibold text-2xl md:text-3xl mt-6">
          Meet our Executive
          <span className="text-secondary"> Instructors</span>
        </h2>
      </div>

      <div className="flex flex-wrap justify-center mt-10">
        {instructorsData.map(async (item: any, index: number) => {
          let image: any = await getImages(item.fields.image.sys.id);

          return (
            <div
              key={index}
              className="bg-white border-y border-secondary border-gray-200 rounded-lg shadow-md overflow-hidden m-4 transition-all duration-500 delay-75 ease-in-out hover:scale-95  "
            >
              <div className="p-4">
                <div className="relative h-24 w-24 mx-auto mb-4">
                  <Image
                    src={image}
                    alt="Instructor image"
                    width={100}
                    height={100}
                    className="rounded-full"
                  />
                </div>
                <h3 className="text-xl font-semibold text-center mb-2">
                  {item.fields.name}
                </h3>
                <p className="text-sm text-gray-600 text-center mb-4">
                  {item.fields.rank}
                </p>
                <div className="flex justify-center mb-4">
                  <Link
                    href={item.fields.Linkedin}
                    className="text-[#0077B5] hover:text-[#3782aa] mr-3"
                  >
                    <FaLinkedin className="text-2xl" />
                  </Link>
                  <Link
                    href={item.fields.github}
                    className="text-gray-600 hover:text-gray-700"
                  >
                    <FaGithub className="text-2xl" />
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
