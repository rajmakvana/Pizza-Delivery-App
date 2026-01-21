import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router'
import { ToastContainer } from 'react-toastify'

const Layout = () => {
  return (
    <div className='container lg:w-[90%] mx-auto w-full h-screen bg-white'>
        <ToastContainer position='top-right' autoClose={3000} /> 
        <Navbar/>
        <Outlet/>
    </div>
  )
}

export default Layout