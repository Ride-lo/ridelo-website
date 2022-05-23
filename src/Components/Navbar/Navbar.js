import React from 'react'
import companyLogo from '../../../src/Images/HurlLogo1.png'
/* import IosLogo from '../../Images/IoS.png'
import PlayLogo from '../../Images/play.png' */
import { useState } from 'react'
import '../Navbar/Navbar.css'

const style = { color: "white", fontSize: "1em" }

const Navbar = () => {
  let Links = [
    { name: 'Home', link: '/' },
    { name: 'Features', link: '#features' },
    { name: 'How it works', link: '#howitworks' },
    { name: 'Contact us', link: '#contact' },
  ]
  let [open, setOpen] = useState(false)

  return (
    <div className="w-full h-screen" id="diagonal-bg">
      <div className="w-full fixed top-0 left-0 z-40">
        <div className="md:flex items-center justify-between bg-black py-0 md:px-10 px-7">
          <div
            className="relative font-bold text-2xl cursor-pointer flex items-center 
              text-black"
          >
            <img
              src={companyLogo}
              alt="company Logo"
              className="scale-50 md:h-40"
            />
          </div>

          <div
            onClick={() => setOpen(!open)}
            className="text-3xl absolute right-12 top-9 cursor-pointer md:hidden"
          >
            <ion-icon style={style} name={open ? 'close' : 'menu'}></ion-icon>
          </div>

          <ul
            className={`md:flex md:items-center md:pb-0 pt-0 pb-10 absolute md:static bg-black md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-200 ease-in ${
              open ? 'top-30 ' : 'top-[-490px]'
            }`}
          >
            {Links.map((link) => (
              <li
                key={link.name}
                className="md:bg-black text-white ml-8 top-6 mt-6 text-xl font-semibold md:p-6 mt-8 my-0 my-7 "
              >
                <a
                  href={link.link}
                  className="hover:text-gray-400 duration-200"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div
        className="text-center text-4xl font-bold pt-24 mt-24 md:mt-30 md:flex 
        items-center justify-between md:w-3/4 py-4 md:px-10 px-7 text-white"
      >
        One App For All The Cabs
      </div>
      <div
        className="text-center text-2xl font-normal mt-3 md:flex 
        items-center justify-between md:text-left md:w-2/3 py-4 md:px-10 px-7 text-white"
      >
        Ridelo is a cab aggregator platform that let users search, compare and
        book cabs from all the major cab providers on a real time basis.
      </div>
     {/*  <div className="install buttons">
        <ul className="flex flex-row items-center justify-around mt-16 md:w-2/5">
          <li className="flex">
            <img src={IosLogo} alt="IoSLogo" className="" />
          </li>
          <li className="flex">
            <img src={PlayLogo} alt="PlayLogo" className="" />
          </li>
        </ul>
      </div> */}
      <div className='flex flex-row justify-center items-center'>
      <div className='md:ml-10 m-10 border-none border-box 
          bg-white text-black md:w-1/3 w-3/4 text-2xl font-semibold text-center rounded-l p-4'> App Launching soon!</div>
        </div>
      <div id="howitworks"></div>
    </div>
  )
}

export default Navbar
