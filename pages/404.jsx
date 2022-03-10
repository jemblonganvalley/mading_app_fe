

import React from 'react'

const NotFound = () => {
  return (
    <div className='w-screen h-screen flex flex-col justify-center items-center gap-4'>
        <div className='flex w-full justify-center'>
        <h1 className='text-orange-500 text-6xl font-thin animate-bounce delay-100'>4</h1>
        <h1 className='text-orange-500 text-6xl font-thin animate-spin'>0</h1>
        <h1 className='text-orange-500 text-6xl font-thin animate-ping'>4</h1>
        </div>
        <p className='font-light text-gray-500 '>   Page Tidak ditemukan</p>
    </div>
  )
}

export default NotFound