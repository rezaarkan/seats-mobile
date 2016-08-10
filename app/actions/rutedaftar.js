import { CALL_API, CHAIN_API } from 'middleware/api'

export const LOADED_ROUTE = 'LOADED_ROUTE'
export function loadDaftarRute() {
  return {
    [CALL_API]: {
      method: 'get',
      path: '/api/route',
      successType: LOADED_ROUTE
    }
  }
}

export const LOADED_ROUTE_DETAIL = 'LOADED_ROUTE_DETAIL'
export function loadRuteDetail ({ ruteId }) {
  return {
    [CALL_API]: {
      method: 'get',
      path: `/api/route/${ruteId}`,
      successType: LOADED_ROUTE_DETAIL
    }
  }
}

export const LOADED_ROUTE_BUS = 'LOADED_ROUTE_BUS'
export function loadRuteBus ({ ruteId }) {
  return {
    [CALL_API]: {
      method: 'get',
      path: `/api/route/${ruteId}/bus`,
      successType: LOADED_ROUTE_BUS
    }
  }
}

export const LOADED_ROUTE_HALTE = 'LOADED_ROUTE_HALTE'
export function loadRuteHalte ({ ruteId }) {
  return {
    [CALL_API]: {
      method: 'get',
      path: `/api/route/${ruteId}/bus_stop`,
      successType: LOADED_ROUTE_HALTE
    }
  }
}
