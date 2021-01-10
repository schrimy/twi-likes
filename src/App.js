import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'

import TwitUserForm from './containers/TwitUserForm'
import FaveList from './containers/FaveList'

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

  //TODO: place error alert in own component
  //TODO: maybe clear the state when a new search is initiated, therefor clearing the faveList
  //if both user and faves are populated, show faves list
  return (
    <div className="App container">
      <header className="App-header">
        Twi likes
      </header>
      <TwitUserForm errorCallBack={ errorCb }/>
      {
        userError &&(
          <div className="alert alert-warning alert-dismissible fade show" role="alert">
              <strong>Oh!</strong> That user name doesn't work, please try again.
              <button type="button" className="close" data-dismiss="alert" aria-label="Close" onClick={() => { setUserError(false) }}>
                  <span aria-hidden="true">&times;</span>
              </button>
          </div>
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
