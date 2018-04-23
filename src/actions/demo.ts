import { Dispatch } from 'react-redux'
import { createAction } from 'redux-actions'
export const demoAction = (name: string) => (dispatch: Dispatch<{type: string, payload: {name: string}}>) => {
  dispatch(createAction<{name: string}>('change demo name')(
    {
      name
    }
  ))
}
