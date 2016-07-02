import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import Navbar from 'components/Navbar';
import RuteIndicator from 'components/RuteIndicator';
import RencanaRuteItem from 'components/RencanaRuteItem';

import { ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import ls from 'local-storage';

const styles={
  rencanaHeader: {
    paddingBottom: "0",
  },
  rencanaHeaderRute:{
    top: "15px",
    top: "0.9375rem",
  },
  rencanaRuteIndicator:{
    paddingTop: "4px",
    paddingTop: "0.25rem",
    paddingBottom: "4px",
    paddingBottom: "0.25rem",
  },
}

class RencanaRute extends Component {

  render() {
    var selectedRute1 = ls.get('selectedRute1');
    var selectedRute2 = ls.get('selectedRute2');
    var ruteCount = ls.get('transitCount');
    var selectedHalte1 = ls.get('selectedHalte1');
    var selectedHalteTransit = ls.get('selectedHalteTransit');
    var selectedHalte2 = ls.get('selectedHalte2');

    var locationNameAsal = ls.get('locationNameAsal');
    var locationNameTujuan = ls.get('locationNameTujuan');

    var totalRencanaRute;

    if (ruteCount=="0") {
      totalRencanaRute =
      <div>
        <RencanaRuteItem type={"start"} location={selectedHalte1} nearestBusTime={"14"} rute={selectedRute1}/>
        <RencanaRuteItem type={"journey"} journeyTime={"23"}/>
        <RencanaRuteItem type={"finish"} location={selectedHalte2}/>
      </div>;
    } else {
      totalRencanaRute =
      <div>
        <RencanaRuteItem type={"start"} location={selectedHalte1} nearestBusTime={"14"} rute={selectedRute1}/>
        <RencanaRuteItem type={"journey"} journeyTime={"23"}/>
        <RencanaRuteItem type={"transit"} location={selectedHalteTransit} nearestBusTime={"14"} rute={selectedRute2}/>
        <RencanaRuteItem type={"journey"} journeyTime={"23"}/>
        <RencanaRuteItem type={"finish"} location={selectedHalte2 }/>
      </div>;
    }

    return (
      <div className="RencanaRute">
        <Navbar>

        </Navbar>
        <div className="container-mobile">
          <ListItem 
            primaryText={
              <RuteIndicator
                type={"rencana"} 
                rute1 = {selectedRute1}
                rute2 = {selectedRute2}
                ruteCount={ruteCount}
              />
            }
            rightAvatar={
              <div>
                <div className="time">
                  28
                </div>
                <div className="text">
                  menit
                </div>
              </div>
            }
            style={styles.rencanaRuteIndicator}
          />
          <Divider />
          <ListItem
            disabled={true}
            style={styles.rencanaHeader}
            leftAvatar={
              <div className="header-rute" style={styles.rencanaHeaderRute}>
                rute
              </div>
            }
            primaryText={
              <div className="header-halte">
                halte
              </div>
            }
          />
          {totalRencanaRute}
        </div>

      </div>
    );
  }
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(RencanaRute);
