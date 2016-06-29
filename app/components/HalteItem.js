import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

import { ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';

class HalteItem extends Component {
  render() {
    return (
      <div className="HalteItem clearfix">
        <Link to="/">      
          <ListItem
            primaryText={this.props.halteName}
          >
          </ListItem>
        </Link>
        <Divider />
      </div>
    )
  }
}

export default HalteItem
