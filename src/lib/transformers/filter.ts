import { AsyncFilterFn, Transformer } from "../types";

/** @category Transformer */
export function filter<T>(filterFn: AsyncFilterFn<T>): Transformer<T, T> {
  return function (generator) {
    return async function * () {
      for await (const value of generator()) {
        if (await filterFn(value))
          yield value;
      }
    }
  }
}
