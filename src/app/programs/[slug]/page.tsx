import React from "react";
import getData from "@/lib/getData";
import ProgramsData from "@/components/Programs/ProgramsData";

async function page({ params }: { params: { slug: string } }) {
  const data = await getData();
  const programsData = data.items.filter(
    (item: any) => item.sys.contentType.sys.id === "programs"
  );

  return (
    <>
      {programsData.map((program: any, index:number) => (
          <div key={program.fields.title}>
            {params.slug === program.fields.slug && (
              <>
                <ProgramsData data={program} index={index} />
              </>
            )}
          </div>
        ))}
      
    </>
  );
}

export default page;
