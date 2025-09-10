import { APIClient } from "./APIClient";

export class ImdbService {
  constructor(private client: APIClient) {}

  async getMovieById(id: string) {
    return this.client.get(`title/${id}`);
  }

  async searchMovies(name: string) {
    return this.client.get(`find?q=${encodeURIComponent(name)}`);
  }
}
