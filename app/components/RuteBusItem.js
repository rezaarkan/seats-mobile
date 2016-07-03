import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

import { ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';

const styles={
  blockLeft:{
    top: "16px",
    top: "1rem",
  }
}

class RuteBusItem extends Component {
  render() {
    var lastTrue = this.props.last || false;
    var divider;

    if (lastTrue) {
      divider=<Divider style={styles.hidden}/>;
    } else {
      divider=<Divider />;
    }

    return (
      <div className="RuteBusItem clearfix">      
        <ListItem
          disabled={true}
          leftAvatar={
            <div className="block-left" style={styles.blockLeft}>
              <i className="mdi mdi-bus" />
              <div className="id">{this.props.busId}</div>
            </div>
          }
          primaryText={
            <div className="block-right">
              <div className="title">posisi</div>
              <div className="text">
                <span>Menuju </span><Link to="/halte" className="halte-location">{this.props.currentDestination}</Link>
              </div>
              <div className="time">
                <i className="mdi mdi-store" />
                <span>{this.props.arrivingIn + " menit"}</span>
              </div>
              <div className="distance">
                <i className="mdi mdi-bus" />
                <span>{this.props.distance + " km"}</span>
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

export default RuteBusItem
