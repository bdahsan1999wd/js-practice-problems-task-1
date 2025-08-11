// Generate random decimal 0 to 1
const rand = Math.random();
// console.log(rand);

// Calculate range size (max - min + 1)
const range = 20 - 10 + 1;
// console.log(range);

// Scale random number to range
const scaled = rand * range;
// console.log(scaled);

// Round down to nearest integer
const integerPart = Math.floor(scaled);
// console.log(integerPart);

// Shift by minimum value (start from 10)
const result = integerPart + 10;
console.log(result);