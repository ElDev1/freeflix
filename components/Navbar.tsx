import { BsChevronDown, BsSearch, BsBell } from 'react-icons/bs'
import { useState, useCallback } from 'react'

import NavbarItem from './NavbarItem'
import MobileMenu from './MobileMenu'
import AccountMenu from './AccountMenu'

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false)

  const toggleMobileMenu = useCallback(() => {
    setShowMobileMenu((current) => !current)
  }, [])

  return (
    <nav>
      <div className='px-4 md:px-16 py-6 flex flex-row items-center transition duration-500 bg-zinc-900 bg-opacity-90'>
        <h1 className='text-red-700 text-4xl font-bold'>Freeflix</h1>
        <div className='flex-row ml-8 gap-7 hidden lg:flex'>
          <NavbarItem label='Home'/>
          <NavbarItem label='Series'/>
          <NavbarItem label='Films'/>
          <NavbarItem label='My list'/>
          <NavbarItem label='Browse by languages'/>
        </div>
        <div onClick={toggleMobileMenu} className='lg:hidden flex flex-row items-center gap-2 ml-8 cursor-pointer relative'>
          <p className='text-white text-sm'>Browse</p>
          <BsChevronDown className='text-white transition'/>
          <MobileMenu visible={showMobileMenu} /> 
        </div>
        <div className='flex flex-row ml-auto gap-7 items-center'>
          <div className='text-gray-200 hover:text-gray-300 cursor-pointer transition'>
            <BsSearch />
          </div>
          <div className='text-gray-200 hover:text-gray-300 cursor-pointer transition'>
            <BsBell />
          </div>
          <div className='flex flex-row items-center gap-2 cursor-pointer relative'>
            <div className='w-6 h-6 lg:w-10 lg:h-10 rounded-md overflow-hidden'>
              <img src='/images/default-blue.png' alt='profile' />
            </div>
            <BsChevronDown className='text-white transition'/>
            <AccountMenu visible />
          </div>
        </div>
      </div>
    </nav>
  ) 
}

export default Navbar