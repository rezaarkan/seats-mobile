import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import { loadPilihanRute } from 'actions/pilih-rute';

import Navbar from 'components/Navbar';
import PilihRuteItem from 'components/PilihRuteItem';

import _ from 'lodash';

class PilihRute extends Component {

  componentDidMount() {
      let halteAsal = this.props.pilihHalteAsal;
      let halteTujuan = this.props.pilihHalteTujuan;

      let halteAsalId = halteAsal.halteAsal.halteId;
      let halteTujuanId = halteTujuan.halteTujuan.halteId;

      console.log (halteAsalId);
      console.log (halteTujuanId);

      this.props.loadPilihanRute({ halteAsalId, halteTujuan });

      window.scrollTo(0, 0);  
  }

  render() {
    var halteAsal = this.props.pilihHalteAsal.halteAsal || {};
    var halteTujuan = this.props.pilihHalteTujuan.halteTujuan || {};

    var halteAsalName = halteAsal.halteName;
    var halteTujuanName = halteTujuan.halteName;

    var asal = _.startCase(halteAsalName.toLowerCase()) || "Halte A";
    var tujuan = _.startCase(halteTujuanName.toLowerCase()) || "Halte B";
    var asalOld = "skda";
    var tujuanOld = "jdkasjd";

    if (asal != asalOld || tujuan != tujuanOld){
      var ruteText = ['1A', '1B', '2A', '2B', '3A', '3B', '4A', '4B'];
      var randomIndex = Math.floor(Math.random() * ruteText.length);
      var rute1 = ruteText[randomIndex];
      ruteText.splice(randomIndex, 1);
      randomIndex = Math.floor(Math.random() * ruteText.length);
      var rute2 = ruteText[randomIndex];
      ruteText.splice(randomIndex, 1);
      randomIndex = Math.floor(Math.random() * ruteText.length);
      var rute3 = ruteText[randomIndex];

      var haltes = [
        "Terminal Prambanan",
        "Bethesda",
        "Tugu",
        "Mandala Bhakti Wanitatama",
        "Gedung Joang 45",
        "Carrefour Maguwo",
        "Bandara Internasional Adisutjipto",
        "Pasar Kalasan",
        "Sanata Dharma",
        "Plaza Ambarrukmo",
        "Hotel Phoenix",
        "KRKB Gembiraloka",
        "RS dr. Hardjolukito",
        "Maguwoharjo",
        "Museum Perjuangan",
        "XT Square"
      ];
      randomIndex = Math.floor(Math.random() * haltes.length);
      var halte1 = haltes[randomIndex];
      haltes.splice(randomIndex, 1);

      randomIndex = Math.floor(Math.random() * haltes.length);
      var halteTransit = haltes[randomIndex];
      haltes.splice(randomIndex, 1);

      randomIndex = Math.floor(Math.random() * haltes.length);
      var halte2 = haltes[randomIndex];
      haltes.splice(randomIndex, 1);

      randomIndex = Math.floor(Math.random() * haltes.length);
      var halte3 = haltes[randomIndex];
      haltes.splice(randomIndex, 1);

      randomIndex = Math.floor(Math.random() * haltes.length);
      var halte4 = haltes[randomIndex];
      haltes.splice(randomIndex, 1);

      randomIndex = Math.floor(Math.random() * haltes.length);
      var halte5 = haltes[randomIndex];
      haltes.splice(randomIndex, 1);

    }

    /* Story Mode */
    if ((asal == "Mandala Krida" || asal == "Stadion Mandala Krida") && (tujuan == "Tugu Jogja" || tujuan == "Tugu")) {
      var halte1 = "Kenari 1";
      var halte3 = "Kenari 2";
      var halte5 = "Kusumanegara 1";
      var halte2 = "Sudirman 3";
      var halte4 = "Mangkubumi 1";
      var halteTransit = "Cik Di Tiro 2";

      var rute1 = "1B";
      var rute2 = "2B";
      var rute3 = "2A";
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
          <PilihRuteItem
            halteKeberangkatan={asal}
            transitCount={"1"}
            rute1={rute1}
            rute2={rute2}
            halte1={halte1}
            halteTransit={halteTransit}
            halte2={halte2}
            time={35}
          />
          <PilihRuteItem
            halteKeberangkatan={asal}
            transitCount={"1"}
            rute1={rute1}
            rute2={rute3}
            halte1={halte3}
            halteTransit={halteTransit}
            halte2={halte2}
            time={40}
          />
          <PilihRuteItem
            halteKeberangkatan={asal}
            transitCount={"0"}
            rute1={rute1}
            halte1={halte1}
            halte2={halte4}
            time={59}
          />
          <PilihRuteItem
            halteKeberangkatan={asal}
            transitCount={"0"}
            rute1={rute2}
            halte1={halte3}
            halte2={halte4}
            time={65}
          />
          <PilihRuteItem
            halteKeberangkatan={asal}
            transitCount={"0"}
            rute1={rute3}
            halte1={halte1}
            halte2={halte5}
            last={true}
            time={70}
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

export default connect(mapStateToProps, { loadPilihanRute })(PilihRute);
