import { firstValueFrom } from "../firstvaluefrom";
import { from } from "../from";
import { emptyError } from "../../errors";

test("firstValueFrom", async () => {
  const pullable = from([ 1, 2, 3 ]);

  expect(await firstValueFrom(pullable)).toEqual(1);
});

test("firstValueFrom empty", async () => {
  const pullable = from([]);

  expect(firstValueFrom(pullable)).rejects.toEqual(emptyError());
});
