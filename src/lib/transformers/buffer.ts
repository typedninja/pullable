import { Transformer } from "../types";

/** @category Transformer */
export function buffer<T>(count: number): Transformer<T, T[]> {
  return function (generator) {
    return async function * () {
      let buf: T[] = [];

      for await (const value of generator()) {
        buf.push(value);

        if (buf.length >= count)
          yield flush();
      }

      if (buf.length > 0)
        yield flush();

      function flush(): T[] {
        const oldBuf = buf;

        buf = [];

        return oldBuf;
      }
    }
  }
}
