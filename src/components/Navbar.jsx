import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { navLinks } from '../constants'
import { logo, menu, close } from '../assets'
import { styles } from '../styles'
const Navbar = () => {
  const [active, setActive] = useState('')
  const [toggle, setToggle] = useState(false)
  return (
    <nav
      className={`${styles.paddingX} w-full
      flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div
        className='w-full flex justify-between 
        items-center max-w-7xl mx-auto'
      >
        <Link
          to="/"
          className='flex items-center gap-2'
          onClick={() => {
            setActive("")
            window.scrollTo(0, 0)
          }}
        >
          <img src={logo} alt="logo" className='w-12 h-12 rounded-full hover:-translate-y-1 duration-200' />
          <p className='text-[16px] md:text-[23px] text-white font-bold cursor-pointer'>
            Khang Phuc Nguyen
            <span className='text-indigo-400 block hover:translate-x-2 duration-200'> Software Engineer</span></p>
        </Link>
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((link, index) => {
            return (
              <div
                key={link.id}
                className={`${active === link.title ? "text-white" : "text-secondary"} 
                hover:text-indigo-400 text-[18px] font-medium cursor-pointer duration-200
                hover:-translate-y-1`}
                onClick={() => setActive(link.title)}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </div>
            )
          })}
        </ul>
        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img
            src={toggle == false ? menu : close}
            alt="menu"
            className='w-[28px] h-[28px] object-contain cursor-pointer'
            onClick={() => setToggle(!toggle)}
          />
          <div className={`${toggle ? 'flex' : 'hidden'} p-10 
               bg-gradient-to-r from-indigo-500 to-black
               absolute top-20 right-0 mx-4 my-2 min-w[140px] z-10 rounded-lg duration-1000`}>
            <ul className='list-disc flex justify-end items-start flex-col gap-4'>
              {navLinks.map((link, index) => {
                return (
                  <div
                    key={link.id}
                    className={`${active === link.title ? "text-white" : "text-secondary"} 
                    hover:text-indigo-400 text-[20px] font-medium cursor-pointer duration-200
                    hover:-translate-y-1`}
                    onClick={() => {
                      setActive(link.title)
                      setToggle(!toggle)
                    }}
                  >
                    <a href={`#${link.id}`}>{link.title}</a>
                  </div>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </nav >
  )
}

export default Navbar