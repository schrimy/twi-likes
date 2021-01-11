import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'

import TwitUserForm from './containers/TwitUserForm'
import FaveList from './containers/FaveList'
import Alert from './screens/Alert'

//displays the search form and if there are favourites returned from the mapState function then it displays the faves list too
function App(props) {
  const { dataReady } = props
  const [userError, setUserError] = useState(false)
  //purly to check current faves store state
  useEffect(() => {
    console.log('data ready?:', dataReady)
  })

  const errorCb = () => {
    console.log('error call back!')
    setUserError(true)
  }

  //TODO: maybe clear the state when a new search is initiated, therefore clearing the faveList
  //if both user and faves are populated, show faves list
  return (
    <div className="App container">
      <header className="App-header">
        Twi likes
      </header>
      <TwitUserForm errorCallBack={ errorCb }/>
      {
        userError &&(
          <Alert cb={ setUserError } />
        )
      }
      {
        dataReady &&(
          <FaveList />
        )
      }
    </div>
  )
}

//grabs the store state of favourites and user and returns a boolean based on if both are populated
function mapStateToProps({ favourites, user }) {
  return {
    dataReady: Object.keys(favourites).length !== 0 && user !== null
  }
}

export default connect(mapStateToProps)(App)
