import React, { useEffect } from 'react'
import { getTwitUser } from './utils/helpers'
import TwitUserForm from './containers/TwitUserForm'

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
      <TwitUserForm />
    </div>
  )
}

export default App
