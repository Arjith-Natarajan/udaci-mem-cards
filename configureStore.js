import { createStore, applyMiddleware, compose } from 'redux'
import { createLogger } from 'redux-logger'
import reducer from './reducers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const configureStore = () => {
  const middlewares = []
  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(createLogger())
  }
  return createStore(reducer, composeEnhancers(applyMiddleware(...middlewares)))
}

export default configureStore
