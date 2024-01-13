import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import PanaverseLogo from "@/assets/PanaverseLogo.jpg"
import { FaYoutube, FaTwitter , FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa";
import Button from './Button';


function Footer() {
  return (
    <footer className='w-full relative bottom-0 min-h-[500px] bg-red-100'>  
    <div className='flex flex-col items-center justify-center '>
     <div className='w-4/5 items-center justify-center flex flex-col '> 
      <div className='w-full flex flex-wrap mt-10 justify-between items-center gap-6'>

        <div className='flex flex-col w-2/5 gap-6'>
          <div className='flex flex-col gap-4'>
            <Image src={PanaverseLogo} alt='Panaverse Logo' width={150}  height={150} className='flex shrink-0'/>
            <p className='text-gray-900  '>The Future of the Web is Web 3.0, Metaverse, and Edge Computing. Panaverse DAO is a movement to spread these technolgies globally. It is community of Web 3 and Metaverse developers, designers, trainers, startup founders and service providers.</p>
          </div>

          <div className='flex flex-col gap-4'>
            <h4 className='text-3xl font-semibold text-secondary shrink-0 flex w-40'>Follow Us</h4>
            <div className='flex gap-2 text-2xl'>
            <Link href={"/"} 
            className='p-1 border-2 border-black rounded-full'>
              <FaYoutube/></Link>
            <Link href={"/"} 
            className='p-1 border-2 border-black rounded-full'>
              <FaTwitter/></Link>
            <Link href={"/"} 
            className='p-1 border-2 border-black rounded-full'>
              <FaFacebook/></Link>
            <Link href={"/"} 
            className='p-1 border-2 border-black rounded-full'>
              <FaLinkedin/></Link>
            <Link href={"/"} 
            className='p-1 border-2 border-black rounded-full'>
              <FaGithub/></Link>
            </div>
          </div>
        </div>

        <div className=''>
          <h4 className='text-2xl font-medium text-secondary mb-4'>Useful Links</h4>
           <ul className=' text-lg flex flex-col gap-1 text-gray-700'>
            <li><Button href={"/"} title='Home'/></li>
            <li><Button href={"/"} title='About'/></li>
            <li><Button href={"/"} title='Programs'/></li>
            <li><Button href={"/"} title='Instructors'/></li>
            <li><Button href={"/"} title='Testimonials'/></li>
            <li><Button href={"/"} title='Contact Us'/></li>
           </ul>
        </div>

        <div>
        <h4 className='text-2xl font-medium text-secondary mb-4'>Support</h4>
           <ul className=' text-lg flex flex-col gap-1 text-gray-700'>
            <li><Button href={"/"} title='Legal'/></li>
            <li><Button href={"/"} title='Status'/></li>
            <li><Button href={"/"} title='Help Center'/></li>
            <li><Button href={"/"} title='Privacy Policy'/></li>
            <li><Button href={"/"} title='Terms of Service'/></li>
           </ul>
        </div>

        </div>
      </div>

      <div className='flex text-center border-t border-secondary w-4/5 mt-6  flex-col items-center justify-center mb-10 '>
        <span className='mt-4' >Designed & Developed by Hamza</span>
        <span>&copy; Copyright Panaverse DAO, All Rights Reserved</span>
      </div>
     </div>
    </footer>
  )
}

export default Footer
