import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory} from 'react-router';
import configureStore from 'store/configureStore';

import App from 'containers/App';
import Home from 'containers/Home';
import HomeMobile from 'containers/HomeMobile';
import PilihRute from 'containers/PilihRute';
import RencanaRute from 'containers/RencanaRute';
import Rute from 'containers/Rute';
import Halte from 'containers/Halte';
import PilihLokasiAsal from 'containers/PilihLokasiAsal';
import PilihLokasiTujuan from 'containers/PilihLokasiTujuan';
import Desktop from 'containers/Desktop';

export default function(history) {
  return (
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <Route path="pilih-rute" component={PilihRute} />
        <Route path="rencana-rute" component={RencanaRute} />
        <Route path="rute/:ruteId" component={Rute} />
        <Route path="halte/:halteId" component={Halte} />
        <Route path="asal" component={PilihLokasiAsal} />
        <Route path="tujuan" component={PilihLokasiTujuan} />
        <Route path="desktop" component={Desktop} />
        <IndexRoute component={Home} />
      </Route>
    </Router>
  );
};
