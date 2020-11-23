import { take } from "../take";
import { opEq } from "./utils";

test("take", opEq(take(3), [ 1, 2, 3, 4, 5, 6 ], [ 1, 2, 3 ]));
