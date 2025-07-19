import { describe, it, expect } from 'vitest';
import createGhettoModule from '@/modules/ghetto';
import { mockClient, mockFetch } from '../__mocks__/client';

describe('Ghetto Module', () => {
  it('should call get with correct params', async () => {
    const ghettoModule = createGhettoModule(mockClient);

    const params = { serverId: 1 };
    await ghettoModule.get(params);

    expect(mockFetch).toHaveBeenCalledWith('/v2/ghetto', {
      method: 'GET',
      query: params,
    });
  });
});
