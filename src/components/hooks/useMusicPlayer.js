import { useContext } from "react"
import { MusicPlayerContext } from "../../context/MusicPlayerContext"
const useMusicPlayer = () => {
  const [state, setState] = useContext(MusicPlayerContext)
  //Play a specific track

  function playTrack(index) {
    if (index === state.currentTrackIndex) {
      togglePlay()
    } else {
      state.audioPlayer.pause()
      state.audioPlayer = new Audio(state.tracks[index].file)
      state.audioPlayer.play()
      setState(state => ({
        ...state,
        currentTrackIndex: index,
        isPlaying: true,
      }))
    }
  }
  function stop() {
    if (state.isPLaying) {
      state.audioPlayer.pause()
      state.audioPlayer.currentTime = 0
    }
    return
  }
  function togglePlay() {
    if (state.isPlaying) {
      state.audioPlayer.pause()
    } else {
      state.audioPlayer.play()
    }
    setState(state => ({ ...state, isPlaying: !state.isPlaying }))
  }

  return {
    stop,
    playTrack,
    togglePlay,
    trackList: state.tracks,
    isPlaying: state.isPlaying,
    currentTrackName:
      state.currentTrackIndex !== null &&
      state.tracks[state.currentTrackIndex].name,
  }
}

export default useMusicPlayer
