import React, { useState } from 'react'
import logo from "../assets/logo2.png"

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <nav>
      {/* Top banner */}
      <h1 className='w-full text-white bg-amber-700 uppercase text-center p-2 text-sm sm:text-base'>
        Get free delivery on orders over $80
      </h1>

      {/* Main Nav */}
      <div className='flex justify-between max-w-[1440px] mx-auto items-center text-gray-700 bg-[#f9f9f9] py-4 px-6 md:px-10'>
        {/* Logo */}
        <div>
          <img src={logo} alt="logo" className='h-10' />
        </div>

        {/* Desktop Menu */}
        <ul className='hidden lg:flex gap-10 font-bold'>
          <a href="#shop"><li>Product</li></a>
          <a href="#dogservice"><li>Services</li></a>
          <a href="#location"><li>Location & Hours</li></a>
          <a href="#footer"><li>About Us</li></a>
        </ul>

        {/* Icons (desktop) */}
        <div className='hidden lg:flex gap-3'>
          <i className="material-icons-outlined">search</i>
          <i className="material-icons-outlined">shopping_cart</i>
        </div>

        {/* Hamburger */}
        <div className='lg:hidden flex items-center gap-4'>
          <i className="material-icons-outlined">shopping_cart</i>
          <button onClick={toggleMenu}>
            <span className="material-icons-outlined text-3xl">
              {menuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-[#f9f9f9] text-gray-700 px-6 py-4 space-y-3 font-semibold">
          <ul className="space-y-3">
            <li>Product</li>
            <li>Services</li>
            <li>Location & Hours</li>
            <li>About Us</li>
          </ul>
          <div className="flex gap-3 mt-3">
            <i className="material-icons-outlined">search</i>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Nav
