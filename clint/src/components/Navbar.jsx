import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/logo.jpg'

function Navbar() {
  return (
    <div className='w-full border-b-2 border-stone-300 flex flex-row items-center justify-between px-8 bg-sky-600 text-white'>
        <div>
          <h2 className='uppercase'>Fazlul haque biddhya niketon</h2>
        </div>
        <div className='uppercase flex flex-row items-center justify-evenly'>
            <NavLink className="py-4 px-4 hover:bg-sky-400 hover:text-white transition duration-500" to='/'>Dashboard</NavLink>
            <NavLink className="py-4 px-4 hover:bg-sky-400 hover:text-white transition duration-500" to='admission'>Admission</NavLink>
            <NavLink className="py-4 px-4 hover:bg-sky-400 hover:text-white transition duration-500" to='salary'>Salary</NavLink>
        </div>
    </div>
  )
}

export default Navbar