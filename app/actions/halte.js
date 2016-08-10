import { CALL_API } from 'middleware/api'

export const LOADED_HALTE = 'LOADED_HALTE'
export function loadDaftarHalte() {
  return {
    [CALL_API]: {
      method: 'get',
      path: '/api/bus_stop',
      successType: LOADED_HALTE
    }
  }
}

export const LOADED_HALTE_DETAIL = 'LOADED_HALTE_DETAIL'
export function loadHalteDetail ({ halteId }) {
  return {
    [CALL_API]: {
      method: 'get',
      path: `/api/bus_stop/${halteId}`,
      successType: LOADED_HALTE_DETAIL
    }
  }
}