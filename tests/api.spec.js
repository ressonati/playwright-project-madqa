import { test, expect } from "@playwright/test";

const productsEndpoint = "/api/index.php?endpoint=products";
const productBody = {
  name: "Testowy produkt",
  price: 123.45,
  currency: "PLN",
};

test("Test API - GET", async ({ request }) => {
  const response = await request.get(productsEndpoint);
  expect(response.status()).toBe(200);
});

test("Test API - POST", async ({ request }) => {
  const response = await request.post(productsEndpoint, { data: productBody });
  const body = await response.json();

  expect(response.status()).toBe(201);
  expect(body.product.name).toBe(productBody.name);
});

test("Test API - PUT", async ({ request }) => {
  const response = await request.put(`${productsEndpoint}&id=3`, {
    data: {
      name: "Zmieniony Testowy produkt",
      price: 111.11,
    },
  });

  const body = await response.json();
  expect(response.status()).toBe(200);
  expect(body.product.name).toBe("Zmieniony Testowy produkt");
});

test("Test API - PATCH", async ({ request }) => {
  const response = await request.patch(`${productsEndpoint}&id=3`, {
    data: {
      price: 222.22,
    },
  });

  const body = await response.json();
  expect(response.status()).toBe(200);
  expect(body.changes.price).toBe(222.22);
});

test("Test API - DELETE", async ({ request }) => {
  const createResponse = await request.post(productsEndpoint, {
    data: {
      name: "Produkt Testowy",
      price: 123.45,
      currency: "PLN",
    },
  });
  const { product } = await createResponse.json();
  const response = await request.delete(`${productsEndpoint}&id=${product.id}`);

  expect(response.status()).toBe(204);
});
