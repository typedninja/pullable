import { AsyncTapFn, Transformer } from "../types";

/** @category Transformer */
export function tap<T>(tapFn: AsyncTapFn<T>): Transformer<T, T> {
  return function (generator) {
    return async function * () {
      for await (const value of generator()) {
        await tapFn(value);

        yield value;
      }
    }
  }
}
