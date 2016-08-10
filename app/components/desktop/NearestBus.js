import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { IndexLink, Link } from 'react-router';

import ArrivalProgress from 'components/desktop/ArrivalProgress';

class NearestBus extends Component {
	render(){
		return(
			<div className="NearestBus clearfix">
        <div className="container clearfix">
          <div className="route">{this.props.route}</div>
    			<div className="info">
    				<p>Bus terdekat</p>
            <div className="clearfix margin-top-8">
    				  <div className="time-left">{this.props.timeLeft}</div><div className="time-eta">{this.props.timeEta}</div>
            </div>
            <div className="clearfix margin-top-8 margin-bottom-4">
              <i className="mdi mdi-bus"></i>
              <ArrivalProgress progress={this.props.distanceProgress} />
              <i className="mdi mdi-store"></i>
            </div>
            <div className="clearfix">
              <div className="halte dept">Dari Halte {this.props.halteDept}</div>
              <i className="mdi mdi-chevron-right"></i>
              <div className="halte dest">Menuju Halte {this.props.halteDest}</div>
            </div>
    			</div>
        </div>
      </div>
		)
	}
}

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps)(NearestBus);