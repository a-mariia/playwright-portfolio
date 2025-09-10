import { test } from "../../global-fixture";

test.describe("Movie Page", () => {
  test("Opening moview page", async ({ ui }) => {
    const movieId = "tt0111161";
    await ui.pages.moviePage.open(movieId);
    await ui.pages.moviePage.assertIsOpened();
    await ui.pages.moviePage.assertAllElementsPresented();
  });
})