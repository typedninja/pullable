import { Fromable } from "../types";
import { from } from "./from";
import { buffer } from "../transformers/buffer";

/** @category Helper */
export async function arrayFrom<T>(fromable: Fromable<T>): Promise<T[]> {
  for await (const value of from(fromable).pipe(buffer(Infinity)))
    return value;

  return [];
}
