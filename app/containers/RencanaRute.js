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
    paddingBottom: "0px",
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
    backgroundColor: "#154c87",
  },
}

class RencanaRute extends Component {
  componentDidMount() {
      window.scrollTo(0, 0);
      if(this.props.pilihRute.travelInfo == undefined)
      {
        browserHistory.push("/");
      }   
  }

  render() {
    var selectedRute1 = ls.get('selectedRute1') || "99";
    var selectedRute2 = ls.get('selectedRute2') || "99";
    var ruteCount = ls.get('transitCount') || "0";
    var selectedHalte1 = ls.get('selectedHalte1') || "Halte Awal";
    var selectedHalteTransit = ls.get('selectedHalteTransit');
    var selectedHalte2 = ls.get('selectedHalte2') || "Halte Akhir";

    var locationNameAsal = ls.get('locationNameAsal') || "Lokasi Asal";
    var locationNameTujuan = ls.get('locationNameTujuan') || "Lokasi Tujuan";

    var randomDistanceAsal = Math.floor(Math.random() * 110);
    var randomDistanceTujuan = Math.floor(Math.random() * 100);

    var halteAsal = this.props.pilihHalteAsal.halteAsal || {};
    var halteTujuan = this.props.pilihHalteTujuan.halteTujuan || {};

    var halteAsalName = halteAsal.halteName || "Halte A";
    var halteTujuanName = halteTujuan.halteName || "Halte B";

    var travelInfo = this.props.pilihRute.travelInfo || {};
    var rute = [];
    var time = Math.ceil(parseFloat(this.props.pilihRute.totalTime)/60) || "00";

    var asal = _.startCase(halteAsalName.toLowerCase());
    var tujuan = _.startCase(halteTujuanName.toLowerCase());

    travelInfo.map((t, i) => {
      rute[i] = t.ruteId;
    });

    return (
      <div className="RencanaRute">
        <Navbar back={true} pageName={"Rencana rute"}>

        </Navbar>
        <div className="container-mobile">
          <ListItem 
            primaryText={
              <RuteIndicator
                className="rencana"
                type={"rencana"} 
                rute1 = {selectedRute1}
                rute2 = {selectedRute2}
                ruteCount={ruteCount}
              />
            }
            rightAvatar={
              <div>
                <div className="time">
                  {time}
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
          <RencanaRuteItem
            type={"start"}
            location={asal}
            nearestBusTime={"14"}
            rute={rute[0]}
            position={"Lokasi awal"}
            distance={randomDistanceAsal}
          />
          <RencanaRuteItem type={"journey"} journeyTime={"23"}/>
          <RencanaRuteItem
            type={"finish"}
            location={tujuan}
            position={"Lokasi akhir"}
            distance={randomDistanceTujuan}
          />
        </div>

      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    pilihHalteAsal: state.pilihHalteAsal,
    pilihHalteTujuan: state.pilihHalteTujuan,
    pilihRute: state.pilihRute,
  };
}
export default connect(mapStateToProps)(RencanaRute);
