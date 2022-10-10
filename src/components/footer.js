import React from 'react'
import { BsFillSuitHeartFill } from 'react-icons/bs'

const Footer = () => {
  return (
    <footer className="footer py-[2rem]">
      <div className="text-center">
        <p>Copyright &copy; 2022 by <span className="text-blue-600 font-semibold">Basinski Sebastian</span></p>
        <p>Made With Love <BsFillSuitHeartFill className="text-blue-600 inline-block" /></p>
      </div>
    </footer>
  )
}

export default Footer