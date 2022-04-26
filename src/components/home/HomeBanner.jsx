import React from 'react'

export default function LogoHome() {
  return (
    <div className="col-start-4 col-span-2 flex flex-col items-center p-8 select-none">
      <div className='flex flex-row items-center mb-0'>
        <div>
          <h1 className='text-3xl sm:text-5xl text-right font-alfa-slab-one'>DIRT</h1>
          <h1 className='text-3xl sm:text-5xl text-right font-alfa-slab-one text-red-600'>RALLY</h1>
        </div>
        <h1 className='text-7xl sm:text-9xl text-left ml-2 font-alfa-slab-one'>2.0</h1>
      </div>
      <h2 className='text-3xl sm:text-5xl font-faster-one'>Dashboard</h2>
    </div>
  )
}