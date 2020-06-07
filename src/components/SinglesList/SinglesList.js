import React from "react"
import { Link } from "gatsby"

export const SinglesList = ({ singles }) => {
  return (
    <>
      <pre>{JSON.stringify(singles, null, 2)}</pre>
      {(singles &&
        singles.map(single => (
          <div>
            <h2>
              <Link to={single.slug.current}>{single.name}</Link>
            </h2>
            <p>{single.track.length}</p>
          </div>
        ))) || <span>Loading...</span>}
    </>
  )
}
