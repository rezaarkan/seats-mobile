import * as ActionType from 'actions/rutedaftar'
import Immutable from 'immutable'

let defaultState = Immutable.fromJS([])
function ruteReducer (state = defaultState, action) {
  switch(action.type) {
    case ActionType.LOADED_ROUTE:
      return action.response.data
      break
    default:
      return state
  }
}

export default ruteReducer
