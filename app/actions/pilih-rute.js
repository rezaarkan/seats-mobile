import { CALL_API } from 'middleware/api'

export const LOADED_PILIHAN_RUTE = 'LOADED_PILIHAN_RUTE'
export function loadPilihanRute({ halteAsalId, halteTujuanId }) {
	let path = '/api/route_planner/'+halteAsalId+'/'+halteTujuanId;
	return {
		[CALL_API]: {
		  method: 'get',
		  path: path,
		  successType: LOADED_PILIHAN_RUTE
		}
	}
}