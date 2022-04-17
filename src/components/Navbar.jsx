import { NavLink } from 'react-router-dom'
import React from 'react'

export default function Navbar() {
  return (
    <div className='bg-indigo-100 h-9 w-full'>
      <ul className='flex flex-row gap-4 w-full h-full justify-around items-center'>
        <li>
          <NavLink 
            to='/'
            className={({ isActive }) => (isActive ? 'font-medium text-indigo-500' : 'font-normal text-indigo-400')}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink 
            to='/about'
            className={({ isActive }) => (isActive ? 'font-medium text-indigo-500' : 'font-normal text-indigo-400')}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink 
            to={`/user/${Math.ceil(Math.random() * 100)}`}
            className={({ isActive }) => (isActive ? 'font-medium text-indigo-500' : 'font-normal text-indigo-400')}
          >
            User
          </NavLink>
        </li>
        <li>
          <NavLink 
            to='/dashboard'
            className={({ isActive }) => (isActive ? 'font-medium text-indigo-500' : 'font-normal text-indigo-400')}
          >
            Dashboard
          </NavLink>
        </li>
      </ul>
    </div>
  )
}