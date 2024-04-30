import React from "react";
import Image from "next/image";
import PanaverseLogo from "@/assets/Images/PanaverseLogo.jpg";

function Footer2() {
  return (
    <div className="min-h-[100px] flex flex-wrap gap-2 text-center p-4 justify-center items-center bg-[#fbbaba]">
      <div className=" mr-6">
        <Image
          src={PanaverseLogo}
          alt="Panaverse Logo"
          width={100}
          height={100}
          className="shrink-0 "
        />
      </div>
      <div className="flex flex-col items-center justify-center">
        <p className="text-black text-sm sm:text-base">Designed by Muhammad Hamza Aamir</p>
        <p className="text-black text-sm">©copyright 2024 Panaverse DAO. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer2;
