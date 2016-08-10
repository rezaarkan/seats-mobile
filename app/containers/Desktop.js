import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import superAgent from 'superagent';

import Header from 'components/desktop/Header';
import HalteInfoSidebar from 'components/desktop/HalteInfoSidebar';
import RouteInfoSection from 'components/desktop/RouteInfoSection';
import MapSection from 'components/desktop/MapSection';

class Desktop extends Component {
	constructor(props) {
		super(props);
		this.state={
			halteName: "Kenari 1",
			halteLocation: "Jalan Kenari, Semaki, Umbulharjo"
		}
	}

	getHalteInfo(){
		/*
		superAgent['get']('http://93.188.164.230/passenger_information_system/public/api/bus_stop/3')
		.end((err, res)=> {
			if ( !err ) {
				var apiParse = JSON.parse(res.text);
				var object = apiParse.data;
				console.log(object);

				var namaHalte = object.nama_halte.toLowerCase();

				this.setState({
					halteName: namaHalte,
					halteLocation: object.lokasi_halte
				})
			}
		});
		*/
	}

	componentDidMount() {
		this.getHalteInfo();  
		console.log(this.state.halteName);   
	}

	render() {
		return (
			<div className="Desktop">
				<Header />
				<div className="layout">
					<HalteInfoSidebar
					halteName = {this.state.halteName}
					halteLocation = {this.state.halteLocation}
					>

					</HalteInfoSidebar>
					<RouteInfoSection>

					</RouteInfoSection>
					<MapSection>

					</MapSection>
				</div>
			</div>
		);
	}
}

function mapStateToProps() {
	return {};
}

export default connect(mapStateToProps)(Desktop);
