import React from 'react'
/* import ridetype from '../../Images/ridetype.png'
import pickup from '../../Images/pickup.png'
import companies from '../../Images/companies.png'
import cabtype from '../../Images/cabtype.png' */

import Uber from "../../Images/Uber.jpg"
import Ola from "../../Images/Ola.jpg"
import Meru from "../../Images/Meru.jpg"
import '../HowItWorks/works.css'


const Works = () => {
  return (
    <div className="-z-1">
      <div className="text-4xl font-semibold text-center md:text-center justify-center w-full py-4 md:px-10 px-7">
        How it Works
      </div>
      <div className="my-12 mx-8 md:mx-0 md:flex items-center justify-center">
        <ul className="md:flex md:px-36 items-center justify-center mt-16">
          <li className="mr-5 ">
            <div className="text-center md:text-left text-2xl font-semibold py-5">
              One Tap One App
            </div>
            <div className="text-center md:max-w-xl md:text-left text-l font-normal text-black py-5 ">
              You can book cabs from Ola, Uber and MeruCabs from a single App.
            </div>
          </li>
          <li>
            <div
              class="md:flex flex items-center justify-center my-12 md:my-0 md:static 
                     md:box-border md:h-64 md:w-96 text-black max-w-xs my-auto
                     mx-auto md:bg-gradient-to-bl from-black to-white
                     md:p-4 md:py-5 md:px-5 md:rounded-xl md:skew-y-[-20deg]
                     md:mt-24 md:mt-0"
            >
              <img
                style={{width: 200}}
                src={Ola}
                alt="Ola"
                className="md:skew-y-[20deg] relative 
                items-center shadow-xl rounded"
              />
            </div>
          </li>
        </ul>
      </div>
      <div className="my-16 mx-8 md:mx-0 md:flex items-center justify-center ">
        <ul className="flex flex-col-reverse md:flex md:flex-row md:px-36 items-center justify-around mt-24">
          <li>
            <div
              class="md:flex flex items-center justify-center my-12 md:my-0 md:static 
                     md:box-border md:h-64 md:w-96 text-black max-w-xs my-auto
                     mx-auto md:bg-gradient-to-br from-black to-white
                     md:p-4 md:py-5 md:px-5 md:rounded-xl md:skew-y-[20deg]
                     md:mt-24 md:mt-0"
            >
              <img
                style={{width: 200}}
                src={Uber}
                alt="Uber"
                className="md:skew-y-[-20deg] relative 
                items-center shadow-xl rounded"
              />
            </div>
          </li>
          <li className="mr-5">
            <div className="text-center md:text-right text-2xl font-semibold py-5">
              Fast Switching of Cab apps
            </div>
            <div className="text-justify md:max-w-xl md:text-right text-l font-normal text-black py-5 md:pl-24">
              You can switch between the apps to compare the prices and the ETA(estimated time of arrival) in seconds.
            </div>
          </li>
        </ul>
      </div>
      <div className="my-16 mx-8 md:mx-0 md:flex items-center justify-center">
        <ul className="md:flex md:px-36 items-center justify-between mt-24 ">
          <li className="mr-5">
            <div className="text-center md:text-left text-2xl font-semibold py-5">
              Ride booking Confirmed 
            </div>
            <div className="text-center md:max-w-xl md:text-left text-l font-normal text-black py-5 ">
              When the booking is confirmed in One of the apps, cancel the bookings from the other two apps.
            </div>
          </li>
          <li>
            <div
              class="md:flex flex items-center justify-center my-12 md:my-0 md:static 
                     md:box-border md:h-64 md:w-96 text-black max-w-xs my-auto
                     mx-auto md:bg-gradient-to-bl from-black to-white
                     md:p-4 md:py-5 md:px-5 md:rounded-xl md:skew-y-[-20deg]
                     md:mt-24 md:mt-0"
            >
              <img
                style={{width: 200}}
                src={Meru}
                alt="Meru"
                className="md:skew-y-[20deg] relative 
                items-center shadow-xl rounded"
              />
            </div>
          </li>
        </ul>
      </div>
      {/* <div className="my-16 mx-8 md:mx-0 md:my-0 md:flex items-center justify-center">
        <ul className="flex flex-col-reverse md:flex md:flex-row md:px-36 items-center md:justify-between mt-24 ">
          <li>
            <div
              class="md:flex items-center my-12 md:my-0 md:static 
                     md:box-border md:h-64 md:w-96 text-black max-w-xs my-auto
                     mx-auto md:bg-gradient-to-br from-black to-white
                     md:p-4 md:py-5 md:px-5 md:rounded-xl md:skew-y-[20deg]
                     md:mt-24 md:mt-0"
            >
              <img
                src={companies}
                alt="ridetype"
                className="md:skew-y-[-20deg] relative items-center "
              />
            </div>
          </li>
          <li className="mr-5">
            <div className="text-center md:text-right text-2xl font-semibold py-5">
              Select the Cab provider
            </div>
            <div className="text-justify md:max-w-xl md:text-right text-l font-normal text-black py-5 md:pl-24">
              You will have the option to select the cab companies which are
              nearest or most affordable.
            </div>
          </li>
        </ul>
      </div> */}
      <div id="features"></div>
    </div>
  )
}

export default Works
