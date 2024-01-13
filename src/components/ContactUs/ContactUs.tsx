import React from 'react'
import Locations from './Locations';
// import { ContactForm } from './Form';
import { IoMdMail} from "react-icons/io";
import { IoCall } from "react-icons/io5";

function ContactUs() {
  const cities: string[] = ["Karachi","Islamabad","Lahore","Peshawar","Faisalabad"]
  return (
      <section className='w-full min-h-screen relative top-20 flex flex-col items-center bg-primary mb-20   '>

        {/* Heading */}
        <div className='flex justify-center items-center w-full h-20 bg-secondary 3xl:mt-4'>
          <h2 className='text-3xl font-semibold tracking-wide text-white'>Contact Us</h2>
        </div>

         {/* Location */}
        <div className='w-full h-[600px] justify-center items-center flex flex-wrap my-4 bg-primary '>

          <div className=' w-[300px]  xs:w-[350px] rounded border border-secondary shadow-lg  gap-6 px-2 xs:px-4 py-10 flex flex-col items-center justify-center bg-primary mx-10 '>
            <div className='ml-6'>
              <h3 className='text-secondary mb-4 text-2xl font-semibold '>Cities Locations:</h3>
              {cities.map((city,index) => {
                return (
                  <Locations key={index} title={city}/>
                )
              })} 
            </div>
            <div className='flex flex-col justify-center gap-2'>
              <p className='flex  gap-4 text-lg xs:text-xl items-center'>
                <IoMdMail className='text-secondary text-2xl'/>
                 education@piaic.org
                </p>
              <p className='flex  gap-4 text-lg xs:text-xl items-center'>
                <IoCall className='text-secondary text-2xl'/>
                +92 308 2220203
                </p>
            </div>
          </div>
          
          {/* Form */}
          {/* <ContactForm/> */}

        </div>
      </section>
  )
}

export default ContactUs
