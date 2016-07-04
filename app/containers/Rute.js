import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, browserHistory } from 'react-router';

import Navbar from 'components/Navbar';
import RuteBusItem from 'components/RuteBusItem';
import RuteHalteItem from 'components/RuteHalteItem';

import {Tabs, Tab} from 'material-ui/Tabs';

const styles={
  tab:{
    backgroundColor: "#154c87",
  }
}

class Rute extends Component {
  historyGoback(){
   browserHistory.goBack();
  }

  render() {
    return (
      <div className="Rute">
        <div className="container-mobile no-padding">
          <div className="header">
            <div className="rute">
              2B
            </div>
            <div className="text">
              Terminal Jombor - Monjali - Terminal Condongcatur - UGM - Monjali - Taman Pintar - XT Square
            </div>
            <div className="back" onClick={this.historyGoback}>
              <i className="mdi mdi-keyboard-backspace" />
            </div>
          </div>
          <Tabs
            inkBarStyle={
              {
                backgroundColor: "#00b6d9",
                height: "4px",
                marginTop: "-4px",
              }
            }
          >
            <Tab label="bus" style={styles.tab}>
              <RuteBusItem
                busId={"AB 5473 FT"}
                currentDestination={"Mandala Krida"}
                arrivingIn={"20"}
                distance={"3.2"}
              />
              <RuteBusItem
                busId={"AB 5473 FT"}
                currentDestination={"Mandala Krida"}
                arrivingIn={"20"}
                distance={"3.2"}
              />
              <RuteBusItem
                busId={"AB 5473 FT"}
                currentDestination={"Mandala Krida"}
                arrivingIn={"20"}
                distance={"3.2"}
              />
              <RuteBusItem
                busId={"AB 5473 FT"}
                currentDestination={"Mandala Krida"}
                arrivingIn={"20"}
                distance={"3.2"}
              />
              <RuteBusItem
                busId={"AB 5473 FT"}
                currentDestination={"Mandala Krida"}
                arrivingIn={"20"}
                distance={"3.2"}
              />
              <RuteBusItem
                busId={"AB 5473 FT"}
                currentDestination={"Mandala Krida"}
                arrivingIn={"20"}
                distance={"3.2"}
                last={true}
              />
            </Tab>
            <Tab label="halte" style={styles.tab}>
              <RuteHalteItem
                name={"Kenari 1"}
                address={"Jl. Kenari, Semaki, Umbulharjo"}
                landmark={"Mandala Krida, GOR Amongraga, SMKN 6 Yk"}
              />
              <RuteHalteItem
                name={"Kenari 1"}
                address={"Jl. Kenari, Semaki, Umbulharjo"}
                landmark={"Mandala Krida, GOR Amongraga, SMKN 6 Yk"}
              />
              <RuteHalteItem
                name={"Kenari 1"}
                address={"Jl. Kenari, Semaki, Umbulharjo"}
                landmark={"Mandala Krida, GOR Amongraga, SMKN 6 Yk"}
              />
              <RuteHalteItem
                name={"Kenari 1"}
                address={"Jl. Kenari, Semaki, Umbulharjo"}
                landmark={"Mandala Krida, GOR Amongraga, SMKN 6 Yk"}
              />
              <RuteHalteItem
                name={"Kenari 1"}
                address={"Jl. Kenari, Semaki, Umbulharjo"}
                landmark={"Mandala Krida, GOR Amongraga, SMKN 6 Yk"}
              />
              <RuteHalteItem
                name={"Kenari 1"}
                address={"Jl. Kenari, Semaki, Umbulharjo"}
                landmark={"Mandala Krida, GOR Amongraga, SMKN 6 Yk"}
                last={true}
              />
            </Tab>
          </Tabs>

        </div>

      </div>
    );
  }
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(Rute);
