import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <h1>Hello old brother</h1>
      </div>
    );
  }
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(Home);
