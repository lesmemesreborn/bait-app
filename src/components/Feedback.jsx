import React from "react"
import Header from "./Header"

const Feedback = () => {
  return (
    <div>
      <div className="flex-col h-100% border-2 border-black">
        <Header />
        <div className="h-4/5 bg-gray-50 p-6 container lg mx-auto ">
          <div>FeedBack</div>
        </div>
      </div>
    </div>
  )
}

export default Feedback
