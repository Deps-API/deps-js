import type { $Fetch } from 'ofetch';
import type { components } from '@/core/types';

type GhettoResponse = {
  data: {
    [key: string]: components['schemas']['GhettoZone'];
  };
  timestamp: number;
};

type GhettoGetEndpoint = {
  parameters: {
    query: { serverId: number };
  };
  responses: {
    '200': {
      content: {
        'application/json': GhettoResponse;
      };
    };
  };
};

export default (client: $Fetch) => ({
  get: (params: GhettoGetEndpoint['parameters']['query']) => {
    return client<
      GhettoGetEndpoint['responses']['200']['content']['application/json']
    >('/v2/ghetto', {
      method: 'GET',
      query: params,
    });
  },
});
