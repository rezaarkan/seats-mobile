import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import { loadRuteDetail, loadRuteBus, loadRuteHalte } from 'actions/rutedaftar';

import Navbar from 'components/Navbar';
import RuteBusItem from 'components/RuteBusItem';
import RuteHalteItem from 'components/RuteHalteItem';

import _ from 'lodash';
import {Tabs, Tab} from 'material-ui/Tabs';

const styles={
  tab:{
    backgroundColor: "#154c87",
  }
}

class Rute extends Component {
  static fetchData({ store, params }) {
    let { ruteId } = params
    return store.dispatch(loadRuteDetail({ ruteId }), loadRuteBus({ ruteId }), loadRuteHalte({ ruteId }))
  }

  componentDidMount() {
    let { ruteId } = this.props.params
    this.props.loadRuteDetail({ ruteId })
    this.props.loadRuteBus({ ruteId })
    this.props.loadRuteHalte({ ruteId })

    window.scrollTo(0, 0);  
  }

  render() {
    return (
      <div className="Rute">
        <Navbar back={true} pageName="Informasi Rute" />
        <div className="container-mobile">
          <div className="header">
            <div className="rute">
              {this.props.rute.ruteId}
            </div>
            <div className="text">
              {this.props.rute.deskripsi}
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
              <div className="seperator">
                <span>{"Bus rute "+this.props.rute.ruteId}</span>
              </div>
              {
                this.props.ruteBus.map((b)=>{
                  var namaHalte = _.startCase(b.toHalte.namaHalte.toLowerCase()) || "Halte Tujuan";
                  var jarak = Math.ceil(parseFloat(b.jarak)/1000);
                  var waktuKedatangan = Math.ceil(parseFloat(b.waktuKedatangan)/60);

                  return(
                    <RuteBusItem
                      key={b.arrivalCode}
                      busId={b.platNomor}
                      distance={jarak}
                      currentDestination={namaHalte}
                      arrivingIn={waktuKedatangan}
                      link={"/halte/"+b.toHalte.halteId}
                    />
                  )
                })
              }
            </Tab>
            <Tab label="halte" style={styles.tab}>
              <div className="seperator">
                <span>{"Halte yang dilalui rute "+this.props.rute.ruteId}</span>
              </div>
              {
                this.props.ruteHalte.map((h)=> {
                  var temp = h.rutePass;
                  var ruteCount = Object.keys(temp).length;

                  return(
                    <RuteHalteItem
                      key={h.detailHalte.halteId}
                      name={h.detailHalte.namaHalte}
                      address={h.detailHalte.lokasiHalte}
                      link={"../halte/"+h.slug}
                      ruteCount={ruteCount}
                      ruteList={h.rutePass}
                    />
                  )
                })
              }
            </Tab>
          </Tabs>

        </div>

      </div>
    );
  }
}

function mapStateToProps(state) {
  return { rute: state.ruteDetail, ruteBus: state.ruteBus, ruteHalte: state.ruteHalte };
}

export default connect(mapStateToProps, { loadRuteDetail, loadRuteBus, loadRuteHalte })(Rute);
