import { arrayFrom } from "../arrayfrom";
import { mergeFrom } from "../mergefrom";

test('arrayfrom', async () => {
  const merged = mergeFrom([ 1, 2, 3, 4, 5, 6 ]);
  
  expect((await arrayFrom(merged)).sort()).toEqual([ 1, 2, 3, 4, 5, 6 ]);
});
