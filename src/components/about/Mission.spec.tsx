import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Mission } from './Mission';

describe('Mission', () => {
  it('renders mission keywords', () => {
    render(<Mission />);
    expect(screen.getByText(/stress-free/i)).toBeInTheDocument();
    expect(screen.getByText(/Remodeling/i)).toBeInTheDocument();
  });

  it('renders stats', () => {
    render(<Mission />);
    expect(screen.getByText('Years')).toBeInTheDocument();
    expect(screen.getByText('Projects')).toBeInTheDocument();
  });

  it('calculates years correctly', () => {
    const years =
      new Date(new Date().valueOf() - new Date('1985/01/01').valueOf()).getFullYear() - 1970;
    render(<Mission />);
    expect(screen.getByText(years.toString())).toBeInTheDocument();
  });
});
