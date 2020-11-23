import { merge } from "../merge";
import { opSortEq } from "./utils";

test("merge", opSortEq(merge(), [ [ 1, 2, 3 ], [ 4 ,5 ] ], [ 1, 2, 3, 4, 5 ]));
