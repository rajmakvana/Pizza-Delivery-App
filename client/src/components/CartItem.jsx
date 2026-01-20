import React from 'react'

const CartItem = () => {
  return (
    <div className='w-70 p-5 rounded-2xl flex flex-col items-center justify-center gap-3 shadow-xl mt-5'>
        <img className='h-40 mb-4 mx-auto' src="/img/pizza.png" alt="" />
        <div  className='flex flex-col items-center gap-3'>
            <h2 className='text-xl'>Margherita</h2>
            <span>small</span>
            <div className='flex items-center justify-between gap-8 mt-3'>
                <span className='text-md'>₹250</span>
                <button className='flex gap-2 border-[#FE5F1E] text-[#FE5F1E] hover:bg-[#FE5F1E] hover:text-white border-2 rounded-full px-7 py-1.5 transition-all duration-200'>
                    <span>+</span>
                    <span>Add</span>
                </button>
            </div>
        </div>
    </div>
  )
}

export default CartItem