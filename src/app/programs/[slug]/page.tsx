import React from "react";
import getData, { getImages } from "@/lib/getData";
import ProgramsData from "@/components/Programs/ProgramsData";

export async function generateStaticParams() {
  const data = await getData();
  const programsData = data.items.filter(
    (item: any) => item.sys.contentType.sys.id === "programs"
  );
  return programsData.map((program: any) => ({ slug: program.fields.slug }));
}

async function page({ params }: { params: { slug: string } }) {
  const data = await getData();
  const programsData = data.items.filter(
    (item: any) => item.sys.contentType.sys.id === "programs"
  );

  const images = await Promise.all(
    programsData.map((item: any) => getImages(item.fields.image.sys.id))
  );

  return (
    <>
      {programsData.map((program: any, index: number) => {
        return (
          <div key={program.fields.title}>
            {params.slug === program.fields.slug && (
              <>
                <ProgramsData data={program} image={images[index]} />
              </>
            )}
          </div>
        );
      })}
    </>
  );
}

export default page;
