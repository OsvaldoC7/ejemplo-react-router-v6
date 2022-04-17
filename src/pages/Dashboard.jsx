import React from 'react'
import { useNavigate, Outlet, Link } from 'react-router-dom'

export default function Dashboard() {

  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/')
  }

  return (
    <div className='flex flex-col gap-2 w-full h-full items-center justify-center'>
      Dashboard
      <button onClick={handleClick} className='bg-indigo-400 px-4 py-2 text-white rounded-lg m-4'>
        Logout
      </button>
      <Link to='welcome' className='bg-indigo-400 px-4 py-2 text-white rounded-lg m-4'>
        Welcome
      </Link>
      {/* Donde se insertaran las subrutas */}
      <Outlet />
    </div>
  )
}