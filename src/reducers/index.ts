import { combineReducers } from 'redux'
import common from './common'
import demo, { DemoState } from './demo'
export interface ReduxStates {
  common: {}
  demo: DemoState
}
const reducers = combineReducers<ReduxStates>({
  common,
  demo
})
export default reducers
