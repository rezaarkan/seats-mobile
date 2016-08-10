import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { IndexLink, Link } from 'react-router';

import HalteInfo from 'components/desktop/HalteInfo';
import Scrollbars from 'react-custom-scrollbars';

class HalteInfoSidebar extends Component {
  render() {
    return (
		<div className="HalteInfoSidebar">
		  	<Scrollbars style={{width:"100%", height: "100%"}}>
		  		<HalteInfo
		  			halteName={this.props.halteName}
		  			halteLocation={this.props.halteLocation}
		  		/>
		  	</Scrollbars>
		</div>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps)(HalteInfoSidebar);
