import React, { useEffect, useContext } from "react"
import { Link } from "gatsby"
import TrackList from "../components/TrackList/TrackList"
import { MusicPlayerContext } from "../context/MusicPlayerContext"
export default function Home() {
  const [state, setState] = useContext(MusicPlayerContext)

  useEffect(() => {
    setState(state => ({ ...state, state: (state.index = 0) }))
  }, [setState])

  return (
    <div>
      <Link to="/about">Hello world!</Link>
      <div>
        <TrackList />
      </div>
    </div>
  )
}
