import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { IndexLink, Link } from 'react-router';

import RuteIndicator from 'components/RuteIndicator';

class HalteInfo extends Component {
  render() {
    return (
      <div className="HalteInfo">
      	<div className="header">
          <div className="bg" />
          <div className="gradient" />
          <div className="content">
            <div className="name">
              Kenari 1
            </div>
            <div className="address">
              Jalan Kenari, Semaki, Umbulharjo
            </div>
            <div className="landmark">
              Mandala Krida, GOR Amongraga, SMKN 6 Yogyakarta
            </div>
            <RuteIndicator type={"halte"} rute1={"2A"} rute2={"2B"}/>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps)(HalteInfo);
