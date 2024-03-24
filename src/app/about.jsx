import React from 'react'

export default function About() {
  return (
    <div className='bg-third'>
      <div className='py-[110px] container mx-auto px-[5%] font-[500]'>
        <p className='text-[32px] md:text-[48px] font-bold text-center'>About Us</p>
        <p className='text-center max-w-[700px] mx-auto text-[16px] mt-[15px]'>
          Welcome to Signature Concierge DMC, where every journey is a crafted master piece and every experience is tailored to exceed your expectations. As a premier destination management company based in the heart of London, we invite you to delve into the essence of who we are and the unparalleled commitment we bring to curating exceptional travel experiences.
        </p>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-[50px]'>
          <div className=" border-white text-white border-[1px] rounded-3xl  shadow-md bg-[url('https://images.unsplash.com/photo-1447069387593-a5de0862481e?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover overflow-hidden">
            <div className="w-full h-full to-bg-black-10 bg-gradient-to-t from-black/80 via-black/50 p-[15px] flex flex-col justify-end items-center text-center gap-4">
              <span className='font-[600] mr-[10px] text-[16px] lg:text-[22px]'> Our Journey</span>
              <p className='text-[14px] text-left'>
                Embark on a voyage with Signature Concierge DMC, a journey marked by years of expertise, passion for travel, and a relentless pursuit of excellence. From our humble beginnings to becoming a leading name in the industry, our evolution is a testament to our dedication to providing seamless and unforgettable travel adventures.
              </p>
            </div>
          </div>
          <div className=" border-white text-white border-[1px] rounded-3xl shadow-md bg-[url('https://images.unsplash.com/photo-1532009877282-3340270e0529?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover overflow-hidden">
            <div className="w-full h-full to-bg-black-10 bg-gradient-to-t from-black/80 via-black/50 p-[15px] flex flex-col justify-end items-center text-center gap-4">
              <span className='font-[600] mr-[10px] text-[16px] lg:text-[22px]'>Our Values</span>
              <p className='text-[14px] text-left'>
                At the core of our company are values that shape every interaction and experience we deliver. Integrity, innovation, and a client-centric approach form the pillars of our foundation. We believe in creating not just trips, but enduring memories, and our values guide us in ensuring that each moment is imbued with authenticity and exceptional service.
              </p>
            </div>
          </div>
          <div className=" border-white text-white border-[1px] rounded-3xl shadow-md bg-[url('https://images.unsplash.com/photo-1579208575657-c595a05383b7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover overflow-hidden">
            <div className="w-full h-full to-bg-black-10 bg-gradient-to-t from-black/80 via-black/50 p-[15px] flex flex-col justify-end items-center text-center gap-4 mt-[10px]">
              <span className='font-[600] mr-[10px] text-[16px] lg:text-[22px]'>Our Commitment</span>
              <p className='text-[14px] text-left'>
                Our commitment goes beyond logistical perfection; it extends to crafting moments that linger in your memory. We are dedicated to understanding your unique desires and preferences, tailoring our services to transform your vision into a reality. Whether you&apos;re embarking on a business journey, a family vacation, or celebrating a special occasion, our commitment to excellence ensures that every detail is meticulously handled.
              </p>
            </div>
          </div>
        </div>
        <p className='text-center max-w-[700px] mx-auto mt-[50px] text-[16px]'>
          Discover the Signature Concierge DMC difference – where passion meets professionalism, and every travel experience becomes a masterpiece. We invite you to entrust your journeys to us and witness the magic of personalized, unparalleled service. Welcome aboard, and let the exploration of extraordinary destinations begin.
        </p>
      </div>
    </div >
  )
}
