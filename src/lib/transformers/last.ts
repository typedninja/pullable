import { Transformer } from "../types";

/** @category Transformer */
export function last<T>(): Transformer<T, T> {
  return function (generator) {
    return async function * () {
      let found = false;
      let lastValue: T;

      for await (const value of generator()) {
        lastValue = value;

        found = true;
      }

      if (found)
        yield lastValue!;
    }
  }
}
