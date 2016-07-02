import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import Navbar from 'components/Navbar';
import Peta from 'components/Peta';

class PilihLokasiAsal extends Component {

  render() {
    return (
      <Peta type={"Asal"} />
    );
  }
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(PilihLokasiAsal);
