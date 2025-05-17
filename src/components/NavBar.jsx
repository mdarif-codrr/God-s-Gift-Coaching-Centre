import { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { IoClose } from 'react-icons/io5'
import { Link } from 'react-router'
import Logo from '../assets/logo.png'
const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => setMenuOpen(!menuOpen)
  const pathMap = {
    Home: 'home',
    'For Coaching': '/forcoaching',
    'For School': '/forschool',
    'For Parents': '/forparents',
    'Contact Us': '/contactus',
    'About Us': '/aboutus',
  }

  return (
  <>
  
    <nav className="w-full max-w-[1500px] px-6 py-4 flex items-center justify-between z-30 fixed bg-white">
      <div className=" border  rounded-full -mt-3.5  font-bold text-[#000E64] cursor-pointer">
        <Link to={'/home'}>
        <img className='w-13 rounded-full' src={Logo} alt="logo" />
        </Link>
      </div>

      <ul className="hidden lg:flex gap-10 font-semibold">
        {Object.entries(pathMap).map(([label, path], index) => (
          <li
          key={index}
          className="text-green-900 hover:text-[#0060D0] cursor-pointer font-bold hover:scale-115 transition-transform duration-300 ease-in-out"
          >
            <Link to={path}>{label}</Link>
          </li>
        ))}
      </ul>

      <div
        className="lg:hidden text-3xl text-[#000E64] cursor-pointer ml-auto"
        onClick={toggleMenu}
        >
        {menuOpen ? (
          <IoClose className="absolute z-30 right-2" />
        ) : (
          <GiHamburgerMenu />
        )}
      </div>

      {menuOpen && (
        <ul className="absolute top-0 left-0 w-full bg-white shadow-md px-6 py-4 flex flex-col gap-4 font-semibold rounded-b-lg z-20 lg:hidden">
          {Object.entries(pathMap).map(([label, path], index) => (
            <li
            onClick={toggleMenu}
            key={index}
            className="text-[#000E64] text-center hover:text-[#0060D0] cursor-pointer font-bold hover:scale-115 transition-transform duration-300 ease-in-out"
            >
              <Link to={path}>{label}</Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
    { !menuOpen && <div className="w-full max-w-[1500px] h-0.5 fixed z-30 top-15 bg-gray-300"></div>}
      </>
  )
}

export default NavBar
