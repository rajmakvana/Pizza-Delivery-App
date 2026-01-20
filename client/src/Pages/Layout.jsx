import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router'

const Layout = () => {
  return (
    <div className='container lg:w-[90%] mx-auto w-full h-screen bg-white'>
        <Navbar/>
        <Outlet/>
    </div>
  )
}

export default Layout