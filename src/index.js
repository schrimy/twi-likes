import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import middleware from './middleware'
import reducer from './reducers'
import 'jquery/dist/jquery.js'
import 'bootstrap/js/dist/util.js'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/js/dist/alert.js'
import 'bootstrap/js/dist/collapse.js'
import 'bootstrap/js/dist/modal.js'
import './styles/app.scss'
import '@animxyz/core'
//import reportWebVitals from './reportWebVitals';

const store = createStore(reducer, middleware)

ReactDOM.render(
  <Provider store={ store }>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
