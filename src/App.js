import React, { useEffect } from 'react'
import { getTwitUser } from './utils/helpers'

function App() {
  useEffect(() => {
    getTwitUser()
    .then((twitUser) => {
      console.log('retrieved user info:', twitUser)
    })
    .catch(err => {
      console.log('error fetching user data:', err)
    })
  })

  return (
    <div className="App">
      <header className="App-header">
        Hello world
      </header>
    </div>
  )
}

export default App
