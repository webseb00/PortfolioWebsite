import * as React from "react"
import { Link } from "gatsby"

const Header = () => (
  <header
    id="home"
    className="bg-slate-100 p-4 text-white flex justify-between items-center"
  >
    <Link 
      to="/"
      className="text-sky-600 flex items-center"
    >
      <div className="relative w-[40px] h-[40px] bg-sky-600">
        <span className="absolute bottom-[-2px] right-[2px] font-semibold text-2xl text-white">
          SB
        </span>
      </div>
    </Link>
    <div className="header__icon w-[30px] h-[30px] flex flex-col items-end justify-center cursor-pointer">
      <span className="header__icon--1 w-[100%] h-[2px] block bg-sky-600"></span>
      <span className="header__icon--2 w-[70%] h-[2px] block bg-sky-600 my-[6px] duration-300"></span>
      <span className="header__icon--3 w-[40%] h-[2px] block bg-sky-600 duration-300"></span>
    </div>
  </header>
)

export default Header
