// method reduce(callback, initialValue) executes a reducer function (that you provide)
// on each element of the array, resulting in a single output value.

// the reducer function takes four arguments:
// Accumulator (acc)
// Current Value (cur)
// Current Index (idx)
// Source Array (src)

// reduce example: sum
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((acc, cur) => {
  return acc + cur; 
}, 0);

console.log(sum); // 15

// passing 0 as initialValue is the same as declaring let sum = 0 when using .forEach() to calculate the sum.
// let grades = [10, 5, 15, 20];

// let sum = grades.reduce((total, current) => {
//     console.log(`Total is ${total}`);
//     console.log(`Current is ${current}`);
//     console.log("---");
//     return total + current;
// }, 0);

// console.log(`Sum is ${sum}`);

// using .forEach
// let sum = 0
// numbers.forEach(number => {
//     sum = sum + number
// });

// using .reduce
// const sum = numbers.reduce((total, current) => {
//   return total + current
// }, 0);

// const sum = numbers.reduce((total, current) => total + current, 0);
