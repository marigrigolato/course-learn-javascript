// optional chaining (encadeamento opcional) operator (?.) is a logical operator that returns undefined instead of throwing an error
// when a property doesn't exist

const person = {
  name: 'John',
  age: 30,
  address: {
    street: 'Main Street',
    number: 123,
    // city: {
    //   name: 'New York',
    //   state: 'NY',
    // },
  },
};

// if(person && person.address && person.address.city) {
//   console.log(person.address.city.name);
// }

console.log(person.address?.city?.name || 'City not found');
