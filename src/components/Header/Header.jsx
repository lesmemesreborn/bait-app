import React from "react"

const Header = () => {
  return (
    <div className="bg-yellow-200 h-1/5 font-serif border-b-2 border-black">
      <div className="text-6xl justify-center items-center text-center">
        My Bait
      </div>
      <div className="text-lg justify-center items-center text-center mt-4">
        My bait app
      </div>
      <div className="flex justify-around m-auto mt-6 mb-3">
        <button className="border text-lg justify-center items-center text-center border-black hover:border-gray-400 hover:text-gray-400 w-32 h-12 rounded-xl bg-red-400 bg-opacity-85">
          Наживки
        </button>
        <button className="border text-lg justify-center items-center text-center border-black hover:border-gray-400 hover:text-gray-400 w-32 h-12 rounded-xl bg-red-400">
          Приманки
        </button>
        <button className="border text-base justify-center items-center text-center border-black hover:border-gray-400 hover:text-gray-400 w-32 h-12 rounded-xl bg-red-400">
          Полезные советы
        </button>
        <button className="border text-lg justify-center items-center text-center border-black hover:border-gray-400 hover:text-gray-400 w-32 h-12 rounded-xl bg-red-400">
          Отчёты
        </button>
        <button className="border text-base justify-center items-center text-center border-black hover:border-gray-400 hover:text-gray-400 w-32 h-12 rounded-xl bg-red-400">
          Обратная связь
        </button>
      </div>
    </div>
  )
}

export default Header
