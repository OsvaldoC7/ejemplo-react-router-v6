import React from 'react'
import { useNavigate, Outlet } from 'react-router-dom'

export default function Dashboard() {

  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/')
  }

  return (
    <div className='flex flex-col gap-2'>
      Dashboard
      <button onClick={handleClick} className='bg-indigo-400 px-4 py-2 text-white w-1/6 rounded-lg m-4'>
        Logout
      </button>
      {/* Donde se insertaran las subrutas */}
      <Outlet />
    </div>
  )
}