import React, { useContext, useEffect } from "react"
import { MusicPlayerContext } from "../../context/MusicPlayerContext"
import { AudioControl } from "../AudioControl/AudioControl"
import useMusicPlayer from "../hooks/useMusicPlayer"

const Single = ({ name, track, location }) => {
  const { trackList, playTrack, currentTrackName, isPlaying } = useMusicPlayer()
  const [state, setState] = useContext(MusicPlayerContext)
  useEffect(() => {
    setState(state => ({
      ...state,
      tracks: track,
    }))
  }, [setState, track])
  return (
    <React.Fragment>
      {/* <pre>{JSON.stringify(state, null, 2)}</pre> */}
      <pre>{JSON.stringify(currentTrackName, null, 2)}</pre>
      <h2>{name}</h2>
      <strong style={{ display: "inlineBlock", fontSize: "2em" }}>
        {state.currentTrackIndex}
        <p>{JSON.stringify(isPlaying, null, 2)}</p>
      </strong>
      {(trackList &&
        trackList.map((track, index) => {
          return (
            <AudioControl handleTogglePlay={() => playTrack(index)}>
              {currentTrackName === track.name && isPlaying ? "Pause" : "Play"}{" "}
              {track.name}
            </AudioControl>
          )
        })) ||
        "loading..."}
    </React.Fragment>
  )
}

export default Single
