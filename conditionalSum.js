const conditionalSum = function(values, condition) {
  let accumulator = 0;
  for (let value of values) {
    if (condition === 'odd' && value % 2 === 1) {
      accumulator += value;
    } else if (condition === 'even' && value % 2 === 0) {
      accumulator += value;
    }
  }
  return accumulator;
}

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([3,66,99,100,200],'even'));
console.log(conditionalSum([], "odd"));