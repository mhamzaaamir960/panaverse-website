import React from 'react'
import { SlLocationPin } from "react-icons/sl";

function Locations(props:{title:string}) {
  return (
    <div className='flex items-center gap-2 my-2 ml-2 '>
      <span className='flex  border-2 border-black rounded-full p-1 '><SlLocationPin className='text-black text-xl '/></span>
      <p className='flex items-center text-xl '>
        {props.title}
      </p>
    </div>
  )
}

export default Locations
