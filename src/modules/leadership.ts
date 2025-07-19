import type { paths } from '@/core/types';
import type { $Fetch } from 'ofetch';

type LeadersEndpoints = paths['/v2/leaders']['get'];
type SubleadersEndpoints = paths['/v2/subleaders']['get'];

export default (client: $Fetch) => ({
  getLeaders: (params: LeadersEndpoints['parameters']['query']) => {
    return client<
      LeadersEndpoints['responses']['200']['content']['application/json']
    >('/v2/leaders', {
      method: 'GET',
      query: params,
    });
  },
  getSubleaders: (params: SubleadersEndpoints['parameters']['query']) => {
    return client<
      SubleadersEndpoints['responses']['200']['content']['application/json']
    >('/v2/subleaders', {
      method: 'GET',
      query: params,
    });
  },
});
