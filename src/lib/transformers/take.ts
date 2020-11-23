import { Transformer } from "../types";

/** @category Transformer */
export function take<T>(count: number): Transformer<T, T> {
  return function (generator) {
    return async function * () {
      let i = 1;

      for await (const value of generator()) {
        yield value;

        if (i++ >= count)
          break;
      }
    }
  }
}
