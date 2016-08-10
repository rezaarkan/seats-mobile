import * as ActionType from 'actions/rutedaftar'
import Immutable from 'immutable'

let defaultState = Immutable.fromJS([])
function ruteHalteReducer (state = defaultState, action) {
  switch(action.type) {
    case ActionType.LOADED_ROUTE_HALTE:
      return action.response.data
      break
    default:
      return state
  }
}

export default ruteHalteReducer
