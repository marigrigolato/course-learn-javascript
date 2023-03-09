const getCompletedCourses = courses => {
  return courses.filter(course => course.isCompleted);
 // course.isCompleted is already a boolean so there's no need to compare it to true with === true
}

// Sample usage - do not modify
const sampleCourses = [{
  id: 1,
  name: "Learn Programming",
  isCompleted: true
}, {
  id: 2,
  name: "Learn JavaScript",
  isCompleted: false
}];

console.log(getCompletedCourses(sampleCourses));
