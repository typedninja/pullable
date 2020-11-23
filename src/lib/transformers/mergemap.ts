import { AnyIterable, AsyncMapFn, Transformer } from "../types";
import { merge } from "./merge";
import { map } from "./map";
import { pipe } from "./pipe";

/** @category Transformer */
export function mergeMap<I, O>(mapFn: AsyncMapFn<I, AnyIterable<O>>, concurrency: number = Infinity): Transformer<I, O> {
  return pipe(map(mapFn), merge(concurrency));
}
