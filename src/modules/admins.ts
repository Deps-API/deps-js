import type { paths } from '@/core/types';
import type { $Fetch } from 'ofetch';

type AdminsEndpoints = paths['/v2/admins']['get'];

export default (client: $Fetch) => ({
  get: (params: AdminsEndpoints['parameters']['query']) => {
    return client<
      AdminsEndpoints['responses']['200']['content']['application/json']
    >('/v2/admins', {
      method: 'GET',
      query: params,
    });
  },
});
