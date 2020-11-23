import { Fromable } from "../types";
import { from } from "./from";
import { last } from "../transformers/last";
import { emptyError } from "../errors";

/** @category Helper */
export async function lastValueFrom<T>(fromable: Fromable<T>): Promise<T> {
  for await (const value of from(fromable).pipe(last()))
    return value;

  throw emptyError();
}
