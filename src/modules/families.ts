import type { paths } from '@/core/types';
import type { $Fetch } from 'ofetch';

type FamiliesListEndpoints = paths['/v2/families']['get'];
type FamilyEndpoints = paths['/v2/family']['get'];

export default (client: $Fetch) => ({
  list: (params: FamiliesListEndpoints['parameters']['query']) => {
    return client<
      FamiliesListEndpoints['responses']['200']['content']['application/json']
    >('/v2/families', {
      method: 'GET',
      query: params,
    });
  },
  get: (params: FamilyEndpoints['parameters']['query']) => {
    return client<
      FamilyEndpoints['responses']['200']['content']['application/json']
    >('/v2/family', {
      method: 'GET',
      query: params,
    });
  },
});
