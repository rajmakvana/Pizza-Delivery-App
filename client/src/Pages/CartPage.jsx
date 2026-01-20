import React from 'react'
import EmptyCart from '../components/EmptyCart'
import OrderCart from '../components/OrderCart'

const CartPage = () => {
  return (
    <div className='flex items-center justify-center'>
        {/* <EmptyCart/> */}
        <OrderCart/>
    </div>
  )
}

export default CartPage