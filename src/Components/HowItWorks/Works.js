import React from 'react'
import ridetype from '../../Images/ridetype.png'
import pickup from '../../Images/pickup.png'
import companies from '../../Images/companies.png'
import cabtype from '../../Images/cabtype.png'

const works = () => {
  return (
    <div className="-z-1">
      <div className="text-4xl font-semibold text-center md:text-center justify-center w-full py-4 md:px-10 px-7">
        How it Works
      </div>
      <div className="my-12 md:flex items-center justify-center">
        <ul className="md:flex md:px-36 items-center justify-center mt-16">
          <li className="mr-5">
            <div className="text-center md:text-left text-2xl font-semibold py-5">
              Select your ride category
            </div>
            <div className="text-center md:max-w-xl md:text-left text-xl font-normal text-black py-5 ">
              You can select the type of ride you want. i.e; local, outstation,
              airport or rental
            </div>
          </li>
          <li>
            <div class="md:flex items-center my-12 md:my-0 static box-border h-64 w-96 text-white max-w-xs my-auto mx-auto bg-gradient-to-bl from-custom-yellow to-white p-4 py-5 px-5 rounded-xl md:skew-y-[-20deg] mt-24 md:mt-0">
              <img
                src={ridetype}
                alt="ridetype"
                className="md:skew-y-[20deg] relative items-center"
              />
            </div>
          </li>
        </ul>
      </div>
      <div className="my-16  md:flex items-center justify-center">
        <ul className="md:flex md:px-36  items-center justify-around mt-24">
          <li>
            <div class="md:flex items-center my-12 md:my-0 box-border h-64 w-96 text-white max-w-xs my-auto mx-auto bg-gradient-to-br from-custom-yellow to-white p-4 py-5 px-5 rounded-xl md:skew-y-[20deg] mt-24 md:mt-0 ">
              <img
                src={cabtype}
                alt="ridetype"
                className="md:skew-y-[-20deg] relative items-center"
              />
            </div>
          </li>
          <li className="mr-5">
            <div className="text-center md:text-right text-2xl font-semibold py-5">
              Select your preferred vehicle
            </div>
            <div className="text-center md:max-w-xl md:text-right text-xl font-normal text-black py-5 md:pl-24">
              Ridelo app allows you to select the type of vehicle to travel. the
              vehicles included are auto-rikshaw, bike, hatchback, sedan, etc.
            </div>
          </li>
        </ul>
      </div>
      <div className="my-16 md:flex items-center justify-center">
        <ul className="md:flex md:px-36  items-center justify-between mt-24 ">
          <li className="mr-5">
            <div className="text-center md:text-left text-2xl font-semibold py-5">
              Enter the pickup and drop location
            </div>
            <div className="text-center md:max-w-xl md:text-left text-xl font-normal text-black py-5 ">
              Tap on your location option and select your pickup location. Next,
              put the location where you want to travel to
            </div>
          </li>
          <li>
            <div class="md:flex items-center my-12 md:my-0  box-border h-64 w-96 text-white max-w-xs my-auto mx-auto bg-gradient-to-bl from-custom-yellow to-white p-4 py-5 px-5 rounded-xl md:skew-y-[-20deg] mt-24 md:mt-0">
              <img
                src={pickup}
                alt="ridetype"
                className="md:skew-y-[20deg] relative items-center"
              />
            </div>
          </li>
        </ul>
      </div>
      <div className="my-16 md:my-0 md:flex items-center justify-center">
        <ul className="md:flex md:px-36 items-center justify-between mt-24 ">
          <li>
            <div class="md:flex items-center my-12 box-border h-64 w-96 text-white max-w-xs my-auto mx-auto bg-gradient-to-br from-custom-yellow to-white p-4 py-5 px-5 rounded-xl md:skew-y-[20deg] mt-24 md:mt-0 ">
              <img
                src={companies}
                alt="ridetype"
                className="md:skew-y-[-20deg] relative items-center"
              />
            </div>
          </li>
          <li className="mr-5">
            <div className="text-center md:text-right text-2xl font-semibold py-5">
              Select the Cab provider
            </div>
            <div className="text-center md:max-w-xl md:text-right text-xl font-normal text-black py-5 md:pl-24">
              You will have the option to select the cab companies which are
              nearest or most affordable.
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default works
