import React from "react";
import Locations from "./Locations";
import Form from "./Form";

function ContactUs() {
  return (
    <section className=" flex w-full  min-h-screen bg-primary">
      <div className="w-full min-h-screen  flex flex-col mt-20 items-center justify-center ">
        <h2 className="flex justify-center items-center w-full h-[70px]  font-semibold text-2xl md:text-3xl bg-secondary text-white">
          Contact Us
        </h2>
        <div className="flex flex-wrap gap-6 justify-evenly 2xl:justify-center items-center w-[80%] h-full m-6 ">
          <Locations />
          <Form />
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
