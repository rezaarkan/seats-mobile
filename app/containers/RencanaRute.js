import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import Navbar from 'components/Navbar';
import RuteIndicator from 'components/RuteIndicator';
import RencanaRuteItem from 'components/RencanaRuteItem';

import { ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';

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
    return (
      <div className="RencanaRute">
        <Navbar>

        </Navbar>
        <div className="container-mobile">
          <ListItem 
            primaryText={
              <RuteIndicator />
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
          <RencanaRuteItem type={"start"} location={"Mandala Krida"} nearestBusTime={"14"}/>
          <RencanaRuteItem type={"journey"} journeyTime={"23"}/>
          <RencanaRuteItem type={"transit"} location={"Kopma UGM"} nearestBusTime={"15"}/>
          <RencanaRuteItem type={"journey"} journeyTime={"47"}/>
          <RencanaRuteItem type={"finish"} location={"Candi Prambanan"}/>
        </div>

      </div>
    );
  }
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(RencanaRute);
