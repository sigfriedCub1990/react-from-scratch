import React from 'react'
import '@babel/polyfill'
import ReactDOM from 'react-dom'

import App from './App'
import DefaultErrorBoundary from './DefaultErrorBoundary'
import './main.scss'

if (process.env.NODE_ENV === 'development') {
    const axe = require('react-axe')
    axe(React, ReactDOM, 1000)
}

ReactDOM.render(
  <React.StrictMode>
    <DefaultErrorBoundary>
      <App />
    </DefaultErrorBoundary>
  </React.StrictMode>,
  document.getElementById('app')
)
