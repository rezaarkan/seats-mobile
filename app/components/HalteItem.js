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
    var lastTrue = this.props.last || false;
    var divider;

    if (lastTrue) {
      divider=<Divider style={styles.hidden}/>;
    } else {
      divider=<Divider />;
    }

    return (
      <div className="HalteItem clearfix">
        <Link to="/">      
          <ListItem
            primaryText={this.props.halteName}
          >
          </ListItem>
        </Link>
        {divider}
      </div>
    )
  }
}

export default HalteItem
