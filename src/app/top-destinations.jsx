'use client'
import { Button } from '@material-tailwind/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const DestinationCard = ({ data }) => {
  return (
    <>
      <div className="relative flex w-full max-w-[26rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
        <div
          className="relative mx-4 mt-4 overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
          <Image
            src="https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1470&amp;q=80"
            height={250}
            width={300}
            className='w-full'
            alt="ui/ux review check" />
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
        <div className="p-6 pt-3">
          <Button
            className="bg-primary"
            fullWidth
            type="button">
            Reserve
          </Button>
        </div>
      </div>
    </>
  )
}

const DestinationData = [
  {
    img: '',
    title: 'London',
    attractions: 'Explore iconic landmarks such as the Tower of London, Buckingham Palace, and the British Museum. Immerse yourself in the vibrant culture of West End theaters and indulge in shopping on Oxford Street.',
    unique: 'London is home to over 170 museums, including the renowned British Museum, offering a journey through human history.'
  },
  {
    img: '',
    title: 'Tokyo',
    attractions: 'Experience the vibrant energy of Shibuya Crossing, explore historic temples like Senso-ji, and marvel at the cutting-edge technology in Akihabara.',
    unique: "Tokyo is home to the world's busiest pedestrian crossing at Shibuya Crossing, a mesmerizing spectacle."
  },
  {
    img: '',
    title: 'Seoul',
    attractions: 'Explore the historic Gyeongbokgung Palace, shop in the bustling Myeongdong district, and visit the futuristic Dongdaemun Design Plaza.',
    unique: "Seoul is home to the world's fastest internet speed and the futuristic Incheon International Airport."
  },
]

export default function TopDestinations() {
  return (
    <div className='bg-primary-light-2 py-[30px]'>
      <div className='container mx-auto px-[5%] flex flex-col items-center'>
        <p className='heading text-white'>Top Destinations</p>
        <div className='grid grid-cols-3 gap-10 mt-[80px]'>
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
  )
}
