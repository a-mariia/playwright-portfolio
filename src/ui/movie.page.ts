import { expect, Locator } from "@playwright/test";
import { BasePage } from "./base.page";
import { step } from "../../decorator";

export class MoviePage extends BasePage {
  readonly pageName: string = "Movie Page";
  readonly pageURL: string = "/title/";

  readonly movieTitle: Locator = this.page.getByTestId("hero__pageTitle");
  readonly poster: Locator = this.page.getByTestId("hero-media__poster");
  readonly addToWatchListBtn: Locator =
    this.page.getByTestId("tm-box-wl-button");
  readonly genreChipList: Locator = this.page.locator(
    ".ipc-chip-list .ipc-chip"
  );
  readonly castSection: Locator = this.page.getByTestId("title-cast");
  readonly ratingIMDB: Locator = this.page
    .getByTestId("hero-rating-bar__aggregate-rating__score")
    .locator("span")
    .first();

  @step((movieId) => `Open movie page for a given movie id - ${movieId}`)
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

  @step(
    (expectedGenres) => `Assert expected genres are visible: ${expectedGenres}`
  )
  async assertGenresVisible(expectedGenres: Genre[]) {
    for (const genre of expectedGenres) {
      const genreChip = this.genreChipList.filter({
        hasText: new RegExp(`^${genre}$`),
      });
      await expect(genreChip).toBeVisible();
    }
  }

  @step((castNames) => `Assert main cast names are visible: ${castNames}`)
  async assertMainCastVisible(castNames: string[]) {
    for (const name of castNames) {
      await expect(this.castSection.getByText(name)).toBeVisible();
    }
  }

  @step("Assert IMDB rating is visible and valid")
  async assertIMDBRatingValid() {
    const ratingText = await this.ratingIMDB.textContent();
    const match = ratingText?.match(/\d+(\.\d+)?/);
    const ratingValue = match ? parseFloat(match[0]) : NaN;
    expect(ratingValue).toBeGreaterThan(0);
    expect(ratingValue).toBeLessThanOrEqual(10);
  }
}

export enum Genre {
  Drama = "Drama",
  Romance = "Romance",
}
