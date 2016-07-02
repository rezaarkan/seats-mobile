import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import Navbar from 'components/Navbar';
import Peta from 'components/Peta';

class PilihLokasiTujuan extends Component {

  render() {
    return (
      <Peta type={"Tujuan"} />
    );
  }
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(PilihLokasiTujuan);
