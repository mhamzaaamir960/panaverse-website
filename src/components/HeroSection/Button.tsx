"use client"
import React from 'react'
import Link from 'next/link'
import { Url } from 'next/dist/shared/lib/router/router'
import { FaRegCirclePlay } from "react-icons/fa6";


type Icon = {
  size?: string,
  color?: string
}

function Button(props:{title:string,className?:string,href:Url,icon?
  :React.ReactElement}) {
  return (
    <Link href={props.href}>
      <button className={`${props.className} shrink-0  text-sm xs:text-md sm:text-lg md:text-md lg:text-lg`}>
        <span>{props.icon}</span>
        <span className='shrink-0'>{props.title}</span>
      </button>
    </Link>
  )
}

export default Button
