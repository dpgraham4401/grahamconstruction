import { test, expect,  } from '@playwright/test';

test('hero', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByText(/dream home/i)).toBeVisible();
});
