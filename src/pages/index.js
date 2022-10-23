import * as React from "react"
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'
import { 
  Layout,
  Seo,
  About,
  Skills,
  Projects,
  Contact
} from '../components'
import '../styles/index.css'

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <About />
    <Skills />
    <Projects />
    <Contact />
    <ToastContainer />
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
