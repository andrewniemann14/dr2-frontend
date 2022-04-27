import { Link } from 'react-router-dom'

export default function NavBar() {
  const cookieName = localStorage.getItem('playerName');
  console.log('Nav cookieName: ', cookieName);

  return (
    <div className='w-full border-b-2 space-x-4 p-4 bg-neutral-900 text-white'>
      <Link to="/" className='hover:underline font-alfa-slab-one'>D<span className='text-red-700'>R</span><sup>2</sup></Link>
      <Link to="/leaderboard" className='hover:text-red-600 hover:underline'>Leaderboard</Link>
      <Link to="/stages" className='hover:text-red-600 hover:underline'>Stages</Link>
      <Link to={"/profile"} className='hover:text-red-600 hover:underline absolute right-4'>Profile</Link> {/* head icon with name (or input) */}
    </div>
  )
}