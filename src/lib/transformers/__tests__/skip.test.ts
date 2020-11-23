import { skip } from "../skip";
import { opEq } from "./utils";

test("skip", opEq(skip(3), [ 1, 2, 3, 4, 5, 6 ], [ 4, 5, 6 ]));
