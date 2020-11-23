import { first } from "../first";
import { opEq } from "./utils";

test("first", opEq(first(), [ 1, 2, 3 ], [ 1 ]));
