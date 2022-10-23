import React from 'react'
import { SiGatsby, SiNetlify } from 'react-icons/si'

const Footer = () => {
  return (
    <footer className="footer py-[2rem] px-3">
      <div className="text-center">
        <p>&copy; 2022 | Created and designed by <span className="text-slate-700 font-semibold">Basinski Sebastian</span>. All Rights Reserved.</p>
        <p className="flex justify-center items-center mt-2">Made with <SiGatsby className="text-md ml-2 mr-1 text-[#66339c]" /> Gatsby and <SiNetlify className="text-md ml-2 mr-1 text-[#088893]" /> Netlify CMS.</p>
      </div>
    </footer>
  )
}

export default Footer