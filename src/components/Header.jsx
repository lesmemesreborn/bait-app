import React from "react"
import logo from "../assets/logo.png"
import { Link } from "react-router-dom"
import { DownOutlined, SmileOutlined } from "@ant-design/icons"

const Header = () => {
  return (
    <>
      <div className="bg-green-800 h-1/5 max-h-38 font-serif border-b-2 border-black text-white p-3 ">
        <div className="flex justify-between px-2">
          <div>
            <a href="https://vk.com/bryanskykapacb">
              <img src={logo} alt="logo" height="100px" width="100px" />
            </a>
          </div>
          <div className="text-6xl justify-center items-center text-center drop-shadow">
            <Link to="/">My Bait App</Link>
          </div>
          <div className="hover:text-yellow-400">
            <Link to="/login">Login</Link>
          </div>
        </div>
        <div className="flex justify-around items-center m-auto mb-3 drop-shadow align-text-bottom">
          <div>
            <button className="text-lg hover:text-xl justify-center items-center text-center  hover:text-yellow-400 w-32 h-12">
              <Link to="/baits">Наживки</Link>
            </button>
          </div>

          <button className=" text-lg hover:text-xl justify-center items-center text-center  hover:text-yellow-400 w-32 h-12 ">
            <Link to="/lures">Приманки</Link>
          </button>

          <button className=" text-base hover:text-xl  justify-center items-center text-center  hover:text-yellow-400 w-32 h-12 ">
            <Link to="/advices">Полезные советы</Link>
          </button>
          <button className=" text-lg hover:text-xl  justify-center items-center text-center  hover:text-yellow-400 w-32 h-12  ">
            <Link to="/reports">Отчёты</Link>
          </button>
          <button className=" text-base hover:text-xl  justify-center items-center text-center   hover:text-yellow-400 w-32 h-12 ">
            <Link to="/feedback">Обратная связь</Link>
          </button>
        </div>
      </div>
    </>
  )
}

export default Header
