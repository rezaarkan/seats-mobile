import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import Navbar from 'components/Navbar';
import SectionCariRute from 'components/SectionCariRute';
import SectionDaftarRute from 'components/SectionDaftarRute';
import SectionDaftarHalte from 'components/SectionDaftarHalte';

import {Tabs, Tab} from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';

const styles={
  tab:{
    backgroundColor: "#154c87",
  }
}

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      slideIndex: 0,
    };
  }

  handleChange = (value) => {
    this.setState({
      slideIndex: value,
    });
  };

  render() {
    return (
      <div className="Home">
        <Navbar pageName={"Bus Information System"} />
        <div className="container-mobile blue">
          <Tabs
            inkBarStyle={
              {
                backgroundColor: "#00b6d9",
                height: "4px",
                marginTop: "-4px",
              }
            }
          >
            <Tab label="Cari rute" style={styles.tab}>
              <SectionCariRute />
            </Tab>
            <Tab label="rute" style={styles.tab}>
              <SectionDaftarRute />
            </Tab>
            <Tab label="halte" style={styles.tab}>
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
