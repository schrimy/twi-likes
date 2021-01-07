import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import TwitUserForm from './containers/TwitUserForm'
import FaveList from './containers/FaveList'

//displays the search form and if there are favourites returned from the mapState function then it displays the faves list too
function App(props) {
  const { faves } = props
  //purly to check current faves store state
  useEffect(() => {
    console.log('faves array:', faves)
  })

  return (
    <div className="App container">
      <header className="App-header">
        Twi likes
      </header>
      <TwitUserForm />
      {
        faves !== 0 &&(
          <FaveList />
        )
      }
    </div>
  )
}

//grabs the favourites state from the store, and returns the length of that array
function mapStateToProps({ favourites }) {
  return {
    faves: Object.keys(favourites).length
  }
}

export default connect(mapStateToProps)(App)
