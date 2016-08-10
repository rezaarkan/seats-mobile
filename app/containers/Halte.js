import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import { loadHalteDetail } from 'actions/halte';

import _ from 'lodash';

import Navbar from 'components/Navbar';
import RuteIndicator from 'components/RuteIndicator';
import HalteBusItem from 'components/HalteBusItem';

class Halte extends Component {
  static fetchData({ store, params }) {
    let { halteId } = params
    return store.dispatch(loadHalteDetail({ halteId }))
  }

  componentDidMount() {
    let { halteId } = this.props.params
    this.props.loadHalteDetail({ halteId })

    window.scrollTo(0, 0);  
  }

  render() {
    var halteBuses = this.props.halte.busDirecting || [];
    var tempNamaHalte = this.props.halte.namaHalte || "halte";
    var namaHalte = _.startCase(tempNamaHalte.toLowerCase());

    return (
      <div className="Halte">
        <Navbar back={true} pageName="Informasi Halte" />
        <div className="container-mobile">
          <div className="header">
            <div className="bg" />
            <div className="gradient" />
            <div className="content">
              <div className="name">
                {namaHalte}
              </div>
              <div className="address">
                {this.props.halte.lokasiHalte}
              </div>
              <div className="landmark">
              </div>
              <RuteIndicator type={"halte"} rute1={"2A"} rute2={"2B"}/>
            </div>
          </div>
          <div className="seperator">
            <span>{"Bus menuju "+namaHalte}</span>
          </div>
          {
            halteBuses.map((b)=> {
              var waktuKedatangan = Math.ceil(parseFloat(b.waktuKedatangan)/60) || "00";
              var namaHalte = _.startCase(b.toHalte.namaHalte.toLowerCase()) || "Halte Tujuan";

              return (
                <HalteBusItem
                  key={b.arrivalCode}
                  busId={b.platNomor}
                  currentDestination={namaHalte}
                  arrivingIn={waktuKedatangan}
                  busRute={b.ruteId}
                  link={"/halte/"+b.toHalte.halteId}
                />
              )
            })
          }
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { halte: state.halteDetail };
}

export default connect(mapStateToProps, { loadHalteDetail })(Halte);
