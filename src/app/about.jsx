import React from 'react'

export default function About() {
  return (
    <div className='bg-third'>
      <div className='py-[70px] container mx-auto px-[5%] font-[500] pt-[60px]'>
        <p className='text-[32px] md:text-[48px] font-bold text-center'>About Us</p>
        <p className='text-center max-w-[700px] mx-auto text-[16px]'>
          Welcome to Signature Concierge DMC, where every journey is a crafted master piece and every experience is tailored to exceed your expectations. As a premier destination management company based in the heart of London, we invite you to delve into the essence of who we are and the unparalleled commitment we bring to curating exceptional travel experiences.
        </p>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-[50px]'>
          <div className='flex flex-col items-center text-center gap-4 border-white border-[1px] rounded-3xl p-[15px] shadow-md'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className='w-10 h-10'>
              <path
                fill="var(--ci-primary-color, currentColor)"
                d="M432 32a63.973 63.973 0 00-34.344 117.963L355.894 296.13A64.372 64.372 0 00352 296a63.659 63.659 0 00-38.193 12.678l-77.154-64.295A64 64 0 10131.259 269.7l-45.292 90.588A64.334 64.334 0 0080 360a64.082 64.082 0 1036.243 11.29l42.8-85.589a63.845 63.845 0 0059.982-14.356l74.7 62.252a64 64 0 1092.621-27.56l41.76-146.167c1.289.078 2.585.13 3.894.13a64 64 0 000-128zM80 456a32 32 0 1132-32 32.036 32.036 0 01-32 32zm96-200a32 32 0 1132-32 32.036 32.036 0 01-32 32zm176 136a32 32 0 1132-32 32.036 32.036 0 01-32 32zm80-264a32 32 0 1132-32 32.036 32.036 0 01-32 32z"
                className="ci-primary"
              ></path>
            </svg>
            <span className='font-[600] mr-[10px] text-[16px] lg:text-[22px]'> Our Journey</span>
            <p className='text-[14px] text-left'>
              Embark on a voyage with Signature Concierge DMC, a journey marked by years of expertise, passion for travel, and a relentless pursuit of excellence. From our humble beginnings to becoming a leading name in the industry, our evolution is a testament to our dedication to providing seamless and unforgettable travel adventures.
            </p>
          </div>
          <div className='flex flex-col items-center text-center gap-4 border-white border-[1px] rounded-3xl p-[15px] shadow-md'>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className='w-10 h-10'
              fill="none"
              viewBox="0 0 24 24"
            >
              <g stroke="#1c274c" strokeWidth="1.5">
                <path d="M11.146 7.023C11.526 6.34 11.716 6 12 6s.474.34.854 1.023l.098.176c.108.194.162.29.247.354.084.064.189.088.398.135l.191.044c.738.167 1.107.25 1.195.532s-.164.577-.667 1.165l-.13.152c-.143.167-.215.25-.247.354-.032.104-.021.215 0 .438l.02.203c.076.785.114 1.178-.116 1.352-.23.174-.575.015-1.266-.303l-.178-.082c-.197-.09-.295-.136-.399-.136s-.202.046-.399.136l-.178.082c-.691.318-1.037.477-1.266.303-.23-.174-.192-.567-.116-1.352l.02-.203c.021-.223.032-.334 0-.438-.032-.103-.104-.187-.247-.354l-.13-.152c-.503-.588-.755-.882-.667-1.165s.457-.365 1.195-.532l.19-.044c.21-.047.315-.07.4-.135.084-.064.138-.16.246-.354zM12 16.068l-3.771 3.905c-.54.56-.81.839-1.04.935-.52.22-1.099.032-1.373-.448-.12-.21-.158-.59-.232-1.35-.043-.43-.064-.644-.128-.824a1.433 1.433 0 00-.835-.864c-.173-.067-.38-.088-.795-.132-.734-.078-1.101-.117-1.305-.241-.463-.284-.646-.883-.433-1.422.094-.237.364-.517.904-1.076L5.456 12M12 16.068l3.772 3.905c.54.56.81.839 1.038.935.521.22 1.1.032 1.374-.448.12-.21.157-.59.232-1.35.043-.43.064-.644.128-.824.144-.402.446-.715.835-.864.174-.067.38-.088.795-.132.734-.078 1.101-.117 1.305-.241.463-.284.646-.883.433-1.422-.094-.237-.364-.517-.904-1.076L18.544 12"></path>
                <path strokeLinecap="round" d="M5.5 6.397A7 7 0 109.397 2.5"></path>
              </g>
            </svg>
            <span className='font-[600] mr-[10px] text-[16px] lg:text-[22px]'>Our Values</span>
            <p className='text-[14px] text-left'>
              At the core of our company are values that shape every interaction and experience we deliver. Integrity, innovation, and a client-centric approach form the pillars of our foundation. We believe in creating not just trips, but enduring memories, and our values guide us in ensuring that each moment is imbued with authenticity and exceptional service.
            </p>
          </div>
          <div className='flex flex-col items-center text-center gap-4 border-white border-[1px] rounded-3xl p-[15px] shadow-md'>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className='w-10 h-10'
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M20.42 4.58a5.4 5.4 0 00-7.65 0l-.77.78-.77-.78a5.4 5.4 0 00-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z"></path>
              <path d="M12 5.36L8.87 8.5a2.13 2.13 0 000 3h0a2.13 2.13 0 003 0l2.26-2.21a3 3 0 014.22 0l2.4 2.4M18 15l-2-2M15 18l-2-2"></path>
            </svg>
            <span className='font-[600] mr-[10px] text-[16px] lg:text-[22px]'>Our Commitment</span>
            <p className='text-[14px] text-left'>
              Our commitment goes beyond logistical perfection; it extends to crafting moments that linger in your memory. We are dedicated to understanding your unique desires and preferences, tailoring our services to transform your vision into a reality. Whether you&apos;re embarking on a business journey, a family vacation, or celebrating a special occasion, our commitment to excellence ensures that every detail is meticulously handled.
            </p>
          </div>
        </div>
        <p className='text-center max-w-[700px] mx-auto mt-[30px] text-[16px]'>
          Discover the Signature Concierge DMC difference – where passion meets professionalism, and every travel experience becomes a masterpiece. We invite you to entrust your journeys to us and witness the magic of personalized, unparalleled service. Welcome aboard, and let the exploration of extraordinary destinations begin.
        </p>
      </div>
    </div>
  )
}
