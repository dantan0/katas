const camelCase = function(input) {
  let splitStrings = input.split(' ');
  let result = '';
  for (let string of splitStrings) {
    if (result === '') {
      // first string is not capitalized
      result += string;
    } else {
      let temp = string.charAt(0).toUpperCase() + string.slice(1);
      result += temp;
    }
  }
  return result;
}

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("i love to walk and play tennis with dad"))
console.log(camelCase("supercalifragalisticexpialidocious"));