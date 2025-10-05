import { Page } from "@playwright/test";
import { HomePage } from "./home.page";
import { MoviePage } from "./movie.page";

export class Pages {
  readonly page: Page;
  private _homePage?: HomePage;
  private _moviePage?: MoviePage;

  constructor(page: Page) {
    this.page = page;
  }

  get homePage(): HomePage {
    if (!this._homePage) {
      this._homePage = new HomePage(this.page);
    }
    return this._homePage;
  }

  get moviePage(): MoviePage {
    if (!this._moviePage) {
      this._moviePage = new MoviePage(this.page);
    }
    return this._moviePage;
  }
}

