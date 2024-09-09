const n1 = 10; // Example values
const n2 = 15;
const n3 = 20;
const n4 = 5;

// Check if all numbers are divisible by 5
const allDivisibleBy5 = (n1 % 5 === 0) && (n2 % 5 === 0) && (n3 % 5 === 0) && (n4 % 5 === 0);
console.log(`All numbers are divisible by 5: ${allDivisibleBy5}`);

// Check if the first number is larger than the last
const isFirstLargerThanLast = n1 > n4;
console.log(`The first number is larger than the last: ${isFirstLargerThanLast}`);

// Arithmetic chain
const result = ((n2 - n1) * n3) % n4;
console.log(`The result of the arithmetic chain is: ${result}`);

// Change isOver25 calculation
const isUnder25 = (n1 < 25) && (n2 < 25) && (n3 < 25) && (n4 < 25);
console.log(`All numbers are under 25: ${isUnder25}`);
