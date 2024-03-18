import React from "react";
import getData, { getImages } from "@/lib/getData";
import ProgramsData from "@/components/Programs/ProgramsData";

async function page({ params }: { params: { slug: string } }) {
  const data = await getData();
  const programsData = data.items.filter(
    (item: any) => item.sys.contentType.sys.id === "programs"
  );
  return (
    <>
      {programsData.map(async (program: any, index: number) => {
        let image: any = await getImages(program.fields.backgroundImage.sys.id);
        return (
          <div key={program.fields.title}>
            {params.slug === program.fields.slug && (
              <>
                <ProgramsData data={program} index={index} image={image} />
              </>
            )}
          </div>
        );
      })}
    </>
  );
}

export default page;
