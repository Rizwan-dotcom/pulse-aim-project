import React from 'react'

export const HeroSection = () => {
  return (
    <>
    <div className='grid grid-cols-1 lg:grid-cols-2 px-8 lg:px-[72px] mb-8 lg:my-20 gap-8'>
        <div>
            <h2 className='text-2xl lg:text-4xl font-bold pb-6'>Why People choose PulseAim?</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi</p>
        </div>
        <div className='flex flex-col gap-5'>
        <div className='bg-gray-100 p-4 rounded'>
            <div className='flex justify-between'>
            <h2 className='text-xl font-semibold pb-3'>AI-Powered Scoring</h2>
            <i class="bi bi-dash-circle text-xl"></i>
            </div>
            <p className='text-[16px]'>Get instant, accurate scoring with our advanced AI technology that analyzes shots with precision. Our system provides detailed analytics for every shot, helping you track your progress and identify areas for improvement.</p>
        </div>
        <div className='bg-gray-100 p-4 rounded'>
            <div className='flex justify-between'>
            <h2 className='text-xl font-semibold'>Real-Time Feedback</h2>
            <i class="bi bi-plus-circle text-xl"></i>
            </div>
        </div>
        <div className='bg-gray-100 p-4 rounded'>
            <div className='flex justify-between'>
            <h2 className='text-xl font-semibold '>Versatile Range</h2>
            <i class="bi bi-plus-circle  text-xl"></i>
            </div>
        </div>
        </div>
    </div>
    <div className=" bg-gray-400 bg-blend-multiply h-[700px] bg-cover bg-center mb-16 text-white " style={{backgroundImage:`url('/images/slider-01.png')`}}>
      <div className='flex flex-col gap-4 px-8 lg:px-[72px] pt-60 pb-28 lg:w-1/2'>
        <h2 className='text-2xl font-bold'>Competition Ready</h2>
        <p className='text-sm leading-loose'>PulseAim is part of the Pulse Frontier product lineup, designed to revolutionize firearm training. It includes built-in capabilities for coach-organized competitions, offering a seamless way to manage and enhance training programs. It works with ShotPulse, the world's smallest shot timer, which is ideal for both dry fire and live fire practice.</p>
        <a href="#" className='flex gap-2 items-center text-orange-400 text-sm'>Learn More <i className='bi bi-arrow-right text-xl'></i></a>
      </div>
      <div className='flex justify-center gap-8'>
<img src="/images/left-arrow.png" alt="left-arrow" />
<img src="/images/right-arrow.png" alt="right-arrow" />
      </div>
    </div>
    <div className='grid grid-cols-1 lg:grid-cols-2 px-8 lg:px-[72px] mb-8 lg:my-10 gap-8'>
      <div>
        <h2 className='text-2xl lg:text-4xl font-bold pb-6'>Subscribe to our Newsletter</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
      </div>
      <div className='flex items-center gap-8'>
      <input
  type="email"
  placeholder="Enter your Email..."
  class="bg-gray-200 rounded-lg w-full h-12 lg:w-2/3 lg:h-1/2 px-8 text-sm text-black"
/>
       <button className='bg-orange-500 w-full h-12 lg:w-1/4 lg:h-1/2 rounded-lg hover:bg-orange-400 text-white'>Subscribe</button>
      </div>
    </div>
    </>
  )
}
