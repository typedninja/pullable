import { Transformer } from "../types";

/** @category Transformer */
export function skip<T>(count: number): Transformer<T, T> {
  return function (generator) {
    return async function * () {
      let i = 1;

      for await (const value of generator()) {
        if (i++ <= count)
          continue;

        yield value;
      }
    }
  }
}
