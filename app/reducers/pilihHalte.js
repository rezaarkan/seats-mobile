import * as ActionType from 'actions/pilih-halte'
import Immutable from 'immutable'

let defaultState = Immutable.fromJS([])
function pilihHalteReducer (state = defaultState, action) {
  switch(action.type) {
    case ActionType.HALTE_SELECTED:
      return action
      break
    default:
      return state
  }
}

export default pilihHalteReducer
