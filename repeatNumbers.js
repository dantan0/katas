const repeatNumbers = function(data) {
  let result = '';
  for (let pair of data) {
    let temp = '';
    for(let i = 0; i < pair[1]; i++) {
      temp += pair[0]; // automatic type conversion from num to string
    }
    if (result.length === 0) {
      // initially
      result += temp;
    } else {
      result += ', ';
      result += temp;
    }
  }
  return result;
}

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));
console.log(repeatNumbers([[500,2], [11, 2]]));