import React, { useEffect, useContext } from "react"
import { Link } from "gatsby"
import { MusicPlayerContext } from "../context/MusicPlayerContext"
export default function Home() {
  const [state, setState] = useContext(MusicPlayerContext)
  useEffect(() => {
    setState(state => ({ ...state, state: (state.index = 0) }))
  }, [])

  return (
    <div>
      <Link to="/about">Hello world!</Link>
      <p>{state.index}</p>
    </div>
  )
}
