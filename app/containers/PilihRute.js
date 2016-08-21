import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, browserHistory } from 'react-router';

import Navbar from 'components/Navbar';
import PilihRuteItem from 'components/PilihRuteItem';

import _ from 'lodash';

class PilihRute extends Component {

  componentDidMount() {
      window.scrollTo(0, 0);
      if(this.props.pilihRute.travelInfo == undefined)
      {
        browserHistory.push("/");
      } 
  }

  render() {
    var halteAsal = this.props.pilihHalteAsal.halteAsal || {};
    var halteTujuan = this.props.pilihHalteTujuan.halteTujuan || {};

    var halteAsalName = halteAsal.halteName || "Halte A";
    var halteTujuanName = halteTujuan.halteName || "Halte B";

    var asal = _.startCase(halteAsalName.toLowerCase());
    var tujuan = _.startCase(halteTujuanName.toLowerCase());

    if (this.props.pilihRute.travelInfo != undefined)
    {
      var content = this.props.pilihRute.travelInfo.map((m, i) => {
        let asal = _.startCase(m.detailOrigin.namaHalte.toLowerCase());
        let tujuan = _.startCase(m.detailDestination.namaHalte.toLowerCase());

        return (
          <PilihRuteItem
            key={i}
            transitCount={"0"}
            rute1={m.ruteId}
            halte1={asal}
            halte2={tujuan}
            time={35}
          />
        )
      });
    }

    return (
      <div className="PilihRute">
        <Navbar back={true} pageName={"Pilih rute"}>

        </Navbar>
        <div className="container-mobile blue">
          <div className="to-from">
            <span>{asal}</span>
            <i className="mdi mdi-chevron-right" />
            <span>{tujuan}</span>
          </div>
          {
            content
          }
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

export default connect(mapStateToProps)(PilihRute);
