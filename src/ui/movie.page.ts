import { expect, Locator } from "@playwright/test";
import { BasePage } from "./base.page";
import { step } from "../../decorator";

export class MoviePage extends BasePage {
  readonly pageName: string = "Movie Page";
  readonly pageURL: string = "/title/";

  readonly movieTitle: Locator = this.page.getByTestId("hero__pageTitle");
  readonly poster: Locator = this.page.getByTestId("hero-media__poster");
  readonly addToWatchListBtn: Locator = this.page.getByTestId("tm-box-wl-button");
  readonly ratingIMDB: Locator = this.page.getByTestId("hero-rating-bar__aggregate-rating").first();

  @step(movieId => `Open movie page for a given movie id - ${movieId}`)
  async open(movieId: string) {
    await this.openURL(`${this.pageURL}${movieId}`, this.pageName);
    await this.assertIsOpened();
  }

  @step("Assert movie page is opened")
  async assertIsOpened() {
    await this.checkOpenedURL(this.pageURL);
    await expect(this.movieTitle).toBeVisible();
  }

  @step("Assert all elements are present")
  async assertAllElementsPresented() {
    await expect.soft(this.movieTitle).toBeVisible();
    await expect.soft(this.poster).toBeVisible();
    await expect.soft(this.addToWatchListBtn).toBeVisible();
    await expect.soft(this.ratingIMDB).toBeVisible();
  }
}
