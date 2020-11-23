import { last } from "../last";
import { opEq } from "./utils";

test("last", opEq(last(), [ 1, 2, 3 ], [ 3 ]));
