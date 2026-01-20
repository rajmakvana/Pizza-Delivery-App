import React, { useContext } from 'react'
import { CartContext } from '../context/cartContext'

const CartItem = ({pizza}) => {

    const { addToCart } = useContext(CartContext);

    const handleAddToCart = () => {
        addToCart(pizza);
    }

  return (
    <div className='w-70 p-5 rounded-2xl flex flex-col items-center justify-center gap-3 shadow-xl mt-5'>
        <img className='h-40 mb-4 mx-auto' src="/img/pizza.png" alt="" />
        <div  className='flex flex-col items-center gap-3'>
            <h2 className='text-xl'>{pizza.name}</h2>
            <span>{pizza.size}</span>
            <div className='flex items-center justify-between gap-8 mt-3'>
                <span className='text-md'>₹{pizza.price}</span>
                <button className='flex gap-2 border-[#FE5F1E] text-[#FE5F1E] hover:bg-[#FE5F1E] hover:text-white border-2 rounded-full px-7 py-1.5 transition-all duration-200' onClick={handleAddToCart}>
                    <span>+</span>
                    <span>Add</span>
                </button>
            </div>
        </div>
    </div>
  )
}

export default CartItem