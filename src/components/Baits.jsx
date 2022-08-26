import React from "react"
import Header from "./Header"
import baitsData from "../data"

const Baits = () => {
  const item = baitsData
  return (
    <div>
      <div className="flex-col h-100% border-2 border-black">
        <Header />
        <div className="h-4/5 bg-gray-50 p-6 container lg mx-auto ">
          <div className="font-bold text-4xl text-center">Baits</div>
          <div className="p-12 grid grid-cols-4 justify-center items-center">
            {item.map((item) => (
              <div
                key={item.id}
                className="p-3  justify-center items-center h-full w-full min-w-full min-h-full"
              >
                <img src={item.img} alt="" className="border border-black  " />
                <div className="text-md b-0">{item.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Baits
