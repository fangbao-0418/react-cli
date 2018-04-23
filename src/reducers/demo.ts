import { handleActions } from 'redux-actions'
import { ReduxStates } from './index'

export interface DemoState {
  name: string
}
export default handleActions<DemoState>({
  ['change demo name']: (state, { payload }) => {
    return {
      ...state,
      name: payload.name
    }
  }
}, {
  name: ''
})
