import type { paths } from '@/core/types';
import type { $Fetch } from 'ofetch';

type OnlineEndpoints = paths['/v2/online']['get'];

export default (client: $Fetch) => ({
  get: (params: OnlineEndpoints['parameters']['query']) => {
    return client<OnlineEndpoints['responses']['200']['content']['application/json']>(
      '/v2/online',
      {
        method: 'GET',
        query: params,
      }
    );
  },
}); 