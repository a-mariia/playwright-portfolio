import { Locator, expect } from "@playwright/test";
import { BasePage } from "../ui/base.page";

export class HomePage extends BasePage {
  readonly pageName: string = "Home Page";
}
