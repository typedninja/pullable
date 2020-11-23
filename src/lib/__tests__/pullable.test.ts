import { Pullable } from "../pullable";

test("pullable", async () => {
  const pullable = new Pullable(generator);

  const result: number[] = [];

  for await (const value of pullable) {
    result.push(value);
  }

  expect(result).toEqual([ 0, 1, 2 ]);

  async function * generator() {
    for (let i = 0; i < 3; i++)
      yield i;
  }
});
