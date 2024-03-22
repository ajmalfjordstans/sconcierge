'use client'
import { Button } from '@material-tailwind/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ServiceCard = ({ data }) => {
  return (
    <div className='flex flex-col gap-3 items-start p-[25px] shadow-md rounded-lg bg-third'>
      <div className='flex items-center gap-5'>
        <Image src={data.img} height={70} width={70} alt='image' className='w-10 h-10' />
        <p className='font-[600] text-[18px]'>{data.title}</p>
      </div>
      <div className='flex flex-col gap-2'>
        <p className='text-[14px] font-[500]'>{data.desc}</p>
      </div>
    </div>
  )
}

const ServiceData = [
  {
    img: '/icons/services/car.svg',
    title: 'Private Car Service',
    desc: 'Experience the epitome of comfort and convenience with our Private Car Service. Indulge in chauffeured luxury as our professional drivers take you to your destination in style. Whether for business or leisure, enjoy a personalized and stress-free travel experience.'
  },
  {
    img: '/icons/services/airport.svg',
    title: 'Airport Transfer',
    desc: 'Swift and reliable, our Airport Transfers service ensures seamless transitions to and from airports. Eliminate the stress of navigating unfamiliar terminals and let us take care of your transportation needs, providing a smooth start and finish to your journey.'
  },
  {
    img: '/icons/services/hourly.svg',
    title: 'Hourly Booking',
    desc: 'Flexibility meets convenience with our Hourly Booking service. Tailor your transportation to your schedule, allowing you the freedom to explore at your own pace. Ideal for business meetings, city tours, or any occasion that requires on-demand and personalized transport.'
  },
  {
    img: '/icons/services/bus.svg',
    title: 'Bus Tickets Booking',
    desc: 'Access easy and efficient bus transportation with our Bus Tickets Booking service. Perfect for budget-conscious travelers and commuters, our service provides hassle-free access to bus travel.'
  },
  {
    img: '/icons/services/train.svg',
    title: 'Train Tickets',
    desc: 'Enjoy seamless train travel with our Train Tickets service. We take care of the reservations, ensuring a smooth and efficient journey by rail, whether for business or leisure.'
  },
  {
    img: '/icons/services/pass.svg',
    title: 'EU Rail & Swiss Travel Pass',
    desc: 'Explore Europe by rail with ease using our EURail & Swiss Travel Pass service. Enjoy the convenience of pre-booked passes, providing flexibility and access to an extensive network of European destinations.'
  },
  {
    img: '/icons/services/yacht.svg',
    title: 'Private Yacht Booking',
    desc: 'Experience luxury on the water with our Private Yacht Booking service. Whether for a romantic getaway or a special celebration, our yacht bookings offer a unique and unforgettable maritime experience.'
  },
  {
    img: '/icons/services/hotel.svg',
    title: 'Hotel Reservations',
    desc: 'Find the perfect accommodation for your stay with our Hotel Reservations service. From boutique hotels to luxury resorts, we ensure a comfortable and memorable stay tailored to your preferences.'
  },
  {
    img: '/icons/services/cruise.svg',
    title: 'Cruise Booking',
    desc: 'Embark on unforgettable cruise adventures with our Cruise Booking service. Explore the seas in style, choosing from a selection of curated cruise options that promise relaxation and excitement.'
  },
]

export default function OurServices() {
  return (
    <div className='container mx-auto px-[5%] py-[40px] flex flex-col items-center mt-[50px]'>
      <p className='text-[32px] md:text-[48px] font-bold'>Our Services</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-[30px]">
        {ServiceData.map((data, id) => {
          return <ServiceCard key={id} data={data} />
        })}
      </div>
      <Link href="/our-services">
        <Button className='mt-[30px] bg-primary-light-1'>Show more</Button>
      </Link>
    </div>
  )
}
