import { test as base } from "@playwright/test";
import { Page } from "@playwright/test";
import { Pages } from "@ui/pages";
import { APIClient } from "@api/APIClient";
import { ImdbService } from "@api/ImdbService";
import * as dotenv from "dotenv";

dotenv.config();

type UI = {
  pages: Pages;
  page: Page;
};

type API = {
  imdbApi: ImdbService;
};

export const test = base.extend<{ ui: UI; rest: API }>({
  ui: async ({ page }, use) => {
    const pages = new Pages(page);
    await use({ pages, page });
  },
  rest: async ({ request }, use) => {
    const baseURL = process.env.IMDB_BASE_URL;
    if (!baseURL) {
      throw new Error("IMDB_BASE_URL is not defined in .env");
    }
    const apiClient = new APIClient(baseURL, request);
    const imdbApi = new ImdbService(apiClient);
    await use({ imdbApi });
  }
});
