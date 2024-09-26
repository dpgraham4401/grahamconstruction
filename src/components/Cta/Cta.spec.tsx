import { render, screen } from '@testing-library/react';
import { Cta } from 'src/components/Cta/Cta.tsx';
import { describe, expect, it } from 'vitest';

describe('Cta component', () => {
  it('renders a contact link by default', () => {
    render(<Cta title="foo" description="bar" />);
    const link = screen.getByRole('link', { name: /Contact Us/i });
    expect(link).toHaveAttribute('href', '/contact');
  });

  it('renders title passes', () => {
    const title = 'foo';
    render(<Cta title={title} description="bar" />);
    expect(screen.getByText(title)).toBeInTheDocument();
  });

  it('renders description ', () => {
    const description = 'foo';
    render(<Cta title="baalskd" description={description} />);
    expect(screen.getByText(description)).toBeInTheDocument();
  });
});
