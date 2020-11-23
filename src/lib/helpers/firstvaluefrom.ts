import { Fromable } from "../types";
import { from } from "./from";
import { first } from "../transformers/first";
import { emptyError } from "../errors";

/** @category Helper */
export async function firstValueFrom<T>(fromable: Fromable<T>): Promise<T> {
  for await (const value of from(fromable).pipe(first()))
    return value;

  throw emptyError();
}
