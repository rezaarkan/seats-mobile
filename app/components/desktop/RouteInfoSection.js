import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { IndexLink, Link } from 'react-router';

import ArrivalProgress from 'components/desktop/ArrivalProgress';
import Scrollbars from 'react-custom-scrollbars';
import NearestBus from 'components/desktop/NearestBus';
import BusRow from 'components/desktop/BusRow';

class RouteInfoSection extends Component {
  render() {
    return (
      <div className="RouteInfoSection">
        <Scrollbars style={{width: "100%", height: "100%"}}>
          <div className="selected-bus">
              <NearestBus
                    route={"2B"}
                    timeLeft={"10 menit lagi"}
                    timeEta={"12.45 PM"}
                    distanceProgress={"75"}
                    halteDept={"Kusumanegara"}
                    halteDest={"Senopati"}
                  />
          </div>
          <div className="other-bus">
            <div className="container">
            	<table>
            		<thead>
                  <tr>
                    <th>Rute</th>
                    <th className="text-left">Waktu menunggu</th>
                    <th className="text-left">Waktu kedatangan</th>
                  </tr>
                </thead>
                <tbody>
                  <BusRow
                    route={"2B"}
                    busStatus={"near"}
                    timeLeft={"45 menit lagi"}
                    timeEta={"12.45 PM"}
                    distanceProgress={"10"}
                  />
                  <BusRow
                    route={"2A"}
                    busStatus={"near"}
                    timeLeft={"47 menit lagi"}
                    timeEta={"12.50 PM"}
                    distanceProgress={"13"}
                  />
                  <BusRow
                    route={"2B"}
                    busStatus={"near"}
                    timeLeft={"75 menit lagi"}
                    timeEta={"13.45 PM"}
                    distanceProgress={"17"}
                  />
                  <BusRow
                    route={"2A"}
                    busStatus={"far"}
                    timeLeft={"125 menit lagi"}
                    timeEta={"12.45 PM"}
                    distanceProgress={"12"}
                  />
                  <BusRow
                    route={"2A"}
                    busStatus={"far"}
                    timeLeft={"125 menit lagi"}
                    timeEta={"12.45 PM"}
                    distanceProgress={"12"}
                  />
                  <BusRow
                    route={"2A"}
                    busStatus={"far"}
                    timeLeft={"125 menit lagi"}
                    timeEta={"12.45 PM"}
                    distanceProgress={"12"}
                  />
                  <BusRow
                    route={"2A"}
                    busStatus={"far"}
                    timeLeft={"125 menit lagi"}
                    timeEta={"12.45 PM"}
                    distanceProgress={"12"}
                  />
                  <BusRow
                    route={"2A"}
                    busStatus={"far"}
                    timeLeft={"125 menit lagi"}
                    timeEta={"12.45 PM"}
                    distanceProgress={"12"}
                  />
                  <BusRow
                    route={"2B"}
                    busStatus={"far"}
                    timeLeft={"45 menit lagi"}
                    timeEta={"12.45 PM"}
                    distanceProgress={"10"}
                  />
                </tbody>
            	</table>
            </div>
          </div>
        </Scrollbars>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps)(RouteInfoSection);
