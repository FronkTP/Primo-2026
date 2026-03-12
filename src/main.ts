import { merge } from "./index";

const collection1 = [1, 4, 7];
const collection2 = [2, 5, 8];
const collection3 = [9, 6, 3];

const merged = merge(collection1, collection2, collection3);
console.log("Merged result:", merged);
