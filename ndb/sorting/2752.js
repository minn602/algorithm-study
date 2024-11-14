const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split(" ").map(Number);

console.log(input.sort((a, b) => a - b).join(" "));
