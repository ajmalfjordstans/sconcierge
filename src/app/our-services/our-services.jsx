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
      <div class="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-t from-black/80 via-black/50"></div>
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
    img: 'https://images.unsplash.com/photo-1580227974546-fbd48825d991?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Day Tours (Car/Coach)',
    desc: 'Explore local attractions with our guided Day Tours. Whether by car or coach, our expert guides will take you on a journey, providing insights into the culture and history of each destination. Immerse yourself in the sights and sounds of your chosen location.'
  },
  {
    img: 'https://images.unsplash.com/photo-1506784365847-bbad939e9335?q=80&w=2068&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Multi-Day Tours (Car/Coach)',
    desc: 'Embark on extended journeys with our Multi-Day Tours. Discover captivating destinations with the comfort of our car or coach services. Immerse yourself in the rich tapestry of each location, creating lasting memories with a perfect blend of exploration and relaxation.'
  },
  {
    img: 'https://images.unsplash.com/photo-1570125909517-53cb21c89ff2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Coach Booking',
    desc: 'Secure comfortable and spacious group travel with our Coach Booking service. Ideal for group tours, corporate events, or special occasions, our coaches offer a comfortable and efficient way to travel together.'
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
    img: 'https://images.unsplash.com/photo-1576408083550-04cd8224194d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Attraction Entry Tickets',
    desc: 'Skip the lines and make the most of your visit with our Attraction Entry Tickets service. Pre-book tickets to popular attractions, ensuring a hassle-free and enjoyable experience.'
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
  {
    img: 'https://images.unsplash.com/photo-1527797393658-6a8777f47011?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Ferry Booking',
    desc: 'Plan island-hopping excursions with our Ferry Booking service. Discover coastal destinations and picturesque islands, creating a personalized and scenic journey.'
  },
  {
    img: 'https://images.unsplash.com/photo-1565043232252-fc3dc8c4c494?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Car Rental',
    desc: 'For independent exploration, our Car Rental service provides a range of vehicles to suit your preferences. Enjoy the freedom to explore at your own pace, whether on a business trip or vacation.'
  },
  {
    img: 'https://images.unsplash.com/photo-1536561996889-43a085fcdb39?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Excursions',
    desc: 'Engage in curated day trips and activities with our Excursions service. Immerse yourself in local culture and adventure, led by knowledgeable guides who enhance your overall travel experience.'
  },
  {
    img: 'https://images.unsplash.com/photo-1504807959081-3dafd3871909?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Private Guide',
    desc: 'Discover destinations with expert guidance using our Private Guides service. Our knowledgeable guides ensure an immersive and educational experience, offering insights into the history, culture, and attractions of each location.'
  },
  {
    img: 'https://images.unsplash.com/photo-1517400508447-f8dd518b86db?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Airport Fast Track & Meet and Greet',
    desc: 'Streamline your airport experience with our Airport Fast Track & Meet and Greet service. Enjoy priority services, expedited check-ins, and a warm welcome upon arrival, ensuring a smooth transition through airports.'
  },
  {
    img: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Restaurant Reservations',
    desc: 'Secure reservations at top dining establishments with our Restaurant Reservations service.Whether for a business dinner or a special celebration, savor exquisite culinary experiences at your preferred locations.'
  },
  {
    icon: '/icons/services/customize.svg',
    title: 'Customised Tailor Made Holidays',
    desc: 'Craft unique journeys designed to your specifications with our Customized Tailor-Made Holidays service. Our experts work with you to create personalized itineraries, ensuring every detail aligns with your preferences and travel dreams.',
    custom: true,
  },
]

const SportData = [
  {
    img: 'https://images.unsplash.com/photo-1659203206829-218b9b5930e5?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'British Grand Prix',
    desc: "The British Grand Prix, held at the iconic Silverstone Circuit, is a highlight of the Formula 1 calendar. Witness the world's top drivers compete in a thrilling race, surrounded by the electric atmosphere of one of the oldest and most prestigious races in motor racing."
  },
  {
    img: 'https://images.unsplash.com/photo-1555862124-94036092ab14?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'English Premier League',
    desc: "Immerse yourself in the excitement of English football with the English Premier League. Whether at legendary stadiums like Old Trafford, Anfield, or Stamford Bridge, experience the passion and skill of top-tier football teams as they compete for glory in one of the most-watched football leagues globally."
  },
  {
    img: 'https://images.unsplash.com/photo-1530915534664-4ac6423816b7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Wimbledon Tennis League',
    desc: "Experience the elegance of Wimbledon, the oldest tennis tournament in the world, synonymous with tradition and excellence. Secure tickets to witness tennis legends compete on the hallowed grass courts. Experience the elegance of white attire, the thrill of intense matches, and the iconic traditions of this Grand Slam event."
  },
  {
    img: 'https://images.unsplash.com/photo-1587385789097-0197a7fbd179?q=80&w=2060&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: "Lord's Cricket Events",
    desc: "Lord's Cricket Ground, often referred to as the \"Home of Cricket,\" hosts prestigious cricket events. Enjoy the timeless sport in an iconic setting. From international test matches to thrilling T20 games, Lord's offers an unparalleled cricketing experience with its rich history and superb facilities."
  },
  {
    img: 'https://images.unsplash.com/photo-1635895882609-942f36e1db5d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: "Ascot Horse Racing",
    desc: "Your description of Ascot Racecourse is captivating! It paints a vivid picture of the elegance and excellence associated with horse racing at this prestigious venue. The mention of the Royal Ascot, with its grandeur, high fashion, and world-class racing, truly highlights the significance of this event in the horse racing calendar. Witnessing thoroughbreds compete for victory against the stunning backdrop of Ascot must be an unforgettable experience."
  },
  {
    img: 'https://images.unsplash.com/photo-1613085411234-9c83af5562d8?q=80&w=2008&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: "Cheltenham Horse Racing",
    desc: "The Cheltenham Racecourse is renowned for hosting the Cheltenham Festival, which stands out as a highlight of the National Hunt racing season. It's an exhilarating experience to witness the excitement of jump racing, with top horses, jockeys, and trainers competing in prestigious races like the Cheltenham Gold Cup. The atmosphere at Cheltenham must be truly electrifying during such events!"
  },
  {
    img: 'https://images.unsplash.com/photo-1597369237991-5c95d1b6e0c8?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: "Golf Competitions In UK",
    desc: "The UK is renowned for hosting world-class golf competitions set against breathtaking landscapes. Events such as The Open Championship offer the opportunity to witness top golfers take on iconic courses like St Andrews. It's a chance to immerse yourself in the strategic elegance of golf while enjoying the camaraderie and sportsmanship of these prestigious tournaments."
  },
]

export default function OurServices() {
  return (
    <div className='container mx-auto px-[5%] py-[40px] flex flex-col items-center'>
      <p className='text-[32px] md:text-[48px] font-bold pt-[120px]'>Our Services</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-[30px]">
        {ServiceData.map((data, id) => {
          return <ServiceCard key={id} data={data} />
        })}
      </div>
      <p className='text-[28px] md:text-[32px] font-semibold pt-[60px]'>Want to see Sporting Events in the UK?</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-[30px]">
        {SportData.map((data, id) => {
          return <ServiceCard key={id} data={data} />
        })}
      </div>
    </div>
  )
}
