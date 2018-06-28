import { createStore, applyMiddleware } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web and AsyncStorage for react-native
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'
import { createLogger } from 'redux-logger'
import reducer from './reducers'
import initialState from './storage'

const persistConfig = {
  key: 'root',
  blacklist: ['noOfCorrectAnswers'],
  storage,
  stateReconciler: autoMergeLevel2,
}
const persistedReducer = persistReducer(persistConfig, reducer)

const configureStore = () => {
  const middlewares = []
  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(createLogger())
  }
  const store = createStore(
    persistedReducer,
    // initialState,
    applyMiddleware(...middlewares),
  )
  const persistor = persistStore(store)
  // persistor.purge()
  return { store, persistor }
}

export default configureStore
