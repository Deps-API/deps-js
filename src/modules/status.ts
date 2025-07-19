import type { paths } from '@/core/types';
import type { $Fetch } from 'ofetch';

type StatusEndpoints = paths['/v2/status']['get'];

export default (client: $Fetch) => ({
  get: () => {
    return client<StatusEndpoints['responses']['200']['content']['application/json']>(
      '/v2/status',
      {
        method: 'GET',
      }
    );
  },
}); 