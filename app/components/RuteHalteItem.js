import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

import RuteIndicator from 'components/RuteIndicator';

import { ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';

const styles={

}

class RuteHalteItem extends Component {
  render() {
    var link = this.props.link || "/rute";
    var lastTrue = this.props.last || false;
    var divider;

    if (lastTrue) {
      divider=<Divider style={styles.hidden}/>;
    } else {
      divider=<Divider />;
    }

    return (
      <div className="RuteHalteItem clearfix">
        <Link to={link}>   
          <ListItem
            primaryText={
              <div>
                <div className="halte">
                  <span className="name">{this.props.name}</span>
                  <RuteIndicator
                    type={"ruteHalte"}
                    ruteCount={this.props.ruteCount}
                    ruteList={this.props.ruteList}
                  />
                </div>
                <div className="address">
                  <span>{this.props.address}</span>
                </div>
                <div className="landmark">
                  <span>{this.props.landmark}</span>
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

export default RuteHalteItem
