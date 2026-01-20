import React, { useContext } from 'react'
import EmptyCart from '../components/EmptyCart'
import OrderCart from '../components/OrderCart'
import { CartContext } from '../context/cartContext'
import CartItem from '../components/CartItem'

const CartPage = () => {

  const { cartItems } = useContext(CartContext); 

  return (
    <div className='flex items-center justify-center'>

      {
        cartItems.length <= 0 ? <EmptyCart/> : <OrderCart pizza={cartItems}/>
      }
    </div>
  )
}

export default CartPage