import * as React from "react"
import { Header, Hero, Navbar, Footer } from './'

const Layout = ({ children }) => {
  return (
    <div className="bg-white">
      <div className="md:rounded-lg shadow-md bg-gray-200 md:m-8 overflow-hidden relative">
        <Header />
        {/* <Navbar /> */}
        <Hero />
        <main className="max-w-[92%] mx-auto">{children}</main>
        <Footer />
      </div>
    </div>
  )
}

export default Layout
