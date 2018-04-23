import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import reducers from '@/reducers'
let middleware = [thunkMiddleware]
let store = createStore(reducers, applyMiddleware(...middleware))
export default store
