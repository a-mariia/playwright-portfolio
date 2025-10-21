import { test } from "@global-fixture";
import { Genre } from "@ui/movie.page";

const movieId = "tt0120338"; // Titanic

test("Opening movie page", async ({ ui }) => {
  await ui.pages.moviePage.open(movieId);
  await ui.pages.moviePage.assertIsOpened();
  await ui.pages.moviePage.assertAllElementsPresented();
});

test("Genres display", async ({ ui }) => {
  await ui.pages.moviePage.open(movieId);
  await ui.pages.moviePage.assertGenresVisible([Genre.Drama, Genre.Romance]);
});

test("Main Cast Section check", async ({ ui }) => {
  const castNames = ["Leonardo DiCaprio", "Kate Winslet"];
  await ui.pages.moviePage.open(movieId);
  await ui.pages.moviePage.assertMainCastVisible(castNames);
});

test("IMDB Rating check", async ({ ui }) => {
  await ui.pages.moviePage.open(movieId);
  await ui.pages.moviePage.assertIMDBRatingValid();
});
