import React from "react";
import Image from "next/image";
import Link from "next/link";
import PanaverseLogo from "@/assets/PanaverseLogo.jpg";

function Logo() {
  return (
    <div className="ml-4 p-2 shrink-0 3xl:m-4 max-w-[150px]  ">
      <Link href={"/"}>
        <Image
          src={PanaverseLogo}
          alt="Panaverse DAO Logo"
          height={100}
          width={100}
          className=""
        />
      </Link>
    </div>
  );
}

export default Logo;
