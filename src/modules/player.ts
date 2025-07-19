import type { paths } from '@/core/types';
import type { $Fetch } from 'ofetch';

type PlayerEndpoints = paths['/v2/player/find']['get'];

export default (client: $Fetch) => ({
  find: (params: PlayerEndpoints['parameters']['query']) => {
    return client<PlayerEndpoints['responses']['200']['content']['application/json']>(
      '/v2/player/find',
      {
        method: 'GET',
        query: params,
      }
    );
  },
}); 