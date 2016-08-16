import * as ActionType from 'actions/pilih-rute'
import Immutable from 'immutable'

let defaultState = Immutable.fromJS([])
function pilihRuteReducer (state = defaultState, action) {
  switch(action.type) {
    case ActionType.LOADED_PILIHAN_RUTE:
      return action.response.data
      break
    default:
      return state
  }
}

export default pilihRuteReducer
