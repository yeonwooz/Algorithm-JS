import solution from "./src/index.js";
import { test } from "./src/warmup/ts_min.ts";
console.log(solution.min(1, 3, 5));
console.log(solution.isTriangle(1, 3, 5));
console.log(solution.isTriangle(4, 3, 5));

console.log(test(30));
