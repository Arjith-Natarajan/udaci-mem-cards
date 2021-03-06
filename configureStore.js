import { createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web and AsyncStorage for react-native
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'
import reducer from './reducers'

const persistConfig = {
  key: 'root',
  blacklist: ['noOfCorrectAnswers'],
  storage,
  stateReconciler: autoMergeLevel2,
}
const persistedReducer = persistReducer(persistConfig, reducer)

const configureStore = () => {
  const store = createStore(persistedReducer)
  const persistor = persistStore(store)
  // persistor.purge()
  return { store, persistor }
}

export default configureStore
