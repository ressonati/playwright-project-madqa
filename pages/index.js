export class Index {
  constructor(page) {
    this.page = page;
    this.url = "/";
  }

  async open() {
    await this.page.goto(this.url);
  }

  async openProduct(productName) {
    await this.page.getByRole("link", { name: productName }).click();
  }
}
