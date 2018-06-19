import React from 'react'
import { ActivityIndicator } from 'react-native'
import { Provider } from 'react-redux'
import Root from './components/Root'
import configureStore from './configureStore'
import { PersistGate } from 'redux-persist/integration/react'

const { persistor, store } = configureStore()
const App = () => (
  <Provider store={store}>
    <PersistGate loading={<ActivityIndicator size="large" color="#0000ff" />} persistor={persistor}>
      <Root />
    </PersistGate>
  </Provider>
)

export default App
