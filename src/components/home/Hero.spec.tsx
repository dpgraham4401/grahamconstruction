import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Hero } from './Hero';

describe('Hero component', () => {
  it('renders the main heading', () => {
    render(<Hero />);
    const heading = screen.getByRole('heading', {
      name: /bring your dream home to life/i,
    });
    expect(heading).toBeInTheDocument();
  });

  it('renders the Get started link', () => {
    render(<Hero />);
    const link = screen.getByRole('link', { name: /Get started/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/services');
  });

  it('renders the hero image with correct attributes', () => {
    render(<Hero />);
    const image = screen.getByAltText('Hero picture');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', '/assets/hero.webp');
  });
});
