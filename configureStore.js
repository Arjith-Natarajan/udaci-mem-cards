import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createLogger } from 'redux-logger'
import reducer from './reducers'
import initialState from './storage'

const configureStore = () => {
  const middlewares = [thunk]
  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(createLogger())
  }
  const preloadedState = initialState
  return createStore(reducer, composeWithDevTools(applyMiddleware(...middlewares)))
}

export default configureStore
