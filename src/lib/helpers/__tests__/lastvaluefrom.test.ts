import { lastValueFrom } from "../lastvaluefrom";
import { from } from "../from";
import { emptyError } from "../../errors";

test("lastValueFrom", async () => {
  const pullable = from([ 1, 2, 3 ]);

  expect(await lastValueFrom(pullable)).toEqual(3);
});

test("lastValueFrom empty", async () => {
  const pullable = from([]);

  expect(lastValueFrom(pullable)).rejects.toEqual(emptyError());
});
