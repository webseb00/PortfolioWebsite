import * as React from "react"
import { Link } from "gatsby"
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'

const Header = () => (
  <header
    className="bg-slate-100 p-4 text-white flex justify-between items-center"
  >
    <Link 
      to="/"
      className="text-blue-600 flex items-center"
    >
      <div className="relative w-[40px] h-[40px] bg-blue-600">
        <span className="absolute bottom-[-2px] right-[2px] font-semibold text-2xl text-white">
          SB
        </span>
      </div>
      <div className="flex items-center">
        <BsChevronLeft className="text-4xl leading-3" />
        <p className="font-semibold leading-4 mb-[3px]">
          Sebastian<br />Basiński
        </p>
        <span className="leading-3 flex items-center">
          <span className="text-4xl mt-[-8px] mr-[-6px]">/</span>
          <BsChevronRight className="text-4xl" />
        </span>
      </div>
    </Link>
    <div className="header__icon w-[30px] h-[30px] flex flex-col items-end justify-center cursor-pointer">
      <span className="header__icon--1 w-[100%] h-[2px] block bg-blue-600"></span>
      <span className="header__icon--2 w-[70%] h-[2px] block bg-blue-600 my-[6px] duration-300"></span>
      <span className="header__icon--3 w-[40%] h-[2px] block bg-blue-600 duration-300"></span>
    </div>
  </header>
)

export default Header
