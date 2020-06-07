import React, { useContext } from "react"
import { Link } from "gatsby"
import TrackList from "../components/TrackList/TrackList"
import { MusicPlayerContext } from "../context/MusicPlayerContext"
export default function About() {
  const [sate, setState] = useContext(MusicPlayerContext)
  React.useEffect(() => {
    setState(state => ({ ...state, state: (state.index = 0) }))
  }, [setState])
  return (
    <>
      <Link to="/">
        <h2>Abut</h2>
      </Link>
      <TrackList />
    </>
  )
}
