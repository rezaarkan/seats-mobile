import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import { loadDaftarRute } from 'actions/rutedaftar';
import { loadDaftarHalte } from 'actions/halte';

import Navbar from 'components/Navbar';
import SectionCariRute from 'components/SectionCariRute';
import SectionDaftarRute from 'components/SectionDaftarRute';
import SectionDaftarHalte from 'components/SectionDaftarHalte';

import {Tabs, Tab} from 'material-ui/Tabs';

const styles={
  tab:{
    backgroundColor: "#154c87",
  }
}

class Home extends Component {
  static fetchData({ store }) {
    return store.dispatch(loadDaftarRute(), loadDaftarHalte());
  }

  componentDidMount() {
      this.props.loadDaftarRute();
      this.props.loadDaftarHalte();
      
      window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="Home">
        <Navbar pageName={"Bus Information System"} />
        <div className="container-mobile blue border-none">
          <Tabs
            inkBarStyle={
              {
                backgroundColor: "#00b6d9",
                height: "4px",
                marginTop: "-4px",
              }
            }
          >
            <Tab label="Cari rute" style={styles.tab} value={1}>
              <SectionCariRute pilihHalteAsal = {this.props.pilihHalteAsal} pilihHalteTujuan = {this.props.pilihHalteTujuan} />
            </Tab>
            <Tab label="rute" rute={this.props.rute} style={styles.tab} value={2}>
              <SectionDaftarRute rute={this.props.rute} />
            </Tab>
            <Tab label="halte" style={styles.tab} value={3}>
              <SectionDaftarHalte halte={this.props.halte} />
            </Tab>
          </Tabs>
          </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { rute: state.rute, halte: state.halte, pilihHalteAsal: state.pilihHalteAsal, pilihHalteTujuan: state.pilihHalteTujuan }
}

export default connect(mapStateToProps, { loadDaftarRute, loadDaftarHalte })(Home);
