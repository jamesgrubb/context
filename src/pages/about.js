import React from "react"
import { Link } from "gatsby"
import TrackList from "../components/TrackList/TrackList"

export default function About() {
  return (
    <>
      <Link to="/">
        <h2>Abut</h2>
      </Link>
      <TrackList />
    </>
  )
}
