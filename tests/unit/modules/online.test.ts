import { describe, it, expect } from 'vitest';
import createOnlineModule from '@/modules/online';
import { mockClient, mockFetch } from '../__mocks__/client';

describe('Online Module', () => {
  it('should call get with correct params', async () => {
    const onlineModule = createOnlineModule(mockClient);

    const params = { serverId: 1 };
    await onlineModule.get(params);

    expect(mockFetch).toHaveBeenCalledWith('/v2/online', {
      method: 'GET',
      query: params,
    });
  });
}); 