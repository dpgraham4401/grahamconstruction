import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Testimonials } from './Testimonials';

describe('Testimonials Component', () => {
  it('renders the section title', () => {
    render(<Testimonials />);
    expect(screen.getByText('Trusted by the largest companies in the world')).toBeInTheDocument();
  });
});
