import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import Navbar from 'components/Navbar';
import RuteBusItem from 'components/RuteBusItem';
import RuteHalteItem from 'components/RuteHalteItem';

import {Tabs, Tab} from 'material-ui/Tabs';

class Rute extends Component {

  render() {
    return (
      <div className="Rute">
        <div className="container-mobile">
          <div className="header">
            <div className="rute">
              2A
            </div>
            <div className="text">
              Terminal Jombor - Monjali - Kentungan - Terminal Condong Catur
            </div>
          </div>
          <Tabs>
            <Tab label="bus">
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
            <Tab label="halte">
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
