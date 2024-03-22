import Image from 'next/image'
import React from 'react'

export default function Gallery() {
  return (
    <div className='grid grid-cols-2 md:grid-cols-4 gap-3 p-3 grid-flow-dense'>
      <div className='w-full h-[200px] object-cover col-span-1 row-span-1  overflow-hidden first:hover'>
        <Image src="https://images.unsplash.com/photo-1505832018823-50331d70d237?q=80&w=2108&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" height={400} width={600} alt='gallery image' className='w-full h-full object-cover first:hover:scale-[1.2] transition-all duration-500' />
      </div>
      <div className='w-full h-[200px] object-cover col-span-2 row-span-1  overflow-hidden'>
        <Image src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" height={400} width={600} alt='gallery image' className='w-full h-full object-cover object-bottom hover:scale-[1.2] transition-all duration-500' />
      </div>
      <div className='w-full h-[412px] object-cover col-span-1 row-span-2  overflow-hidden'>
        <Image src="https://images.unsplash.com/photo-1519121785383-3229633bb75b?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" height={400} width={600} alt='gallery image' className='w-full h-full object-cover hover:scale-[1.2] transition-all duration-500' />
      </div>
      <div className='w-full h-[200px] object-cover col-span-1 row-span-1  overflow-hidden'>
        <Image src="https://images.unsplash.com/photo-1606298246186-08868ab77562?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" height={400} width={600} alt='gallery image' className='w-full h-full object-cover hover:scale-[1.2] transition-all duration-500' />
      </div>
      <div className='w-full h-[412px] object-cover col-span-1 row-span-2  overflow-hidden'>
        <Image src="https://images.unsplash.com/photo-1549144511-f099e773c147?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" height={400} width={600} alt='gallery image' className='w-full h-full object-cover hover:scale-[1.2] transition-all duration-500' />
      </div>
      <div className='w-full h-[200px] object-cover col-span-1 row-span-1  overflow-hidden'>
        <Image src="https://images.unsplash.com/photo-1520939817895-060bdaf4fe1b?q=80&w=1923&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" height={400} width={600} alt='gallery image' className='w-full h-full object-cover hover:scale-[1.2] transition-all duration-500' />
      </div>
      <div className='w-full h-[200px] object-cover col-span-1 row-span-1  overflow-hidden'>
        <Image src="https://images.unsplash.com/photo-1535189043414-47a3c49a0bed?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" height={400} width={600} alt='gallery image' className='w-full h-full object-cover hover:scale-[1.2] transition-all duration-500' />
      </div>
      <div className='w-full h-[200px] object-cover col-span-2 row-span-1  overflow-hidden'>
        <Image src="https://images.unsplash.com/photo-1483653364400-eedcfb9f1f88?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" height={400} width={600} alt='gallery image' className='w-full h-full object-cover hover:scale-[1.2] transition-all duration-500' />
      </div>

    </div>
  )
}
