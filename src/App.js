import React, { Fragment, useEffect } from 'react'
import { connect } from 'react-redux'
import { TWITTER_DATA_KEY } from './utils/constants'
import { handleLocalStorage } from './actions/shared'

import TwitUserForm from './containers/TwitUserForm'
import FaveList from './containers/FaveList'
import UserInfo from './screens/UserInfo'

//TODO: an opt in to save cookies / localstorage of search data

//displays the search form and if there are favourites returned from the mapState function then it displays the faves list too
function App(props) {
  const { handleLocalStorage, user } = props

  //useEffect to run on mount only, hence es lint disable, if data in localstorage dispatch to reducers to populate store state
  useEffect(() => {
    console.log('checking localStorage')
    localStorage.getItem(TWITTER_DATA_KEY) !== null &&(
      handleLocalStorage(JSON.parse(localStorage.getItem(TWITTER_DATA_KEY)))
    )
  }, [])//eslint-disable-line react-hooks/exhaustive-deps

  //TODO: change first dive to main tag
  //if user state is populated, show faves list
  return (
    <Fragment>
      <header className="App-header p-2">Twi likes </header>
      <div className="container App d-flex flex-column vh-100">
        <TwitUserForm />
        {
          user !== undefined && (
            <div className='container d-flex flex-column list-container'>
              <span className='list-container pt-3 pb-2'>Tweets liked by:</span>
              <UserInfo userData={ user } />
            </div>
          )
        }
        <main className='list-container d-flex flex-wrap flex-fill overflow-auto'>
          {
            user !== undefined &&(
              <FaveList />
            )
          }
        </main>
      </div>
      <footer className='p-2'>A footer</footer>
    </Fragment>
  )
}

//grabs the store state of favourites and user and returns a boolean based on if both are populated
function mapStateToProps({ user }) {
  if(user !== null) {
    return {
      user: user.data
    }
  }
}

export default connect(mapStateToProps, { handleLocalStorage })(App)
