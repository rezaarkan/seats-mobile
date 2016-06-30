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
    lineHeight: '40px',
    lineHeight: '2.5rem',
    top: '24px',
    top: '1.5rem',
  }
}

class RuteItem extends Component {
  render() {
    var lastTrue = this.props.last || false;
    var divider;

    if (lastTrue) {
      divider=<br />;
    } else {
      divider=<Divider inset={true} />;
    }

    return (
      <div className="RuteItem clearfix">
        <Link to="/">      
          <ListItem
            leftAvatar={
              <Avatar
                color={white}
                backgroundColor={cyan500}
                size={40}
                style={styles.rute}
              >
                {this.props.rute}
              </Avatar>
            }
            primaryText={
              <div>
                <div className="halte">
                  <i className="mdi mdi-store" />
                  <span>{this.props.halteCount + " halte"}</span>
                </div>
                <div className="bus">
                  <i className="mdi mdi-bus" />
                  <span>{this.props.busCount + " bus"}</span>
                </div>
              </div>
            }
          >
          </ListItem>
        </Link>
        {divider}
      </div>
    )
  }
}

export default RuteItem
