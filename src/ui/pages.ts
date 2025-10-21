import { Page } from "@playwright/test";
import { HomePage } from "@ui/home.page";
import { MoviePage } from "@ui/movie.page";

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
