import React from 'react'
import { hot } from 'react-hot-loader'

// Lazy Components
const Warning = React.lazy(() => import('./Warning'))

import './App.scss'

class App extends React.Component {
  state = {
    count: 0
  }
  render() {
    return (
      <div className="App">
        <h1 className="App__title">Is stateful?</h1>
        <img src="./logo.png" alt="Company logo"/>
        <h2
          className={
            this.state.count < 10
              ? 'App__counter'
              : 'App__counter App__counter--warning'
          }
        >
          Count: {this.state.count}
        </h2>
        <button
          className="App__button App__button--plus"
          onClick={() => this.setState(state => ({ count: state.count + 1 }))}
        >
          {' '}
          +{' '}
        </button>
        <button
          className="App__button App__button--minus"
          onClick={() => this.setState(state => ({ count: state.count - 1 }))}
        >
          {' '}
          -{' '}
        </button>
        {this.state.count < 10 ? null : (
          <React.Suspense fallback={null}>
            <Warning />
          </React.Suspense>
        )}
      </div>
    )
  }
}

export default hot(module)(App)
