// nullish coalescing (coalescência nula) operator (??) is a logical operator that returns the right-hand side operand when its
// left-hand side operand is null or undefined, and otherwise returns its left-hand side operand

const getName = name => {
  return name ?? "N/A";
}

console.log(getName("Sam")); // "Sam"
console.log(getName(undefined)); // "N/A"
