import React from 'react'

export default function About() {
  return (
    <>
      <div className='bg-third pt-[120px]'>
        <div className='py-[40px] container mx-auto px-[5%] font-[500]'>
          <p className='text-[32px] md:text-[48px] font-bold text-center' id='about_us'>About Us</p>
          <p className='text-center max-w-[700px] mx-auto text-[16px] mt-[15px]'>
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
              <span className='font-[600] mr-[10px] text-[16px] lg:text-[22px] '>Our Commitment</span>
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
      <div className='bg-primary-light-2 text-third text-[14px]'>
        <div className='py-[40px] container mx-auto px-[5%] font-[500]'>
          <div>
            <p className='text-[32px] md:text-[48px] font-bold text-center mt-[60px]' id='who_we_are'>Who We Are</p>
            <p className='text-center max-w-[700px] mx-auto mt-[25px]'>
              At Signature Concierge DMC, our identity is woven from the fabric of a dynamic and dedicated team, each member fueled by an unwavering passion for travel and a shared mission to surpass your expectations. Get acquainted with the driving force behind our commitment to excellence.
            </p>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10 mt-[50px]'>
              <div className='flex flex-col items-center text-center gap-4 border-white border-[1px] rounded-3xl p-[15px] shadow-md'>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className='w-10 h-10'
                  viewBox="0 0 16 16"
                >
                  <g fill="currentColor">
                    <path d="M8 2.002a1.998 1.998 0 100 3.996 1.998 1.998 0 000-3.996zM12.5 3a1.5 1.5 0 100 3 1.5 1.5 0 000-3zM3.5 3a1.5 1.5 0 100 3 1.5 1.5 0 000-3zM5 7.993A1 1 0 016 7h4a1 1 0 011 1v3a3.018 3.018 0 01-.146.927A3.001 3.001 0 015 11V8v-.007zM4 8c0-.365.097-.706.268-1H2a1 1 0 00-1 1v2.5a2.5 2.5 0 003.436 2.319A3.983 3.983 0 014 11zM12 8v3c0 .655-.157 1.273-.436 1.819A2.5 2.5 0 0015 10.5V8a1 1 0 00-1-1h-2.268c.17.294.268.635.268 1z"></path>
                  </g>
                </svg>
                <span className='font-[600] mr-[10px] text-[22px]'>Our Team</span>
                <p className=''>
                  We take pride in assembling a team of seasoned travel professionals, each chosen not only for their expertise but for their genuine love for exploration. From travel enthusiasts to industry veterans, our diverse team brings a wealth of experience, cultural insights, and a shared enthusiasm for creating extraordinary journeys.
                </p>
              </div>
              <div className='flex flex-col items-center text-center gap-4 border-white border-[1px] rounded-3xl p-[15px] shadow-md'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" className='w-10 h-10'>
                  <circle
                    cx="4.5"
                    cy="43.5"
                    r="2.5"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  ></circle>
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10.027 26l-1.074.537a1.779 1.779 0 00-.8 2.387l5.432 10.864a1.778 1.778 0 01.17 1.047l-.279 1.952a1.78 1.78 0 001.762 2.031 1.778 1.778 0 00.987-.3l2.989-1.993a1.785 1.785 0 01.987-.3h1.568a1.78 1.78 0 001.779-1.78v-.327a1.78 1.78 0 011.779-1.779h9.141a1.776 1.776 0 011.258.521l3.374 3.369v1.3h2.5a1.781 1.781 0 011.727 1.348l.621 3.78A1.78 1.78 0 0045.665 50h2.692a1.781 1.781 0 001.592-.984l.311-.623a1.78 1.78 0 011.592-.983h1.753c.639 0 1.228-1.638 1.545-2.192l4.525-7.92a1.759 1.759 0 00.2-.534l1.108-5.539a1.782 1.782 0 00-.2-1.232L56.27 22.1a1.777 1.777 0 00-.982-.8l-2.161-.72a1.779 1.779 0 01-1.205-1.492l-.415-3.735a1.78 1.78 0 00-.973-1.395l-.741-.37a1.781 1.781 0 01-.984-1.592V9.2h-1.295l-3.038 5.063a1.779 1.779 0 01-2.322.676l-2.326-1.163a1.78 1.78 0 01-.893-2.154l.027-.08A1.78 1.78 0 0037.274 9.2h-4.2a1.781 1.781 0 00-1.592.984l-1.46 2.92a1.78 1.78 0 01-2.022.931l-2.621-.655a1.775 1.775 0 00-1.355.205"
                  ></path>
                  <circle cx="19.74" cy="51.987" r="1.069"></circle>
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  >
                    <path d="M31 50v2M31 56v2M27 54h2M33 54h2M45.1 54h3.8a.677.677 0 01.606.98L48 59l-3.51-4.02a.677.677 0 01.61-.98zM15.781 5.326a7.844 7.844 0 00-7.747 7.936C8.034 17.645 15.781 28 15.781 28s7.747-10.355 7.747-14.738a7.843 7.843 0 00-7.747-7.936zm0 11.953a4.018 4.018 0 113.919-4.017 3.97 3.97 0 01-3.919 4.017zM47.781 22.326a7.844 7.844 0 00-7.747 7.936c0 4.383 7.747 14.738 7.747 14.738s7.747-10.355 7.747-14.738a7.843 7.843 0 00-7.747-7.936zm0 11.953a4.018 4.018 0 113.919-4.017 3.97 3.97 0 01-3.919 4.017z"></path>
                  </g>
                </svg>
                <span className='font-[600] mr-[10px] text-[22px]'>Passion for Travel</span>
                <p className=''>
                  What sets our team apart is more than just professional expertise – it&apos;s a shared passion for the art of travel. We are not merely consultants; we are avid travelers ourselves, constantly seeking new horizons, unique experiences, and hidden gems. This genuine love for exploration fuels our creativity and infuses every recommendation and service with a personal touch.
                </p>
              </div>
              <div className='flex flex-col items-center text-center gap-4 border-white border-[1px] rounded-3xl p-[15px] shadow-md'>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="512"
                  height="512"
                  viewBox="0 0 512 512" className='w-10 h-10'
                >
                  <g fill="none" stroke='currentColor' strokeWidth="32">
                    <path
                      strokeMiterlimit="10"
                      d="M256 48C141.13 48 48 141.13 48 256s93.13 208 208 208 208-93.13 208-208S370.87 48 256 48z"
                    ></path>
                    <path
                      strokeMiterlimit="10"
                      d="M256 48c-58.07 0-112.67 93.13-112.67 208S197.93 464 256 464s112.67-93.13 112.67-208S314.07 48 256 48z"
                    ></path>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M117.33 117.33c38.24 27.15 86.38 43.34 138.67 43.34s100.43-16.19 138.67-43.34M394.67 394.67c-38.24-27.15-86.38-43.34-138.67-43.34s-100.43 16.19-138.67 43.34"
                    ></path>
                    <g strokeMiterlimit="10">
                      <path d="M256 48v416M464 256H48"></path>
                    </g>
                  </g>
                </svg>
                <span className='font-[600] mr-[10px] text-[22px]'>Expertise Across the Globe</span>
                <p className=''>
                  Our team comprises individuals with a wealth of knowledge spanning various corners of the globe. From the bustling streets of London to the serene landscapes of Japan and the vibrant energy of South Korea, our experts possess an intimate understanding of diverse cultures and destinations. This global perspective enables us to curate experiences that go beyond the ordinary.
                </p>
              </div>
              <div className='flex flex-col items-center text-center gap-4 border-white border-[1px] rounded-3xl p-[15px] shadow-md'>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24" className='w-10 h-10'
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <circle cx="12" cy="12" r="6"></circle>
                  <circle cx="12" cy="12" r="2"></circle>
                </svg>
                <span className='font-[600] mr-[10px] text-[22px]'>Mission to Exceed Expectations</span>
                <p className=''>
                  Beyond the logistics of travel, our team is united by a singular mission – to exceed your expectations at every turn. We understand that a memorable journey is built on personalized moments and meticulous attention to detail. This commitment is ingrained in our work ethic, ensuring that each interaction with Signature Concierge DMC is marked by excellence and a genuine desire to elevate your travel experience.
                </p>
              </div>
            </div>
            <p className='text-center max-w-[700px] mx-auto mt-[30px]'>
              Meet the faces behind Signature Concierge DMC – a team driven by a shared love for travel, a commitment to professionalism, and a dedication to turning your travel dreams into reality. With us, you&apos;re not just a client; you&apos;re a fellow adventurer on a journey crafted with passion, expertise, and a relentless pursuit of excellence.
            </p>
          </div>
        </div >
      </div >
    </>
  )
}
