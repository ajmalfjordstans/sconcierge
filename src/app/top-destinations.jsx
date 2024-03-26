'use client'
import { Button } from '@material-tailwind/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const DestinationCard = ({ data }) => {
  return (
    <>
      <div className="relative flex w-full max-w-[26rem] flex-col justify-between rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
        <div>
          <div
            className="relative mx-4 mt-4 overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
            <Image
              src={data?.img}
              height={250}
              width={300}
              className='w-full h-[200px] object-cover'
              alt="country" />
            <div
              className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-tr from-transparent via-transparent to-black/60">
            </div>
          </div>
          <div className="p-6 flex flex-col gap-3">
            <div className="flex items-center justify-between mb-3">
              <h5 className="block font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                {data.title}
              </h5>
            </div>
            <div>
              <p className='font-[600]'>Attractions:</p>
              <p className="block font-sans text-base antialiased font-light leading-relaxed text-gray-700">
                {data.attractions}
              </p>
            </div>
            <div>
              <p className='font-[600]'>Unique Factors:</p>
              <p className="block font-sans text-base antialiased font-light leading-relaxed text-gray-700">
                {data.unique}
              </p>
            </div>
          </div>
        </div>
        <div className="p-6 pt-3">
          <Link href="/contact-us">
            <Button
              className="bg-primary"
              fullWidth
              type="button">
              Reserve
            </Button>
          </Link>
        </div>
      </div>
    </>
  )
}

const DestinationData = [
  {
    img: 'https://images.unsplash.com/photo-1486299267070-83823f5448dd?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'London',
    attractions: 'Explore iconic landmarks such as the Tower of London, Buckingham Palace, and the British Museum. Immerse yourself in the vibrant culture of West End theaters and indulge in shopping on Oxford Street.',
    unique: 'London is home to over 170 museums, including the renowned British Museum, offering a journey through human history.'
  },
  {
    img: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Paris',
    attractions: 'Discover iconic landmarks such as the Eiffel Tower, Louvre Museum, and Notre-Dame Cathedral. Immerse yourself in the charming ambiance of Montmartre and enjoy a leisurely stroll along the Seine River.',
    unique: 'Paris is renowned for its exquisite cuisine, fashion boutiques, and artistic heritage. Explore the Louvre Museum, home to thousands of works of art, including the famous Mona Lisa.'
  },
  {
    img: 'https://images.unsplash.com/photo-1699093031906-f160fd414a3d?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Stockholm',
    attractions: 'Explore the historic Gamla Stan (Old Town), visit the Vasa Museum to see a perfectly preserved 17th-century warship, and take a leisurely stroll along the picturesque waterfront of Djurgården.',
    unique: 'Stockholm is known for its innovative design, vibrant cultural scene, and commitment to sustainability. Don’t miss the opportunity to experience the tradition of fika – enjoying coffee and pastries with friends.'
  },
  {
    img: 'https://images.unsplash.com/photo-1549693578-d683be217e58?q=80&w=2077&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Tokyo',
    attractions: 'Experience the vibrant energy of Shibuya Crossing, explore historic temples like Senso-ji, and marvel at the cutting-edge technology in Akihabara.',
    unique: "Tokyo is home to the world's busiest pedestrian crossing at Shibuya Crossing, a mesmerizing spectacle."
  },
  {
    img: 'https://images.unsplash.com/photo-1658167865945-7e9949fa4d69?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Hiroshima',
    attractions: 'Explore the Peace Memorial Park and Atomic Bomb Dome, symbolizing Hiroshima\'s resilience and dedication to peace. Visit Hiroshima Castle, Shukkeien Garden, and the vibrant Hiroshima Museum of Art.',
    unique: 'Hiroshima is a city of historical significance, marked by its recovery from the atomic bombing in 1945, now standing as a beacon for peace and reconciliation.'
  },
  {
    img: 'https://images.unsplash.com/photo-1546874177-9e664107314e?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Seoul',
    attractions: 'Explore the historic Gyeongbokgung Palace, shop in the bustling Myeongdong district, and visit the futuristic Dongdaemun Design Plaza.',
    unique: "Seoul is home to the world's fastest internet speed and the futuristic Incheon International Airport."
  },
]

const cities = [
  'London', 'Birmingham', 'Manchester', 'Glasgow', 'Edinburgh', 'Belfast', 'Dublin',
  'Paris', 'Rome', 'Barcelona', 'Prague', 'Vienna', 'Lisbon', 'Copenhagen', 'Amsterdam',
  'Budapest', 'Florence', 'Athens', 'Madrid', 'Berlin', 'Venice', 'Stockholm', 'Seville',
  'Munich', 'Porto', 'Hamburg', 'Milan', 'Zurich', 'Geneva', 'New York', 'Washington DC',
  'Miami', 'Toronto', 'Bahamas', 'Tokyo', 'Kyoto', 'Osaka', 'Hiroshima', 'Seoul', 'Busan',
  'Taipei', 'Singapore', 'Hong Kong'
];

export default function TopDestinations() {
  return (
    <>
      <div className='bg-primary-light-2 py-[30px]'>
        <div className='container mx-auto px-[5%] flex flex-col items-center pt-[80px]'>
          <p className='text-[32px] md:text-[48px] font-bold text-white'>Top Destinations</p>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-10 mt-[80px]'>
            {DestinationData.map((data, id) => {
              return (
                <DestinationCard data={data} key={id} />
              )
            })}
          </div>
          <Link href="/top-destinations">
            <Button className='mt-[30px] bg-third text-primary capitalize'>Show more</Button>
          </Link>
        </div>
      </div>
      <div className='bg-primary-light-1 py-[30px] overflow-hidden'>
        <div className='flex flex-col items-center '>
          <marquee behavior="scroll" direction="">
            <div className='flex gap-4 text-white'>
              {cities.map((data, id) => {
                return (
                  <div key={id} className='flex gap-4 text-[18px] md:text-[22px]'>
                    <p>{data}</p>
                    <p>|</p>
                  </div>
                )
              })}
            </div>
          </marquee>
        </div>
      </div>
    </>
  )
}
