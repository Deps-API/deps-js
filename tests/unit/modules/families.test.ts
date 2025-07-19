import { describe, it, expect } from 'vitest';
import createFamiliesModule from '@/modules/families';
import { mockClient, mockFetch } from '../__mocks__/client';

describe('Families Module', () => {
  const familiesModule = createFamiliesModule(mockClient);

  it('should call list with correct params', async () => {
    const params = { serverId: 1 };
    await familiesModule.list(params);

    expect(mockFetch).toHaveBeenCalledWith('/v2/families', {
      method: 'GET',
      query: params,
    });
  });

  it('should call get with correct params', async () => {
    const params = { serverId: 1, famId: 123 };
    await familiesModule.get(params);

    expect(mockFetch).toHaveBeenCalledWith('/v2/family', {
      method: 'GET',
      query: params,
    });
  });
});
