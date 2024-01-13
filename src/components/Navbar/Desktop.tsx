
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import PanaverseLogo from "@/assets/PanaverseLogo.jpg"
import Button from './Button'

function Desktop() {
  return (
    <nav className='w-full min-h-[80px] bg-primary hidden md:flex justify-between 3xl:justify-evenly items-center fixed z-10 top-0'>

      <div className='ml-4 p-2 shrink-0 3xl:m-4'>
        <Link href={'/'}>
        <Image src={PanaverseLogo} alt='Panaverse DAO Logo' height={120} width={120}
        className=''
        />
        </Link>
      </div>

      <div className=''>
        <ul className='flex  justify-between items-center mx-6 gap-4 xl:gap-8 shrink-0'>
          <li><Button href={"/"} title='Home'/></li>
          <li><Button href={"/about"} title='About'/></li>
          <li className='shrink-0'><Button href={"/"} title='Available Programs'/></li>
          <li className='hidden lg:block'><Button href={"/"} title='Instructors'/></li>
          <li className=' hidden lg:block'><Button href={"/"} title='Testimonials'/></li>
          <li className='shrink-0'><Button href={"/contact"} title='Contact Us'/></li>
        </ul>
      </div>

      <div className='flex items-center gap-4 mr-4'>
        <Button href={"https://portal.piaic.org/"} className=' text-secondary' title='Login'/>
        <Button href={"https://portal.piaic.org/signup"} className='border bg-secondary text-white px-4 py-1 rounded' title='Register'/>
      </div>
    </nav>
  )
}

export default Desktop
