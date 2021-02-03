import React, { Fragment, useEffect } from 'react'
import { connect } from 'react-redux'
import { TWITTER_DATA_KEY, STORAGE_PREFS } from './utils/constants'
import { handleLocalStorage } from './actions/shared'

import TwitUserForm from './containers/TwitUserForm'
import FaveList from './containers/FaveList'
import UserInfo from './screens/UserInfo'
import Storage from './screens/Storage'

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

  //TODO: change first div to main tag
  //if user state is populated, show faves list
  return (
    <Fragment>
      <div className="container list-container App d-flex flex-column vh-100 pl-0 pr-0 pb-5">
        <TwitUserForm />
        {
          user !== undefined && (
            <div className='dark-top container d-flex flex-column mb-1 rounded-bottom'>
              <span className='pt-3 pb-2'>Tweets liked by:</span>
              <UserInfo userData={ user } />
            </div>
          )
        }
        <main className='d-flex flex-wrap flex-fill overflow-auto'>
          {
            user !== undefined &&(
              <FaveList />
            )
          }
        </main>
      </div>
      {
        localStorage.getItem(STORAGE_PREFS) === null &&(
          <Storage />
        )
      }
    </Fragment>
  )
}

//TODO: clean up the if statement
//grabs the store state of favourites and user and returns a boolean based on if both are populated
function mapStateToProps({ user }) {
  if(user !== null) {
    return {
      user: user.data
    }
  } else {
    return {}
  }
}

export default connect(mapStateToProps, { handleLocalStorage })(App)
