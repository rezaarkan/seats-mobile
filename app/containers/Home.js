import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

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
  componentDidMount() {
      window.scrollTo(0, 0);  
  }

  handleChange = (value) => {

  };

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
              <SectionCariRute />
            </Tab>
            <Tab label="rute" style={styles.tab} value={2}>
              <SectionDaftarRute />
            </Tab>
            <Tab label="halte" style={styles.tab} value={3}>
              <SectionDaftarHalte />
            </Tab>
          </Tabs>
          </div>
      </div>
    );
  }
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(Home);
