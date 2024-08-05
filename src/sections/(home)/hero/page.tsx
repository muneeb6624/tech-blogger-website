import { Button } from '@/components/ui/button'
import React from 'react'
import { Input } from "@/components/ui/input"

function Hero() {
  return (
    <div className='container mx-auto px-4 mt-24 mb-20 text-white'>
      <div className='font-[Montserrat]'>
        <h1 className='text-xl md:text-2xl font-semibold'>What I Do</h1>
        <h1 className='text-4xl md:text-5xl lg:text-6xl font-[1000] gap-2 mt-8 md:mt-12 mb-12 md:mb-24 leading-normal'>
          <span>I explain and teach tech­nol­o­gy,</span> <br />
          <span>solve tech prob­lems and help you</span> <br />
          <span>make gad­get buy­ing decisions.</span>
        </h1>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12'>
        <div className='flex flex-col'>
          <h1 className='font-bold mb-6 md:mb-10 text-xl md:text-2xl'>SUBSCRIBE TO OUR NEWSLETTER</h1>
          
          <div className='flex flex-col md:flex-row gap-4'>
            <Input type="text" placeholder='Email address' className='w-full h-12 md:h-14 rounded-sm' />
            <Button type='submit' className='bg-[#7bb52b] w-full md:w-44 text-white h-12'>SUBMIT</Button>
          </div>
        </div>

        <div className='flex flex-col items-center md:items-end'>
          <hr className='mb-6 md:mb-8 w-full md:w-[40%]' />
          <h1 className='font-[Montserrat] font-extrabold text-center md:text-right'>
            <span className='text-green-500 text-4xl md:text-5xl lg:text-6xl'>125.000</span> <br />
            <span className='text-xl md:text-2xl'>JOIN THE LIST OF SUBSCRIBERS</span>
          </h1>
        </div>
      </div>
    </div>
  )
}

export default Hero
