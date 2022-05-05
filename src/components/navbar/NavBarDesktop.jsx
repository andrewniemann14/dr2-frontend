// https://headlessui.dev/react/menu
import { useState } from 'react'
import { Link } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {solid} from '@fortawesome/fontawesome-svg-core/import.macro'

import MenuDesktop from './MenuDesktop';


export default function NavBarDesktop({name, changeName, clearCookie}) {
  // const cookieName = localStorage.getItem('playerName');
  const [open, setOpen] = useState(false);

  function toggleOpen() {
    setOpen(!open);
    console.log(open);
  }

  return (
    <>
    <div className='w-full border-b-2 p-4 bg-neutral-900 text-white space-x-4 flex'>
      <Link to="/" className='font-alfa-slab-one'>D<span className='text-red-700'>R</span><sup>2</sup></Link>
      <Link to="/leaderboard" className='hover:text-red-600'>Leaderboard</Link>
      <Link to="/stages" className='hover:text-red-600'>Stages</Link>
      <div className='absolute right-4'>
        <Link to="/profile" className='hover:text-red-600 hover:underline'><FontAwesomeIcon icon={solid('user')} className='text-xl' /></Link>
        <FontAwesomeIcon icon={solid('chevron-down')} onClick={toggleOpen} className='cursor-pointer hover:text-red-600 ml-2 text-md' />
      </div>

    </div>
    <MenuDesktop name={name} changeName={changeName} clearCookie={clearCookie} open={open} />
    </>
  )
}