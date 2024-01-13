"use client"
import React from 'react'
import Link from 'next/link'
import { Url } from 'next/dist/shared/lib/router/router'


function Button(props:{title:string,className?:string,href:Url}) {
  return (
    <Link href={props.href}>
      <button 
      className={`${props.className} text-lg text-gray-900 ml-4`}>{props.title}
      </button>
    </Link>
  )
}

export default Button
