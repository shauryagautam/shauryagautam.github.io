import { renderHook, act } from '@testing-library/react';
import { useTheme } from '../../hooks/useTheme';

describe('useTheme', () => {
  beforeEach(() => {
    // Clear localStorage before each test
    localStorage.clear();
    // Reset document classes
    document.documentElement.className = '';
  });

  it('should initialize with light theme when no saved theme and system prefers light', () => {
    // Mock system preference for light theme
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: vi.fn().mockImplementation(query => ({
        matches: query !== '(prefers-color-scheme: dark)',
        media: query,
        onchange: null,
        addListener: vi.fn(),
        removeListener: vi.fn(),
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
        dispatchEvent: vi.fn(),
      })),
    });

    const { result } = renderHook(() => useTheme());

    expect(result.current.theme).toBe('light');
    expect(result.current.isLight).toBe(true);
    expect(result.current.isDark).toBe(false);
    expect(document.documentElement.classList.contains('dark')).toBe(false);
  });

  it('should initialize with dark theme when system prefers dark', () => {
    // Mock system preference for dark theme
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: vi.fn().mockImplementation(query => ({
        matches: query === '(prefers-color-scheme: dark)',
        media: query,
        onchange: null,
        addListener: vi.fn(),
        removeListener: vi.fn(),
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
        dispatchEvent: vi.fn(),
      })),
    });

    const { result } = renderHook(() => useTheme());

    expect(result.current.theme).toBe('dark');
    expect(result.current.isDark).toBe(true);
    expect(result.current.isLight).toBe(false);
    expect(document.documentElement.classList.contains('dark')).toBe(true);
  });

  it('should load saved theme from localStorage', async () => {
    vi.spyOn(Storage.prototype, 'getItem').mockReturnValue('dark');

    const { result } = renderHook(() => useTheme());

    expect(result.current.theme).toBe('dark');
    expect(document.documentElement.classList.contains('dark')).toBe(true);
    
    vi.restoreAllMocks();
  });

  it('should toggle theme correctly', async () => {
    const { result } = renderHook(() => useTheme());
    const setItemSpy = vi.spyOn(Storage.prototype, 'setItem');

    expect(result.current.theme).toBe('light');

    act(() => {
      result.current.toggleTheme();
    });

    expect(result.current.theme).toBe('dark');
    expect(result.current.isDark).toBe(true);
    expect(document.documentElement.classList.contains('dark')).toBe(true);
    expect(setItemSpy).toHaveBeenCalledWith('theme', 'dark');

    act(() => {
      result.current.toggleTheme();
    });

    expect(result.current.theme).toBe('light');
    expect(result.current.isLight).toBe(true);
    expect(document.documentElement.classList.contains('dark')).toBe(false);
    expect(setItemSpy).toHaveBeenCalledWith('theme', 'light');
    
    vi.restoreAllMocks();
  });

  it('should set theme explicitly', () => {
    const { result } = renderHook(() => useTheme());
    const setItemSpy = vi.spyOn(Storage.prototype, 'setItem');

    act(() => {
      result.current.setTheme('dark');
    });

    expect(result.current.theme).toBe('dark');
    expect(document.documentElement.classList.contains('dark')).toBe(true);
    expect(setItemSpy).toHaveBeenCalledWith('theme', 'dark');
    
    vi.restoreAllMocks();
  });
});
