import React from 'react'
import { render } from 'react-testing-library'

import App from './App'

describe('App component', () => {
  it('Render without errors', () => {
    render(<App />)
  })
})
