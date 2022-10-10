import * as React from "react"
import { 
  Layout,
  Seo,
  About
} from '../components'
import '../styles/index.css'

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <About />
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
