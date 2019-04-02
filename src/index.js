import React from 'react'
import '@babel/polyfill'
import ReactDOM from 'react-dom'

import App from './App'
import DefaultErrorBoundary from './DefaultErrorBoundary'
import './main.scss'

ReactDOM.render(
  <React.StrictMode>
    <DefaultErrorBoundary>
      <App />
    </DefaultErrorBoundary>
  </React.StrictMode>,
  document.getElementById('app')
)
