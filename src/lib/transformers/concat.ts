import { AnyIterable, Transformer } from "../types";

/** @category Transformer */
export function concat<T>(): Transformer<AnyIterable<T>, T> {
  return function (generator) {
    return async function * () {
      for await (const iterable of generator())
        yield * iterable;
    }
  }
}
