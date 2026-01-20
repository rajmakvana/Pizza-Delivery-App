import React from 'react'
import CartItem from './CartItem'

const Menu = () => {
  return (
    <div className='mt-8'>
        <h1 className='text-4xl font-semibold text-center text-[#FE5F1E]'>All Pizza</h1>

        <div className='flex items-center justify-center gap-7 flex-wrap mt-3'>
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
        </div>
    </div>
  )
}

export default Menu