import { Transformer } from "../types";
import { rejector } from "../utils";
import { Signal } from "@typedninja/signal";

/** @category Transformer */
export function bufferTime<T>(timeout: number, count: number = Infinity): Transformer<T, T[]> {
  return function (generator) {
    return async function * () {
      const arrays: (T[] | PromiseLike<never>)[] = [];
      const wantArrays = new Signal();
      const changes = new Signal();
      let buf: T[] = [];
      let timer: ReturnType<typeof setTimeout> | undefined;
      let iterating = true;

      iterate();

      while (iterating) {
        wantArrays.raise();

        await changes;

        changes.reset();

        while (arrays.length > 0)
          yield arrays.shift() as T[];
      }

      async function iterate() {
        try {
          for await (const value of generator()) {
            if (timer)
              clearTimeout(timer);

            timer = setTimeout(onTimeout, timeout!);

            buf.push(value);

            if (buf.length >= count)
              flush();

            await wantArrays;
          }

          if (buf.length > 0)
            flush();
        } catch (error) {
          arrays.push(rejector(error));
        } finally {
          iterating = false;

          changes.raise();
        }
      }

      async function onTimeout() {
        if (iterating) {
          if (buf.length > 0)
            flush();

          timer = setTimeout(onTimeout, timeout!);
        }
      }

      function flush() {
        arrays.push(buf);

        buf = [];

        wantArrays.reset();

        changes.raise();
      }
    }
  }
}
