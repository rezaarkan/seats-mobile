import { CALL_API } from 'middleware/api'

export const HALTE_ASAL_SELECTED = 'HALTE_ASAL_SELECTED'
export function selectHalteAsal({ halteId, halteName }) {
  return {
    halteAsal: {
    	halteId: halteId,
      halteName: halteName
    },
    type: HALTE_ASAL_SELECTED
  }
}

export const HALTE_TUJUAN_SELECTED = 'HALTE_TUJUAN_SELECTED'
export function selectHalteTujuan({ halteId, halteName }) {
  return {
    halteTujuan: {
    	halteId: halteId,
      halteName: halteName
    },
    type: HALTE_TUJUAN_SELECTED
  }
}