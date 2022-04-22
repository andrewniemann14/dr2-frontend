import { Link } from 'react-router-dom'
import HomeLink from './HomeLink'

function NavBar() {
  return (
    <div className='w-full border-b-4 space-x-4 p-4 hover:shadow-inner'>
      <Link to="/" className='left-0'><HomeLink /></Link>
      <Link to="/leaderboard">Leaderboard</Link>
      <Link to="/stages">Stages</Link>
      <Link to="/profile/8ourne" className='absolute right-4'>Profile</Link> {/* head icon with name (or input) */}
    </div>
  )
}

export default NavBar