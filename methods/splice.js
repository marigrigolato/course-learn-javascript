// method splice(start, deleteCount, item1, item2, ...)
// changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.

// the first argument is the index at which to start changing the array.
// the second argument is an integer indicating the number of old array elements to remove.
// if you don't specify the second argument, all elements from the start index to the end of the array will be deleted.
// if you specify 0, no elements will be removed.

const items = ["Pen", "Paper", "Staples"];
const deletedItem = items.splice(0, 1); // removes one element at index 0
console.log(deletedItem); // ["Pen"]

console.log(items); // ["Paper", "Staples"]
