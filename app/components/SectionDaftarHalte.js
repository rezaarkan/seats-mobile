import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

import HalteItem from 'components/HalteItem';

class SectionDaftarHalte extends Component {
  render() {
    return (
      <div className="SectionDaftarHalte">
        <HalteItem
          halteName={"Mandala Krida"}
        />
        <HalteItem
          halteName={"Kopma UGM"}
        />
        <HalteItem
          halteName={"Candi Prambanan"}
        />
        <HalteItem
          halteName={"Universitas Atma Jaya Yogyakarta"}
        />
        <HalteItem
          halteName={"UNY Colombo"}
        />
        <HalteItem
          halteName={"Mangkubumi"}
        />
        <HalteItem
          halteName={"APMD"}
        />
        <HalteItem
          halteName={"Kridosono"}
          last={true}
        />
      </div>
    )
  }
}

export default SectionDaftarHalte
