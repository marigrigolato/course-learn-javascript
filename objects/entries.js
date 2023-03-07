// the Object.entries() method returns an array of arrays representing every key/value pair.

const user = {
  id: 1,
  name: "Sam Green",
  age: 20
}

const entries = Object.entries(user);

console.log(entries);  // [ [ 'id', 1 ], [ 'name', 'Sam Green' ], [ 'age', 20 ] ]
