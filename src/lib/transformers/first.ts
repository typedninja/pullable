import { Transformer } from "../types";

/** @category Transformer */
export function first<T>(): Transformer<T, T> {
  return function (generator) {
    return async function * () {
      for await (const value of generator()) {
        yield value;

        break;
      }
    }
  }
}
