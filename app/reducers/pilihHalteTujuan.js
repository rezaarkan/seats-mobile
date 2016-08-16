import * as ActionType from 'actions/pilih-halte'
import Immutable from 'immutable'

let defaultState = Immutable.fromJS([])
function pilihHalteTujuanReducer (state = defaultState, action) {
  switch(action.type) {
    case ActionType.HALTE_TUJUAN_SELECTED:
      return action
      break
    default:
      return state
  }
}

export default pilihHalteTujuanReducer
