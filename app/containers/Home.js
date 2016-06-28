import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import Navbar from 'components/Navbar';
import SectionCariRute from 'components/SectionCariRute';
import SectionDaftarRute from 'components/SectionDaftarRute';

import {Tabs, Tab} from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';

const style={
  swipeable: {
    boxSizing: 'border-box',
    minHeight: '300px',
    borderBottom: '1px solid rgba(0,0,0,0.12)',
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
        <Navbar>

        </Navbar>
        <div className="container-mobile">
          <Tabs
            onChange={this.handleChange}
            value={this.state.slideIndex}
          >
            <Tab label="Cari rute" value={0}/>
            <Tab label="rute" value={1} />
            <Tab label="halte" value={2} />
          </Tabs>
          <SwipeableViews
            style={style.swipeable}
            index={this.state.slideIndex}
            onChangeIndex={this.handleChange}
          >
            <div style={style.swipeableChild}>
              <SectionCariRute />
            </div>
            <div style={style.swipeableChild}>
              <SectionDaftarRute />
            </div>
            <div style={style.swipeableChild}>
              slide n°3
            </div>
          </SwipeableViews>
          </div>
      </div>
    );
  }
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(Home);
