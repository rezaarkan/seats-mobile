import { CALL_API } from 'middleware/api'

export const LOADED_PILIHAN_RUTE = 'LOADED_PILIHAN_RUTE'
export function loadPilihanRute({ halteAsalId, halteTujuanId }) {
  return {
    [CALL_API]: {
      method: 'get',
      path: '/api/route_planner/${halteAsalId}/${halteTujuanId}',
      successType: LOADED_PILIHAN_RUTE
    }
  }
}