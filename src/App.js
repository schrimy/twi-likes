import React from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'

import TwitUserForm from './containers/TwitUserForm'
import FaveList from './containers/FaveList'

function App() {

  return (
    <div className="App">
      <header className="App-header">
        Hello world
      </header>
      <Route exact path='/' component={ TwitUserForm } />
      <Route path='/favourites' component={ FaveList } />
    </div>
  )
}

//TODO: route to display list when faves are retrieved
export default connect()(App)
