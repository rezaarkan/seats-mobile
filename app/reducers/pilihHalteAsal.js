import * as ActionType from 'actions/pilih-halte'
import Immutable from 'immutable'

let defaultState = Immutable.fromJS([])
function pilihHalteAsalReducer (state = defaultState, action) {
  switch(action.type) {
    case ActionType.HALTE_ASAL_SELECTED:
      return action
      break
    default:
      return state
  }
}

export default pilihHalteAsalReducer
