import { expect } from "@playwright/test";

export class Login {
  constructor(page) {
    this.page = page;
    this.url = "/";
    this.logoutButton = page.getByTestId("logout-button");
    this.username = page.getByTestId("login-username");
    this.password = page.getByTestId("login-password");
    this.loginButton = page.getByTestId("login-button");
    this.welcomeMsg = page.getByTestId("welcome-msg");
  }

  async open() {
    await this.page.goto(this.url);
  }

  async logoutIfNeeded() {
    if ((await this.logoutButton.count()) > 0) {
      await this.logoutButton.click();
    }
  }

  async login(username, password) {
    await this.username.fill(username);
    await this.password.fill(password);
    await this.loginButton.click();
  }

  async loginAs(username, password) {
    await this.open();
    await this.logoutIfNeeded();
    await this.login(username, password);
    await this.expectLoggedIn();
  }

  async expectLoggedIn() {
    await expect(this.welcomeMsg).toBeVisible();
  }
}
