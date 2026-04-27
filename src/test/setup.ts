import '@testing-library/jest-dom';
import { vi, beforeEach } from 'vitest';

// Mock matchMedia
const createMatchMedia = (matches = false) => vi.fn().mockImplementation(query => ({
  matches,
  media: query,
  onchange: null,
  addListener: vi.fn(),
  removeListener: vi.fn(),
  addEventListener: vi.fn(),
  removeEventListener: vi.fn(),
  dispatchEvent: vi.fn(),
}));

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: createMatchMedia(false),
});

// Use native localStorage

beforeEach(() => {
  vi.clearAllMocks();
  window.localStorage.clear();
  document.documentElement.className = '';
  window.matchMedia = createMatchMedia(false);
});
