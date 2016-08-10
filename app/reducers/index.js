import { combineReducers } from 'redux';
import rute from 'reducers/rute';
import ruteDetail from 'reducers/ruteDetail';
import ruteBus from 'reducers/ruteBus';
import ruteHalte from 'reducers/ruteHalte';
import halte from 'reducers/halte';
import halteDetail from 'reducers/halteDetail';

const rootReducer = combineReducers({
  rute,
  ruteDetail,
  ruteBus,
  ruteHalte,
  halte,
  halteDetail,
});

export default rootReducer;
