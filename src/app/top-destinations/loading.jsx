'use client'
import Image from 'next/image'
import React from 'react'

export default function LoadingPage() {
  return (
    <div className='absolute top-0 z-[300] h-[100vh] w-[100vw] bg-primary-light-2 flex justify-center items-center'>
       <Image src="/icons/logo.png" width={600} height={400} alt='logo' />
    </div>
  )
}
