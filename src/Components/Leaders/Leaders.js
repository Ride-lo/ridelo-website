import React from 'react'

const Leaders = () => {
  return (
    <div>
      <div className="text-4xl font-semibold text-center py-8 mt-12 ">
        Leaders
      </div>
      <div>
        <ul className="flex items-center justify-between px-8">
          <li
            className="md:flex items-center box-border 
              h-64 w-96 max-w-xs my-auto mx-auto
              bg-custom-yellow p-4
              py-5 px-5 rounded-xl md:skew-y-[20deg] md:px-32 "
          >
            photo part
          </li>
          <li className=""></li>
        </ul>
      </div>
    </div>
  )
}

export default Leaders
