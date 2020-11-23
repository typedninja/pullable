import { Transformer } from "../../types";
import { arrayFrom } from "../../helpers/arrayfrom";
import { from } from "../../helpers/from";

export function opEq<I, O>(op: Transformer<I, O>, input: I[], expected: O[]): () => Promise<void> {
  return async () => {
    const output = await arrayFrom(from(input).pipe(op));

    expect(output).toEqual(expected);
  }
}

export function opSortEq<I, O>(op: Transformer<I, O>, input: I[], expected: O[]): () => Promise<void> {
  return async () => {
    const output = await arrayFrom(from(input).pipe(op));

    expect(output.sort()).toEqual(expected.sort());
  }
}
