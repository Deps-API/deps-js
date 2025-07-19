import type { paths } from '@/core/types';
import type { $Fetch } from 'ofetch';

type FractionsListEndpoints = paths['/v2/fractions']['get'];
type FractionMembersEndpoints = paths['/v2/fraction']['get'];

export default (client: $Fetch) => ({
  list: (params: FractionsListEndpoints['parameters']['query']) => {
    return client<
      FractionsListEndpoints['responses']['200']['content']['application/json']
    >('/v2/fractions', {
      method: 'GET',
      query: params,
    });
  },
  getMembers: (params: FractionMembersEndpoints['parameters']['query']) => {
    return client<
      FractionMembersEndpoints['responses']['200']['content']['application/json']
    >('/v2/fraction', {
      method: 'GET',
      query: params,
    });
  },
});
