import { buffer } from "../buffer";
import { opEq } from "./utils";
import { from } from "../../helpers/from";

async function * gen() {
  yield 1;
  yield 2;

  await new Promise(() => {});
}

test("buffer", opEq(buffer(2), [ 1, 2, 3, 4, 5, 6 ], [ [ 1, 2 ], [ 3, 4 ], [ 5, 6 ] ]));
test("buffer timeout", async () => {
  const arrays = from(gen).pipe(
    buffer(2, 2000),
  );

  for await (const array of arrays) {
    expect(array).toEqual([ 1, 2 ]);

    break;
  }
});
