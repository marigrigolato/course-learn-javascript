// undefined means that the property has not been defined yet. Whereas,
// null means that the property has been defined but is empty.

const user = {
  id: 1,
  name: "Sam",
  age: null
}

console.log(user.age); // null
console.log(user.birthday); // undefined
