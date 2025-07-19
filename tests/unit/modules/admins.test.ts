import { describe, it, expect, vi } from 'vitest';
import createAdminsModule from '@/modules/admins';
import { mockClient, mockFetch } from '../__mocks__/client';

describe('Admins Module', () => {
  it('should call get with correct params', async () => {
    const adminsModule = createAdminsModule(mockClient);

    const params = { serverId: 1 };
    await adminsModule.get(params);

    expect(mockFetch).toHaveBeenCalledWith('/v2/admins', {
      method: 'GET',
      query: params,
    });
  });
}); 