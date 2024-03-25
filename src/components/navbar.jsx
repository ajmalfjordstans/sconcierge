'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 30);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <>
      <div className={`${isScrolled ? 'bg-primary py-[15px]' : 'bg-primary bg-opacity-70 py-[30px]'} text-third  fixed top-0 w-[100vw] transition-all duration-300 z-[100]`}>
        <div className='container mx-auto px-[5%] flex justify-between items-center'>
          {/* <Link href="/">
            <Image src="/icons/logo.png" width={300} height={200} alt='logo' className='lg:w-full md:w-[200px] lg:max-w-[600px]' />
          </Link> */}
          <div className='text-[#c8a45e] text-center'>
            <p className='font-[600] text-[32px] leading-[30px]'>Signature Concierge</p>
            <p className='font-[600] text-[9px]'>Destination Management Company</p>
          </div>
          <div className='hidden lg:block'>
            <div className='flex gap-6 items-center font-[500] text-[12px] lg:text-[16px]'>
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
          <div className='block lg:hidden'>
            <div className='absolute top-7 right-4 z-[200]'>
              {isOpen ?
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer"
                  onClick={handleMenuToggle}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
                :
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer"
                  onClick={handleMenuToggle}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>

              }
            </div>
            <div className={`fixed top-0 right-0 h-full w-64 pt-12 pl-6 bg-primary-light-1 shadow-lg transition-transform duration-300 ease-in-out transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
              <div className='flex flex-col gap-6 font-[500] text-[12px] lg:text-[16px]'>
                <Link href="/" onClick={handleMenuToggle}>
                  <p>Home</p>
                </Link>
                <Link href="/about" onClick={handleMenuToggle}>
                  <p>About Us</p>
                </Link>
                <Link href="/our-services" onClick={handleMenuToggle}>
                  <p>Our Services</p>
                </Link>
                <Link href="/top-destinations" onClick={handleMenuToggle}>
                  <p>Destinations</p>
                </Link>
                <Link href="/contact-us" onClick={handleMenuToggle}>
                  <p>Contact Us</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
