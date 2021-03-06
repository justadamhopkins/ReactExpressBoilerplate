import React from 'react'
import cat from 'app/assets/random/nyancat.png'
import { hot } from 'react-hot-loader'
import styles from './styles.css'
import Fetch from './fetch'

const App = () => (
  <div className={styles.app}>
    <h1>{process.env.baseUrl}</h1>
    <img src={cat}/>
    <Fetch/>
  </div>
)

export default hot(module)(App)
