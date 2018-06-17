import React from 'react'
import Root from './components/Root'
import configureStore from './configureStore'

const store = configureStore()

const App = () => <Root store={store} />

export default App
