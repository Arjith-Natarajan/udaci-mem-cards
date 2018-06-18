import React from 'react'
import { Provider } from 'react-redux'
import Root from './components/Root'
import configureStore from './configureStore'

const store = configureStore()

const App = () => (
  <Provider store={store}>
    <Root />
  </Provider>
)

export default App
