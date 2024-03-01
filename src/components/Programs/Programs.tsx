import React from "react";
import getData from "@/lib/getData";

async function Programs() {
  const data = await getData();
  const programsData = data.items.filter(
    (item: any) => item.sys.contentType.sys.id === "programs"
  );
  // console.log(programsData)

  return (
    <section className="w-full min-h-[600px] bg-primary flex flex-col items-center gap-10">
      <div className="text-center flex flex-col ">
        <h2 className="font-semibold text-2xl md:text-3xl mt-10">
          Available <span className="text-secondary">Programs</span>
        </h2>
      </div>

      <div className="flex flex-wrap mt-6 gap-8 mx-10 justify-center items-center w-11/12 mb-10">
        {programsData.map((item: any, index: number) => {
          return (
            <>
              <div className="sm:w-80 sm:h-80 w-64 h-72 p-6  flex flex-col justify-center items-center rounded-xl bg-white shadow-xl cursor-pointer">
                <h3 className=" text-xl sm:text-2xl text-center font-medium my-4">
                  {item.fields.title}
                </h3>
                <p className="  w-64 h-40 text-center overflow-hidden p-2 text-stone-950">
                  {item.fields.description}
                </p>
              </div>
            </>
          );
        })}
      </div>
    </section>
  );
}

export default Programs;
