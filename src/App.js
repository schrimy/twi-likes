import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import TwitUserForm from './containers/TwitUserForm'
import FaveList from './containers/FaveList'
import { TWITTER_DATA_KEY } from './utils/constants'
import { handleLocalStorage } from './actions/shared'

//TODO: an opt in to save cookies / localstorage of search data

//displays the search form and if there are favourites returned from the mapState function then it displays the faves list too
function App(props) {
  const { dataReady, handleLocalStorage } = props

  //useEffect to run on mount only, hence es lint disable, if data in localstorage dispatch to reducers to populate store state
  useEffect(() => {
    console.log('checking localStorage')
    localStorage.getItem(TWITTER_DATA_KEY) !== null &&(
      handleLocalStorage(JSON.parse(localStorage.getItem(TWITTER_DATA_KEY)))
    )
  }, [])//eslint-disable-line react-hooks/exhaustive-deps

  //if both user and faves are populated, show faves list
  return (
    <div className="App">
      <header className="App-header pt-2 pb-2">
        Twi likes
      </header>
      <main className='container'>
        <TwitUserForm />
        {
          dataReady &&(
            <FaveList />
          )
        }
      </main>
      <footer className='pt-2 pb-2'>A footer</footer>
    </div>
  )
}

//grabs the store state of favourites and user and returns a boolean based on if both are populated
function mapStateToProps({ user }) {
  return {
    dataReady: user !== null
  }
}

export default connect(mapStateToProps, { handleLocalStorage })(App)
