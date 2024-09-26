import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { Hero } from './Hero';

describe('Hero component', () => {
  vi.mock('@/components/home/HomeCarousel', async (importOriginal) => ({
    ...(await importOriginal<typeof import('@/components/home/HomeCarousel')>()),
    HomeCarousel: () => <div>HomeCarousel</div>,
  }));

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
  });
});
