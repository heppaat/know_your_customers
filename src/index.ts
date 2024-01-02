//import * as fs from "node:fs";
import fs from "fs/promises";
import { z } from "zod";

console.log("Hello world");

// DON'T MODIFY THE CODE BELOW THIS LINE

let toExport;

try {
  toExport = [
    {
      name: "customersByCountry",
      content: customersByCountry,
      type: "function",
    },
    { name: "customersByDate", content: customersByDate, type: "function" },
  ];
} catch (error) {
  toExport = { error: error.message };
}

export { toExport };
