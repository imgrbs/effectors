import React from 'react'
import { Router, Link, Head } from 'react-static'
import { hot } from 'react-hot-loader'
//
import Routes from 'react-static-routes'


import './app.css'

const App = () => (
  <Router>
    <div>
      <Head>
        <meta charSet="UTF-8" />
        <title>Effectors - IMGRBS</title>
        <link rel="icon" href='logo.png' />
      </Head>
      <nav>
        <Link exact to="/">Home</Link>
      </nav>
      <div className="content">
        <Routes />
      </div>
    </div>
  </Router>
)

export default hot(module)(App)
