import React, { useState } from 'react'
import cabtype from '../../Images/cabtype.png'
import ridetype from '../../Images/ridetype.png'
import companies from '../../Images/companies.png'
import pickup from '../../Images/pickup.png'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

let count = 0
const ImagesPrototype = [ridetype, cabtype, pickup, companies]

const ImageTitle = [
  '1. Select the Ride type',
  '2. Select your preferred vehicle(Bike, Auto ,Cab)',
  '3. Enter Pickup and Drop location',
  '4. Choose the cab with best price & fastest ETA.',
]
const WorkMobile = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleOnPrevClick = () => {
    setCurrentIndex(0)
  }
  const handleOnNextClick = () => {
    count = (count + 1) % ImagesPrototype.length
    setCurrentIndex(count)
  }
  return (
    <div>
      <div className="text-4xl font-semibold text-center ">How it Works</div>
      <div className="w-full select-none relative flex justify-center">
        <div className=" scale-75 flex flex-col justify-center items-center ">
          <div className="bg-gradient-to-l hover:bg-gradient-to-r">
            <img
              src={ImagesPrototype[currentIndex]}
              alt=""
              className="scale-75 shadow-2xl"
            />
          </div>
          <div className="text-center font-semibold text-4xl">
            {ImageTitle[currentIndex]}
          </div>
        </div>
        <div className="absolute top-1/2 flex justify-between items-center transform-translate-y-1/2 px-3 w-full">
          <button className="scale-150" onClick={handleOnPrevClick}>
            <FiChevronLeft />
          </button>
          <button className="scale-150" onClick={handleOnNextClick}>
            <FiChevronRight />
          </button>
        </div>
      </div>
    </div>
  )
}

export default WorkMobile
