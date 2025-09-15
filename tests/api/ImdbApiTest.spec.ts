import { test } from "../../global-fixture";
import { expect } from "@playwright/test";

const movieId = "tt0120338";

test.skip("GET /titles/titleid", async ({ rest }) => {
  const movie = await rest.imdbApi.getMovieById("tt0120338");
  await expect(movie.primaryTitle).toBe("Titanic");
  await expect(movie.startYear).toBe(1997);
});
