import { Fromable, PullableLike } from "../types";
import { Pullable } from "../pullable";
import { fromableError } from "../errors";

/** @category Helper */
export function from<T>(fromable: Fromable<T>): PullableLike<T> {
  if (fromable instanceof Pullable)
    return fromable;

  if (fromable instanceof Function)
    return new Pullable(fromable);

  if ((Symbol.iterator in fromable) || (Symbol.asyncIterator in fromable))
    return new Pullable(async function * () {
      yield * fromable;
    });

  throw fromableError();
}
