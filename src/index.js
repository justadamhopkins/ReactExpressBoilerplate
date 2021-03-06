import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import App from './containers/App'
import './reset.css'

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>, document.getElementById('root')
)
