import React from 'react'
import { useParams } from 'react-router-dom'

export default function User() {

  const params = useParams()

  return (
    <div className='flex flex-col gap-2 w-full h-full items-center justify-center'>
      User { params.id }
    </div>
  )
}