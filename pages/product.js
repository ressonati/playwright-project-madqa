import { expect } from "@playwright/test";

export class Product {
  constructor(page) {
    this.page = page;
    this.buyButton = page.getByRole("button", { name: "Dodaj do koszyka" });
  }

  async expectOpened(testedProduct) {
    await expect(this.page).toHaveURL(/\/products\//);
    await expect(
      this.page.getByRole("heading", { name: testedProduct.name }),
    ).toBeVisible();
    await expect(this.page.locator(".price")).toContainText(testedProduct.price);
  }

  async addToCart(testedProduct) {
    await this.expectOpened(testedProduct);
    await this.buyButton.click();
  }
}
