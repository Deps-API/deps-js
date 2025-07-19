import { vi } from 'vitest';

export const mockFetch = vi.fn();

export const mockClient = Object.assign(mockFetch, {
  raw: vi.fn(),
  native: vi.fn(),
  create: vi.fn(),
}); 