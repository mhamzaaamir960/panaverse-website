import Link from "next/link";
import React from "react";

function LoginRegister() {
  return (
    <>
      <Link href={"https://portal.piaic.org/"}>
        <button className=" text-secondary hover:underline transition-all duration-500 ease-in-out delay-100 font-medium">Login</button>
      </Link>
      <Link href={"https://portal.piaic.org/signup"}>
        <button className="border bg-secondary opacity-90 hover:opacity-100 text-white px-4 py-1 rounded">
          Register
        </button>
      </Link>
    </>
  );
}

export default LoginRegister;
