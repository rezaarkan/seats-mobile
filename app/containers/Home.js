import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import Navbar from 'components/Navbar';

import { Tabs, Tab } from 'react-materialize';

class Home extends Component {
  render() {
    return (
      <div className="Home">
      	<Navbar>

      	</Navbar>
      	<Tabs className='tab-demo z-depth-1'>
    	    <Tab title="Test 1">Test 1</Tab>
    	    <Tab title="Test 2" active>Test 2</Tab>
    	    <Tab title="Test 3">Test 3</Tab>
    	    <Tab title="Test 4">Test 4</Tab>
      	</Tabs>
      </div>
    );
  }
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(Home);
