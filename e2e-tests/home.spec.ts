import { expect, test } from '@playwright/test';

test('home page includes hero', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { name: /dream home/i })).toBeVisible();
});

test('home page includes link to contact', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('link', { name: /contact us/i })).toBeVisible();
});
