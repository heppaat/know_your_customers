import * as fs from 'node:fs';



// DON'T MODIFY THE CODE BELOW THIS LINE

let toExport;

try {
  toExport = [
    { name: "customersByCountry", content: customersByCountry, type: "function" },
    { name: "customersByDate", content: customersByDate, type: "function" }
  ]

} catch (error) {
  toExport = { error: error.message }
}

export { toExport };