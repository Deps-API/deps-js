import { describe, it, expect } from 'vitest';
import createSobesModule from '@/modules/sobes';
import { mockClient, mockFetch } from '../__mocks__/client';

describe('Sobes Module', () => {
  it('should call get with correct params', async () => {
    const sobesModule = createSobesModule(mockClient);

    const params = { serverId: 1 };
    await sobesModule.get(params);

    expect(mockFetch).toHaveBeenCalledWith('/v2/sobes', {
      method: 'GET',
      query: params,
    });
  });
});
