import { describe, it, expect } from 'vitest';
import createMapModule from '@/modules/map';
import { mockClient, mockFetch } from '../__mocks__/client';

describe('Map Module', () => {
  it('should call get with correct params', async () => {
    const mapModule = createMapModule(mockClient);

    const params = { serverId: 1 };
    await mapModule.get(params);

    expect(mockFetch).toHaveBeenCalledWith('/v2/map', {
      method: 'GET',
      query: params,
    });
  });
});
