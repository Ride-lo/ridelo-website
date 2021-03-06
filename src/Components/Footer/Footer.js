import React from 'react'
import logo from '../../Images/HurlLogo1.png'
const Footer = () => {
  return (
    <footer class="border-t border-gray-200">
      <div
        class="
          w-full
          flex flex-col flex-wrap
          px-4
          py-16
          mx-auto
          md:items-center
          lg:items-center
          md:flex-row md:flex-nowrap
          bg-black
          
        "
      >
        <div class=" md:pl-12 flex-shrink-0 w-64 mx-auto text-center md:mx-0 md:text-left">
          <a
            href="/"
            class="
              flex
              object-center
              items-center
              justify-center
              md:justify-start
            "
          >
            <img src={logo} alt="logo" className="mb-4" />
          </a>
          <p class="mt-2 text-sm text-justify text-white">
            Ridelo helps create a single platform wherein various cab providers,
            cab aggregators and cab affliators are brought to the same platform
            such that it would be beneficial for the customers for making the
            choice of their preference.
          </p>
          {/* <div class="flex mt-4">
            <input
              type="text"
              class="
                h-auto
                p-2
                text-sm
                border border-white
                round
                text-white
              "
              placeholder="Your email address"
            />
            <button class="h-auto p-3 text-xs text-black bg-custom-yellow rounded-sm">
              Subscribe
            </button>
          </div>
          <div class="flex justify-center mt-4 lg:mt-2">
            <a href="/#">
              <svg
                fill="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-6 h-6 text-blue-600"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a class="ml-3" href="/#">
              <svg
                fill="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-6 h-6 text-blue-300"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a class="ml-3" href="http::/instagram.com">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-6 h-6 text-pink-400"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a class="ml-3" href="linkedin.com/ridelo">
              <svg
                fill="currentColor"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="0"
                class="w-6 h-6 text-blue-500"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                ></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </a>
          </div> */}
        </div>
        <div class=" md:pl-32 justify-between w-full mt-4 text-center md:flex">
          <div class="w-full pt-14 px-4 lg:w-1/3 md:w-1/2">
            <ul class="mb-8 space-y-2 text-sm list-none">
              <li>
                <a class="text-white hover:text-custom-yellow " href="/#">
                  Home
                </a>
              </li>
              <li>
                <a
                  class="text-white hover:text-custom-yellow"
                  href="#howitworks"
                >
                  How it Works
                </a>
              </li>
              <li>
                <a class="text-white hover:text-custom-yellow" href="#features">
                  Features
                </a>
                
              </li>
              <li>
                <a class="text-white hover:text-custom-yellow" href="#contact">
                  Contact us
                </a>
              </li>
            </ul>
          </div>
          {/* <div class="w-full px-4  pt-14  lg:w-1/3 md:w-1/2">
            <ul class="mb-8 space-y-2 text-sm list-none">
              <li>
                <a class="text-white hover:text-custom-yellow" href="/#">
                  Terms and Conditions
                </a>
              </li>
              <li>
                <a class="text-white hover:text-custom-yellow" href="/#">
                  Privacy policy
                </a>
              </li>
              <li>
                <a class="text-white hover:text-custom-yellow" href="/#">
                  About
                </a>
              </li>
            </ul>
          </div> */}
         {/*  <div class="w-full  pt-14  px-4 lg:w-1/3 md:w-1/2">
            <ul class="mb-8 space-y-2 text-sm list-none">
              <li>
                <a class="text-white hover:text-custom-yellow" href="/#">
                  Become a Driver
                </a>
              </li>
              <li>
                <a class="text-white hover:text-custom-yellow" href="/#">
                  Cities
                </a>
              </li>
              <li>
                <a class="text-white hover:text-custom-yellow" href="#contact">
                  Contact us
                </a>
              </li>
            </ul>
          </div> */}
          <div class="w-full  pt-14 px-4 lg:w-1/3 md:w-1/2">
            <ul class="mb-8 space-y-2 text-sm list-none">
              <li>
                <a class="text-white hover:text-custom-yellow" href="/#">
                  Info@Ridelo.in
                </a>
              </li>
              {/* <li>
                <a class="text-white hover:text-custom-yellow" href="/#">
                  +91 99590250019
                </a>
              </li> */}
            </ul>
          </div>
        </div>
      </div>
      <div class="flex justify-center -mt-12">
        <p class="text-base text-gray-400">
          All rights reserved by @Ridelo2022
        </p>
      </div>
    </footer>
  )
}

export default Footer
