import React from 'react'

const ProfileSummary = ({name, nationality, overallScore}) => {
  return (
    <div>
      <div className='flex flex-row items-center max-w-xl p-2 m-auto'>
        <img src={require(`../img/flags/${nationality}.png`)} alt={`${nationality} flag`} className='h-8 block' />
        <h1 className='text-8xl text-center ml-2 mr-8'>{name}</h1>
        <h2 className='text-7xl align-baseline'>{overallScore}</h2>
    </div>
  </div>
  )
}

export default ProfileSummary