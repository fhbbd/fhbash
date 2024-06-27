import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

function RootLayout() {
    
  return (
    <div className='max-w-6xl m-auto bg-white'>
        <Navbar />
        <main className='h-screen p-8'>
            <Outlet />
        </main>
    </div>
  )
}

export default RootLayout