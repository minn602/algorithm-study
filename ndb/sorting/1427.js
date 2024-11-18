const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString();

const num = input.split("").sort((a, b) => b - a);

console.log(num.join(""));
