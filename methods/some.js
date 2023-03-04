// method some(callback) checks if any of the elements in an array pass a test (provided as a function).

const numbers = [15, 10, 20];

const someOver18 = numbers.some(number => number >= 18); // true
const someUnder10 = numbers.some(number => number < 10); // false
