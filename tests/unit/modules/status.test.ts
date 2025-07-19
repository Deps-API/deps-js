import { describe, it, expect } from 'vitest';
import createStatusModule from '@/modules/status';
import { mockClient, mockFetch } from '../__mocks__/client';

describe('Status Module', () => {
  it('should call get with correct params', async () => {
    const statusModule = createStatusModule(mockClient);

    await statusModule.get();

    expect(mockFetch).toHaveBeenCalledWith('/v2/status', {
      method: 'GET',
    });
  });
}); 