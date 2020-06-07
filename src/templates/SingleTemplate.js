import React from "react"
import { graphql } from "gatsby"
import Single from "../components/Single/Single"

export const query = graphql`
  query($slug: String!) {
    sanitySingle(slug: { current: { eq: $slug } }) {
      name
      track {
        name
        file
      }
    }
  }
`

const SingleTemplate = ({ data: { sanitySingle } }) => {
  return (
    <>
      <Single {...sanitySingle} />
    </>
  )
}

export default SingleTemplate
