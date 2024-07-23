import React from "react";
import Logo from "./Logo";
import Mobile from "./Mobile";

function Desktop() {
  return (
    <nav className="w-full min-h-[80px] max-w-[90rem] bg-primary md:flex justify-between 3xl:justify-evenly items-center fixed z-10 top-0 ">
      <Logo />
      <Mobile />
    </nav>
  );
}

export default Desktop;
