import { applyMiddleware, createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-async-storage/async-storage';
// import { AsyncStorage } from 'react-native';
import rootReducer from './reducers'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ["auth"]
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

let store = createStore(persistedReducer, applyMiddleware(thunk, logger))
let persistor = persistStore(store)

export {
  store,
  persistor
}