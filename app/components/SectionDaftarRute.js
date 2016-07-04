import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

import RuteItem from 'components/RuteItem';

class SectionDaftarRute extends Component {
  render() {
    return (
      <div className="SectionDaftarRute">
      	<RuteItem
      		rute={"1A"}
      		halteCount={"14"}
      		busCount={"6"}
          description={"Terminal Prambanan - Plaza Ambarrukmo - XXI - Tugu - Stasiun Tugu - Bandara Adisucipto - JEC - Pakualaman - Taman Pintar - Malioboro"}
      	/>
        <br />
        <RuteItem
          rute={"1B"}
          halteCount={"14"}
          busCount={"6"}
          description={"Bandara Adisucipto - JEC - Gembira Loka - Plaza Ambarrukmo - UGM - Tugu - Taman Pintar"}
        />
        <br />
        <RuteItem
          rute={"2A"}
          halteCount={"14"}
          busCount={"6"}
          link={"/rute"}
          description={"Terminal Jombor - Monjali - Tugu - Malioboro - Taman Pintar - Terminal Condongcatur - UGM - Kotagede"}
        />
        <br />
        <RuteItem
          rute={"2B"}
          halteCount={"14"}
          busCount={"6"}
          link={"/rute"}
          description={"Terminal Jombor - Monjali - Terminal Condongcatur - UGM - Monjali - Taman Pintar - XT Square"}
        />
        <br />
        <RuteItem
          rute={"3A"}
          halteCount={"14"}
          busCount={"6"}
          description={"Terminal Giwangan - Kotagede - JEC - Bandara Adisucipto - Malioboro - Stasiun Tugu - House of Raminten - UGM - Terminal Condongcatur"}
        />
        <br />
        <RuteItem
          rute={"3B"}
          halteCount={"14"}
          busCount={"6"}
          description={"Terminal Giwangan - Tugu - Terminal Condongcatur - Kotagede - Bandara Adisucipto"}
        />
        <br />
        <RuteItem
          rute={"4A"}
          halteCount={"14"}
          busCount={"6"}
          description={"Terminal Giwangan - Museum Biologi - Kridosono - UAD - Pakualaman"}
        />
        <br />
        <RuteItem
          rute={"4B"}
          halteCount={"14"}
          busCount={"6"}
          description={"Terminal Giwangan - XT Square - UIN - XXI - RS Bethesda - Pasar Seni Kerajinan - AA YKPN - Kridosono"}
        />
        <br />
      </div>
    )
  }
}

export default SectionDaftarRute
