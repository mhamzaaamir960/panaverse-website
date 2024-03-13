import Quaters from "@/components/Programs/Quaters";
import React from "react";

function page({ params }: { params: { slug2: string } }) {
  return (
    <>
      <Quaters />
    </>
  );
}

export default page;
