import React from "react";
import getData from "@/lib/getData";
import ProgramsData from "@/components/ProgramsData/ProgramsData";

async function page({ params }: { params: { slug2: string } }) {
  const data = await getData();
  const programsData = data.items.filter(
    (item: any) => item.sys.contentType.sys.id === "programs"
  );

  return (
    <>
      {/* {programsData.map((program: any) => (
          <div key={program.fields.title}>
            {params.slug === program.fields.slug && (
              <>
                <p className={`text-[${program.fields.color}]`}>
                  {program.fields.title}
                  {program.fields.color}
                </p>
                <p>{program.fields.description}</p>
              </>
            )}
          </div>
        ))} */}
      <ProgramsData />
    </>
  );
}

export default page;
