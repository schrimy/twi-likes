import React, {
  Fragment,
  useEffect
} from 'react'
import { connect } from 'react-redux'
import { TWITTER_DATA_KEY, STORAGE_PREFS } from './utils/constants'
import { handleLocalStorage } from './actions/shared'
//component imports
import TwitUserForm from './containers/TwitUserForm'
import FaveList from './containers/FaveList'
import UserInfo from './screens/UserInfo'
import Storage from './screens/Storage'

//displays the search form and if there are favourites returned from the mapState function then it displays the faves list too
function App(props) {
  const { handleLocalStorage, user } = props

  //useEffect to run on mount only, hence es lint disable, if data in localstorage dispatch to reducers to populate store state
  useEffect(() => {
    localStorage.getItem(TWITTER_DATA_KEY) !== null &&(
      handleLocalStorage(JSON.parse(localStorage.getItem(TWITTER_DATA_KEY)))
    )
  }, [])//eslint-disable-line react-hooks/exhaustive-deps

  //if user state is populated, show faves list. If storage prefs have not been selected show the prefs component.
  //If user information is present also show who the likes belong to
  return (
    <Fragment>
      <main className="container list-container App d-flex flex-column vh-100 pl-0 pr-0 pb-lg-5 pb-3">
        <TwitUserForm />
        {
          user !== undefined && (
            <div id='rounder' className='dark-top container d-flex flex-column pb-1 border-bottom border-dark text-body'>
              <span className='pb-2'>Tweets liked by:</span>
              <UserInfo userData={ user } />
            </div>
          )
        }
        <section id='tweet-content' className='d-flex flex-wrap flex-fill overflow-auto'>
          {
            user !== undefined &&(
              <FaveList />
            )
          }
        </section>
      </main>
      {
        localStorage.getItem(STORAGE_PREFS) === null &&(
          <Storage />
        )
      }
    </Fragment>
  )
}

//grabs the store state of the user, returns undefined if null or returns the data if set. If set the relevant components are shown in the render function.
function mapStateToProps({ user }) {
  return {
    user: user !== null ? user.data : undefined
  }
}

//sets the data in mapState to be resloved, and passes in the action to handle data if found in local storage
export default connect(mapStateToProps, { handleLocalStorage })(App)
