import { vi } from 'vitest';

const ofetch = vi.fn();

Object.assign(ofetch, {
  create: vi.fn(() => ofetch),
});

export { ofetch };
