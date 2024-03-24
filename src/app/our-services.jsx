'use client'
import { Button } from '@material-tailwind/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ServiceCard = ({ data }) => {
  return (
    <div className={`flex flex-col gap-3 items-start hover:shadow-xl cursor-pointer  hover:scale-105 rounded-3xl border-[1px] border-third transition-all duration-300 ${data?.custom && 'bg-primary-light-2 text-white'} overflow-hidden relative h-[350px]`}>
      {data.img &&
        <Image src={data?.img} height={300} width={300} className='w-full h-full object-cover' />
      }
      <div className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-t from-black/80 via-black/50"></div>
      <div className='text-white absolute bottom-0 p-[15px]'>
        <div className='w-full flex justify-center p-[25px]'>
          <div className='flex justify-center items-center gap-5'>
            {data.icon &&
              <Image src={data.icon} height={70} width={70} alt='image' className='w-8 h-8' />
            }
            <p className='font-[600] text-[18px]'>{data.title}</p>
          </div>
        </div>
        <div className='flex flex-col gap-2 text-center'>
          <p className='text-[14px] font-[500]'>{data.desc}</p>
        </div>
      </div>
    </div>
  )
}

const ServiceData = [
  {
    img: 'https://images.unsplash.com/photo-1522255272218-7ac5249be344?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Private Car Service',
    desc: 'Experience the epitome of comfort and convenience with our Private Car Service. Indulge in chauffeured luxury as our professional drivers take you to your destination in style. Whether for business or leisure, enjoy a personalized and stress-free travel experience.'
  },
  {
    img: 'https://images.unsplash.com/photo-1554123168-b400f9c806ca?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Airport Transfer',
    desc: 'Swift and reliable, our Airport Transfers service ensures seamless transitions to and from airports. Eliminate the stress of navigating unfamiliar terminals and let us take care of your transportation needs, providing a smooth start and finish to your journey.'
  },
  {
    img: 'https://images.unsplash.com/photo-1445109673451-c511bb51bd17?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Hourly Booking',
    desc: 'Flexibility meets convenience with our Hourly Booking service. Tailor your transportation to your schedule, allowing you the freedom to explore at your own pace. Ideal for business meetings, city tours, or any occasion that requires on-demand and personalized transport.'
  },
  {
    img: 'https://images.unsplash.com/photo-1572675339312-3e8b094a544d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Bus Tickets Booking',
    desc: 'Access easy and efficient bus transportation with our Bus Tickets Booking service. Perfect for budget-conscious travelers and commuters, our service provides hassle-free access to bus travel.'
  },
  {
    img: 'https://images.unsplash.com/photo-1556773958-a3a141652a5d?q=80&w=2004&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Train Tickets',
    desc: 'Enjoy seamless train travel with our Train Tickets service. We take care of the reservations, ensuring a smooth and efficient journey by rail, whether for business or leisure.'
  },
  {
    img: 'https://images.unsplash.com/photo-1587135325273-adef4e88bc25?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'EU Rail & Swiss Travel Pass',
    desc: 'Explore Europe by rail with ease using our EURail & Swiss Travel Pass service. Enjoy the convenience of pre-booked passes, providing flexibility and access to an extensive network of European destinations.'
  },
  {
    img: 'https://images.unsplash.com/photo-1605281317010-fe5ffe798166?q=80&w=2044&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Private Yacht Booking',
    desc: 'Experience luxury on the water with our Private Yacht Booking service. Whether for a romantic getaway or a special celebration, our yacht bookings offer a unique and unforgettable maritime experience.'
  },
  {
    img: 'https://images.unsplash.com/photo-1517840901100-8179e982acb7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Hotel Reservations',
    desc: 'Find the perfect accommodation for your stay with our Hotel Reservations service. From boutique hotels to luxury resorts, we ensure a comfortable and memorable stay tailored to your preferences.'
  },
  {
    img: 'https://images.unsplash.com/photo-1580553625147-1197f1d11dfd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
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
