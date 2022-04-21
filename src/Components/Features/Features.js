import React from 'react'
import Feature1 from '../../Images/feature1.png'
import Feature2 from '../../Images/feature2.png'
import Feature3 from '../../Images/feature3.png'

const Features = () => {
  return (
    <div className="md:mt-32">
      <div className="text-4xl font-semibold text-center py-8 mt-12 ">
        Features
      </div>
      <div className="text-center">
        <ul className="md:flex items-center justify-around mt-6">
          <li>
            <div className="flex justify-center py-4">
              <img src={Feature1} alt="Feature1" />
            </div>
            <div className="text-3xl text-center font-semibold">
              One tap Multiple apps
            </div>
            <div className="px-16 py-6">
              A single application, let's you compare ETA(Expected Time of
              Arrival) and pricing of various cab service providers without
              having to switch between applications
            </div>
          </li>
          <li>
            <div className="flex justify-center py-4">
              <img src={Feature2} alt="Feature2" />
            </div>
            <div className="text-3xl text-center font-semibold">
              Most affordable
            </div>
            <div className="px-16 py-6">
              Choose your best fit from a wide range of options available on our
              application by comparing prices and book the cab of your interest
            </div>
          </li>
          <li>
            <div className="flex justify-center py-4">
              <img src={Feature3} alt="Feature3" />
            </div>
            <div className="text-3xl text-center font-semibold">
              A faster way to get around
            </div>
            <div className="px-16 py-6">
              Book the cab available nearest to you to save time and travel fast
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Features
