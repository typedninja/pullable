import { map } from "../map";
import { opEq } from "./utils";

test("map", opEq(map<number, number>(x => x * 2), [ 1, 2, 3 ], [ 2, 4, 6 ]));
