"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'

const Navigation = () => {
  const pathname = usePathname();
  return (
      <nav className='bg-slate-400 w-full'>
        <ul className=' w-auto flex justify-evenly'>
          <li className="inline">
            <Link href={'/'} >Home</Link>
          </li>
          <li className='inline'>
            <Link href={'/api/places'} target='_blank'>Fetch Places</Link>
          </li>
          <li className='inline'>
            <Link href={'/'} >Nearby</Link>
          </li>
        </ul>
      </nav>
  )
}

export default Navigation