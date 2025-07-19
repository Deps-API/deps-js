import { describe, it, expect } from 'vitest';
import createLeadershipModule from '@/modules/leadership';
import { mockClient, mockFetch } from '../__mocks__/client';

describe('Leadership Module', () => {
  const leadershipModule = createLeadershipModule(mockClient);

  it('should call getLeaders with correct params', async () => {
    const params = { serverId: 1 };
    await leadershipModule.getLeaders(params);

    expect(mockFetch).toHaveBeenCalledWith('/v2/leaders', {
      method: 'GET',
      query: params,
    });
  });

  it('should call getSubleaders with correct params', async () => {
    const params = { serverId: 1 };
    await leadershipModule.getSubleaders(params);

    expect(mockFetch).toHaveBeenCalledWith('/v2/subleaders', {
      method: 'GET',
      query: params,
    });
  });
}); 