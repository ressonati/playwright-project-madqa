import { expect } from "@playwright/test";

export class Cart {
  constructor(page) {
    this.page = page;
    this.cartButton = page.getByTestId("cart-button");
    this.checkoutButton = page.getByTestId("cart-buy");
    this.successToast = page.locator(".toast-success").filter({
      hasText: "sukces",
    });
  }

  async openCart() {
    await this.cartButton.click();
  }

  async checkout() {
    await this.checkoutButton.click();
  }

  async expectSuccessMessage() {
    await expect(this.successToast).toBeVisible();
  }
}
