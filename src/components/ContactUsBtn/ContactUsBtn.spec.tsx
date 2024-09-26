import { render, screen } from '@testing-library/react';
import { ContactUsBtn } from 'src/components/ContactUsBtn/ContactUsBtn.tsx';
import { describe, expect, it } from 'vitest';

describe('ContactUsBtn', () => {
  const message = 'Get in Touch';
  it('renders default text when no children or text prop is provided', () => {
    render(<ContactUsBtn />);
    expect(screen.getByText('Contact Us')).toBeInTheDocument();
  });

  it('renders provided text prop', () => {
    const message = 'Get in Touch';
    render(<ContactUsBtn>{message}</ContactUsBtn>);
    expect(screen.getByText(message)).toBeInTheDocument();
  });

  it('applies additional props to the anchor element', () => {
    render(<ContactUsBtn id="contact-btn" />);
    expect(screen.getByRole('link')).toHaveAttribute('id', 'contact-btn');
  });
});
