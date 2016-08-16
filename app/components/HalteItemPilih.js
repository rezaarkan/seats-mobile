import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

import { ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';

const styles={
  hidden: {
    display: "none",
  }
}

class HalteItem extends Component {

  render() {
    var link = this.props.link || "/";
    var lastTrue = this.props.last || false;
    var divider;

    if (lastTrue) {
      divider=<Divider style={styles.hidden}/>;
    } else {
      divider=<Divider />;
    }

    return (
      <div className="HalteItem clearfix">   
          <ListItem
            primaryText={this.props.halteName}
            secondaryText={this.props.halteAddress}
            onTouchTap={this.props.event}
          >
          </ListItem>
        {divider}
      </div>
    )
  }
}

export default HalteItem
