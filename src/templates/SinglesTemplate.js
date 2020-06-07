import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { SinglesList } from "../components/SinglesList/SinglesList"
const SinglesTemplate = () => {
  const data = useStaticQuery(graphql`
    query {
      allSanitySingle {
        edges {
          node {
            name
            slug {
              current
            }
            track {
              name
            }
          }
        }
      }
    }
  `)

  console.log("SinglesTemplate -> data", data)
  const singles = data.allSanitySingle.edges.map(({ node }) => node)

  return <SinglesList singles={singles} />
}

export default SinglesTemplate
