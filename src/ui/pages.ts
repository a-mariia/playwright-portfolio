import { Page } from "@playwright/test";
import { HomePage } from "./home.page";
import { MoviePage } from "./movie.page";

export class Pages {
  readonly page: Page;
  readonly homePage: HomePage;
  readonly moviePage: MoviePage;

  constructor(page: Page) {
    this.page = page;
    this.homePage = new HomePage(this.page);
    this.moviePage = new MoviePage(this.page);
  }
  async close() {
    await this.page.close();
  }
}
