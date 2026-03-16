// @ts-check
import { test, expect } from '@playwright/test';

test('Login user', async ({ page }) => {
  const username = process.env.USER1 || 'user';
  const password = process.env.PASSWORD1 || 'password';

  await page.goto('/');
  await page.getByTestId('logout-button').click();
  await page.getByTestId('login-username').fill(username);
  await page.getByTestId('login-password').fill(password);
  await page.getByTestId('login-button').click();

  await expect(page.getByTestId('welcome-msg')).toBeVisible();
});

test('Login admin', async ({ page }) => {
  const username = process.env.USER2 || 'admin';
  const password = process.env.PASSWORD2 || 'admin';

  await page.goto('/');
  await page.getByTestId('logout-button').click();
  await page.getByTestId('login-username').fill(username);
  await page.getByTestId('login-password').fill(password);
  await page.getByTestId('login-button').click();

  await expect(page.getByTestId('welcome-msg')).toBeVisible();
});
