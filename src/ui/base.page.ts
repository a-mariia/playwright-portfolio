import { expect, Page } from "@playwright/test";

export class BasePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async openURL(path: string, pageName: string) {
    try {
      await this.page.goto(path);
    } catch (error) {
      throw new Error(
        `Error during navigation to ${pageName} ${path}: ${error}`
      );
    }
  }

  async checkOpenedURL(url: string) {
    await expect(this.page).toHaveURL(new RegExp(`.*${url}`));
  }

  async reload() {
    await this.page.reload();
  }
}
