import * as ActionType from 'actions/rutedaftar'
import Immutable from 'immutable'

let defaultState = Immutable.fromJS([])
function ruteDetailReducer (state = defaultState, action) {
  switch(action.type) {
    case ActionType.LOADED_ROUTE_DETAIL:
      return action.response.data
      break
    default:
      return state
  }
}

export default ruteDetailReducer
