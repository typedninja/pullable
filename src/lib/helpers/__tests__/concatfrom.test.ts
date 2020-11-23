import { arrayFrom } from "../arrayfrom";
import { concatFrom } from "../concatfrom";

test("concatFrom", async () => {
  const concated = concatFrom([ 1, 2, 3], [ 4, 5, 6 ]);

  expect(await arrayFrom(concated)).toEqual([ 1, 2, 3, 4, 5, 6 ]);
});
