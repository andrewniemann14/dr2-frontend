import React from 'react'

export default function LogoHome() {
  return (
    <div className="flex flex-col items-center">
      {/* DIRT RALLY 2.0 div */}
      <div className='flex flex-row items-center mb-0'>
        {/* DIRT RALLY div */}
        <div>
          <h1 className='text-5xl text-right font-alfa-slab-one'>DIRT</h1>
          <h1 className='text-5xl text-right font-alfa-slab-one text-red-700'>RALLY</h1>
        </div>
        <h1 className='text-9xl text-left ml-2 font-alfa-slab-one'>2.0</h1>
      </div>
      <h2 className='text-5xl font-faster-one'>Dashboard</h2>
    </div>
  )
}