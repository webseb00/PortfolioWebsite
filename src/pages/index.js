import React, { useEffect } from "react"
import { 
  Layout,
  Seo,
  About,
  Skills,
  Projects,
  Contact,
  Preloader
} from '../components'
import { onPreRouteUpdate } from "../../gatsby-browser"

import { Scrollbar } from 'react-scrollbars-custom';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'
import '../styles/index.css'

const IndexPage = () => {

  useEffect(() => { 
    onPreRouteUpdate()
  }, [])

  return (
    <Scrollbar style={{ width: '100%', height: '100vh' }}>
      {/* <Preloader /> */}
      <Layout>
        <Seo title="Home" />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <ToastContainer />
      </Layout>
    </Scrollbar>
  )
}

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
