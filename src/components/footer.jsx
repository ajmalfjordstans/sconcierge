import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const cities = [
  'London', 'Birmingham', 'Manchester', 'Glasgow', 'Edinburgh', 'Belfast', 'Dublin',
  'Paris', 'Rome', 'Barcelona', 'Prague', 'Vienna', 'Lisbon', 'Copenhagen', 'Amsterdam',
  'Budapest', 'Florence', 'Athens', 'Madrid', 'Berlin', 'Venice', 'Stockholm', 'Seville',
  'Munich', 'Porto', 'Hamburg', 'Milan', 'Zurich', 'Geneva', 'New York', 'Washington DC',
  'Miami', 'Toronto', 'Bahamas', 'Tokyo', 'Kyoto', 'Osaka', 'Hiroshima', 'Seoul', 'Busan',
  'Taipei', 'Singapore', 'Hong Kong'
];


export default function Footer() {
  return (
    <div className='bg-primary-light-1 py-[60px] text-third'>
      <div className='container mx-auto px-[5%] text-[14px] md:text-[16px]'>
        {/* Destinations */}
        <div className='flex flex-col gap-1 col-span-2'>
          <p className='font-[600] pb-[10px] text-[18px] text-center'>Destinations</p>
          <div className='flex gap-5 flex-wrap justify-center'>
            {cities.map((city, id) => {
              return (
                <Link href="/top-destinations" key={id}>
                  <div className='flex gap-5'>
                    <p>{city}</p>
                    <p>|</p>
                  </div>
                </Link>
              )
            })}
          </div>
          {/* London | Birmingham | Manchester | Glasgow | Edinburgh | Belfast | Dublin | Paris | Rome | Barcelona | Prague | Vienna | Lisbon | Copenhagen | Amsterdam | Budapest | Florence | Athens | Madrid | Berlin | Venice | Stockholm | Seville | Munich | Porto | Hamburg | Milan | Zurich | Geneva | New York | Washington DC | Miami | Toronto | Bahamas |  Tokyo | Kyoto | Osaka | Hiroshima | Seoul | Busan | Taipai | Singapore | Hong Kong */}
        </div>
        <div className='grid gap-1 grid-cols-1 md:grid-cols-3 mt-10'>
          <div className='col-span-3'>
            <div className='grid grid-cols-2 lg:grid-cols-3 gap-1'>
              {/* About Us */}
              <div className='flex flex-col gap-1'>
                <p className='font-[600] pb-[10px] text-[18px]'>About Us</p>
                <Link href="/about#about_us">
                  <p>Our Journey</p>
                </Link>
                <Link href="/about#about_us">
                  <p>Our Commitment</p>
                </Link>
                <Link href="/about#who_we_are">
                  <p>Our Team</p>
                </Link>
                <Link href="/about#who_we_are">
                  <p>Passion for Travel</p>
                </Link>
                <Link href="/about#who_we_are">
                  <p>Expertise Across the Globe</p>
                </Link>
                <Link href="/about#who_we_are">
                  <p>Mission to Exceed Expectations</p>
                </Link>
              </div>
              {/* Our Services */}
              <div className='flex flex-col gap-1'>
                <p className='font-[600] pb-[10px] text-[18px]'>Our Services</p>
                <Link href="/">
                  <p>Private Car Service</p>
                </Link>
                <Link href="/">
                  <p>Airport Transfer</p>
                </Link>
                <Link href="/">
                  <p>Hourly Booking</p>
                </Link>
                <Link href="/">
                  <p>Day Tours (Car/Coach)</p>
                </Link>
                <Link href="/">
                  <p>Multi-Day Tours (Car/Coach)</p>
                </Link>
                <Link href="/">
                  <p>Coach Booking</p>
                </Link>
                <Link href="/">
                  <p>Bus Ticket Booking</p>
                </Link>
                <Link href="/our-services">
                  <p className='font-[500]'>More</p>
                </Link>
              </div>
              <div className='flex flex-col justify-between'>
                <div className='flex justify-around'>
                  <Link href="">
                    <span className="[&>svg]:h-5 [&>svg]:w-5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 512 512">
                        <path
                          d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                      </svg>
                    </span>
                  </Link>
                  <Link href="">
                    <span className="[&>svg]:h-5 [&>svg]:w-5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 320 512">
                        <path
                          d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
                      </svg>
                    </span>
                  </Link>
                  <Link href="">
                    <span className="[&>svg]:h-5 [&>svg]:w-5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 448 512">
                        <path
                          d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                      </svg>
                    </span>
                  </Link>
                  <Link href="">
                    <span className="[&>svg]:h-5 [&>svg]:w-5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 448 512">
                        <path
                          d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
                      </svg>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 justify-center items-center gap-10 w-full mt-[60px]'>
              <Link href="/" className='flex justify-center items-center'>
                <Image src="/icons/logo.png" height={200} width={300} alt='logo' className='' />
              </Link>
              <Link href="/" className='flex justify-center items-center'>
                <Image src="/icons/khholidays.png" height={200} width={300} alt='logo' className='' />
              </Link>
              <Link href="/" className='flex justify-center items-center'>
                <Image src="/icons/ridewing_logo.png" height={200} width={300} alt='logo' className='' />
              </Link>
            </div>
          </div>
        </div>
        <div className='w-full h-[1px] bg-third my-[20px]'></div>
        <div className='flex flex-col items-center gap-3 text-center'>
          <p>Company registration: 14026674. 491 - Sipson Road, West Drayton, UB70JB, United Kingdom</p>
          <div className='flex gap-3'>
            <p>Copyright © 2018 Spectra</p>
            <Link href="/docs/privacy.pdf" target="_blank" rel="noopener noreferrer">
              <p>Privacy Policy</p>
            </Link>
            <Link href="/docs/terms.pdf" target="_blank" rel="noopener noreferrer">
              <p>Terms & Conditions</p>
            </Link>
          </div>
        </div>

        {/* <p className='font-[600] text-[18px]'>SIGNATURE CONCIERGE LTD (DMC)</p>
        <p>Company Registration Number:- 14026674</p>
        <p>Registered in England & Wales</p>
        <p>Trading Names:- Signature Concierge & Kingdom Holidays</p>
        <p>491 - Sipson Road, West Drayton, UB70JB, United Kingdom</p> */}
      </div>
    </div>
  )
}
