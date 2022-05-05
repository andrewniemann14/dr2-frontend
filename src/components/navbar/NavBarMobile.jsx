import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'

import MenuMobile from './MenuMobile';

export default function NavBarMobile({name, changeName, clearCookie}) {
  const [open, setOpen] = useState(false);

  function toggleOpen() {
    setOpen(!open);
    console.log(open);
  }

  return (
    <>
    <div className='w-full border-b-2 p-4 bg-neutral-900 text-white flex place-content-between'>
      <Link to="/" className='font-alfa-slab-one text-xl'>D<span className='text-red-700'>R</span><sup>2</sup></Link>
      <Link to={`/profile`}><FontAwesomeIcon icon={solid('user')} className='text-xl' /></Link>
      <FontAwesomeIcon icon={solid('bars')} onClick={toggleOpen} className='text-xl' />
    </div>
    <MenuMobile name={name} changeName={changeName} clearCookie={clearCookie} open={open} />

    </>
  )
}