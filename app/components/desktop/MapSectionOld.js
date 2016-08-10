import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { IndexLink, Link } from 'react-router';
import GoogleMap from 'google-map-react';
import shouldPureComponentUpdate from 'react-pure-render/function';

import ArrivalProgress from 'components/ArrivalProgress';
import Scrollbars from 'react-custom-scrollbars';
import NearestBus from 'components/NearestBus';

class MapSection extends Component {
	constructor(props) {
		super(props);
		this.state={
			overlayVisibility: "notHidden",
			progressWidgetVisibility: "hidden"
		}

		this.overlayVisibilityListener = this.overlayVisibilityListener.bind(this);
	}

	overlayVisibilityListener() {
		this.setState({
			overlayVisibility: "hidden",
			progressWidgetVisibility: "notHidden"
		});
	}

	render() {
		const defaultSettings = {
	    	center: {lat: -7.8019309, lng: 110.3517557},
			zoom: 14
	    };

		return (
		  <div className="MapSection">
		  	<Scrollbars style={{width: "100%", height: "160px", height: "10rem"}}>
	        	<div className="selected-bus">
	        		<div className="container clearfix">
	        			<NearestBus
			                route={"2B"}
			                timeLeft={"10 menit lagi"}
			                timeEta={"12.45 PM"}
			                distanceProgress={"75"}
			                halteDept={"Kusumanegara"}
			                halteDest={"Senopati"}
			              />
	        		</div>
	        	</div>
	        </Scrollbars>
	        <div className="Map">
		  		<div className={"overlay " + this.state.overlayVisibility}>
			  		<div className="content">
				  		<div className="text">Posisi real-time bus</div>
				  		<button className="button" onClick={this.overlayVisibilityListener}>Tampilkan</button>
			  		</div>
			  	</div>
			  	<div className={"progress-widget " + this.state.progressWidgetVisibility}>
			  		<i className="mdi mdi-bus"></i>
			  		<ArrivalProgress progress={25} />
			  		<i className="mdi mdi-store"></i>
			  	</div>
			  	<GoogleMap {...defaultSettings}>
			    </GoogleMap>
			</div>
		  </div>
		);
	}
}

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps)(MapSection);
