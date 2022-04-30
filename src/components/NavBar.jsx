import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {solid} from '@fortawesome/fontawesome-svg-core/import.macro'

export default function NavBar() {
  const cookieName = localStorage.getItem('playerName');
  console.log('Nav cookieName: ', cookieName);

  return (
    <div className='w-full border-b-2 space-x-4 p-4 bg-neutral-900 text-white'>
      <>
      <Link to="/" className='font-alfa-slab-one'>D<span className='text-red-700'>R</span><sup>2</sup></Link>
      <Link to="/leaderboard" className='hover:text-red-600 hover:underline'>Leaderboard</Link>
      <Link to="/stages" className='hover:text-red-600 hover:underline'>Stages</Link>
      </>
      <Link to={"/profile"} className='hover:text-red-600 hover:underline absolute right-4'><FontAwesomeIcon icon={solid('user')} className='text-xl' /></Link> {/* head icon with name (or input) */}
    </div>
  )
}