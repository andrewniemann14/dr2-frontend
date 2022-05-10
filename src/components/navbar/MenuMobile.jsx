import { Link } from 'react-router-dom'

import MiniProfile from './MiniProfile';


export default function MenuMobile({name, changeName, clearCookie, open}) {

  return (
    <div className={`flex flex-col content-center p-4 bg-neutral-800 text-white shadow-md shadow-black h-screen fixed right-0 z-10 ${open ? "" : "translate-x-full"} transition-all`}>
      <MiniProfile name={name} changeName={changeName} clearCookie={clearCookie} />
      <Link to="/" className='mt-4 text-center text-white text-xl hover:text-red-600 hover:underline'>Home</Link>
      <Link to="/profile" className='mt-4 text-center text-white text-xl hover:text-red-600 hover:underline'>Profile</Link>
      <Link to="/leaderboard" className='mt-4 text-center text-white text-xl hover:text-red-600 hover:underline'>Leaderboard</Link>
      <Link to="/stages" className='mt-4 text-center text-white text-xl hover:text-red-600 hover:underline'>Stages</Link>
    </div>
  )
}
