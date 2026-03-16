// @ts-check
import { test } from "@playwright/test";
import { Cart } from "../pages/cart";
import { Index } from "../pages/index";
import { Product } from "../pages/product";

test("Buy product - keyboard", async ({ page }) => {
  const testedProduct = {
    name: "Klawiatura Mechaniczna",
    price: "289.00 zł",
  };

  const index = new Index(page);
  const product = new Product(page);
  const cart = new Cart(page);

  await index.open();
  await index.openProduct(testedProduct.name);
  await product.expectOpened(testedProduct);
  await product.addToCart(testedProduct);
  await cart.openCart();
  await cart.checkout();
  await cart.expectSuccessMessage();
});
