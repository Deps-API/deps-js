import type { paths } from '@/core/types';
import type { $Fetch } from 'ofetch';

type MapEndpoints = paths['/v2/map']['get'];

export default (client: $Fetch) => ({
  get: (params: MapEndpoints['parameters']['query']) => {
    return client<MapEndpoints['responses']['200']['content']['application/json']>(
      '/v2/map',
      {
        method: 'GET',
        query: params,
      }
    );
  },
}); 