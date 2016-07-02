import React, { Component } from 'react';
import { Link } from 'react-router';

import Navbar from 'components/Navbar';

import Geosuggest from 'react-geosuggest';
import {GoogleMapLoader, GoogleMap, Marker} from "react-google-maps";
import ls from 'local-storage';
import RaisedButton from 'material-ui/RaisedButton';

const styles={
  button: {
    width: "100%",
  }
}

class Peta extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Rumah Reza",
      address: "Jl. Melati Kulon 17 Baciro",
      position: {
        lat: -7.7958091,
        lng: 110.3820899,
      }
    }

    this.onSuggestSelectHandler = this.onSuggestSelectHandler.bind(this);
  }

  onSuggestSelectHandler(suggest) {
    var suggestName = suggest.gmaps.address_components[0].short_name;
    var suggestLat = suggest.location.lat;
    var suggestLng = suggest.location.lng;
    var suggestAddress = suggest.gmaps.formatted_address;
    var formattedAddress = suggestAddress.slice(0,suggestAddress.indexOf(',',suggestAddress.indexOf(',')+1));

    console.log(suggest);

    this.setState({
      name: suggestName,
      address: formattedAddress,
      position: {
        lat: suggestLat,
        lng: suggestLng,
      }
    });

    var temp = ls.get('locationName'+this.props.type);
    ls.set('locationName'+this.props.type+'Old',temp);

    ls.set('locationName'+this.props.type, this.state.name);
    ls.set('locationAddress'+this.props.type, this.state.address);
    ls.set('locationLat'+this.props.type, this.state.position.lat);
    ls.set('locationLng'+this.props.type, this.state.position.lng);
  };

  render() {
    var suggestion = [
      {label: 'Mandala Krida', location: {lat: -7.7958091, lng: 110.3820899}},
      {label: 'Kopma UGM', location: {lat: -7.7744103, lng: 110.373057}},
      {label: 'Candi Prambanan', location: {lat: -7.7520153, lng: 110.4892787}},
      {label: 'Bandara Adisucipto', location: {lat: -7.7876785, lng: 110.4295726}},
      {label: 'Universitas Negeri Yogyakarta - Fakultas Teknik', location: {lat: -7.7691271, lng: 110.3859619}}
    ];

    return (
      <div className="Peta">
        <Navbar />
        <div className="container-mobile">
          <div className="search-location">
            <Geosuggest 
              fixtures={suggestion}
              placeholder={"Cari lokasi"}
              country={"id"}
              onSuggestSelect={this.onSuggestSelectHandler}
            />
          </div>
          <div className="map">
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
                  ref={(map) => console.log(map)}
                  defaultZoom={15}
                  defaultCenter={this.state.position}
                  center={this.state.position}
                  options={{
                    disableDefaultUI: true
                  }}
                >
                  <Marker position={this.state.position} />
                </GoogleMap>
              }
            />
            <div className="map-info">
              <div className="name">{this.state.name}</div>
              <div className="address">{this.state.address}</div>
              <Link to="/">
                <RaisedButton label={"Pilih "+this.props.type} primary={true} style={styles.button}/>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Peta
