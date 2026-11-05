import { test, expect } from '@playwright/test';

test('opens EPAM client work from Services', async ({ page }) => {
  await page.goto('https://www.epam.com/', { waitUntil: 'domcontentloaded' });

  const services = page.getByRole('link', { name: /^Services$/i });
  await expect(services).toBeVisible();
  await services.click();

  const clientWork = page.getByRole('link', { name: /Explore Our Client Work/i });
  await expect(clientWork).toBeVisible();
  await clientWork.click();

  await expect(page.getByText('Client Work', { exact: true })).toBeVisible();
});
