import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className='flex flex-col gap-2'>
      Home
      <Link to={`/users/${10}`}>Usuario</Link>
    </div>
  )
}