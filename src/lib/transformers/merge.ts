import { AnyIterable, Transformer } from "../types"
import { rejector } from "../utils";
import { Signal } from "@typedninja/signal";

/** @category Transformer */
export function merge<T>(concurrency: number = Infinity): Transformer<AnyIterable<T>, T> {
  return function (generator) {
    return async function * () {
      const values: (T | PromiseLike<never>)[] = [];

      const changes = new Signal();
      const wantValues = new Signal();
      const wantChildren = new Signal();

      let thrown = false;
      let done = false;
      let root = true;
      let children = 0;

      wantChildren.raise();

      iterateRoot();

      try {
        while (root || children > 0) {
          wantValues.raise();

          await changes;

          while (values.length > 0)
            yield values.shift() as T;
        }
      } catch (error) {
        thrown = true;

        throw error;
      } finally {
        done = true;

        while (root || children > 0) {
          changes.reset();

          await changes;
        }

        if (! thrown)
          while (values.length > 0)
            await values.shift();
      }

      async function iterateRoot(): Promise<void> {
        wantChildren.raise();

        try {
          for await (const iterable of generator()) {
            if (done)
              break;

            iterateChild(iterable);

            await wantChildren;
          }
        } catch (error) {
          values.push(rejector(error));
        } finally {
          root = false;

          cleanup();
        }
      }

      async function iterateChild(iterable: AnyIterable<T>) {
        children++;

        if (children >= concurrency)
          wantChildren.reset();

        try {
          for await (const value of iterable) {
            values.push(value);

            changes.raise();

            await wantValues;

            if (done)
              break;
          }
        } catch (error) {
          values.push(rejector(error));
        } finally {
          children--;

          if (children < concurrency)
            wantChildren.raise();

          cleanup();
        }
      }

      function cleanup() {
        if ((! root) && children === 0)
          changes.raise();
      }
    }
  }
}
