import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

class ArrivalProgress extends Component {
	render () {
		var progress = +this.props.progress;
		if (progress < 0){progress = 0};
		if (progress > 100){progress = 100};

		var style = {
			width: progress + '%'
		};

		return (
			<div className="ArrivalProgress">
				<div className="progress-container">
					<div className="progress" style={style}></div>
				</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps)(ArrivalProgress);