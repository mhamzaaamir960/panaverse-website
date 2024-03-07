import Quaters from "@/components/Quaters/Quaters";
import React from "react";

function page({params} : {params: {slug: string}}) {
  return (
    <>
      <Quaters />
    </>
  );
}

export default page;
