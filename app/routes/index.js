import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute } from 'react-router';
import configureStore from 'store/configureStore';

import App from 'containers/App';
import Home from 'containers/Home';
import HomeMobile from 'containers/HomeMobile';
import PilihRute from 'containers/PilihRute';
import RencanaRute from 'containers/RencanaRute';
import Rute from 'containers/Rute';
import Halte from 'containers/Halte';

export default function(history) {
  return (
    <Router history={history}>
      <Route path="/" component={App}>
        <Route path="pilih-rute" component={PilihRute} />
        <Route path="rencana-rute" component={RencanaRute} />
        <Route path="rute" component={Rute} />
        <Route path="halte" component={Halte} />
        <IndexRoute component={Home} />
      </Route>
    </Router>
  );
};
