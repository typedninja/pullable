import { AnyIterable, AsyncMapFn, Transformer } from "../types";
import { concat } from "./concat";
import { map } from "./map";
import { pipe } from "./pipe";

/** @category Transformer */
export function concatMap<I, O>(mapFn: AsyncMapFn<I, AnyIterable<O>>): Transformer<I, O> {
  return pipe(map(mapFn), concat());
}
