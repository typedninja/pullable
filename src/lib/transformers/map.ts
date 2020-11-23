import { AsyncMapFn, Transformer } from "../types";

/** @category Transformer */
export function map<I, O>(mapFn: AsyncMapFn<I, O>): Transformer<I, O> {
  return function (generator) {
    return async function * () {
      for await (const values of generator())
        yield await mapFn(values);
    }
  }
}
