import { combineReducers } from 'redux';
import rute from 'reducers/rute';
import ruteDetail from 'reducers/ruteDetail';
import ruteBus from 'reducers/ruteBus';
import ruteHalte from 'reducers/ruteHalte';
import halte from 'reducers/halte';
import halteDetail from 'reducers/halteDetail';
import pilihHalteAsal from 'reducers/pilihHalteAsal';
import pilihHalteTujuan from 'reducers/pilihHalteTujuan';
import pilihRute from 'reducers/pilihRute';

const rootReducer = combineReducers({
  rute,
  ruteDetail,
  ruteBus,
  ruteHalte,
  halte,
  halteDetail,
  pilihHalteAsal,
  pilihHalteTujuan,
  pilihRute,
});

export default rootReducer;
