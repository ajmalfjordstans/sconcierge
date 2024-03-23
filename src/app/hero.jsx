import Image from 'next/image'
import React from 'react'

export default function Hero() {
  return (
    <div className='bg-hero bg-cover bg-center h-[100vh] w-full text-third'>
      <div className='container mx-auto px-[5%] flex justify-center items-end md:items-center h-full text-center pt-[200px] pb-[100px]'>
        <div className='max-w-[700px] '>
          <Image src="/icons/logo.png" width={600} height={400} alt='logo' />
          <p className='text-[14px] md:text-[22px] mt-[30px]'>Welcome to Signature Concierge DMC, where every journey is a crafted masterpiece and every experience is tailored to exceed your expectations.</p>
        </div>
        <div></div>
      </div>
    </div>
  )
}
