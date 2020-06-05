import React, { useContext } from "react"
import { MusicPlayerContext } from "../../context/MusicPlayerContext"
export default function TrackList({ props }) {
  const [state, setState] = useContext(MusicPlayerContext)
  console.log("TrackList -> state", state)

  return (
    <>
      <button
        onClick={() =>
          setState(state => ({ ...state, index: (state.index += 1) }))
        }
      >
        {state.name}
      </button>
      <p>{state.index}</p>
    </>
  )
}
