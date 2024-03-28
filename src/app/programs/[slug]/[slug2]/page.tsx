import Quaters from "@/components/Programs/Quaters";
import getData from "@/lib/getData";
import React from "react";

async function page({ params }: { params: { slug2: string } }) {
  const data = await getData();
  const quarters = data.items.filter(
    (item: any) => item.sys.contentType.sys.id === "quarters"
  );
  return (
    <>
      {quarters.map((quarter: any) => {
        return (
          <div key={quarter.fields.title}>
            {/* {params.slug2 === quarter.fields.slug && ( */}
            <>
              <Quaters data={quarter} />
            </>
            {/* )} */}
          </div>
        );
      })}
    </>
  );
}

export default page;
