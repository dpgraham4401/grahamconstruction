import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Button } from './Button';

describe('Button', () => {
  it('renders with default variant and size', () => {
    render(<Button>Click Me</Button>);
    const button = screen.getByRole('button', { name: /Click Me/i });
    expect(button).toHaveClass('bg-stone-900 text-stone-50 h-10 px-4 py-2');
  });

  it('renders with provided variant and size', () => {
    render(
      <Button variant="destructive" size="lg">
        Delete
      </Button>
    );
    const button = screen.getByRole('button', { name: /Delete/i });
    expect(button).toHaveClass('bg-red-500 text-stone-50 h-11 rounded-md px-8');
  });

  it('renders as a different component when asChild is true', () => {
    render(
      <Button asChild>
        <a href="/home">Home</a>
      </Button>
    );
    const link = screen.getByRole('link', { name: /Home/i });
    expect(link).toBeInTheDocument();
  });

  it('applies additional props to the button element', () => {
    render(<Button id="custom-button">Custom</Button>);
    const button = screen.getByRole('button', { name: /Custom/i });
    expect(button).toHaveAttribute('id', 'custom-button');
  });

  it('renders with custom class names', () => {
    render(<Button className="custom-class">Custom Class</Button>);
    const button = screen.getByRole('button', { name: /Custom Class/i });
    expect(button).toHaveClass('custom-class');
  });
});
