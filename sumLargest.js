const sumLargestNumbers = function(data) {
  let max = Number.NEGATIVE_INFINITY;
  let secondMax = Number.NEGATIVE_INFINITY;
  for (let number of data) {
    // both max and second max get updated
    if (number >= max) {
      secondMax = max;
      max = number;
      // console.log('max is ' + max + ' and second max is ' + secondMax);
    } else if (number < max && number > secondMax) {
      // only second max gets updated
      secondMax = number;
    }
  }
  return max + secondMax
}

console.log(sumLargestNumbers([5,2,1,5]));
console.log(sumLargestNumbers([-3,-2,1,-7]));
console.log(sumLargestNumbers([-2,-9,11,-1,0,9,-6]));


// console.log(sumLargestNumbers([1, 10]));
// console.log(sumLargestNumbers([1, 2, 3]));
// console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));