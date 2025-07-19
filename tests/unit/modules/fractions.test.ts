import { describe, it, expect } from 'vitest';
import createFractionsModule from '@/modules/fractions';
import { mockClient, mockFetch } from '../__mocks__/client';

describe('Fractions Module', () => {
  const fractionsModule = createFractionsModule(mockClient);

  it('should call list with correct params', async () => {
    const params = { serverId: 1 };
    await fractionsModule.list(params);

    expect(mockFetch).toHaveBeenCalledWith('/v2/fractions', {
      method: 'GET',
      query: params,
    });
  });

  it('should call getMembers with correct params', async () => {
    const params = { serverId: 1, fractionId: '1' };
    await fractionsModule.getMembers(params);

    expect(mockFetch).toHaveBeenCalledWith('/v2/fraction', {
      method: 'GET',
      query: params,
    });
  });
});
