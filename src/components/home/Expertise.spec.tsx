import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { Expertise } from './Expertise';

describe('Expertise Component', () => {
  it('renders all expertise items', () => {
    render(<Expertise />);
    const items = screen.getAllByRole('button');
    expect(items).toHaveLength(6);
  });

  // ToDo: implement
  it.skip('only one description is visible at a time', async () => {
    expect(true).toBe(true);
  });

  it('aria-expanded attribute is set correctly', async () => {
    const user = userEvent.setup();
    render(<Expertise />);
    const firstItemButton = screen.getByRole('button', { name: /Digital Experience Platforms/i });
    await user.click(firstItemButton);
    expect(firstItemButton).toHaveAttribute('aria-expanded', 'true');
    await user.click(firstItemButton);
    expect(firstItemButton).toHaveAttribute('aria-expanded', 'false');
  });
});
