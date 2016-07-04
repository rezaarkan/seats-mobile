import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

import HalteItem from 'components/HalteItem';

import { ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';

const styles={
  ruteList: {

  },
  nestedListStyle:{
    paddingBottom: "0",
    paddingTop: "0",
  }
}

class SectionDaftarHalte extends Component {
  render() {
    return (
      <div className="SectionDaftarHalte">
        <ListItem
          className="halte-rute"
          primaryText="Halte Rute 1A"
          initiallyOpen={false}
          primaryTogglesNestedList={true}
          nestedListStyle={styles.nestedListStyle}
          nestedItems={[
            <HalteItem
              halteName={"Prambanan"}
            />,
            <HalteItem
              halteName={"Jl. Solo (KR 1)"}
            />,
            <HalteItem
              halteName={"Bandara Adisucipto"}
            />,
            <HalteItem
              halteName={"Jl. Solo (Jayakarta)"}
            />,
            <HalteItem
              halteName={"Jl. Solo (Janti Flyover)"}
            />,
            <HalteItem
              halteName={"Jl. Solo (Jogja Bisnis)"}
            />,
            <HalteItem
              halteName={"Jl. Solo (Gedung Wanita)"}
            />,
            <HalteItem
              halteName={"Urip Sumoharjo"}
            />,
            <HalteItem
              halteName={"Sudirman 1"}
            />,
            <HalteItem
              halteName={"Sudirman 2"}
            />,
            <HalteItem
              halteName={"Mangkubumi 1"}
            />,
            <HalteItem
              halteName={"Mangkubumi 2"}
            />,
            <HalteItem
              halteName={"Malioboro 1"}
            />,
            <HalteItem
              halteName={"Malioboro 2"}
            />,
            <HalteItem
              halteName={"Ahmad Yani"}
            />,
            <HalteItem
              halteName={"Senopati 2"}
            />,
            <HalteItem
              halteName={"Puro Pakualaman"}
            />,
            <HalteItem
              halteName={"Kusumanegara 1"}
            />,
            <HalteItem
              halteName={"Kusumanegara 3"}
            />,
            <HalteItem
              halteName={"Kusumanegara (Gedung Juang 45)"}
            />,
            <HalteItem
              halteName={"Gedong Kuning (JEC)"}
            />,
            <HalteItem
              halteName={"Jl. Solo (Janti)"}
            />,
            <HalteItem
              halteName={"Jl. Solo (Alfa)"}
            />,
            <HalteItem
              halteName={"Jl. Solo (Maguwo)"}
            />,
            <HalteItem
              halteName={"Jl. Solo (KR 2)"}
            />,
            <HalteItem
              halteName={"Jl. Solo (Kalasan)"}
            />,
          ]}
        />
        <Divider />
        <ListItem
          className="halte-rute"
          primaryText="Halte Rute 1B"
          initiallyOpen={false}
          primaryTogglesNestedList={true}
          nestedListStyle={styles.nestedListStyle}
          nestedItems={[
            <HalteItem
              halteName={"Bandara Adisucipto"}
            />,
            <HalteItem
              halteName={"Jl. Solo (Jayakarta)"}
            />,
            <HalteItem
              halteName={"Jl. Solo (Janti)"}
            />,
            <HalteItem
              halteName={"J-Walk"}
            />,
            <HalteItem
              halteName={"Portable Jl. Babarsari"}
            />,
            <HalteItem
              halteName={"Jl. Solo (Janti Flyover)"}
            />,
            <HalteItem
              halteName={"RS. AU Dr.S. Hardjolukito"}
            />,
            <HalteItem
              halteName={"Gedong Kuning (Wonocatur)"}
            />,
            <HalteItem
              halteName={"Kusumanegara (Gembiraloka)"}
            />,
            <HalteItem
              halteName={"Kusumanegara 4"}
            />,
            <HalteItem
              halteName={"Kusumanegara 2"}
            />,
            <HalteItem
              halteName={"Museum Biologi"}
            />,
            <HalteItem
              halteName={"Senopati 1"}
            />,
            <HalteItem
              halteName={"Tentara Pelajar 1"}
            />,
            <HalteItem
              halteName={"Sudirman 3"}
            />,
            <HalteItem
              halteName={"Cik Di Tiro 2"}
            />,
            <HalteItem
              halteName={"Jl. Colombo (Kosudgama)"}
            />,
            <HalteItem
              halteName={"Jl. Colombo (UNY)"}
            />,
            <HalteItem
              halteName={"Jl. Solo (Debrito)"}
            />,
            <HalteItem
              halteName={"Jl. Solo (Ambarukmo)"}
            />,
            <HalteItem
              halteName={"Jl. Solo (Janti Flyover)"}
            />,
            <HalteItem
              halteName={"Jl. Solo (Alfa)"}
            />,
            <HalteItem
              halteName={"Jl. Solo (Maguwo)"}
            />,
          ]}
        />
        <Divider />
        <ListItem
          className="halte-rute"
          primaryText="Halte Rute 2A"
          initiallyOpen={false}
          primaryTogglesNestedList={true}
          nestedListStyle={styles.nestedListStyle}
          nestedItems={[
            <HalteItem
              halteName={"Terminal Jombor"}
            />,
            <HalteItem
              halteName={"Ring Road Utara (Monjali 1)"}
            />,
            <HalteItem
              halteName={"AM Sangaji 2"}
            />,
            <HalteItem
              halteName={"Mangkubumi 1"}
            />,
            <HalteItem
              halteName={"Mangkubumi 2"}
            />,
            <HalteItem
              halteName={"Malioboro 1"}
            />,
            <HalteItem
              halteName={"Malioboro 2"}
            />,
            <HalteItem
              halteName={"Ahmad Yani"}
            />,
            <HalteItem
              halteName={"Senopati 2"}
            />,
            <HalteItem
              halteName={"Katamso 1"}
            />,
            <HalteItem
              halteName={"Sugiono 1"}
            />,
            <HalteItem
              halteName={"RSI Hidayatullah"}
            />,
            <HalteItem
              halteName={"Ngeksigondo (Diklat PU)"}
            />,
            <HalteItem
              halteName={"Gedong Kuning (Dep. Kehutanan)"}
            />,
            <HalteItem
              halteName={"Kusumanegara (Gembiraloka)"}
            />,
            <HalteItem
              halteName={"Kusumanegara 4"}
            />,
            <HalteItem
              halteName={"Kenari 1"}
              link={"/halte"}
            />,
            <HalteItem
              halteName={"Yos Sudarso"}
            />,
            <HalteItem
              halteName={"Sudirman 1"}
            />,
            <HalteItem
              halteName={"Cik Di Tiro 2"}
            />,
            <HalteItem
              halteName={"Jl. Colombo (Kosudgama)"}
            />,
            <HalteItem
              halteName={"Jl. Colombo (UNY)"}
            />,
            <HalteItem
              halteName={"UNY"}
            />,
            <HalteItem
              halteName={"Santren"}
            />,
            <HalteItem
              halteName={"Terminal Condongcatur"}
            />,
            <HalteItem
              halteName={"Ring Road Utara (Manggung)"}
            />,
            <HalteItem
              halteName={"Ring Road Utara (Monjali 2)"}
            />,
          ]}
        />
        <Divider />
        <ListItem
          className="halte-rute"
          primaryText="Halte Rute 2B"
          initiallyOpen={false}
          primaryTogglesNestedList={true}
          nestedListStyle={styles.nestedListStyle}
          nestedItems={[
            <HalteItem
              halteName={"Terminal Jombor"}
            />,
            <HalteItem
              halteName={"Ring Road Utara (Monjali 1)"}
            />,
            <HalteItem
              halteName={"AM Sangaji 2"}
            />,
            <HalteItem
              halteName={"Mangkubumi 1"}
            />,
            <HalteItem
              halteName={"Mangkubumi 2"}
            />,
            <HalteItem
              halteName={"Malioboro 1"}
            />,
            <HalteItem
              halteName={"Malioboro 2"}
            />,
            <HalteItem
              halteName={"Ahmad Yani"}
            />,
            <HalteItem
              halteName={"Senopati 2"}
            />,
            <HalteItem
              halteName={"Katamso 1"}
            />,
            <HalteItem
              halteName={"Sugiono 1"}
            />,
            <HalteItem
              halteName={"RSI Hidayatullah"}
            />,
            <HalteItem
              halteName={"Ngeksigondo (Diklat PU)"}
            />,
            <HalteItem
              halteName={"Gedong Kuning (Dep. Kehutanan)"}
            />,
            <HalteItem
              halteName={"Kusumanegara (Gembiraloka)"}
            />,
            <HalteItem
              halteName={"Kusumanegara 4"}
            />,
            <HalteItem
              halteName={"Kenari 1"}
              link={"/halte"}
            />,
            <HalteItem
              halteName={"Yos Sudarso"}
            />,
            <HalteItem
              halteName={"Sudirman 1"}
            />,
            <HalteItem
              halteName={"Cik Di Tiro 2"}
            />,
            <HalteItem
              halteName={"Jl. Colombo (Kosudgama)"}
            />,
            <HalteItem
              halteName={"Jl. Colombo (UNY)"}
            />,
            <HalteItem
              halteName={"UNY"}
            />,
            <HalteItem
              halteName={"Santren"}
            />,
            <HalteItem
              halteName={"Terminal Condongcatur"}
            />,
            <HalteItem
              halteName={"Ring Road Utara (Manggung)"}
            />,
            <HalteItem
              halteName={"Ring Road Utara (Monjali 2)"}
            />,
          ]}
        />
        <Divider />
        <ListItem
          className="halte-rute"
          primaryText="Halte Rute 3A"
          initiallyOpen={false}
          primaryTogglesNestedList={true}
          nestedListStyle={styles.nestedListStyle}
          nestedItems={[
            <HalteItem
              halteName={"Giwangan"}
            />,
            <HalteItem
              halteName={"Tegal Gendu 1"}
            />,
            <HalteItem
              halteName={"Gedong Kuning (Dep. Kehutanan)"}
            />,
            <HalteItem
              halteName={"Gedong Kuning (JEC)"}
            />,
            <HalteItem
              halteName={"Jl. Solo (Janti)"}
            />,
            <HalteItem
              halteName={"Jl. Solo (Alfa)"}
            />,
            <HalteItem
              halteName={"Jl. Solo (Maguwo)"}
            />,
            <HalteItem
              halteName={"Bandara Adisutjipto"}
            />,
            <HalteItem
              halteName={"Ring Road Utara (Disnaker)"}
            />,
            <HalteItem
              halteName={"Ring Road Utara (Instiper 2)"}
            />,
            <HalteItem
              halteName={"Ring Road Utara (UPN)"}
            />,
            <HalteItem
              halteName={"Terminal Condongcatur"}
            />,
            <HalteItem
              halteName={"Ring Road Utara (Manggung)"}
            />,
            <HalteItem
              halteName={"FK-UGM"}
            />,
            <HalteItem
              halteName={"Jl. Kaliurang (Kopma UGM)"}
            />,
            <HalteItem
              halteName={"Cik Di Tiro 1"}
            />,
            <HalteItem
              halteName={"Yos Sudarso"}
            />,
            <HalteItem
              halteName={"Kotabaru"}
            />,
            <HalteItem
              halteName={"Sudirman 2"}
            />,
            <HalteItem
              halteName={"Diponegoro"}
            />,
            <HalteItem
              halteName={"Tentara Pelajar 2"}
            />,
            <HalteItem
              halteName={"Jlagran"}
            />,
            <HalteItem
              halteName={"Malioboro 1"}
            />,
            <HalteItem
              halteName={"Malioboro 2"}
            />,
            <HalteItem
              halteName={"Ahmad Yani"}
            />,
            <HalteItem
              halteName={"KHA Dahlan 1"}
            />,
            <HalteItem
              halteName={"MT Haryono 1"}
            />,
            <HalteItem
              halteName={"Sugiono 1"}
            />,
            <HalteItem
              halteName={"Lowanu"}
            />,
            <HalteItem
              halteName={"Sorogenen"}
            />,
            <HalteItem
              halteName={"Tegal Turi 1"}
            />,
          ]}
        />
        <Divider />
        <ListItem
          className="halte-rute"
          primaryText="Halte Rute 3B"
          initiallyOpen={false}
          primaryTogglesNestedList={true}
          nestedListStyle={styles.nestedListStyle}
          nestedItems={[
            <HalteItem
              halteName={"Giwangan"}
            />,
            <HalteItem
              halteName={"Tegal Turi 2"}
            />,
            <HalteItem
              halteName={"Nitikan"}
            />,
            <HalteItem
              halteName={"Pa Muhammadiyah"}
            />,
            <HalteItem
              halteName={"Sugiono 2"}
            />,
            <HalteItem
              halteName={"MT Haryono 2"}
            />,
            <HalteItem
              halteName={"Tejokusuman"}
            />,
            <HalteItem
              halteName={"Ngabean"}
            />,
            <HalteItem
              halteName={"KHA Dahlan 2"}
            />,
            <HalteItem
              halteName={"Tentara Pelajar 1"}
            />,
            <HalteItem
              halteName={"Sudirman 3"}
            />,
            <HalteItem
              halteName={"Cik Di Tiro 2"}
            />,
            <HalteItem
              halteName={"Jl. Kaliurang (Pertanian UGM)"}
            />,
            <HalteItem
              halteName={"RSUP Dr. Sardjito"}
            />,
            <HalteItem
              halteName={"Kentungan"}
            />,
            <HalteItem
              halteName={"Terminal Condongcatur"}
            />,
            <HalteItem
              halteName={"Ring Road Utara (JIH)"}
            />,
            <HalteItem
              halteName={"Ring Road Utara (Stikes Guna Bangsa)"}
            />,
            <HalteItem
              halteName={"Ring Road Utara (Instiper 1)"}
            />,
            <HalteItem
              halteName={"Ring Road Utara (Binamarga)"}
            />,
            <HalteItem
              halteName={"Jl. Solo (Maguwo)"}
            />,
            <HalteItem
              halteName={"Bandara Adisutjipto"}
            />,
            <HalteItem
              halteName={"Jl. Solo (Jayakarta)"}
            />,
            <HalteItem
              halteName={"Jl. Solo (Janti Flyover)"}
            />,
            <HalteItem
              halteName={"RS. AU Dr.S. Hardjolukito"}
            />,
            <HalteItem
              halteName={"Gedong Kuning (Wonocatur)"}
            />,
            <HalteItem
              halteName={"Gedong Kuning (Banguntapan)"}
            />,
            <HalteItem
              halteName={"Tegal Gendu 2"}
            />,
          ]}
        />
        <Divider />
        <ListItem
          className="halte-rute"
          primaryText="Halte Rute 4A"
          initiallyOpen={false}
          primaryTogglesNestedList={true}
          nestedListStyle={styles.nestedListStyle}
          nestedItems={[
            <HalteItem
              halteName={"Giwangan"}
            />,
            <HalteItem
              halteName={"Tegal Turi 2"}
            />,
            <HalteItem
              halteName={"Nitikan"}
            />,
            <HalteItem
              halteName={"Pa Muhammadiyah"}
            />,
            <HalteItem
              halteName={"Sugiono 2"}
            />,
            <HalteItem
              halteName={"MT Haryono 2"}
            />,
            <HalteItem
              halteName={"Tejokusuman"}
            />,
            <HalteItem
              halteName={"Ngabean"}
            />,
            <HalteItem
              halteName={"KHA Dahlan 2"}
            />,
            <HalteItem
              halteName={"Tentara Pelajar 1"}
            />,
            <HalteItem
              halteName={"Sudirman 3"}
            />,
            <HalteItem
              halteName={"Cik Di Tiro 2"}
            />,
            <HalteItem
              halteName={"Jl. Kaliurang (Pertanian UGM)"}
            />,
            <HalteItem
              halteName={"RSUP Dr. Sardjito"}
            />,
            <HalteItem
              halteName={"Kentungan"}
            />,
            <HalteItem
              halteName={"Terminal Condongcatur"}
            />,
            <HalteItem
              halteName={"Ring Road Utara (JIH)"}
            />,
            <HalteItem
              halteName={"Ring Road Utara (Stikes Guna Bangsa)"}
            />,
            <HalteItem
              halteName={"Ring Road Utara (Instiper 1)"}
            />,
            <HalteItem
              halteName={"Ring Road Utara (Binamarga)"}
            />,
            <HalteItem
              halteName={"Jl. Solo (Maguwo)"}
            />,
            <HalteItem
              halteName={"Bandara Adisutjipto"}
            />,
            <HalteItem
              halteName={"Jl. Solo (Jayakarta)"}
            />,
            <HalteItem
              halteName={"Jl. Solo (Janti Flyover)"}
            />,
            <HalteItem
              halteName={"RS. AU Dr.S. Hardjolukito"}
            />,
            <HalteItem
              halteName={"Gedong Kuning (Wonocatur)"}
            />,
            <HalteItem
              halteName={"Gedong Kuning (Banguntapan)"}
            />,
            <HalteItem
              halteName={"Tegal Gendu 2"}
            />,
          ]}
        />
        <Divider />
        <ListItem
          className="halte-rute"
          primaryText="Halte Rute 4B"
          initiallyOpen={false}
          primaryTogglesNestedList={true}
          nestedListStyle={styles.nestedListStyle}
          nestedItems={[
            <HalteItem
              halteName={"Giwangan"}
            />,
            <HalteItem
              halteName={"Tegal Turi 2"}
            />,
            <HalteItem
              halteName={"Nitikan"}
            />,
            <HalteItem
              halteName={"Pa Muhammadiyah"}
            />,
            <HalteItem
              halteName={"Sugiono 2"}
            />,
            <HalteItem
              halteName={"MT Haryono 2"}
            />,
            <HalteItem
              halteName={"Tejokusuman"}
            />,
            <HalteItem
              halteName={"Ngabean"}
            />,
            <HalteItem
              halteName={"KHA Dahlan 2"}
            />,
            <HalteItem
              halteName={"Tentara Pelajar 1"}
            />,
            <HalteItem
              halteName={"Sudirman 3"}
            />,
            <HalteItem
              halteName={"Cik Di Tiro 2"}
            />,
            <HalteItem
              halteName={"Jl. Kaliurang (Pertanian UGM)"}
            />,
            <HalteItem
              halteName={"RSUP Dr. Sardjito"}
            />,
            <HalteItem
              halteName={"Kentungan"}
            />,
            <HalteItem
              halteName={"Terminal Condongcatur"}
            />,
            <HalteItem
              halteName={"Ring Road Utara (JIH)"}
            />,
            <HalteItem
              halteName={"Ring Road Utara (Stikes Guna Bangsa)"}
            />,
            <HalteItem
              halteName={"Ring Road Utara (Instiper 1)"}
            />,
            <HalteItem
              halteName={"Ring Road Utara (Binamarga)"}
            />,
            <HalteItem
              halteName={"Jl. Solo (Maguwo)"}
            />,
            <HalteItem
              halteName={"Bandara Adisutjipto"}
            />,
            <HalteItem
              halteName={"Jl. Solo (Jayakarta)"}
            />,
            <HalteItem
              halteName={"Jl. Solo (Janti Flyover)"}
            />,
            <HalteItem
              halteName={"RS. AU Dr.S. Hardjolukito"}
            />,
            <HalteItem
              halteName={"Gedong Kuning (Wonocatur)"}
            />,
            <HalteItem
              halteName={"Gedong Kuning (Banguntapan)"}
            />,
            <HalteItem
              halteName={"Tegal Gendu 2"}
            />,
          ]}
        />
      </div>
    )
  }
}

export default SectionDaftarHalte
