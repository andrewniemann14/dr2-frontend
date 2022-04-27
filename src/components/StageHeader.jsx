import React from 'react'

function StageHeader({country, stage}) {
  return (
    <div>
    <div className='flex flex-row w-full justify-center content-center'>
      <img src={require(`../img/flags/${country}.png`)} alt={`${country} flag`} className='h-8' />
      <h1 className='text-3xl text-center'>{stage}</h1>
    </div>
  </div>
  )
}

export default StageHeader