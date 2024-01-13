"use client"
import React from 'react'
import Link from 'next/link'
import { Url } from 'next/dist/shared/lib/router/router'

function Button(props:{title:string, className?:string, href:Url}) {
  return (
     <>
     <Link href={props.href}>
     <button className={`${props.className} md:text-md  3xl:text-xl `}>{props.title}</button>
     </Link>
     </>
  )
}

export default Button
