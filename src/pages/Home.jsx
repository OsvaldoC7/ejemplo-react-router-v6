import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className='flex flex-col gap-2 w-full h-full items-center justify-center'>
      Home
      <Link to={`/user/${Math.ceil(Math.random() * 100)}`} className='bg-indigo-400 px-4 py-2 text-white rounded-lg m-4'>Usuario</Link>
    </div>
  )
}