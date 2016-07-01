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
  swipeable: {
    boxSizing: 'border-box',
    minHeight: '300px',
    overflow: 'hidden',
  },
  swipeableChild: {
    minHeight: '300px',
    overflow: 'hidden',
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
        <Navbar

        />
        <div className="container-mobile">
          <Tabs
          >
            <Tab label="Cari rute">
              <SectionCariRute />
            </Tab>
            <Tab label="rute">
              <SectionDaftarRute />
            </Tab>
            <Tab label="halte">
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
