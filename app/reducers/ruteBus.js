import * as ActionType from 'actions/rutedaftar'
import Immutable from 'immutable'

let defaultState = Immutable.fromJS([])
function ruteBusReducer (state = defaultState, action) {
  switch(action.type) {
    case ActionType.LOADED_ROUTE_BUS:
      return action.response.data
      break
    default:
      return state
  }
}

export default ruteBusReducer
