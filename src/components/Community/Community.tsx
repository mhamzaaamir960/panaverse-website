import React from 'react'
import Image from 'next/image'
import student from "@/assets/student.png"
import success from "@/assets/success.png"
import teacher from "@/assets/teacher.png"


function Community() {
  return (
    <section className='w-full bg-white flex flex-col justify-center items-center justify-center min-h-[400px]'>
      {/* Heading */}
      <div className='text-center flex flex-col gap-4'>
        <h2 className='font-semibold text-2xl md:text-3xl'>Our Learning <span className='text-secondary'>Community</span></h2>
        <p className='sm:text-xl text-lg mx-4 text-gray-900'>Join our vibrant learning community for excellence and shared growth.</p>
      </div>
       
       {/* cards */}
    <div className='w-11/12 flex flex-wrap justify-center gap-y-6 gap-x-20 items-center text-white my-10 mx-10'>

      <div className='flex shadow-xl min-w-[220px] p-2 sm:w-72 sm:h-64 shrink-0  flex-col justify-center  items-center   xs:p-10 sm:p-14 rounded bg-teal-500 cursor-pointer'>
        <Image src={student} alt="Student Image" width={80} height={80}/>
        <span className='font-semibold xs:text-2xl xs:mt-4'>40k+</span>
        <p className='  shrink-0 '>Students Enrolledd</p>
      </div>

      <div className='flex shadow-xl min-w-[220px] sm:w-72 sm:h-64 shrink-0  flex-col justify-center items-center p-2 xs:p-10 sm:p-14 rounded bg-blue-500 cursor-pointer'>
        <Image src={teacher} alt="teacher Image" width={80} height={80}/>
        <span className='font-semibold xs:text-2xl xs:mt-4 '>100+</span>
        <p className='shrink-0'>Skilled Instructors</p>
      </div>

      <div className='flex shadow-xl min-w-[220px] sm:w-72 sm:h-64 shrink-0  flex-col justify-center items-center p-2 xs:p-10 sm:p-14 rounded bg-yellow-500 cursor-pointer'>
        <Image src={success} alt="Trophy Image" width={80} height={80}/>
        <span className='font-semibold text-2xl mt-4'>1000+</span>
        <p className=''>Success Stories</p>
      </div>
      
      
    </div>

</section>
  )
}

export default Community
