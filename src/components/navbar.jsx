'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 100);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div className={`${isScrolled ? 'bg-primary py-[5px]' : 'bg-primary bg-opacity-70 py-[25px]'} text-third  fixed top-0 w-full transition-all duration-300 z-[100]`}>
      <div className='container mx-auto px-[5%] flex justify-between items-center'>
        <Link href="/">
          <Image src="/icons/logo.png" width={300} height={200} alt='logo'/>
        </Link>
        <div className='flex gap-6 items-center font-[500]'>
          <Link href="/">
            <p>Home</p>
          </Link>
          <Link href="/about">
            <p>About Us</p>
          </Link>
          <Link href="/our-services">
            <p>Our Services</p>
          </Link>
          <Link href="/top-destinations">
            <p>Top Destinations</p>
          </Link>
          <Link href="/contact-us">
            <p>Contact Us</p>
          </Link>
        </div>
      </div>
    </div>
  )
}
