const instructorWithLongestName = function(instructors) {
  let maxLength = 0;
  let maxInstructor = {};
  for (let instructor of instructors) {
    if (instructor.name.length > maxLength) {
      maxLength = instructor.name.length;
      maxInstructor = instructor;
    }
  }
  return maxInstructor;
}

console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));