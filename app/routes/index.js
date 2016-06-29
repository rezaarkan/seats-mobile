import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute } from 'react-router';
import configureStore from 'store/configureStore';

import App from 'containers/App';
import Home from 'containers/Home';
import PilihRute from 'containers/PilihRute';
import Questions from 'containers/Questions';
import Question from 'containers/Question';

export default function(history) {
  return (
    <Router history={history}>
      <Route path="/" component={App}>
        <Route path="questions" component={Questions} />
        <Route path="questions/:id" component={Question} />
        <Route path="pilih-rute" component={PilihRute} />
        <IndexRoute component={Home} />
      </Route>
    </Router>
  );
};
