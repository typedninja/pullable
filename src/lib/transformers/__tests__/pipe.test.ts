import { pipe } from "../pipe";
import { opEq } from "./utils";
import { Transformer } from "../../types";

const op: Transformer<number, number> = function (generator) {
  return async function * () {
    for await (const value of generator()) {
      yield value * 2;
    }
  }
}

test("pipe", opEq(pipe(op, op), [ 1, 2, 3 ], [ 4, 8, 12 ]));
