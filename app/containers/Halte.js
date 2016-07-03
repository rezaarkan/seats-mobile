import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import Navbar from 'components/Navbar';
import RuteIndicator from 'components/RuteIndicator';
import HalteBusItem from 'components/HalteBusItem';

class Halte extends Component {

  render() {
    return (
      <div className="Halte">
        <Navbar back={true} pageName="Halte" />
        <div className="container-mobile">
          <div className="header">
            <div className="content">
              <div className="name">
                Kenari
              </div>
              <div className="address">
                Jalan Kenari, Semaki, Umbulharjo
              </div>
              <div className="landmark">
                Mandala Krida, GOR Amongraga, SMKN 6 Yogyakarta
              </div>
              <RuteIndicator type={"halte"} />
            </div>
          </div>
          <div className="seperator">
            <span>Bus menuju Halte Kenari 1</span>
          </div>
          <HalteBusItem 
            busId={"AB 2454 RT"}
            busRute={"2A"}
            currentDestination={"Halte Kenari 1"}
            arrivingIn={"23"}
          />
          <HalteBusItem 
            busId={"AB 2454 RT"}
            busRute={"2A"}
            currentDestination={"Halte Kenari 1"}
            arrivingIn={"23"}
          />
          <HalteBusItem 
            busId={"AB 2454 RT"}
            busRute={"2A"}
            currentDestination={"Halte Kenari 1"}
            arrivingIn={"23"}
          />
          <HalteBusItem 
            busId={"AB 2454 RT"}
            busRute={"2A"}
            currentDestination={"Halte Kenari 1"}
            arrivingIn={"23"}
          />
          <HalteBusItem 
            busId={"AB 2454 RT"}
            busRute={"2A"}
            currentDestination={"Halte Kenari 1"}
            arrivingIn={"23"}
          />
          <HalteBusItem 
            busId={"AB 2454 RT"}
            busRute={"2A"}
            currentDestination={"Halte Kenari 1"}
            arrivingIn={"23"}
          />
          <HalteBusItem 
            busId={"AB 2454 RT"}
            busRute={"2A"}
            currentDestination={"Halte Kenari 1"}
            arrivingIn={"23"}
          />
          <HalteBusItem 
            busId={"AB 2454 RT"}
            busRute={"2A"}
            currentDestination={"Halte Kenari 1"}
            arrivingIn={"23"}
          />
        </div>
      </div>
    );
  }
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(Halte);
