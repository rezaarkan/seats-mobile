import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { IndexLink, Link } from 'react-router';

import ArrivalProgress from 'components/ArrivalProgress';

class BusListItem extends Component {
	propTypes: {
	 	onClick: PropTypes.func.isRequired,
	 	route: PropTypes.string.isRequired,
	 	busStatus: PropTypes.string.isRequired,
	 	timeLeft: PropTypes.string.isRequired,
	 	timeEta: PropTypes.string.isRequired,
	 	distanceProgress: PropTypes.string
	}

	rowClickHandler() {
		
	}

	render(){
		return(
			<tr className="BusRow" onClick={this.rowClickHandler}>
	            <td><div className={"route " + this.props.busStatus}>{this.props.route}</div></td>
	           	<td valign="top"><div className="time-left">{this.props.timeLeft}</div><ArrivalProgress progress={this.props.distanceProgress} /></td>
	        	<td valign="top"><div className="time-eta">{this.props.timeEta}</div></td>
	        </tr>
		)
	}
}

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps)(BusListItem);