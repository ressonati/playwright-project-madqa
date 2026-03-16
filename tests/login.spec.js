// @ts-check
import { test, expect } from '@playwright/test';
import { Login } from '../pages/login';

const user = {
  username: process.env.USER1,
  password: process.env.PASSWORD1,
};

const admin = {
  username: process.env.USER2,
  password: process.env.PASSWORD2,
};

test('Login user', async ({ page }) => {
  const login = new Login(page);
  await login.loginAs(user.username, user.password);
  await expect(login.welcomeMsg).toContainText(`Witaj: ${user.username}`);
});

test('Login admin', async ({ page }) => {
  const login = new Login(page);
  await login.loginAs(admin.username, admin.password);
  await expect(login.welcomeMsg).toContainText(`Witaj: ${admin.username}`);
});
