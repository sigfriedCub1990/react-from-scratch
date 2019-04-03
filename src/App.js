import React from 'react'
import { hot } from 'react-hot-loader'

import './App.scss'

class App extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <div className="App">
        <h1 className="App__title">Hello World</h1>
      </div>
    )
  }
}

export default hot(module)(App)
