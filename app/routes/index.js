import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute } from 'react-router';
import configureStore from 'store/configureStore';

import App from 'containers/App';
import Home from 'containers/Home';
import HomeMobile from 'containers/HomeMobile';
import PilihRute from 'containers/PilihRute';
import RencanaRute from 'containers/RencanaRute';

export default function(history) {
  return (
    <Router history={history}>
      <Route path="/" component={App}>
        <Route path="pilih-rute" component={PilihRute} />
        <Route path="rencana-rute" component={RencanaRute} />
        <IndexRoute component={Home} />
      </Route>
    </Router>
  );
};
