import { arrayFrom } from "../arrayfrom";
import { from } from "../from";

test("arrayFrom", async () => {
  const pullable = from([ 1, 2, 3 ]);

  expect(await arrayFrom(pullable)).toEqual([ 1, 2, 3 ]);
});

test("arrayFrom empty", async () => {
  const pullable = from([]);

  expect(await arrayFrom(pullable)).toEqual([]);
});
