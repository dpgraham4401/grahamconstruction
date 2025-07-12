import { render, screen } from '@testing-library/react';
import { beforeAll, describe, expect, it } from 'vitest';
import { Values } from './Values';

describe('Values', () => {
  beforeAll(() => {
    // Mock IntersectionObserver for testing environment
    global.IntersectionObserver = class {
      constructor() {}

      observe() {}

      unobserve() {}

      disconnect() {}
    } as any;
  });
  it('renders without crashing', () => {
    render(<Values />);
    expect(screen.getByText(/Values/i)).toBeInTheDocument();
  });
});
