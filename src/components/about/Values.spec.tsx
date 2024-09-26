import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Values } from './Values';

describe('Values', () => {
  it('renders without crashing', () => {
    render(<Values />);
    expect(screen.getByText(/Values/i)).toBeInTheDocument();
  });
});
