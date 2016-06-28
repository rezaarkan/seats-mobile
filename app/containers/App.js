import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

var injectTapEventPlugin = require("react-tap-event-plugin");

injectTapEventPlugin();

const muiTheme = getMuiTheme({
  userAgent: 'all',
});

class App extends Component {
  render() {
    return (
      	<MuiThemeProvider muiTheme={muiTheme}>
        	{this.props.children}
        </MuiThemeProvider>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps)(App);
