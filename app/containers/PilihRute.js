import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import Navbar from 'components/Navbar';
import RencanaRuteItem from 'components/RencanaRuteItem';

class PilihRute extends Component {

  render() {
    return (
      <div className="PilihRute">
        <Navbar>

        </Navbar>
        <div className="container-mobile">
          <RencanaRuteItem
            halteKeberangkatan={"Mandala Krida"}
          />
          <RencanaRuteItem
            halteKeberangkatan={"Mandala Krida"}
          />
          <RencanaRuteItem
            halteKeberangkatan={"Mandala Krida"}
          />
          <RencanaRuteItem
            halteKeberangkatan={"Mandala Krida"}
          />
          <RencanaRuteItem
            halteKeberangkatan={"Mandala Krida"}
          />
        </div>

      </div>
    );
  }
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(PilihRute);
