import React from 'react'
import { useNavigate } from "react-router";

const EmptyCart = () => {

    const navigate = useNavigate();
  return (
    <div className='flex flex-col items-center justify-center mt-10 gap-4'>
        <h1 className='text-5xl font-semibold text-slate-700 mb-2'>Cart Empty 😕</h1>
        <p className='text-sm text-slate-500'>You probaly haven't ordered a pizza yet. <br/> To order a pizza, go to the manin page</p>
        <img src="/img/empty-cart.png" alt="empty-cart" className='w-100 mt-3' />
        <button className='mt-5 bg-[#FE5F1E] text-white px-10 py-3 rounded-4xl font-semibold' onClick={() => navigate("/")}>Go Back</button>
    </div>
  )
}

export default EmptyCart