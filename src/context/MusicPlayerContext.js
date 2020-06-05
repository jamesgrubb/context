import React, { useState } from "react"

const MusicPlayerContext = React.createContext([{}, () => {}])

const MusicPlayerProvider = ({ children }) => {
  const [state, setState] = useState({
    index: null,
  })
  return (
    <MusicPlayerContext.Provider value={[state, setState]}>
      {children}
    </MusicPlayerContext.Provider>
  )
}

export { MusicPlayerContext, MusicPlayerProvider }
