import React from 'react'
import { NavLink } from 'react-router';
import { FaCartShopping } from "react-icons/fa6";

const Navbar = () => {
  return (
    <div className='px-5 py-3 flex justify-between items-center text-black'>
        <div>
            <NavLink to="/"><img src="/img/logo.png" alt="" /></NavLink>
        </div>
        <div>
            <ul className='flex gap-8 items-center justify-center '>
                <li className='hover:text-[#FE5F1E]'><NavLink to="/menu" className={({isActive}) => isActive ? 'text-[#FE5F1E]' : '' } >Menu</NavLink></li>
                <li className='hover:text-[#FE5F1E]'><NavLink to="/offer" className={({isActive}) => isActive ? 'text-[#FE5F1E]' : '' }>Offer</NavLink></li>
                <li className='hover:text-[#FE5F1E]'><NavLink to="/register" className={({isActive}) => isActive ? 'text-[#FE5F1E]' : '' }>Register</NavLink></li>
                <li className='hover:text-[#FE5F1E]'><NavLink to="/login" className={({isActive}) => isActive ? 'text-[#FE5F1E]' : '' }>Login</NavLink></li>
                <li className='inline-block px-4 py-2 rounded-full bg-[#FE5F1E] hover:bg-[#b23301]'><NavLink to="/cart" className={({isActive}) => isActive ? 'text-[#FE5F1E]' : '' }>
                <FaCartShopping className='text-white text-xl'/></NavLink> </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar