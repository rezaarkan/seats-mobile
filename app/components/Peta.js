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
      },
      status: "hidden",
    }

    this.onSuggestSelectHandler = this.onSuggestSelectHandler.bind(this);
  }

  onSuggestSelectHandler(suggest) {
    var suggestName = suggest.gmaps.address_components[0].short_name || suggest.label;
    var suggestLat = suggest.location.lat;
    var suggestLng = suggest.location.lng;
    var suggestAddress = suggest.gmaps.formatted_address;
    var formattedAddress = suggestAddress.slice(0,suggestAddress.indexOf(',',suggestAddress.indexOf(',')+1));

    if (ls.get('savedSuggest') == undefined){
      ls.set('savedSuggest', []);
    }

    console.log(suggest);

    var savedSuggest = ls.get('savedSuggest');

    savedSuggest.push(suggest);

    if (savedSuggest.length > 5){
      savedSuggest.splice(0, 1);
    }

    ls.set('savedSuggest', savedSuggest);

    this.setState({
      name: suggestName,
      address: formattedAddress,
      position: {
        lat: suggestLat,
        lng: suggestLng,
      },
      status: "notHidden",
    });

    var temp = ls.get('locationName'+this.props.type);
    ls.set('locationName'+this.props.type+'Old',temp);

    ls.set('locationName'+this.props.type, this.state.name);
    ls.set('locationAddress'+this.props.type, this.state.address);
    ls.set('locationLat'+this.props.type, this.state.position.lat);
    ls.set('locationLng'+this.props.type, this.state.position.lng);
  };

  render() {
    if (ls.get('savedSuggest') != undefined){
      var suggestion = ls.get('savedSuggest').reverse();
    }

    return (
      <div className="Peta">
        <Navbar back={true} pageName={"Lokasi "+this.props.type} />
        <div className="container-mobile">
          <div className="search-location">
            <Geosuggest
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
            <div className={"map-info "+this.state.status}>
              <div className="name">{this.state.name}</div>
              <div className="address">{this.state.address}</div>
              <Link to="/">
                <RaisedButton
                  label={"Pilih "+this.props.type}
                  primary={true}
                  style={styles.button}
                  backgroundColor={"#000"}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Peta
