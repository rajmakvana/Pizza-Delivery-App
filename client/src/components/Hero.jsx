import React from 'react'

const Hero = () => {
  return (
    <div className='flex items-center justify-between mt-5'>
        <div className='flex flex-col gap-3 items-center justify-center w-1/2'>
            <h3 className='text-2xl'><em>Are you Hungary?</em></h3>
            <h1 className='text-6xl font-bold'>Don't wait !!</h1>
            <button className='bg-[#FE5F1E] mt-2 hover:bg-[#b23301] text-white px-6 py-3 rounded-3xl font-semibold text-lg'>Order Now</button>
        </div>
        <div className='w-1/2 p-5'>
            <img src="/img/hero-pizza.png" alt="" />
        </div>
    </div>
  )
}

export default Hero