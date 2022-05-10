import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import NavBar from './navbar/NavBar'

export default function Layout({children}) {
  return (
    <div className="min-h-[calc(100vh-3rem)] bg-neutral-700 text-white">
      <NavBar />
      <div className="relative mt-12"><Outlet /></div>
      <Footer />
    </div>
  )
}
