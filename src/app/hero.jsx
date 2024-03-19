import Image from 'next/image'
import React from 'react'

export default function Hero() {
  return (
    <div className='bg-hero bg-cover bg-center h-[100dvh] w-full text-third'>
      <div className='container mx-auto px-[5%] flex justify-center text-center pt-[200px]'>
        <div className='max-w-[700px]'>
          <Image src="/icons/logo.png" width={600} height={400} alt='logo' />
          <p className='text-[22px] mt-[30px]'>Welcome to Signature Concierge DMC, where every journey is a crafted masterpiece and every experience is tailored to exceed your expectations.</p>
        </div>
        <div></div>
      </div>
    </div>
  )
}
