import type { paths } from '@/core/types';
import type { $Fetch } from 'ofetch';

type SobesEndpoints = paths['/v2/sobes']['get'];

export default (client: $Fetch) => ({
  get: (params: SobesEndpoints['parameters']['query']) => {
    return client<
      SobesEndpoints['responses']['200']['content']['application/json']
    >('/v2/sobes', {
      method: 'GET',
      query: params,
    });
  },
});
