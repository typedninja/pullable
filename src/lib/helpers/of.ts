import { Pullable } from "../pullable";
import { PullableLike } from "../types";

export function of<T>(value: T): PullableLike<T> {
  return new Pullable<T>(async function * () {
    yield value;
  });
}
