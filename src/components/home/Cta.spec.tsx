import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Cta } from './Cta';

describe('Cta component', () => {
  it('renders the contact link with correct href', () => {
    render(<Cta />);
    const link = screen.getByRole('link', { name: /Contact us/ });
    expect(link).toHaveAttribute('href', '/contact');
  });
});
