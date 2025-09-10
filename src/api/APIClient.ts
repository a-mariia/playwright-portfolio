import { APIRequestContext, request } from "@playwright/test";

export class APIClient {
  private readonly baseURL: string;
  private readonly context: APIRequestContext;

  constructor(baseURL: string, context: APIRequestContext) {
    this.baseURL = baseURL;
    this.context = context;
  }

  async get(path: string) {
    const response = await this.context.get(`${this.baseURL}/${path}`);

    if (!response.ok()) {
      throw new Error(
        `Failed GET ${this.baseURL}/${path} with ${response.status()}`
      );
    }
    return await response.json();
  }
}
