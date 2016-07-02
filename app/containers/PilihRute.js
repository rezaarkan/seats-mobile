import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import Navbar from 'components/Navbar';
import PilihRuteItem from 'components/PilihRuteItem';

import ls from 'local-storage';

class PilihRute extends Component {

  render() {
    var asal = ls.get('locationNameAsal');
    var tujuan = ls.get('locationNameTujuan');
    var asalOld = ls.get('locationNameAsalOld');
    var tujuanOld = ls.get('locationNameTujuanOld');

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
    }

    return (
      <div className="PilihRute">
        <Navbar>

        </Navbar>
        <div className="container-mobile">
          <PilihRuteItem
            halteKeberangkatan={asal}
            transitCount={"1"}
            rute1={rute1}
            rute2={rute2}
          />
          <PilihRuteItem
            halteKeberangkatan={asal}
            transitCount={"1"}
            rute1={rute1}
            rute2={rute3}
          />
          <PilihRuteItem
            halteKeberangkatan={asal}
            transitCount={"0"}
            rute1={rute1}
          />
          <PilihRuteItem
            halteKeberangkatan={asal}
            transitCount={"0"}
            rute1={rute2}
          />
          <PilihRuteItem
            halteKeberangkatan={asal}
            transitCount={"0"}
            rute1={rute3}
            last={true}
          />
        </div>

      </div>
    );
  }
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(PilihRute);
