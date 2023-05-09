import React, { useState, useEffect } from "react"
import { header } from "../data"
import Nav from "./Nav"
import NavMobile from "./NavMobile"
import { RiMenu4Fill, RiCloseFill } from "react-icons/ri"

const Header = () => {
  const [isActive, setIsActive] = useState(false)
  const [navMobile, setNavMobile] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 80 ? setIsActive(true) : setIsActive(false)
    })
  })

  const { logo, btnLoginText, btnSignupText } = header
  return (
    <header
      className={`${
        isActive ? "bg-neutral-500 py-[16px]" : "bg-transparent py-[20px]"
      } fixed max-w-[100%] left-0 right-0 mx-auto flex justify-between items-center px-[20px] lg:px-[80px] z-30 transition-all duration-300`}
    >
      <a href='/'>
        <img className='h-[30px]' src={logo} alt='logo' />
      </a>

      <Nav />

      <div className='hidden lg:flex space-x-4'>
        <button className='btn btn-sm text-white hover:text-primary-200 transition'>
          {btnLoginText}
        </button>
        <button className='btn btn-sm btn-primary'>{btnSignupText}</button>
      </div>

      <div
        onClick={() => setNavMobile(!navMobile)}
        className='lg:hidden absolute right-4'
      >
        {navMobile ? (
          <RiCloseFill className='text-3xl text-primary-200 cursor-pointer' />
        ) : (
          <RiMenu4Fill className='text-3xl text-primary-200 cursor-pointer' />
        )}
      </div>

      <NavMobile navMobile={navMobile} />
    </header>
  )
}

export default Header
