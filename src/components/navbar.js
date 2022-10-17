import React from 'react'

const Navbar = () => {
  return (
    <nav className="absolute top-[72px] right-0 bottom-0 w-[100%] md:w-[50%] bg-slate-400 z-20">
      <ul>
        <li>
          <a href="#home" className="font-semibold uppercase text-3xl mb-8 ">- Home</a>
        </li>
        <li>
          <a href="#about" className="font-semibold uppercase text-3xl mb-8 ">- About Me</a>
        </li>
        <li>
          <a href="#technologies" className="font-semibold uppercase text-3xl mb-8 ">- Technologies</a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar