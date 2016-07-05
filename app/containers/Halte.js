import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import Navbar from 'components/Navbar';
import RuteIndicator from 'components/RuteIndicator';
import HalteBusItem from 'components/HalteBusItem';

class Halte extends Component {
  componentDidMount() {
      window.scrollTo(0, 0);  
  }

  render() {
    return (
      <div className="Halte">
        <Navbar back={true} pageName="Informasi Halte" />
        <div className="container-mobile">
          <div className="header">
            <div className="content">
              <div className="name">
                Kenari 1
              </div>
              <div className="address">
                Jalan Kenari, Semaki, Umbulharjo
              </div>
              <div className="landmark">
                Mandala Krida, GOR Amongraga, SMKN 6 Yogyakarta
              </div>
              <RuteIndicator type={"halte"} rute1={"2A"} rute2={"2B"}/>
            </div>
          </div>
          <div className="seperator">
            <span>Bus menuju Halte Kenari 1</span>
          </div>
          <HalteBusItem 
            busId={"AB 2454 RT"}
            busRute={"2A"}
            currentDestination={"Halte Kenari 1"}
            arrivingIn={"4"}
          />
          <HalteBusItem 
            busId={"AB 1234 CT"}
            busRute={"2B"}
            currentDestination={"Halte Kenari 1"}
            arrivingIn={"13"}
          />
          <HalteBusItem 
            busId={"AB 5554 IM"}
            busRute={"2A"}
            currentDestination={"Halte Kusumanegara 4"}
            arrivingIn={"25"}
          />
          <HalteBusItem 
            busId={"AB 8214 GH"}
            busRute={"2B"}
            currentDestination={"Halte Yos Sudarso"}
            arrivingIn={"27"}
          />
          <HalteBusItem 
            busId={"AB 3614 CG"}
            busRute={"2A"}
            currentDestination={"Halte Gedong Kuning (Dep. Kehutanan)"}
            arrivingIn={"33"}
          />
          <HalteBusItem 
            busId={"AB 8839 HD"}
            busRute={"2B"}
            currentDestination={"Halte Cik Di Tiro 2"}
            arrivingIn={"39"}
          />
          <HalteBusItem 
            busId={"AB 9274 HC"}
            busRute={"2A"}
            currentDestination={"Halte RSI Hidayatullah"}
            arrivingIn={"45"}
          />
          <HalteBusItem 
            busId={"AB 8392 JD"}
            busRute={"2A"}
            currentDestination={"Halte Katamso 1"}
            arrivingIn={"59"}
          />
          <HalteBusItem 
            busId={"AB 8493 LK"}
            busRute={"2B"}
            currentDestination={"Halte Ring Road Utara (Monjali 2)"}
            arrivingIn={"62"}
          />
          <HalteBusItem 
            busId={"AB 9458 MC"}
            busRute={"2B"}
            currentDestination={"Halte Terminal Jombor"}
            arrivingIn={"78"}
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
