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

// Use native localStorage but with spies
const getItemSpy = vi.spyOn(Storage.prototype, 'getItem');
const setItemSpy = vi.spyOn(Storage.prototype, 'setItem');
const removeItemSpy = vi.spyOn(Storage.prototype, 'removeItem');
const clearSpy = vi.spyOn(Storage.prototype, 'clear');

beforeEach(() => {
  vi.clearAllMocks();
  window.localStorage.clear();
  document.documentElement.className = '';
  window.matchMedia = createMatchMedia(false);
});
