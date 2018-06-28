import React, { Component } from 'react'
import { ActivityIndicator } from 'react-native'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react' // eslint-disable-line import-order-autofix/order

import configureStore from './configureStore'
import Root from './components/Root'

const { persistor, store } = configureStore()

class App extends Component {
  constructor(props) {
    super(props)
    if (typeof global.self === 'undefined') {
      global.self = global
    }
  }

  render() {
    return (
      <Provider store={store}>
        <PersistGate
          loading={<ActivityIndicator size="large" color="#0000ff" />}
          persistor={persistor}
        >
          <Root />
        </PersistGate>
      </Provider>
    )
  }
}

export default App
