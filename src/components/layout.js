import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Header, Hero, Footer } from './'

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className="bg-white">
      <div className="md:rounded-lg shadow-md bg-gray-200 md:m-8 overflow-hidden">
        <Header />
        <Hero />
        <main className="max-w-[92%] mx-auto">{children}</main>
        <Footer />
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
