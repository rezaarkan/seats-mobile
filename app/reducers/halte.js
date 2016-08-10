import * as ActionType from 'actions/halte'
import Immutable from 'immutable'

let defaultState = Immutable.fromJS([])
function halteReducer (state = defaultState, action) {
  switch(action.type) {
    case ActionType.LOADED_HALTE:
      return action.response.data
      break
    default:
      return state
  }
}

export default halteReducer
