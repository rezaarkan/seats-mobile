import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

import { ListItem } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import Divider from 'material-ui/Divider';

import {
  white,
  cyan500
} from 'material-ui/styles/colors';

const styles={
  rute: {
    textAlign: 'center',
    lineHeight: '28px',
    top: '26px',
    left: '24px',
  },
  time: {
    top: '18px',
  },
}

class HalteBusItem extends Component {
  render() {
    var lastTrue = this.props.last || false;
    var divider;

    if (lastTrue) {
      divider=<Divider style={styles.hidden}/>;
    } else {
      divider=<Divider />;
    }

    return (
      <div className="HalteBusItem clearfix">     
        <ListItem
          disabled={true}
          leftAvatar={
            <Avatar
              color={white}
              backgroundColor={"#00b6d9"}
              size={28}
              style={styles.rute}
            >
              {this.props.busRute}
            </Avatar>
          }
          primaryText={
            <div className="block-center">
              <i className="mdi mdi-bus" />
              <div className="id">{this.props.busId}</div>
              <div className="text">
                <span>Menuju </span>
                <Link to="/halte" className="halte-location">{this.props.currentDestination}</Link>
              </div>
            </div>
          }
          rightAvatar={
            <div className="block-right" style={styles.time}>
              <div className="time">
                {this.props.arrivingIn}
              </div>
              <div className="text">
                menit
              </div>
            </div>
          }
        >
        </ListItem>
        {divider}
      </div>
    )
  }
}

export default HalteBusItem
