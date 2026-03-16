export class Index {
  constructor(page) {
    this.page = page;
    this.url = "/";
  }

  async open() {
    await this.page.goto(this.url);
  }

}
