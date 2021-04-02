const multiplicationTable = function(maxValue) {
  let matrix = '';
  for (let i = 1; i <= maxValue; i++) {
    let row = '';
    for (let j = 1; j <= maxValue; j++) {
      row += ' ' + i * j;
    }
    matrix += row + '\n';
  }
  return matrix;
}

// console.log(multiplicationTable(0)); // should be from 1
console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));
console.log(multiplicationTable(15));