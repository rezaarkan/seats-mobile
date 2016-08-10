import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { IndexLink, Link } from 'react-router';

import ArrivalProgress from 'components/desktop/ArrivalProgress';
import Scrollbars from 'react-custom-scrollbars';
import { GoogleMapLoader, GoogleMap, Marker, DirectionsRenderer } from "react-google-maps";

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

	/*componentDidMount() {
		this.setState({
			origin: new google.maps.LatLng(41.8507300, -87.6512600),
		    destination: new google.maps.LatLng(41.8525800, -87.6514100),
		    directions: null
		})

	    const DirectionsService = new google.maps.DirectionsService();

	    DirectionsService.route({
	      origin: this.state.origin,
	      destination: this.state.destination,
	      travelMode: google.maps.TravelMode.DRIVING,
	    }, (result, status) => {
	      if (status === google.maps.DirectionsStatus.OK) {
	        this.setState({
	          directions: result,
	        });
	      } else {
	        console.error(`error fetching directions ${ result }`);
	      }
	    });
	}*/

	render() {
		/* const { origin, directions } = this.state; */

		return (
		  <div className="MapSection">
	        <div className="Map">
		  		<div className={"overlay " + this.state.overlayVisibility}>
			  		<div className="content">
				  		<div className="text">Posisi real-time bus</div>
				  		<button className="button" onClick={this.overlayVisibilityListener}>Tampilkan</button>
			  		</div>
			  	</div>
			  	{/*<div className={"progress-widget " + this.state.progressWidgetVisibility}>
			  		<i className="mdi mdi-bus"></i>
			  		<ArrivalProgress progress={25} />
			  		<i className="mdi mdi-store"></i>
			  	</div>*/}
			  	<GoogleMapLoader
			  		containerElement={
			          <div
			            style={{
			              height: "100%",
			            }}
			          />
			        }
			  		googleMapElement={
			          <GoogleMap
			            defaultZoom={7}
			            defaultCenter={{lat: -25.363882, lng: 131.044922}}
			          >
			          	{/*directions ? <DirectionsRenderer directions={directions} /> : null*/}
			          </GoogleMap>
			        }
			  	>
			    </GoogleMapLoader>
			</div>
		  </div>
		);
	}
}

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps)(MapSection);
