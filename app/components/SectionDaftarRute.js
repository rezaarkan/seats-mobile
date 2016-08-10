import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

import RuteItem from 'components/RuteItem';

import ls from 'local-storage';
import _ from 'lodash';

class SectionDaftarRute extends Component {

  render() {
    return (
      <div className="SectionDaftarRute">
        {
          this.props.rute.map((r)=> {
            return (
              <RuteItem
                key={r.ruteId}
                rute={r.ruteId}
                link={"rute/"+r.ruteId}
                halteCount={r.totalHalte}
                busCount={r.totalBus}
                description={r.deskripsi}
              >
              </RuteItem>
            )
          })
        }
      </div>
    )
  }
}

export default SectionDaftarRute
