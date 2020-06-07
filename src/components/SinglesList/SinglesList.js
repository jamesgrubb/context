import React, { useEffect, useContext } from "react"
import { Link } from "gatsby"
import { MusicPlayerContext } from "../../context/MusicPlayerContext"
export const SinglesList = ({ singles }) => {
  const [state, setState] = useContext(MusicPlayerContext)
  useEffect(() => {
    setState(state => ({
      ...state,
      currentTrackIndex: 0,
    }))
  }, [])
  return (
    <>
      <pre>{JSON.stringify(singles, null, 2)}</pre>
      {(singles &&
        singles.map(single => (
          <div>
            <h2>
              <Link state={{ trackName: single.name }} to={single.slug.current}>
                {single.name}
              </Link>
            </h2>
            <p>{single.track.length}</p>
          </div>
        ))) || <span>Loading...</span>}
    </>
  )
}
