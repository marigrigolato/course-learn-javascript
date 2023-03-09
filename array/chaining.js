const exportVerifiedUsers = users => { // with chaining methods
  return users
    .filter(user => user.isVerified)
    .map(user => user.name)
    .join(", ");
}

// const exportVerifiedUsers = users => {
//   const usersVerified = users.filter(user => user.isVerified)
//   return usersVerified.map(user => user.name).join(', ')
// }

const sampleUsers = [{
  name: "Sam",
  isVerified: true
}, {
  name: "Alex",
  isVerified: false
}, {
  name: "Charlie",
  isVerified: true
}];
console.log(exportVerifiedUsers(sampleUsers)); // "Sam, Charlie"
