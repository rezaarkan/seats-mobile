import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

class BusMarker extends Component {
	render(){
		return(
			<div className="BusMarker">
				<div className="marker">
					<i className="mdi mdi-bus"></i>
				</div>
	        </div>
		)
	}
}

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps)(BusMarker);