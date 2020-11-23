import { filter } from "../filter";
import { opEq } from "./utils";

test("filter", opEq(filter<boolean>(v => v), [ true, false, true ], [ true, true ]));
