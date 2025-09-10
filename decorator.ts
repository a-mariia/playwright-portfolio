import { test } from "@playwright/test";

export function step(
  stepNameOrFunction: string | ((...args: any[]) => string)
) {
  return function decorator(
    target: Function,
    context: ClassMethodDecoratorContext
  ) {
    return function replacementMethod(...args: any) {
      const stepName =
        typeof stepNameOrFunction === "function"
          ? stepNameOrFunction(...args)
          : stepNameOrFunction;
      return test.step(stepName, async () => {
        return await target.call(this, ...args);
      });
    };
  };
}
