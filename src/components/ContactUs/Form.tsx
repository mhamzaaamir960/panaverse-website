import React from "react";
import { BsSendFill } from "react-icons/bs";

function Form() {
  return (
    <div className="flex flex-col items-cente md:max-w-[500px] lg:max-w-[600px]  xl:max-w-[600px] border-2 border-secondary w-full rounded shadow  min-h-[470px] p-4 bg-white  ">
      <div>
        <h4 className="text-2xl font-semibold text-secondary mb-4">
          Share Your Ideas!
        </h4>
      </div>
      <form className="flex flex-col gap-4 justify-center  w-full h-full">
        <input
          type="text"
          placeholder="Name"
          className="outline-none rounded flex-1 border-secondary border-2 p-4 shadow-md"
        />
        <input
          type="email"
          placeholder="Email"
          className="outline-none rounded flex-1 border-secondary border-2 p-4 shadow-md"
        />
        <textarea
          placeholder="Message"
          rows={6}
          className="outline-none rounded flex-1 border-secondary border-2 p-4 shadow-md max-h-[230px] min-h-[150px]"
        />
        <button
          type="submit"
          className="flex self-center gap-2 shrink-0 w-fit text-lg items-center bg-secondary rounded-full p-2 text-white hover:scale-105 transition-all ease-in-out duration-200 delay-100 mt-2"
        >
          <span>
            <BsSendFill />
          </span>
          Send Message
        </button>
        {/* </div> */}
      </form>
    </div>
  );
}

export default Form;
