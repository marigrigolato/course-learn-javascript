// method every(callback) checks if all elements in an array pass a test (provided as a function).

const numbers = [15, 10, 20];

const allAbove10 = numbers.every(number => number >= 10); // true
const allAbove15 = numbers.every(number => number >= 15); // false
