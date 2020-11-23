import { concat } from "../concat";
import { opEq } from "./utils";

test("concat", opEq(concat(), [ [ 1, 2, 3 ], [ 4, 5, 6 ] ], [ 1, 2, 3, 4, 5, 6 ]));
