'use client'
import { Button } from '@material-tailwind/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const CityCard = ({ data }) => {
  return (
    <div className="relative flex w-full max-w-[26rem] flex-col justify-between rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
      <div>
        <div
          className="relative mx-4 mt-4 overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
          <Image
            src={data?.img}
            height={250}
            width={300}
            className='w-full h-[200px] object-cover'
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
          {data?.cities &&
            <div>
              <p className='font-[600]'>Cities:</p>
              <p className="block font-sans text-base antialiased font-light leading-relaxed text-gray-700">
                {data.cities}
              </p>
            </div>
          }
          {data?.attractions &&
            <div>
              <p className='font-[600]'>Attractions:</p>
              <p className="block font-sans text-base antialiased font-light leading-relaxed text-gray-700">
                {data.attractions}
              </p>
            </div>
          }
          {data?.unique &&
            <div>
              <p className='font-[600]'>Unique Factors:</p>
              <p className="block font-sans text-base antialiased font-light leading-relaxed text-gray-700">
                {data.unique}
              </p>
            </div>
          }
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
  )
}

const DestinationCard = ({ data }) => {
  return (
    <div >
      <div
        className="relative grid h-[500px] md:w-[80%] flex-col items-end justify-center overflow-hidden rounded-xl bg-white bg-clip-border text-center text-gray-700 mx-auto">
        <div
          className={`absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none text-gray-700 shadow-none`}>
          <Image src={data?.img} height={400} width={1200} alt='country' className={`absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none object-cover`} />
          <div className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-t from-black/80 via-black/50"></div>
        </div>
        <div className="relative p-2 px-2 py-4 md:px-12 max-w-[80%] mx-auto">
          <h1 className="mb-6 block font-sans text-[24px] md:text-4xl font-bold leading-[1.5] tracking-normal text-white antialiased">
            {data.country}
          </h1>
          <p className='text-white mb-3'>Why Visit {data.country} ?</p>
          <p className="block mb-4 font-sans text-[16px] antialiased font-normal leading-snug tracking-normal text-gray-400">
            {data.why}
          </p>
        </div>
      </div>
      {data?.cities?.length > 0 && <p className='mt-20 text-[32px] text-white'>Top Cities and Attractions</p>}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-10 mt-[30px] md:mt-[80px]'>
        {data?.cities?.map((data, id) => {
          return (
            <CityCard data={data} key={id} />
          )
        })}
      </div>
    </div>
  )
}

const DestinationData = [
  {
    country: 'United Kingdom (UK)',
    img: 'https://images.unsplash.com/photo-1454537468202-b7ff71d51c2e?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    desc: 'The United Kingdom offers a captivating blend of rich history, cultural diversity, and modern dynamism. From the cosmopolitan allure of London to the historic charm of Edinburgh and the architectural beauty of Bath, the UK presents a tapestry of experiences. Its literary, artistic, and musical contributions have left an indelible mark on the world, making it a top destination for those seeking a harmonious mix of tradition and innovation.',
    cities: [
      {
        img: 'https://images.unsplash.com/photo-1486299267070-83823f5448dd?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'London',
        attractions: 'Explore iconic landmarks such as the Tower of London, Buckingham Palace, and the British Museum. Immerse yourself in the vibrant culture of West End theaters and indulge in shopping on Oxford Street.',
        unique: 'London is home to over 170 museums, including the renowned British Museum, offering a journey through human history.'
      },
      {
        img: 'https://images.unsplash.com/photo-1506377585622-bedcbb027afc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Edinburgh',
        attractions: 'Discover the historic Edinburgh Castle, stroll down the Royal Mile, and explore the fascinating exhibits at the National Museum of Scotland.',
        unique: "Edinburgh hosts the world's largest arts festival, the Edinburgh Festival Fringe, attracting artists and performers from around the globe."
      },
      {
        img: 'https://images.unsplash.com/photo-1687800378414-d66456f32598?q=80&w=2055&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Bath',
        attractions: 'Visit the Roman Baths, marvel at the stunning Georgian architecture, and relax in the Thermae Bath Spa.',
        unique: 'Bath is a UNESCO World Heritage Site, known for its well-preserved Roman-built baths and 18th-century architecture.'
      },
      {
        img: 'https://images.unsplash.com/photo-1612563958093-2c3bcfbd8760?q=80&w=2020&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Oxford',
        attractions: 'Experience the academic charm of the University of Oxford, explore the historic Bodleian Library, and take a stroll through the beautiful Botanic Garden.',
        unique: 'Oxford offers a captivating blend of academic heritage and architectural beauty.'
      },
      {
        img: 'https://images.unsplash.com/20/cambridge.JPG?q=80&w=2047&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Cambridge',
        attractions: 'Discover the world-renowned University of Cambridge, punt along the River Cam, and explore the historic colleges, including King\'s College Chapel.',
        unique: 'Cambridge beckons with its picturesque landscapes and scholarly ambiance.'
      },
      {
        img: 'https://images.unsplash.com/photo-1566995203684-60106b942d51?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Bristol',
        attractions: 'Dive into the vibrant street art scene at Stokes Croft, visit the interactive We The Curious science museum, and explore the historic SS Great Britain.',
        unique: 'Bristol combines creativity, history, and modern innovation.'
      },
      {
        img: 'https://images.unsplash.com/photo-1623493802068-af819642f12b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Cardiff',
        attractions: 'Visit Cardiff Castle, explore the enchanting Cardiff Bay, and experience the cultural richness of the National Museum Cardiff.',
        unique: 'Cardiff, the capital of Wales, offers a delightful mix of history and contemporary attractions.'
      },
      {
        img: 'https://images.unsplash.com/photo-1531152127291-ea24c3b2a1da?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Glasgow',
        attractions: 'Explore the Kelvingrove Art Gallery and Museum, stroll through the Glasgow Botanic Gardens, and enjoy the vibrant arts scene.',
        unique: 'Glasgow showcases a dynamic blend of culture, architecture, and creativity.'
      },
      {
        img: 'https://images.unsplash.com/photo-1589490047559-a1c13ec25b87?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Scottish Highlands - NC500',
        attractions: 'Embark on the North Coast 500 (NC500) route, a scenic drive through the Scottish Highlands. Encounter breathtaking landscapes, visit historic castles like Dunrobin, and experience the rugged beauty of this iconic route.',
        unique: 'The Scottish Highlands offer nature\'s grandeur, with the NC500 presenting a journey of exploration.'
      },
    ],
    why: "These destinations offer a multifaceted experience, from the academic allure of Oxford and Cambridge to the vibrant culture of Bristol and the historic charm of Cardiff. Glasgow adds a dynamic arts scene, while the Scottish Highlands, with the NC500, present nature's grandeur. Each destination is a testament to the UK's rich history, cultural diversity, and natural beauty, making them must-visit places for a comprehensive exploration of the United Kingdom."
  },
  {
    country: 'Japan',
    img: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    cities: [
      {
        img: 'https://images.unsplash.com/photo-1549693578-d683be217e58?q=80&w=2077&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Tokyo',
        attractions: 'Experience the vibrant energy of Shibuya Crossing, explore historic temples like Senso-ji, and marvel at the cutting-edge technology in Akihabara.',
        unique: 'Tokyo is home to the world\'s busiest pedestrian crossing at Shibuya Crossing, a mesmerizing spectacle.'
      },
      {
        img: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Kyoto',
        attractions: 'Visit the Fushimi Inari Shrine, explore traditional wooden machiya houses in Gion, and discover the serene Arashiyama Bamboo Grove.',
        unique: 'Kyoto was the imperial capital of Japan for more than a thousand years and is renowned for its well-preserved classical architecture.'
      },
      {
        img: 'https://images.unsplash.com/photo-1584505489290-96eb4e406d08?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Osaka',
        attractions: 'Indulge in street food at Dotonbori, visit Osaka Castle, and experience the thrills of Universal Studios Japan.',
        unique: 'Osaka is known as the "Nation\'s Kitchen" due to its rich culinary scene and delicious street food.'
      },
      {
        img: 'https://images.unsplash.com/photo-1658167865945-7e9949fa4d69?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Hiroshima',
        attractions: 'Explore the Peace Memorial Park and Atomic Bomb Dome, symbolizing Hiroshima\'s resilience and dedication to peace. Visit Hiroshima Castle, Shukkeien Garden, and the vibrant Hiroshima Museum of Art.',
        unique: 'Hiroshima is a city of historical significance, marked by its recovery from the atomic bombing in 1945, now standing as a beacon for peace and reconciliation.'
      }
    ],
    why: "Japan entices visitors with a harmonious blend of ancient traditions and cutting-edge modernity. From the neon-lit streets of Tokyo to the serene temples of Kyoto and the historic resilience of Hiroshima, Japan offers a diverse range of experiences. Its unique culture, picturesque landscapes, and technological innovations make it a top destination for those seeking a journey that seamlessly combines tradition and innovation."
  },
  {
    country: 'South Korea',
    img: 'https://images.unsplash.com/photo-1551249506-d8e2c5536f8a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    cities: [
      {
        img: 'https://images.unsplash.com/photo-1546874177-9e664107314e?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Seoul',
        attractions: 'Explore the historic Gyeongbokgung Palace, shop in the bustling Myeongdong district, and visit the futuristic Dongdaemun Design Plaza.',
        unique: 'Seoul is home to the world\'s fastest internet speed and the futuristic Incheon International Airport.'
      },
      {
        img: 'https://images.unsplash.com/photo-1578037571214-25e07ed4a487?q=80&w=2016&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Busan',
        attractions: 'Relax on Haeundae Beach, visit the vibrant Jagalchi Fish Market, and explore the scenic Gamcheon Culture Village.',
        unique: 'Busan is known for its hot springs, offering a unique and relaxing experience for visitors.'
      },
      {
        img: 'https://images.unsplash.com/photo-1612977512598-3b8d6a498bbb?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Jeju Island',
        attractions: 'Discover the stunning landscapes of Manjanggul Cave, hike Hallasan, South Korea\'s highest peak, and relax at the picturesque O\'Sulloc Tea Plantation.',
        unique: 'Jeju Island is a UNESCO World Heritage site known for its volcanic landscapes, waterfalls, and unique lava tube caves.'
      }
    ]
    ,
    why: "South Korea beckons travelers with its captivating blend of ancient traditions, modern cities, and natural wonders. From the vibrant streets of Seoul to the serene beauty of Jeju Island, South Korea offers a diverse range of experiences. Its unique blend of history, technology, and natural beauty make it a top destination for those seeking a dynamic and enriching travel experience."
  },
  {
    country: 'North America',
    img: 'https://images.unsplash.com/photo-1547815749-838c83787de2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    cities: [
      {
        img: 'https://images.unsplash.com/photo-1546083381-2bed38b42cac?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'New York',
        attractions: 'New York City, the cultural and financial capital of the United States, is renowned for its iconic landmarks such as the Statue of Liberty, Times Square, Central Park, Broadway theaters, and world-class museums like the Metropolitan Museum of Art and Museum of Modern Art.',
        // unique: ''
      },
      {
        img: 'https://images.unsplash.com/photo-1617293541287-8c3aac62a116?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Washington DC',
        attractions: 'Washington DC, the capital of the United States, is home to iconic landmarks like the White House, Capitol Building, Lincoln Memorial, and Smithsonian museums. Visitors can explore the National Mall, visit the National Zoo, and learn about American history and culture.',
        // unique: ''
      },
      {
        img: 'https://images.unsplash.com/photo-1476984251899-8d7fdfc5c92c?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Miami',
        attractions: "Miami, Florida's vibrant city, offers stunning beaches, vibrant nightlife, and cultural diversity. Attractions include South Beach, Art Deco Historic District, Wynwood Walls, and the bustling nightlife of Miami Beach.",
        // unique: ''
      },
      {
        img: 'https://images.unsplash.com/photo-1542704792-e30dac463c90?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Toronto',
        attractions: "Toronto, Canada's largest city, boasts attractions like the CN Tower, Royal Ontario Museum, Toronto Islands, and vibrant neighborhoods like Kensington Market and Distillery District.",
        // unique: ''
      },
      {
        img: 'https://images.unsplash.com/photo-1562036861-44811e0b4481?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Bahamas',
        attractions: "The Bahamas, a Caribbean paradise, offers pristine beaches, crystal-clear waters, and vibrant coral reefs. Attractions include Paradise Island, Atlantis Paradise Resort, Pink Sands Beach, and snorkeling and diving adventures.",
        // unique: ''
      },
    ],
    why: "These cities and countries offer a diverse array of experiences, from historic landmarks and cultural attractions to natural wonders and vibrant city life."
  },
  {
    country: 'Scandinavian countries',
    img: 'https://images.unsplash.com/photo-1507272931001-fc06c17e4f43?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    cities: [
      {
        img: 'https://images.unsplash.com/photo-1509356843151-3e7d96241e11?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Sweden',
        cities: 'Stockholm (capital), Gothenburg, Malmö',
        attractions: 'Gamla Stan (Old Town) in Stockholm, Vasa Museum, Skansen Open-Air Museum, ABBA The Museum, Icehotel in Jukkasjärvi, Göta Canal, Drottningholm Palace',
        // unique: ''
      },
      {
        img: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Norway',
        cities: 'Oslo (capital), Bergen, Trondheim',
        attractions: 'Bryggen Wharf in Bergen, Geirangerfjord, Trolltunga, Viking Ship Museum in Oslo, Nidaros Cathedral in Trondheim, The Northern Lights (Aurora Borealis), Lofoten Islands',
        // unique: ''
      },
      {
        img: 'https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Denmark',
        cities: 'Copenhagen (capital), Aarhus, Odense',
        attractions: 'Tivoli Gardens in Copenhagen, Nyhavn, The Little Mermaid Statue, Rosenborg Castle, Legoland Billund, Aarhus Old Town, Kronborg Castle',
        // unique: ''
      },
      {
        img: 'https://images.unsplash.com/photo-1538332576228-eb5b4c4de6f5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Finland',
        cities: 'Helsinki (capital), Turku, Tampere',
        attractions: 'Suomenlinna Sea Fortress in Helsinki, Santa Claus Village in Rovaniemi, Northern Lights (Aurora Borealis), Sibelius Monument, Rovaniemi Arctic Circle, Kemi SnowCastle, Nuuksio National Park',
        // unique: ''
      },
      {
        img: 'https://images.unsplash.com/photo-1500043357865-c6b8827edf10?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Iceland:',
        cities: 'Reykjavik (capital), Akureyri, Hafnarfjörður',
        attractions: 'Blue Lagoon, Golden Circle (Thingvellir National Park, Geysir Geothermal Area, Gullfoss Waterfall), Jökulsárlón Glacier Lagoon, The Northern Lights (Aurora Borealis), Seljalandsfoss Waterfall, Skógafoss Waterfall, Vatnajökull National Park',
        // unique: ''
      },
    ],
    why: "These Scandinavian countries offer breathtaking natural landscapes, rich cultural heritage, and vibrant cities, making them ideal destinations for travelers seeking adventure, culture, and relaxation."
  }
]

export default function TopDestinations() {
  return (
    <div className='bg-primary-light-2 py-[30px] pt-[150px]'>
      <div className='container mx-auto px-[5%] flex flex-col items-center'>
        <p className='text-[32px] md:text-[48px] font-bold text-white mt-[30px]'>Destinations</p>
        <div className='flex flex-col gap-24 mt-[80px] pb-[160px]'>
          {DestinationData.map((data, id) => {
            return (
              <DestinationCard data={data} key={id} />
            )
          })}
        </div>
      </div>
    </div>
  )
}
