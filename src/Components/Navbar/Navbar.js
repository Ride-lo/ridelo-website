import React from 'react'
import companyLogo from '../../../src/Images/HurlLogo1.png'
import IosLogo from '../../Images/IoS.png'
import PlayLogo from '../../Images/play.png'

const Navbar = () => {
  return (
    <div className="bg-custom-yellow w-full h-screen">
      <div className="md:flex py-4 md:px-10 px-7">
        <div className="flex items-center">
          <img
            src={companyLogo}
            alt="company Logo"
            className="pt-6 pl-20 mr-36"
          />
        </div>
        <div className="text-xl flex flex-row ml-96 mt-8">
          <ul class="flex">
            <li class="mr-10 ">
              <a class="text-black hover:text-white" href="#">
                Home
              </a>
            </li>
            <li class="mr-10">
              <a class="text-black hover:text-white" href="#">
                Features
              </a>
            </li>
            <li class="mr-10">
              <a class="text-black hover:text-white" href="#">
                How it Works
              </a>
            </li>
            <li class="mr-10">
              <a class="text-black hover:text-white" href="#">
                Contact us
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-4xl font-bold mt-36 ml-48">
        One App For All The Cabs
      </div>
      <div className="text-2xl font-normal ml-48 mt-3 w-2/3">
        Ridelo is a cab aggregator platform that let users search, compare and
        book cabs from all the major cab providers on a real time basis.
      </div>
      <div className="install buttons">
        <ul className="flex flex-row">
          <li className="flex">
            <img src={IosLogo} alt="IoSLogo" className="pt-6 pl-48 mt-10" />
          </li>
          <li className="flex">
            <img
              src={PlayLogo}
              alt="PlayLogo"
              className="pt-6 pl-20 mr-24 mt-10"
            />
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
