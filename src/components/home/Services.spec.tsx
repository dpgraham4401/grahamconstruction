import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Services } from './Services';

describe('Services Component', () => {
  it('renders the Services component with correct heading', () => {
    render(<Services />);
    expect(screen.getByText('Services')).toBeInTheDocument();
  });

  it('renders all service names', () => {
    render(<Services />);
    expect(screen.getByText('Design')).toBeInTheDocument();
    expect(screen.getByText('Build')).toBeInTheDocument();
    expect(screen.getByText('Refresh')).toBeInTheDocument();
  });
});
