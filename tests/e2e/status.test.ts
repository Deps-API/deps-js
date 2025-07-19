import { describe, it, expect } from 'vitest';
import { DepsClient } from '@/client';

const apiKey = process.env.API_KEY;
const shouldSkip = !apiKey;

describe.skipIf(shouldSkip)('E2E - Status', () => {
  it('should be able to connect to the API and get a status', async () => {
    const client = new DepsClient({ apiKey: apiKey! });
    const status = await client.status.get();
    expect(status).toBeDefined();
    expect(typeof status.timestamp).toBe('number');
  });
}); 