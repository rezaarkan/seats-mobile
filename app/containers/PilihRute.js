import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import Navbar from 'components/Navbar';
import PilihRuteItem from 'components/PilihRuteItem';

class PilihRute extends Component {

  render() {
    return (
      <div className="PilihRute">
        <Navbar>

        </Navbar>
        <div className="container-mobile">
          <PilihRuteItem
            halteKeberangkatan={"Mandala Krida"}
            transitCount={"1"}
          />
          <PilihRuteItem
            halteKeberangkatan={"Mandala Krida"}
            transitCount={"1"}
          />
          <PilihRuteItem
            halteKeberangkatan={"Mandala Krida"}
          />
          <PilihRuteItem
            halteKeberangkatan={"Mandala Krida"}
          />
          <PilihRuteItem
            halteKeberangkatan={"Mandala Krida"}
            last={true}
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
