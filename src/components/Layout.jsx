import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import NavBar from './navbar/NavBar'

export default function Layout({children}) {
  return (
    <div className="bg-neutral-700 text-white">
      <NavBar />
      <div className="relative min-h-[calc(100vh-5rem)] mb-12 py-12">
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}
