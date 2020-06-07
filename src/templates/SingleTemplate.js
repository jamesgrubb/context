import React, { useContext, useEffect } from "react"
import { graphql, Link } from "gatsby"
import Single from "../components/Single/Single"
import { MusicPlayerContext } from "../context/MusicPlayerContext"

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
  const [state, setState] = useContext(MusicPlayerContext)
  useEffect(() => {
    setState(state => ({
      ...state,
      currentTrackIndex: state.currentTrackIndex
        ? state.currentTrackIndex
        : null,
    }))
  }, [setState])
  return (
    <>
      <Single {...sanitySingle} />
      <Link state={{ trackName: "back" }} to="/singles">
        Back to singles
      </Link>
    </>
  )
}

export default SingleTemplate
