import { describe, it, expect } from 'vitest';
import createPlayerModule from '@/modules/player';
import { mockClient, mockFetch } from '../__mocks__/client';

describe('Player Module', () => {
  it('should call find with correct params', async () => {
    const playerModule = createPlayerModule(mockClient);

    const params = { nickname: 'test', serverId: '1' };
    await playerModule.find(params);

    expect(mockFetch).toHaveBeenCalledWith('/v2/player/find', {
      method: 'GET',
      query: params,
    });
  });
});
