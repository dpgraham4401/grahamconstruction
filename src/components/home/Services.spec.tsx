import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Services } from './Services';

describe('Services Component', () => {
  it('renders all service names', () => {
    render(<Services />);
    expect(screen.getByRole('heading', { name: /Design/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Build/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Remodel/i })).toBeInTheDocument();
  });
});
