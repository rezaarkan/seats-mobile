import * as ActionType from 'actions/halte'
import Immutable from 'immutable'

let defaultState = Immutable.fromJS([])
function halteDetailReducer (state = defaultState, action) {
  switch(action.type) {
    case ActionType.LOADED_HALTE_DETAIL:
      return action.response.data
      break
    default:
      return state
  }
}

export default halteDetailReducer
