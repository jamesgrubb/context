import React from "react"

export const AudioControl = ({ handleTogglePlay, children }) => {
  return <button onClick={handleTogglePlay}>{children}</button>
}
